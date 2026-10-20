(() => {
  "use strict";

  const TEST_LENGTH = 25;
  const LETTERS = ["A", "B", "C"];
  const LEVEL_NAMES = { "2c": "Matte 2c", "3c": "Matte 3c", mix: "Mixat", train: "Träning" };
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

  function stepsList(q) {
    const ol = el("ol", "steps");
    q.steps.forEach((s) => ol.appendChild(el("li", "", s)));
    return ol;
  }

  // ---------- provet ----------

  function pickQuestions(level) {
    const bank = window.QUESTIONS;
    if (level === "mix" || level === "train") {
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
      level, mode: level === "train" ? "train" : "exam", items: qs, idx: 0, start: Date.now(),
      answers: Array(qs.length).fill(null),
      hints: Array(qs.length).fill(false),
    };
    const training = state.mode === "train";
    $("q-mode").textContent = training ? "Träning" : "";
    $("q-mode").hidden = !training;
    $("train-tools").hidden = !training;
    buildDots();
    show("quiz");
    renderQuestion();
    clearInterval(timerId);
    $("q-timer").hidden = training;
    if (!training) {
      timerId = setInterval(() => ($("q-timer").textContent = "⏱ " + fmtTime(Date.now() - state.start)), 1000);
      $("q-timer").textContent = "⏱ 0:00";
    }
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

  let viewed = null; // resultatet som visas på resultatsidan

  function finish() {
    clearInterval(timerId);
    const { items, answers } = state;
    const record = {
      id: String(Date.now()),
      date: Date.now(),
      level: state.level,
      mode: state.mode,
      time: Date.now() - state.start,
      score: items.reduce((s, _, i) => s + (answers[i] === 0 ? 1 : 0), 0),
      total: items.length,
      items,
      answers,
      hints: state.hints,
    };
    saveHistory(record);
    showResult(record);
  }

  function fmtDate(ms) {
    return new Date(ms).toLocaleDateString("sv-SE",
      { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  function showResult(r) {
    viewed = r;
    const pct = Math.round((r.score / r.total) * 100);
    $("r-score").textContent = r.score;
    $("r-total").textContent = r.total;
    $("r-percent").textContent = `${pct} % rätt · ${LEVEL_NAMES[r.level]}`;
    const training = r.mode === "train";
    $("r-time").textContent = (training ? "" : `Tid: ${fmtTime(r.time)} · `) + fmtDate(r.date);
    $("r-hints").hidden = !training;
    $("r-hints").textContent = `Ledtrådar använda: ${r.hints.filter(Boolean).length}`;

    // per område
    const topics = {};
    r.items.forEach((it, i) => {
      const key = it.q.topic;
      topics[key] = topics[key] || { right: 0, total: 0 };
      topics[key].total++;
      if (r.answers[i] === 0) topics[key].right++;
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

    $("only-wrong").checked = false;
    resetConfirm($("delete-this"), "Radera det här resultatet");
    renderReview();
    show("result");
  }

  function renderReview() {
    const r = viewed;
    const box = $("review");
    box.innerHTML = "";
    const onlyWrong = $("only-wrong").checked;
    r.items.forEach(({ q, order }, i) => {
      const picked = r.answers[i];
      const right = picked === 0;
      if (onlyWrong && right) return;

      const card = el("article", "card rq" + (right ? "" : " wrong"));
      const status = right ? "✓ Rätt" : picked === null ? "– Obesvarad" : "✗ Fel";
      card.appendChild(el("div", "rq-head",
        `<span>Fråga ${i + 1} · Matte ${q.course} · ${q.topic}${r.hints[i] ? ' · <span class="hint-tag">💡 ledtråd</span>' : ""}</span><span class="rq-status">${status}</span>`));
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

  // ---------- historik (sparas bara i den här webbläsaren) ----------

  const MAX_HISTORY = 50;

  function loadHistory() {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; } catch { return []; }
  }

  function writeHistory(h) {
    // Om lagringen blir full: släng de äldsta resultaten tills det får plats.
    while (true) {
      try { localStorage.setItem(HISTORY_KEY, JSON.stringify(h)); return; }
      catch {
        if (h.length <= 1) return;
        h = h.slice(0, -1);
      }
    }
  }

  function saveHistory(record) {
    writeHistory([record, ...loadHistory()].slice(0, MAX_HISTORY));
  }

  function deleteHistory(id) {
    writeHistory(id === null ? [] : loadHistory().filter((r) => r.id !== id));
  }

  // Knapp som kräver två klick: första klicket ber om bekräftelse.
  function confirmButton(btn, label, onConfirm) {
    resetConfirm(btn, label);
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (btn.dataset.armed === "1") return onConfirm();
      btn.dataset.armed = "1";
      btn.textContent = "Säker? Klicka igen";
      btn.classList.add("armed");
      clearTimeout(btn._t);
      btn._t = setTimeout(() => resetConfirm(btn, label), 3000);
    });
  }

  function resetConfirm(btn, label) {
    btn.dataset.armed = "0";
    btn.textContent = label;
    btn.classList.remove("armed");
  }

  function renderHistory() {
    const h = loadHistory();
    const box = $("history");
    box.hidden = h.length === 0;
    box.innerHTML = "";
    if (!h.length) return;

    const head = el("div", "history-head");
    head.appendChild(el("h2", "", "Tidigare resultat"));
    const clearAll = el("button", "btn btn-ghost btn-small btn-danger");
    confirmButton(clearAll, "Radera alla", () => { deleteHistory(null); renderHistory(); });
    head.appendChild(clearAll);
    box.appendChild(head);

    const ul = el("ul");
    h.forEach((r) => {
      const li = el("li");
      const open = el("button", "history-open",
        `<span>${LEVEL_NAMES[r.level]} <span class="muted">· ${fmtDate(r.date)}</span></span>` +
        `<span class="history-score"><strong>${r.score}/${r.total}</strong>${r.items ? ' <span class="muted">Visa →</span>' : ""}</span>`);
      if (r.items) open.addEventListener("click", () => showResult(r));
      else open.disabled = true;
      const del = el("button", "btn btn-ghost btn-small btn-danger");
      del.setAttribute("aria-label", "Radera resultat");
      confirmButton(del, "🗑", () => { deleteHistory(r.id); renderHistory(); });
      li.append(open, del);
      ul.appendChild(li);
    });
    box.appendChild(ul);
  }

  // ---------- händelser ----------

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
  $("restart-same").addEventListener("click", () => startTest(viewed.level));
  confirmButton($("delete-this"), "Radera det här resultatet", () => {
    deleteHistory(viewed.id);
    renderHistory();
    show("start");
  });
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

  renderHistory();
})();
