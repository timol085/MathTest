(() => {
  "use strict";

  const TEST_LENGTH = 25;
  const LETTERS = ["A", "B", "C"];
  const LEVEL_NAMES = { "2c": "Matte 2c", "3c": "Matte 3c", mix: "Mixat" };
  const HISTORY_KEY = "matteprov-historik";

  const $ = (id) => document.getElementById(id);
  const screens = ["start", "quiz", "result"];

  let state = null;
  let timerId = null;

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
    state = { level, items: qs, answers: Array(qs.length).fill(null), idx: 0, start: Date.now() };
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
    $("q-counter").textContent = `Fråga ${idx + 1} av ${items.length}`;
    $("q-progress").style.width = `${(answers.filter((a) => a !== null).length / items.length) * 100}%`;
    $("q-course").textContent = "Matte " + q.course;
    $("q-topic").textContent = q.topic;
    $("q-text").innerHTML = q.q;

    const box = $("q-choices");
    box.innerHTML = "";
    order.forEach((choiceIdx, pos) => {
      const b = el("button", "choice" + (answers[idx] === choiceIdx ? " selected" : ""));
      b.innerHTML = `<span class="letter">${LETTERS[pos]}</span><span>${q.choices[choiceIdx]}</span>`;
      b.addEventListener("click", () => choose(choiceIdx));
      box.appendChild(b);
    });

    $("prev").disabled = idx === 0;
    $("next").textContent = idx === items.length - 1 ? "Klar ✓" : "Nästa →";
    $("confirm").hidden = true;
    updateDots();
    math($("q-text"));
    math(box);
  }

  function choose(choiceIdx) {
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
    saveHistory({ level: state.level, score, total: items.length, time: elapsed, date: Date.now() });
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
        `<span>Fråga ${i + 1} · Matte ${q.course} · ${q.topic}</span><span class="rq-status">${status}</span>`));
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
      const ol = el("ol", "steps");
      q.steps.forEach((s) => ol.appendChild(el("li", "", s)));
      det.appendChild(ol);
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
        `<span>${LEVEL_NAMES[r.level]} <span class="muted">· ${d}</span></span><strong>${r.score}/${r.total}</strong>`));
    });
    box.appendChild(ul);
  }

  // ---------- händelser ----------

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
    else if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  });

  renderHistory();
})();
