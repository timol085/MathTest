// Lektionsmotor: grafer, stegvisa genomgångar, exempel med ledtrådar och uppgifter med facit.
// Innehållet ligger i lessons/*.js och läggs till i window.LESSONS.
(() => {
  "use strict";

  const LESSONS = (window.LESSONS = []);
  const PROGRESS_KEY = "lektioner-progress";

  // ---------- hjälpfunktioner för innehållsfilerna ----------

  // Tal i KaTeX med decimalkomma, utan onödiga nollor.
  function fmt(x, d = 2) {
    if (!isFinite(x)) return "\\text{–}";
    let s = (Math.round(x * 10 ** d) / 10 ** d).toFixed(d);
    if (s.includes(".")) s = s.replace(/0+$/, "").replace(/\.$/, "");
    if (s === "-0") s = "0";
    return s.replace(".", "{,}");
  }
  // Samma sak men som vanlig text (för etiketter i SVG).
  const fmtT = (x, d = 2) => fmt(x, d).replace("{,}", ",").replace("-", "−");

  // "y = 2x - 3" i KaTeX.
  function lineEq(k, m, d = 2) {
    const kk = Math.abs(k) < 1e-9 ? "" : k === 1 ? "x" : k === -1 ? "-x" : `${fmt(k, d)}x`;
    if (!kk) return `y = ${fmt(m, d)}`;
    const mm = Math.abs(m) < 1e-9 ? "" : m > 0 ? ` + ${fmt(m, d)}` : ` - ${fmt(-m, d)}`;
    return `y = ${kk}${mm}`;
  }

  // Linje genom (a, f(a)) med lutning k, ritad mellan x0 och x1.
  const tangent = (f, k, a, x0, x1, cls = "c2") =>
    ({ x1: x0, y1: f(a) + k * (x0 - a), x2: x1, y2: f(a) + k * (x1 - a), cls });

  // Lägg in en lektion direkt efter en annan (så att kapitel kan byggas på från flera filer).
  function insertAfter(id, lesson) {
    const i = LESSONS.findIndex((l) => l.id === id);
    LESSONS.splice(i < 0 ? LESSONS.length : i + 1, 0, lesson);
  }

  window.LH = { fmt, fmtT, lineEq, tangent, insertAfter };

  // ---------- grafer (SVG) ----------

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  function niceStep(range) {
    const raw = range / 10;
    const p = 10 ** Math.floor(Math.log10(raw));
    for (const m of [1, 2, 5, 10]) if (m * p >= raw - 1e-12) return m * p;
    return p * 10;
  }

  let clipId = 0;

  function svgGraph(g, params) {
    const W = 560, H = g.h || 380, P = 28;
    const { xmin, xmax, ymin, ymax } = g;
    const X = (x) => P + ((x - xmin) / (xmax - xmin)) * (W - 2 * P);
    const Y = (y) => H - P - ((y - ymin) / (ymax - ymin)) * (H - 2 * P);
    const r = (v) => Math.round(v * 10) / 10;
    const d = g.draw ? g.draw(params) : {};
    const id = "clip" + ++clipId;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="graph" role="img" aria-label="${esc(g.alt || "Graf")}">`;
    s += `<defs><clipPath id="${id}"><rect x="${P}" y="${P}" width="${W - 2 * P}" height="${H - 2 * P}"/></clipPath></defs>`;

    if (g.axes !== false) {
      const xs = g.xstep || niceStep(xmax - xmin);
      const ys = g.ystep || niceStep(ymax - ymin);
      const x0 = Math.min(Math.max(X(0), P), W - P);
      const y0 = Math.min(Math.max(Y(0), P), H - P);
      let grid = "", ticks = "";
      for (let x = Math.ceil(xmin / xs) * xs; x <= xmax + 1e-9; x += xs) {
        grid += `<line x1="${r(X(x))}" y1="${P}" x2="${r(X(x))}" y2="${H - P}"/>`;
        if (Math.abs(x) > 1e-9) ticks += `<text x="${r(X(x))}" y="${r(Math.min(y0 + 15, H - 6))}" text-anchor="middle">${fmtT(x)}</text>`;
      }
      for (let y = Math.ceil(ymin / ys) * ys; y <= ymax + 1e-9; y += ys) {
        grid += `<line x1="${P}" y1="${r(Y(y))}" x2="${W - P}" y2="${r(Y(y))}"/>`;
        if (Math.abs(y) > 1e-9) ticks += `<text x="${r(Math.max(x0 - 6, 22))}" y="${r(Y(y) + 4)}" text-anchor="end">${fmtT(y)}</text>`;
      }
      s += `<g class="g-grid">${grid}</g>`;
      s += `<g class="g-axis"><line x1="${P}" y1="${r(y0)}" x2="${W - P + 6}" y2="${r(y0)}"/><line x1="${r(x0)}" y1="${H - P}" x2="${r(x0)}" y2="${P - 6}"/></g>`;
      s += `<g class="g-ticks">${ticks}<text x="${W - P + 8}" y="${r(y0 + 4)}">${esc(g.xlabel || "x")}</text><text x="${r(x0 + 6)}" y="${P - 10}">${esc(g.ylabel || "y")}</text>${Math.abs(X(0) - x0) < 1 && Math.abs(Y(0) - y0) < 1 ? `<text x="${r(x0 - 6)}" y="${r(y0 + 15)}" text-anchor="end">0</text>` : ""}</g>`;
    }

    s += `<g clip-path="url(#${id})">`;
    const sample = (f, a, b, n = 320) => {
      const pts = [];
      for (let i = 0; i <= n; i++) {
        const x = a + ((b - a) * i) / n;
        pts.push([x, f(x)]);
      }
      return pts;
    };
    const span = ymax - ymin;
    for (const a of d.areas || []) {
      const top = sample(a.f, a.a, a.b, 160);
      const bot = sample(a.g || (() => 0), a.a, a.b, 160).reverse();
      const pts = top.concat(bot).map(([x, y]) => `${r(X(x))},${r(Y(Math.max(Math.min(y, ymax + span), ymin - span)))}`);
      s += `<polygon class="g-fill ${a.cls || "f1"}" points="${pts.join(" ")}"/>`;
    }
    for (const q of d.rects || []) {
      s += `<rect class="g-rect ${q.cls || "f2"}" x="${r(X(q.x))}" y="${r(Math.min(Y(q.y), Y(0)))}" width="${r(X(q.x + q.w) - X(q.x))}" height="${r(Math.abs(Y(q.y) - Y(0)))}"/>`;
    }
    const path = (pts) => {
      let out = "", pen = false, prev = null;
      for (const [x, y] of pts) {
        const bad = !isFinite(y) || Math.abs(y) > 1e6 || (prev !== null && Math.abs(y - prev) > 3 * span);
        if (bad) { pen = false; prev = isFinite(y) ? y : null; continue; }
        const yc = Math.max(Math.min(y, ymax + span), ymin - span);
        out += `${pen ? "L" : "M"}${r(X(x))},${r(Y(yc))}`;
        pen = true;
        prev = y;
      }
      return out;
    };
    for (const f of d.fns || []) {
      const a = Math.max(xmin, f.from ?? xmin), b = Math.min(xmax, f.to ?? xmax);
      s += `<path class="g-line ${f.cls || "c1"}${f.dash ? " dash" : ""}" d="${path(sample(f.f, a, b))}"/>`;
    }
    for (const c of d.curves || []) {
      const pts = [];
      for (let i = 0; i <= 240; i++) {
        const t = c.t0 + ((c.t1 - c.t0) * i) / 240;
        pts.push(`${i ? "L" : "M"}${r(X(c.x(t)))},${r(Y(c.y(t)))}`);
      }
      s += `<path class="g-line ${c.cls || "c1"}${c.dash ? " dash" : ""}" d="${pts.join("")}"/>`;
    }
    for (const l of d.lines || []) {
      s += `<line class="g-line ${l.cls || "c2"}${l.dash ? " dash" : ""}${l.thin ? " thin" : ""}" x1="${r(X(l.x1))}" y1="${r(Y(l.y1))}" x2="${r(X(l.x2))}" y2="${r(Y(l.y2))}"/>`;
    }
    s += `</g>`;
    for (const p of d.points || []) {
      s += `<circle class="g-point ${p.cls || "c1"}${p.open ? " open" : ""}" cx="${r(X(p.x))}" cy="${r(Y(p.y))}" r="4.5"/>`;
      if (p.label) s += `<text class="g-label ${p.cls || "c1"}" x="${r(X(p.x) + (p.dx ?? 8))}" y="${r(Y(p.y) + (p.dy ?? -8))}" text-anchor="${p.anchor || "start"}">${esc(p.label)}</text>`;
    }
    for (const t of d.labels || []) {
      s += `<text class="g-label ${t.cls || "c1"}" x="${r(X(t.x))}" y="${r(Y(t.y))}" text-anchor="${t.anchor || "start"}">${esc(t.text)}</text>`;
    }
    return s + `</svg>`;
  }

  function mountGraph(box, g) {
    const wrap = el("figure", "graph-wrap");
    const holder = el("div", "graph-holder");
    const caption = el("figcaption", "graph-caption");
    const params = {};
    (g.sliders || []).forEach((sl) => (params[sl.key] = sl.value));
    const redraw = () => {
      holder.innerHTML = svgGraph(g, params);
      if (g.caption) {
        caption.innerHTML = g.caption(params);
        math(caption);
      }
    };
    wrap.appendChild(holder);
    if (g.sliders) {
      const ctr = el("div", "sliders");
      g.sliders.forEach((sl) => {
        const lab = el("label", "slider");
        const name = el("span", "slider-name", sl.label);
        const val = el("span", "slider-val");
        const input = el("input");
        Object.assign(input, { type: "range", min: sl.min, max: sl.max, step: sl.step, value: sl.value });
        const show = () => (val.textContent = fmtT(params[sl.key], 2));
        input.addEventListener("input", () => {
          params[sl.key] = Number(input.value);
          show();
          redraw();
        });
        show();
        lab.append(name, input, val);
        ctr.appendChild(lab);
      });
      wrap.appendChild(ctr);
    }
    if (g.caption) wrap.appendChild(caption);
    box.appendChild(wrap);
    redraw();
  }

  // ---------- DOM ----------

  const $ = (id) => document.getElementById(id);

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function math(node) {
    if (window.renderMathInElement && node) {
      renderMathInElement(node, { delimiters: [{ left: "\\(", right: "\\)", display: false }], throwOnError: false });
    }
  }

  // Ett "block" kan vara text eller ett objekt med title/text/rule/graph/note.
  function renderBlock(b) {
    const box = el("div", "block");
    if (typeof b === "string") b = { text: b };
    if (b.title) box.appendChild(el("h3", "block-title", b.title));
    if (b.text) box.appendChild(el("div", "block-text", b.text));
    if (b.rule) box.appendChild(el("div", "rule", b.rule));
    if (b.graph) mountGraph(box, b.graph);
    if (b.note) box.appendChild(el("div", "note", b.note));
    math(box);
    return box;
  }

  // Visar block ett i taget med "Nästa steg".
  function stepper(blocks, opts = {}) {
    const box = el("div", "stepper");
    const list = el("div", "stepper-list");
    const bar = el("div", "stepper-bar");
    const count = el("span", "muted");
    const next = el("button", "btn btn-primary", opts.nextLabel || "Nästa steg →");
    const all = el("button", "btn btn-ghost", "Visa allt");
    let shown = 0;
    const step = () => {
      const b = renderBlock(blocks[shown]);
      b.classList.add("reveal");
      list.appendChild(b);
      shown++;
      count.textContent = `Steg ${shown} av ${blocks.length}`;
      if (shown >= blocks.length) {
        next.hidden = all.hidden = true;
        if (opts.onDone) opts.onDone();
      }
    };
    next.addEventListener("click", () => { step(); list.lastChild.scrollIntoView({ behavior: "smooth", block: "nearest" }); });
    all.addEventListener("click", () => { while (shown < blocks.length) step(); });
    bar.append(count, all, next);
    box.append(list, bar);
    const start = Math.min(opts.start ?? 1, blocks.length);
    for (let i = 0; i < start; i++) step();
    return box;
  }

  // ---------- framsteg ----------

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; } catch { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch { /* ignorera */ }
  }
  function lessonProgress(id) {
    const all = loadProgress();
    return all[id] || { theory: false, ex: {} };
  }
  function updateProgress(id, fn) {
    const all = loadProgress();
    all[id] = all[id] || { theory: false, ex: {} };
    fn(all[id]);
    saveProgress(all);
  }

  // ---------- vyer ----------

  const TABS = [
    { key: "genomgang", label: "1. Genomgång" },
    { key: "exempel", label: "2. Exempel" },
    { key: "uppgifter", label: "3. Uppgifter" },
  ];

  function chapters() {
    const order = [];
    const by = {};
    LESSONS.forEach((l) => {
      if (!by[l.chapter]) { by[l.chapter] = []; order.push(l.chapter); }
      by[l.chapter].push(l);
    });
    return order.map((name) => ({ name, lessons: by[name] }));
  }

  const LAST_KEY = "lektioner-senaste";
  const store = (k, v) => { try { localStorage.setItem(k, v); } catch { /* ignorera */ } };
  const read = (k) => { try { return localStorage.getItem(k); } catch { return null; } };

  function renderOverview() {
    const main = $("lessons");
    main.innerHTML = "";
    const chs = chapters();
    // Startsidan visar antalet i sitt lektionskort.
    store("lektioner-antal", JSON.stringify({ lessons: LESSONS.length, chapters: chs.length }));

    const hero = el("div", "hero");
    hero.appendChild(el("h1", "", 'Lektioner <span class="accent">Matte 3c</span>'));
    hero.appendChild(el("p", "lead",
      "Varje lektion har tre delar: en genomgång du stegar dig igenom (med grafer du kan dra i), exempel med ledtrådar och uppgifter med facit som du rättar själv."));
    main.appendChild(hero);

    // Framsteg + fortsätt
    const all = loadProgress();
    const done = LESSONS.filter((l) => all[l.id]?.theory).length;
    const right = LESSONS.reduce((n, l) => n + Object.values(all[l.id]?.ex || {}).filter((v) => v === "right").length, 0);
    const exTotal = LESSONS.reduce((n, l) => n + l.exercises.length, 0);
    const last = LESSONS.find((l) => l.id === read(LAST_KEY));
    const next = last || LESSONS.find((l) => !all[l.id]?.theory) || LESSONS[0];
    const sum = el("div", "card overview-summary");
    sum.innerHTML =
      `<div class="ov-stats">` +
      `<div><span class="ov-num">${done}<span class="muted"> / ${LESSONS.length}</span></span><span class="ov-label">genomgångar klara</span></div>` +
      `<div><span class="ov-num">${right}<span class="muted"> / ${exTotal}</span></span><span class="ov-label">uppgifter rätt</span></div>` +
      `</div><span class="meter"><span style="width:${(100 * done) / LESSONS.length}%"></span></span>`;
    const go = el("a", "btn btn-primary", last ? `Fortsätt: ${next.title} →` : done ? `Nästa: ${next.title} →` : `Börja med ${next.title} →`);
    go.href = `#/${next.id}`;
    sum.appendChild(go);
    main.appendChild(sum);

    // Snabbhopp till kapitel (knappar, eftersom #-länkar används för routing)
    const jump = el("nav", "chapter-jump");
    jump.setAttribute("aria-label", "Kapitel");
    const sections = [];
    chs.forEach((ch, i) => {
      const b = el("button", "chip-btn", `${i + 1}. ${ch.name}`);
      b.addEventListener("click", () => sections[i].scrollIntoView({ behavior: "smooth", block: "start" }));
      jump.appendChild(b);
    });
    main.appendChild(jump);

    chs.forEach((ch, i) => {
      const sec = el("section", "chapter");
      sections.push(sec);
      const chDone = ch.lessons.filter((l) => all[l.id]?.theory).length;
      const head = el("div", "chapter-head");
      head.innerHTML = `<div><div class="chapter-kicker">Kapitel ${i + 1}</div><h2>${ch.name}</h2></div>` +
        `<span class="chapter-count${chDone === ch.lessons.length ? " complete" : ""}">${chDone}/${ch.lessons.length} klara</span>`;
      sec.appendChild(head);
      const grid = el("div", "lesson-grid");
      ch.lessons.forEach((l, j) => {
        const p = lessonProgress(l.id);
        const r = Object.values(p.ex).filter((v) => v === "right").length;
        const card = el("a", "lesson-card" + (p.theory ? " is-done" : ""));
        card.href = `#/${l.id}`;
        card.innerHTML =
          `<span class="lesson-num">${i + 1}.${j + 1}${p.theory ? ' <span class="done">✓</span>' : ""}</span>` +
          `<span class="lesson-title">${l.title}</span>` +
          `<span class="lesson-desc">${l.intro}</span>` +
          `<span class="lesson-prog"><span>${l.examples.length} exempel · ${l.exercises.length} uppgifter</span>` +
          `${Object.keys(p.ex).length ? `<span class="lesson-right">${r}/${l.exercises.length} rätt</span>` : ""}</span>`;
        grid.appendChild(card);
      });
      sec.appendChild(grid);
      main.appendChild(sec);
    });
    math(main);
    document.title = "Lektioner Matte 3c";
  }

  function renderLesson(lesson, tab) {
    const main = $("lessons");
    main.innerHTML = "";
    const idx = LESSONS.indexOf(lesson);
    store(LAST_KEY, lesson.id);
    main.appendChild(el("a", "back-link", `← Alla lektioner`)).href = "#/";
    main.appendChild(el("div", "crumb muted", lesson.chapter));
    main.appendChild(el("h1", "lesson-h1", lesson.title));
    main.appendChild(el("p", "lead", lesson.intro));

    const tabs = el("nav", "tabs");
    TABS.forEach((t) => {
      const a = el("a", "tab" + (t.key === tab ? " active" : ""), t.label);
      a.href = `#/${lesson.id}/${t.key}`;
      tabs.appendChild(a);
    });
    main.appendChild(tabs);

    const body = el("div", "tab-body");
    main.appendChild(body);
    if (tab === "genomgang") renderTheory(lesson, body);
    else if (tab === "exempel") renderExamples(lesson, body);
    else renderExercises(lesson, body);

    // Navigering längst ner
    const nav = el("nav", "lesson-nav");
    const ti = TABS.findIndex((t) => t.key === tab);
    if (ti < TABS.length - 1) {
      const a = el("a", "btn btn-primary", `Vidare till ${TABS[ti + 1].label.replace(/^\d\. /, "").toLowerCase()} →`);
      a.href = `#/${lesson.id}/${TABS[ti + 1].key}`;
      nav.appendChild(a);
    } else if (LESSONS[idx + 1]) {
      const a = el("a", "btn btn-primary", `Nästa lektion: ${LESSONS[idx + 1].title} →`);
      a.href = `#/${LESSONS[idx + 1].id}`;
      nav.appendChild(a);
    }
    if (idx > 0 && ti === 0) {
      const a = el("a", "btn btn-ghost", `← ${LESSONS[idx - 1].title}`);
      a.href = `#/${LESSONS[idx - 1].id}`;
      nav.appendChild(a);
    }
    main.appendChild(nav);
    math(main.querySelector(".lead"));
    document.title = `${lesson.title} – Matte 3c`;
  }

  function renderTheory(lesson, body) {
    const done = lessonProgress(lesson.id).theory;
    body.appendChild(stepper(lesson.theory, {
      start: done ? lesson.theory.length : 1,
      onDone: () => updateProgress(lesson.id, (p) => (p.theory = true)),
    }));
  }

  function renderExamples(lesson, body) {
    body.appendChild(el("p", "muted",
      "Försök själv först. Kör du fast – ta en ledtråd i taget. Sedan kan du stega dig igenom lösningen."));
    lesson.examples.forEach((ex, i) => {
      const card = el("article", "card ex-card");
      card.appendChild(el("div", "ex-head", `Exempel ${i + 1}`));
      card.appendChild(renderBlock(ex.q));

      const tools = el("div", "ex-tools");
      const hintBox = el("div", "hints");
      let hintsShown = 0;
      const hintBtn = el("button", "btn btn-ghost", "💡 Ledtråd");
      const solveBtn = el("button", "btn btn-ghost", "Visa lösning steg för steg");
      const updateHintBtn = () => {
        hintBtn.hidden = hintsShown >= ex.hints.length;
        hintBtn.textContent = `💡 Ledtråd ${hintsShown + 1} av ${ex.hints.length}`;
      };
      hintBtn.addEventListener("click", () => {
        const h = el("div", "hint-box", `<strong>Ledtråd ${hintsShown + 1}:</strong> ${ex.hints[hintsShown]}`);
        hintBox.appendChild(h);
        math(h);
        hintsShown++;
        updateHintBtn();
      });
      solveBtn.addEventListener("click", () => {
        solveBtn.hidden = true;
        hintBtn.hidden = true;
        const sol = el("div", "solution-box");
        sol.appendChild(el("div", "sol-title", "Lösning"));
        const blocks = ex.steps.concat(ex.answer ? [{ rule: `<strong>Svar:</strong> ${ex.answer}` }] : []);
        sol.appendChild(stepper(blocks));
        card.appendChild(sol);
      });
      updateHintBtn();
      tools.append(hintBtn, solveBtn);
      card.append(hintBox, tools);
      body.appendChild(card);
    });
  }

  function renderExercises(lesson, body) {
    const summary = el("div", "ex-summary");
    const refreshSummary = () => {
      const p = lessonProgress(lesson.id);
      const vals = Object.values(p.ex);
      const right = vals.filter((v) => v === "right").length;
      summary.innerHTML = vals.length
        ? `Rättat: <strong>${vals.length} av ${lesson.exercises.length}</strong> · Rätt: <strong>${right}</strong>`
        : "Lös uppgifterna på papper. Öppna sedan facit och markera om du hade rätt.";
    };
    body.appendChild(summary);
    refreshSummary();

    lesson.exercises.forEach((ex, i) => {
      const card = el("article", "card ex-card");
      const head = el("div", "ex-head", `Uppgift ${i + 1}`);
      card.appendChild(head);
      card.appendChild(renderBlock(ex.q));

      const tools = el("div", "ex-tools");
      if (ex.hint) {
        const hb = el("button", "btn btn-ghost", "💡 Ledtråd");
        hb.addEventListener("click", () => {
          hb.replaceWith(el("div", "hint-box", `<strong>Ledtråd:</strong> ${ex.hint}`));
          math(card);
        });
        tools.appendChild(hb);
      }
      const facitBtn = el("button", "btn", "Visa facit");
      tools.appendChild(facitBtn);
      card.appendChild(tools);

      const mark = (state) => {
        updateProgress(lesson.id, (p) => (p.ex[i] = state));
        card.classList.toggle("marked-right", state === "right");
        card.classList.toggle("marked-wrong", state === "wrong");
        refreshSummary();
      };

      const openFacit = () => {
        facitBtn.hidden = true;
        const f = el("div", "facit");
        f.appendChild(el("div", "facit-answer", `<strong>Facit:</strong> ${ex.answer}`));
        if (ex.steps && ex.steps.length) {
          const det = el("details", "solution");
          det.appendChild(el("summary", "", "Visa lösning"));
          const ol = el("ol", "steps");
          ex.steps.forEach((s) => ol.appendChild(el("li", "", s)));
          det.appendChild(ol);
          f.appendChild(det);
        }
        const self = el("div", "self-mark");
        self.appendChild(el("span", "muted", "Hade du rätt?"));
        const yes = el("button", "btn btn-small mark-right", "✓ Rätt");
        const no = el("button", "btn btn-small mark-wrong", "✗ Fel");
        yes.addEventListener("click", () => mark("right"));
        no.addEventListener("click", () => mark("wrong"));
        self.append(yes, no);
        f.appendChild(self);
        card.appendChild(f);
        math(f);
      };
      facitBtn.addEventListener("click", openFacit);

      const saved = lessonProgress(lesson.id).ex[i];
      if (saved) {
        openFacit();
        card.classList.add(saved === "right" ? "marked-right" : "marked-wrong");
      }
      body.appendChild(card);
    });

    const reset = el("button", "btn btn-ghost btn-small", "Nollställ mina markeringar");
    reset.addEventListener("click", () => {
      updateProgress(lesson.id, (p) => (p.ex = {}));
      route();
    });
    body.appendChild(reset);
  }

  // ---------- routing ----------

  function route() {
    const [, id, tab] = location.hash.split("/");
    const lesson = LESSONS.find((l) => l.id === id);
    if (!lesson) renderOverview();
    else renderLesson(lesson, TABS.some((t) => t.key === tab) ? tab : "genomgang");
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  document.addEventListener("DOMContentLoaded", route);
})();
