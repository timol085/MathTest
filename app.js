(() => {
  "use strict";

  const TEST_LENGTH = 25;
  const LETTERS = ["A", "B", "C"];
  const LEVEL_NAMES = { "2c": "Matte 2c", "3c": "Matte 3c", mix: "Mixat" };
  const MODE_NAMES = { exam: "Provläge", train: "Träningsläge" };
  const HISTORY_KEY = "matteprov-historik";
  const MODE_KEY = "matteprov-läge";

  const $ = (id) => document.getElementById(id);
  const screens = ["start", "quiz", "result"];

  let state = null;
  let timerId = null;
  let mode = "exam";

  // ---------- hjälpfunktioner ----------

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function math(el) {
    if (window.renderMathInElement) {
      renderMathInElement(el, {
        delimiters: [{ left: "\\(", right: "\\)", display: false }],
        throwOnError: false,
      });
    }
  }

  function show(name) {
    screens.forEach((s) => ($(s).hidden = s !== name));
    window.scrollTo(0, 0);
  }

  function fmtTime(ms) {
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  }

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function stepsList(q) {
    const ol = el("ol", "steps");
    q.steps.forEach((s) => ol.appendChild(el("li", "", s)));
    return ol;
  }

  function setMode(m) {
    mode = m;
    document.querySelectorAll(".mode").forEach((b) =>
      b.setAttribute("aria-checked", String(b.dataset.mode === m)));
    try { localStorage.setItem(MODE_KEY, m); } catch { /* ignorera */ }
  }

  // ---------- provet ----------

  function pickQuestions(level) {
    const bank = window.QUESTIONS;
    if (level === "mix") {
      const n2 = Math.random() < 0.5 ? 13 : 12;
      const a = shuffle(bank.filter((q) => q.course === "2c")).slice(0, n2);
      const b = shuffle(bank.filter((q) => q.course === "3c")).slice(0, TEST_LENGTH - n2);
      return shuffle(a.concat(b));
    }
    return shuffle(bank.filter((q) => q.course === level)).slice(0, TEST_LENGTH);
  }

  function startTest(level) {
    const qs = pickQuestions(level).map((q) => ({ q, order: shuffle([0, 1, 2]) }));
    state = {
      level, mode, items: qs, idx: 0, start: Date.now(),
      answers: Array(qs.length).fill(null),
      hints: Array(qs.length).fill(false),
    };
    $("q-mode").textContent = MODE_NAMES[mode];
    $("train-tools").hidden = mode !== "train";
    buildDots();
    show("quiz");
    renderQuestion();
    clearInterval(timerId);
    timerId = setInterval(() => ($("q-timer").textContent = "⏱ " + fmtTime(Date.now() - state.start)), 1000);
    $("q-timer").textContent = "⏱ 0:00";
  }

  function renderQuestion() {
    const { items, idx, answers } = state;
    const { q, order } = items[idx];
    const training = state.mode === "train";
    const picked = answers[idx];
    const locked = training && picked !== null;
    $("q-counter").textContent = `Fråga ${idx + 1} av ${items.length}`;
    $("q-progress").style.width = `${(answers.filter((a) => a !== null).length / items.length) * 100}%`;
    $("q-course").textContent = "Matte " + q.course;
    $("q-topic").textContent = q.topic;
    $("q-text").innerHTML = q.q;

    const box = $("q-choices");
    box.innerHTML = "";
    order.forEach((choiceIdx, pos) => {
      let cls = "choice";
      let tag = "";
      if (locked) {
        if (choiceIdx === 0) { cls += " correct"; tag = picked === 0 ? "Ditt svar ✓" : "Rätt svar"; }
        else if (choiceIdx === picked) { cls += " picked-wrong"; tag = "Ditt svar"; }
      } else if (picked === choiceIdx) {
        cls += " selected";
      }
      const b = el("button", cls);
      b.innerHTML = `<span class="letter">${LETTERS[pos]}</span><span>${q.choices[choiceIdx]}</span>` +
        (tag ? `<span class="tag">${tag}</span>` : "");
      b.disabled = locked;
      b.addEventListener("click", () => choose(choiceIdx));
      box.appendChild(b);
    });

    if (training) renderTraining(q, picked);

    $("prev").disabled = idx === 0;
    $("next").textContent = idx === items.length - 1 ? "Klar ✓" : "Nästa →";
    $("confirm").hidden = true;
    updateDots();
    math($("q-text"));
    math(box);
  }

  function renderTraining(q, picked) {
    const hintBox = $("hint-box");
    const shown = state.hints[state.idx];
    hintBox.hidden = !shown;
    hintBox.innerHTML = shown ? `<strong>Ledtråd:</strong> ${q.hint}` : "";
    $("hint-btn").hidden = shown || picked !== null;

    const fb = $("feedback");
    fb.hidden = picked === null;
    fb.innerHTML = "";
    if (picked !== null) {
      const right = picked === 0;
      fb.className = "feedback" + (right ? "" : " wrong");
      fb.appendChild(el("div", "verdict", right ? "✓ Rätt!" : "✗ Inte riktigt – så här löser man den:"));
      fb.appendChild(stepsList(q));
    }
    math(hintBox);
    math(fb);
  }

  function showHint() {
    state.hints[state.idx] = true;
    renderQuestion();
  }

  function choose(choiceIdx) {
    if (state.mode === "train" && state.answers[state.idx] !== null) return;
    state.answers[state.idx] = choiceIdx;
    renderQuestion();
  }

  function go(delta) {
    const n = state.idx + delta;
    if (n < 0) return;
    if (n >= state.items.length) {
      $("submit").focus();
      trySubmit();
      return;
    }
    state.idx = n;
    renderQuestion();
  }

  function buildDots() {
    const box = $("dots");
    box.innerHTML = "";
    state.items.forEach((_, i) => {
      const d = el("button", "dot", String(i + 1));
      d.addEventListener("click", () => { state.idx = i; renderQuestion(); });
      box.appendChild(d);
    });
  }

  function updateDots() {
    [...$("dots").children].forEach((d, i) => {
      d.classList.toggle("answered", state.answers[i] !== null);
      d.classList.toggle("current", i === state.idx);
    });
  }

  function trySubmit() {
    const left = state.answers.filter((a) => a === null).length;
    if (left === 0) return finish();
    $("confirm-text").textContent =
      `Du har ${left} obesvarad${left === 1 ? "" : "e"} fråg${left === 1 ? "a" : "or"}. De räknas som fel.`;
    $("confirm").hidden = false;
  }

  // ---------- resultat ----------

  function finish() {
    clearInterval(timerId);
    const elapsed = Date.now() - state.start;
    const { items, answers } = state;
    const score = items.reduce((s, it, i) => s + (answers[i] === 0 ? 1 : 0), 0);
    const pct = Math.round((score / items.length) * 100);

    $("r-score").textContent = score;
    $("r-total").textContent = items.length;
    $("r-percent").textContent = `${pct} % rätt · ${LEVEL_NAMES[state.level]}`;
    $("r-time").textContent = `Tid: ${fmtTime(elapsed)}`;
    const hintsUsed = state.hints.filter(Boolean).length;
    $("r-hints").hidden = state.mode !== "train";
    $("r-hints").textContent = `${MODE_NAMES.train} · ledtrådar använda: ${hintsUsed}`;

    // per område
    const topics = {};
    items.forEach((it, i) => {
      const key = it.q.topic;
      topics[key] = topics[key] || { right: 0, total: 0 };
      topics[key].total++;
      if (answers[i] === 0) topics[key].right++;
    });
    const tbl = $("r-topics");
    tbl.innerHTML = "";
    Object.entries(topics)
      .sort((a, b) => a[1].right / a[1].total - b[1].right / b[1].total)
      .forEach(([name, t]) => {
        const tr = el("tr");
        tr.innerHTML = `<td>${name}</td><td style="width:40%"><div class="bar"><div style="width:${(t.right / t.total) * 100}%"></div></div></td><td>${t.right} / ${t.total}</td>`;
        tbl.appendChild(tr);
      });

    renderReview();
    saveHistory({ level: state.level, mode: state.mode, score, total: items.length, hints: hintsUsed, time: elapsed, date: Date.now() });
    show("result");
  }

  function renderReview() {
    const box = $("review");
    box.innerHTML = "";
    const onlyWrong = $("only-wrong").checked;
    state.items.forEach(({ q, order }, i) => {
      const picked = state.answers[i];
      const right = picked === 0;
      if (onlyWrong && right) return;

      const card = el("article", "card rq" + (right ? "" : " wrong"));
      const status = right ? "✓ Rätt" : picked === null ? "– Obesvarad" : "✗ Fel";
      card.appendChild(el("div", "rq-head",
        `<span>Fråga ${i + 1} · Matte ${q.course} · ${q.topic}${state.hints[i] ? ' · <span class="hint-tag">💡 ledtråd</span>' : ""}</span><span class="rq-status">${status}</span>`));
      card.appendChild(el("div", "q-text", q.q));

      const choices = el("div", "choices");
      order.forEach((ci, pos) => {
        let cls = "choice", tag = "";
        if (ci === 0) { cls += " correct"; tag = "Rätt svar"; }
        else if (ci === picked) { cls += " picked-wrong"; tag = "Ditt svar"; }
        if (ci === 0 && picked === 0) tag = "Ditt svar ✓";
        const c = el("div", cls,
          `<span class="letter">${LETTERS[pos]}</span><span>${q.choices[ci]}</span>${tag ? `<span class="tag">${tag}</span>` : ""}`);
        choices.appendChild(c);
      });
      card.appendChild(choices);

      const det = el("details", "solution");
      det.open = !right;
      det.appendChild(el("summary", "", "Visa uträkning"));
      det.appendChild(stepsList(q));
      card.appendChild(det);

      box.appendChild(card);
    });
    if (!box.children.length) box.appendChild(el("p", "muted", "Inga fel – snyggt jobbat! 🎉"));
    math(box);
  }

  // ---------- historik (bara i den här webbläsaren) ----------

  function loadHistory() {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; } catch { return []; }
  }

  function saveHistory(entry) {
    try {
      const h = [entry, ...loadHistory()].slice(0, 10);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(h));
    } catch { /* ignorera */ }
  }

  function renderHistory() {
    const h = loadHistory();
    const box = $("history");
    box.hidden = h.length === 0;
    if (!h.length) return;
    box.innerHTML = "<h2>Dina senaste resultat</h2>";
    const ul = el("ul");
    h.forEach((r) => {
      const d = new Date(r.date).toLocaleDateString("sv-SE", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
      ul.appendChild(el("li", "",
        `<span>${LEVEL_NAMES[r.level]}${r.mode === "train" ? " · träning" : ""} <span class="muted">· ${d}</span></span><strong>${r.score}/${r.total}</strong>`));
    });
    box.appendChild(ul);
  }

  // ---------- händelser ----------

  document.querySelectorAll(".mode").forEach((b) =>
    b.addEventListener("click", () => setMode(b.dataset.mode)));
  $("hint-btn").addEventListener("click", showHint);
  document.querySelectorAll(".level").forEach((b) =>
    b.addEventListener("click", () => startTest(b.dataset.level)));
  $("prev").addEventListener("click", () => go(-1));
  $("next").addEventListener("click", () => go(1));
  $("submit").addEventListener("click", trySubmit);
  $("confirm-yes").addEventListener("click", finish);
  $("confirm-no").addEventListener("click", () => {
    $("confirm").hidden = true;
    const first = state.answers.indexOf(null);
    if (first >= 0) { state.idx = first; renderQuestion(); }
  });
  $("only-wrong").addEventListener("change", renderReview);
  $("restart-same").addEventListener("click", () => startTest(state.level));
  $("restart").addEventListener("click", () => { renderHistory(); show("start"); });

  document.addEventListener("keydown", (e) => {
    if ($("quiz").hidden || e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    const pos = { 1: 0, 2: 1, 3: 2, a: 0, b: 1, c: 2 }[k];
    if (pos !== undefined) choose(state.items[state.idx].order[pos]);
    else if (k === "h" && state.mode === "train" && state.answers[state.idx] === null) showHint();
    else if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  });

  let savedMode = "exam";
  try { savedMode = localStorage.getItem(MODE_KEY) === "train" ? "train" : "exam"; } catch { /* ignorera */ }
  setMode(savedMode);
  renderHistory();
})();
