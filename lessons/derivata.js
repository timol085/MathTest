// Matte 3c – Derivata
(() => {
  const R = String.raw;
  const { fmt, lineEq, tangent } = window.LH;
  const L = window.LESSONS;
  const CH = "Derivata";

  // Teckentabell: xs = x-värden, fp = tecken för f', f = pilar/typ.
  function signTable(xs, fp, f, fname = "f") {
    const row = (head, cells) => `<tr><th>${head}</th>${cells.map((c) => `<td>${c}</td>`).join("")}</tr>`;
    const xRow = [];
    xs.forEach((x) => xRow.push("", R`\(${x}\)`));
    xRow.push("");
    return `<table>${row(R`\(x\)`, xRow)}${row(R`\(${fname}'(x)\)`, fp.map((s) => R`\(${s}\)`))}${row(R`\(${fname}(x)\)`, f)}</table>`;
  }
  window.LH.signTable = signTable;

  // ------------------------------------------------------------------
  L.push({
    id: "andringskvot",
    chapter: CH,
    title: "Ändringskvot och förändringshastighet",
    intro: "Hur snabbt ändras en funktion i genomsnitt? Sekantens lutning ger svaret.",
    theory: [
      {
        title: "Genomsnittlig förändring",
        text: R`<p>En funktion beskriver hur något ändras – till exempel temperaturen under en dag eller sträckan en bil har kört. Ofta vill vi veta <em>hur snabbt</em> det ändras.</p>
<p>Den <strong>genomsnittliga förändringshastigheten</strong> mellan \(x = a\) och \(x = b\) kallas <strong>ändringskvot</strong>:</p>`,
        rule: R`\(\dfrac{\Delta y}{\Delta x} = \dfrac{f(b) - f(a)}{b - a}\)`,
        note: R`\(\Delta\) (delta) betyder "förändring". \(\Delta y\) är hur mycket \(y\) ändras och \(\Delta x\) hur mycket \(x\) ändras.`,
      },
      {
        title: "Ändringskvoten är en lutning",
        text: R`<p>Dra en rät linje – en <strong>sekant</strong> – genom punkterna \((a,\ f(a))\) och \((b,\ f(b))\) på grafen. Ändringskvoten är precis sekantens lutning \(k\). Dra i reglagen och se hur lutningen ändras.</p>`,
        graph: {
          xmin: -1, xmax: 6, ymin: -1, ymax: 11, alt: "Sekant till f(x) = x²/4 + 1",
          sliders: [
            { key: "a", label: R`\(a\)`, min: 0, max: 5, step: 0.5, value: 1 },
            { key: "b", label: R`\(b\)`, min: 0, max: 6, step: 0.5, value: 4 },
          ],
          draw: ({ a, b }) => {
            const f = (x) => x * x / 4 + 1;
            const d = { fns: [{ f }], points: [{ x: a, y: f(a), label: "(a, f(a))", dy: 18 }, { x: b, y: f(b), label: "(b, f(b))", cls: "c1" }], lines: [], labels: [{ x: 4.6, y: f(4.6) + 0.8, text: "f(x)" }] };
            if (a !== b) {
              const k = (f(b) - f(a)) / (b - a);
              d.lines.push({ x1: -1, y1: f(a) + k * (-1 - a), x2: 6, y2: f(a) + k * (6 - a), cls: "c2" });
              d.lines.push({ x1: a, y1: f(a), x2: b, y2: f(a), cls: "cm", dash: true, thin: true });
              d.lines.push({ x1: b, y1: f(a), x2: b, y2: f(b), cls: "cm", dash: true, thin: true });
              d.labels.push({ x: (a + b) / 2, y: f(a) - 0.6, text: "Δx", cls: "cm", anchor: "middle" });
              d.labels.push({ x: b + 0.12, y: (f(a) + f(b)) / 2, text: "Δy", cls: "cm" });
            }
            return d;
          },
          caption: ({ a, b }) => {
            const f = (x) => x * x / 4 + 1;
            if (a === b) return "Välj olika värden på \\(a\\) och \\(b\\).";
            return R`\(f(x) = \frac{x^2}{4} + 1\): \(\quad \dfrac{\Delta y}{\Delta x} = \dfrac{${fmt(f(b))} - ${fmt(f(a))}}{${fmt(b)} - ${fmt(a)}} = ${fmt((f(b) - f(a)) / (b - a))}\)`;
          },
        },
      },
      {
        title: "Ett exempel",
        text: R`<p>Låt \(f(x) = x^2\). Ändringskvoten mellan \(x = 1\) och \(x = 3\) är</p>`,
        rule: R`\(\dfrac{f(3) - f(1)}{3 - 1} = \dfrac{9 - 1}{2} = 4\)`,
        note: "I genomsnitt ökar alltså funktionen med 4 enheter i y-led för varje steg i x-led på det intervallet.",
      },
      {
        title: "Tolka med enheter",
        text: R`<p>Enheten för ändringskvoten är <em>enheten för y</em> per <em>enhet för x</em>.</p>
<p>Om \(s(t)\) är sträckan i meter efter \(t\) sekunder är \(\frac{\Delta s}{\Delta t}\) medelhastigheten i <strong>m/s</strong>. Om \(T(t)\) är temperaturen i °C efter \(t\) timmar är ändringskvoten i <strong>°C per timme</strong>.</p>`,
        note: "Negativ ändringskvot betyder att funktionen i genomsnitt minskar på intervallet.",
      },
    ],
    examples: [
      {
        q: R`Beräkna den genomsnittliga förändringshastigheten för \(f(x) = x^2 - 4x + 5\) mellan \(x = 1\) och \(x = 4\).`,
        hints: [R`Börja med att räkna ut \(f(1)\) och \(f(4)\).`, R`Sätt in i \(\frac{f(4) - f(1)}{4 - 1}\).`],
        steps: [
          R`\(f(1) = 1^2 - 4 \cdot 1 + 5 = 2\)`,
          R`\(f(4) = 4^2 - 4 \cdot 4 + 5 = 5\)`,
          R`\(\dfrac{\Delta y}{\Delta x} = \dfrac{5 - 2}{4 - 1} = \dfrac{3}{3} = 1\)`,
        ],
        answer: R`\(1\)`,
      },
      {
        q: R`En bil startar från stillastående. Sträckan efter \(t\) sekunder är \(s(t) = 2t^2\) meter. Vilken är bilens medelhastighet mellan \(t = 2\) och \(t = 5\)?`,
        hints: ["Medelhastighet = sträckan bilen kört delat med tiden.", R`Räkna ut \(s(2)\) och \(s(5)\).`],
        steps: [
          R`\(s(2) = 2 \cdot 2^2 = 8\) m och \(s(5) = 2 \cdot 5^2 = 50\) m.`,
          R`\(\dfrac{\Delta s}{\Delta t} = \dfrac{50 - 8}{5 - 2} = \dfrac{42}{3} = 14\)`,
          "Enheten blir meter per sekund.",
        ],
        answer: "14 m/s",
      },
    ],
    exercises: [
      { q: R`Beräkna ändringskvoten för \(f(x) = 3x + 2\) mellan \(x = 0\) och \(x = 5\).`, hint: "Vad är speciellt med en rät linje?", answer: R`\(3\)`, steps: [R`\(f(0) = 2,\ f(5) = 17\)`, R`\(\frac{17 - 2}{5 - 0} = 3\) – för en rät linje är ändringskvoten alltid \(k\).`] },
      { q: R`Beräkna ändringskvoten för \(f(x) = x^3\) mellan \(x = 1\) och \(x = 2\).`, answer: R`\(7\)`, steps: [R`\(\frac{2^3 - 1^3}{2 - 1} = \frac{8 - 1}{1} = 7\)`] },
      { q: R`Beräkna ändringskvoten för \(g(x) = x^2 + 1\) mellan \(x = -2\) och \(x = 1\).`, hint: R`Var noga med minustecknet i nämnaren: \(1 - (-2)\).`, answer: R`\(-1\)`, steps: [R`\(g(-2) = 5,\ g(1) = 2\)`, R`\(\frac{2 - 5}{1 - (-2)} = \frac{-3}{3} = -1\)`] },
      { q: R`Befolkningen i en ort är \(N(t) = 500 \cdot 1{,}02^t\) personer, där \(t\) är antal år. Hur mycket ökar befolkningen i genomsnitt per år under de första 10 åren?`, answer: "Cirka 11 personer per år", steps: [R`\(N(0) = 500\), \(N(10) = 500 \cdot 1{,}02^{10} \approx 609{,}5\)`, R`\(\frac{609{,}5 - 500}{10} \approx 10{,}95 \approx 11\) personer/år`] },
      { q: "Temperaturen sjunker från 22 °C klockan 8 till 14 °C klockan 12. Vilken är den genomsnittliga förändringshastigheten?", answer: "−2 °C per timme", steps: [R`\(\frac{14 - 22}{12 - 8} = \frac{-8}{4} = -2\) °C/h`] },
    ],
  });

  // ------------------------------------------------------------------
  L.push({
    id: "derivatans-definition",
    chapter: CH,
    title: "Derivatans definition",
    intro: "Låt sekanten krympa tills den blir en tangent – då får du lutningen i en enda punkt.",
    theory: [
      {
        title: "Från genomsnitt till ögonblick",
        text: R`<p>Ändringskvoten ger förändringen i <em>genomsnitt</em> över ett intervall. Men hur snabbt ändras funktionen <em>precis</em> i punkten \(x = a\)?</p>
<p>Idé: välj den andra punkten mycket nära, \(x = a + h\), och låt avståndet \(h\) bli mindre och mindre.</p>`,
      },
      {
        title: "Sekanten blir en tangent",
        text: R`<p>Här är \(f(x) = x^2\) och \(a = 1\). Dra \(h\) mot 0 och se hur sekanten (orange) närmar sig tangenten (grön, streckad).</p>`,
        graph: {
          xmin: -1, xmax: 3.5, ymin: -1, ymax: 10, alt: "Sekant som närmar sig tangent",
          sliders: [{ key: "h", label: R`\(h\)`, min: 0.05, max: 2, step: 0.05, value: 1.5 }],
          draw: ({ h }) => {
            const f = (x) => x * x;
            const k = 2 + h;
            return {
              fns: [{ f }],
              lines: [
                tangent(f, 2, 1, -1, 3.5, "c3"),
                { ...tangent(f, k, 1, -1, 3.5, "c2") },
                { x1: 1, y1: 1, x2: 1 + h, y2: 1, cls: "cm", dash: true, thin: true },
                { x1: 1 + h, y1: 1, x2: 1 + h, y2: f(1 + h), cls: "cm", dash: true, thin: true },
              ],
              points: [{ x: 1, y: 1, label: "(1, 1)", dx: -8, anchor: "end" }, { x: 1 + h, y: f(1 + h), cls: "c2" }],
              labels: [{ x: 3, y: 9.3, text: "f(x) = x²", anchor: "end" }],
            };
            // tangent = grön streckad
          },
          caption: ({ h }) => R`Sekantens lutning: \(\dfrac{(1+h)^2 - 1^2}{h} = 2 + h = ${fmt(2 + h)}\). \(\quad\) När \(h \to 0\) går lutningen mot \(2\).`,
        },
      },
      {
        title: "Definitionen",
        text: R`<p>Gränsvärdet av ändringskvoten när \(h\) går mot 0 kallas <strong>derivatan</strong> av \(f\) i punkten \(a\):</p>`,
        rule: R`\(f'(a) = \displaystyle\lim_{h \to 0} \frac{f(a+h) - f(a)}{h}\)`,
        note: R`Andra skrivsätt: \(y'\), \(\frac{dy}{dx}\) eller \(\frac{df}{dx}\).`,
      },
      {
        title: "Räkna med definitionen",
        text: R`<p>Låt oss ta fram \(f'(x)\) för \(f(x) = x^2\) för alla \(x\):</p>
<p>\(\dfrac{f(x+h) - f(x)}{h} = \dfrac{(x+h)^2 - x^2}{h} = \dfrac{x^2 + 2xh + h^2 - x^2}{h} = \dfrac{2xh + h^2}{h} = 2x + h\)</p>
<p>När \(h \to 0\) försvinner \(h\):</p>`,
        rule: R`\(f(x) = x^2 \;\Rightarrow\; f'(x) = 2x\)`,
        note: R`Kontroll med grafen ovan: \(f'(1) = 2 \cdot 1 = 2\). ✓`,
      },
      {
        title: "Vad betyder derivatan?",
        text: R`<ul>
<li>\(f'(a)\) är <strong>tangentens lutning</strong> i punkten \((a,\ f(a))\).</li>
<li>\(f'(a)\) är den <strong>momentana förändringshastigheten</strong> – hur snabbt \(f\) ändras just då.</li>
<li>Om \(s(t)\) är sträcka är \(s'(t)\) hastigheten i just det ögonblicket.</li>
</ul>`,
      },
    ],
    examples: [
      {
        q: R`Låt \(f(x) = 3x^2\). Bestäm \(f'(2)\) med hjälp av derivatans definition.`,
        hints: [R`Ställ upp \(\frac{f(2+h) - f(2)}{h}\).`, R`Utveckla \(3(2+h)^2 = 3(4 + 4h + h^2)\) och förenkla innan du låter \(h \to 0\).`],
        steps: [
          R`\(f(2+h) = 3(2+h)^2 = 3(4 + 4h + h^2) = 12 + 12h + 3h^2\)`,
          R`\(f(2) = 3 \cdot 4 = 12\)`,
          R`\(\dfrac{f(2+h) - f(2)}{h} = \dfrac{12h + 3h^2}{h} = 12 + 3h\)`,
          R`\(\displaystyle\lim_{h \to 0}(12 + 3h) = 12\)`,
        ],
        answer: R`\(f'(2) = 12\)`,
      },
      {
        q: R`Bestäm \(f'(x)\) med derivatans definition om \(f(x) = x^2 + 5x\).`,
        hints: [R`Skriv \(f(x+h) = (x+h)^2 + 5(x+h)\).`, R`Termerna \(x^2\) och \(5x\) tar ut varandra när du subtraherar \(f(x)\).`],
        steps: [
          R`\(f(x+h) - f(x) = (x+h)^2 + 5(x+h) - x^2 - 5x\)`,
          R`\(= x^2 + 2xh + h^2 + 5x + 5h - x^2 - 5x = 2xh + h^2 + 5h\)`,
          R`Dela med \(h\): \(2x + h + 5\)`,
          R`Låt \(h \to 0\): \(f'(x) = 2x + 5\)`,
        ],
        answer: R`\(f'(x) = 2x + 5\)`,
      },
    ],
    exercises: [
      { q: R`Låt \(f(x) = x^2\). Bestäm \(f'(3)\) med derivatans definition.`, answer: R`\(6\)`, steps: [R`\(\frac{(3+h)^2 - 9}{h} = \frac{6h + h^2}{h} = 6 + h \to 6\)`] },
      { q: R`Bestäm \(f'(x)\) med derivatans definition om \(f(x) = 5x - 2\).`, answer: R`\(f'(x) = 5\)`, steps: [R`\(\frac{5(x+h) - 2 - (5x - 2)}{h} = \frac{5h}{h} = 5\)`] },
      { q: R`Bestäm \(f'(x)\) med derivatans definition om \(f(x) = 2x^2\).`, answer: R`\(f'(x) = 4x\)`, steps: [R`\(\frac{2(x+h)^2 - 2x^2}{h} = \frac{4xh + 2h^2}{h} = 4x + 2h \to 4x\)`] },
      { q: R`Låt \(f(x) = x^3\). Bestäm \(f'(1)\) med derivatans definition.`, hint: R`\((1+h)^3 = 1 + 3h + 3h^2 + h^3\)`, answer: R`\(3\)`, steps: [R`\(\frac{(1+h)^3 - 1}{h} = \frac{3h + 3h^2 + h^3}{h} = 3 + 3h + h^2 \to 3\)`] },
      { q: R`\(f(t)\) är vattennivån i en sjö i cm efter \(t\) timmar. Tolka \(f'(4) = -2\).`, answer: "När t = 4 timmar sjunker vattennivån med 2 cm per timme.", steps: ["Derivatan är förändringshastigheten. Negativt tecken betyder att nivån minskar. Enheten är cm per timme."] },
    ],
  });

  // ------------------------------------------------------------------
  L.push({
    id: "deriveringsregler",
    chapter: CH,
    title: "Deriveringsregler",
    intro: "Snabba regler för att derivera polynom, potenser, bråk och rötter.",
    theory: [
      {
        title: "Grundreglerna",
        text: "<p>Att använda definitionen varje gång tar tid. Med den kan man bevisa några regler som gör jobbet snabbt:</p>",
        rule: R`\(D(k) = 0 \qquad D(x) = 1 \qquad D(x^n) = n\,x^{n-1}\)`,
        note: R`\(D\) betyder "derivatan av". Konstanter försvinner eftersom en vågrät linje har lutningen 0.`,
      },
      {
        title: "Konstanter och summor",
        rule: R`\(D\big(a \cdot f(x)\big) = a \cdot f'(x) \qquad D\big(f(x) + g(x)\big) = f'(x) + g'(x)\)`,
        text: R`<p>Man deriverar alltså <strong>term för term</strong>, och en faktor framför följer med:</p>
<p>\(f(x) = 4x^3 - 5x^2 + 7x - 2 \;\Rightarrow\; f'(x) = 4 \cdot 3x^2 - 5 \cdot 2x + 7 = 12x^2 - 10x + 7\)</p>`,
      },
      {
        title: "Derivatans graf visar lutningen",
        text: R`<p>Den blå kurvan är \(f(x) = \frac{x^3}{3} - x\) och den gröna är derivatan \(f'(x) = x^2 - 1\). Flytta punkten: tangentens lutning på den blå kurvan är lika med höjden på den gröna kurvan.</p>`,
        graph: {
          xmin: -3, xmax: 3, ymin: -3, ymax: 4, alt: "f och f' i samma koordinatsystem",
          sliders: [{ key: "a", label: R`\(x\)`, min: -2.5, max: 2.5, step: 0.1, value: -1.8 }],
          draw: ({ a }) => {
            const f = (x) => x ** 3 / 3 - x, df = (x) => x * x - 1;
            return {
              fns: [{ f }, { f: df, cls: "c3" }],
              lines: [tangent(f, df(a), a, a - 1.2, a + 1.2), { x1: a, y1: f(a), x2: a, y2: df(a), cls: "cm", dash: true, thin: true }],
              points: [{ x: a, y: f(a), cls: "c2" }, { x: a, y: df(a), cls: "c3" }],
              labels: [{ x: 2.2, y: 2.1, text: "f(x)" }, { x: 1.6, y: 3.3, text: "f′(x)", cls: "c3" }],
            };
          },
          caption: ({ a }) => R`Tangentens lutning i \(x = ${fmt(a, 1)}\): \(\;f'(${fmt(a, 1)}) = ${a < 0 ? `(${fmt(a, 1)})` : fmt(a, 1)}^2 - 1 = ${fmt(a * a - 1)}\)`,
        },
        note: "Där f′ är positiv lutar f uppåt, där f′ är negativ lutar f nedåt, och där f′ = 0 är tangenten vågrät.",
      },
      {
        title: "Negativa exponenter och rötter",
        text: R`<p>Regeln \(D(x^n) = nx^{n-1}\) gäller för <strong>alla</strong> exponenter, även negativa och bråk. Skriv därför om bråk och rötter som potenser först:</p>`,
        rule: R`\(\dfrac{1}{x} = x^{-1} \;\Rightarrow\; D\!\left(\dfrac{1}{x}\right) = -x^{-2} = -\dfrac{1}{x^2}\) <br><br> \(\sqrt{x} = x^{1/2} \;\Rightarrow\; D(\sqrt{x}) = \tfrac{1}{2}x^{-1/2} = \dfrac{1}{2\sqrt{x}}\)`,
      },
      {
        title: "Produkter och parenteser",
        text: R`<p>I Matte 3c finns ingen regel för att derivera en parentes eller en produkt direkt. <strong>Utveckla först</strong>, derivera sedan:</p>
<p>\(f(x) = (x+3)(x-1) = x^2 + 2x - 3 \;\Rightarrow\; f'(x) = 2x + 2\)</p>`,
        note: R`Vanligt fel: att tro att \(D\big((x+3)(x-1)\big) = 1 \cdot 1\). Det stämmer inte!`,
      },
    ],
    examples: [
      {
        q: R`Derivera \(f(x) = 2x^5 - 3x^2 + x - 8\).`,
        hints: ["Derivera en term i taget.", R`\(D(2x^5) = 2 \cdot 5x^4\) och konstanten \(-8\) försvinner.`],
        steps: [R`\(D(2x^5) = 10x^4\), \(\;D(-3x^2) = -6x\), \(\;D(x) = 1\), \(\;D(-8) = 0\)`, R`\(f'(x) = 10x^4 - 6x + 1\)`],
        answer: R`\(f'(x) = 10x^4 - 6x + 1\)`,
      },
      {
        q: R`Derivera \(f(x) = \dfrac{6}{x^2} + 4\sqrt{x}\).`,
        hints: [R`Skriv om som potenser: \(\frac{6}{x^2} = 6x^{-2}\) och \(4\sqrt{x} = 4x^{1/2}\).`, R`Använd \(D(x^n) = nx^{n-1}\) på varje term.`],
        steps: [
          R`\(f(x) = 6x^{-2} + 4x^{1/2}\)`,
          R`\(f'(x) = 6 \cdot (-2)x^{-3} + 4 \cdot \tfrac{1}{2}x^{-1/2} = -12x^{-3} + 2x^{-1/2}\)`,
          R`Skriv tillbaka: \(f'(x) = -\dfrac{12}{x^3} + \dfrac{2}{\sqrt{x}}\)`,
        ],
        answer: R`\(f'(x) = -\dfrac{12}{x^3} + \dfrac{2}{\sqrt{x}}\)`,
      },
      {
        q: R`Derivera \(f(x) = (2x + 1)^2\).`,
        hints: ["Du kan inte derivera parentesen direkt – utveckla först.", R`Kvadreringsregeln: \((2x+1)^2 = 4x^2 + 4x + 1\).`],
        steps: [R`\(f(x) = 4x^2 + 4x + 1\)`, R`\(f'(x) = 8x + 4\)`],
        answer: R`\(f'(x) = 8x + 4\)`,
      },
    ],
    exercises: [
      { q: R`Derivera \(f(x) = 7x^3 - 2x + 4\).`, answer: R`\(f'(x) = 21x^2 - 2\)` },
      { q: R`Derivera \(f(x) = \dfrac{x^4}{4} - x^2\).`, answer: R`\(f'(x) = x^3 - 2x\)`, steps: [R`\(\frac{x^4}{4} = \frac{1}{4}x^4 \Rightarrow \frac{1}{4} \cdot 4x^3 = x^3\)`] },
      { q: R`Derivera \(f(x) = \dfrac{3}{x}\).`, hint: R`\(\frac{3}{x} = 3x^{-1}\)`, answer: R`\(f'(x) = -\dfrac{3}{x^2}\)`, steps: [R`\(3x^{-1} \Rightarrow -3x^{-2} = -\frac{3}{x^2}\)`] },
      { q: R`Låt \(f(x) = 8\sqrt{x}\). Beräkna \(f'(4)\).`, hint: R`\(\sqrt{x} = x^{1/2}\)`, answer: R`\(f'(4) = 2\)`, steps: [R`\(f'(x) = 8 \cdot \frac{1}{2}x^{-1/2} = \frac{4}{\sqrt{x}}\)`, R`\(f'(4) = \frac{4}{2} = 2\)`] },
      { q: R`Derivera \(f(x) = (x - 3)(x + 3)\).`, answer: R`\(f'(x) = 2x\)`, steps: [R`Konjugatregeln: \(f(x) = x^2 - 9\)`, R`\(f'(x) = 2x\)`] },
      { q: R`Derivera \(f(x) = \dfrac{x^3 + 2x^2}{x}\), \(x \neq 0\).`, hint: "Dela varje term i täljaren med x först.", answer: R`\(f'(x) = 2x + 2\)`, steps: [R`\(f(x) = x^2 + 2x\)`, R`\(f'(x) = 2x + 2\)`] },
    ],
  });

  // ------------------------------------------------------------------
  L.push({
    id: "derivata-exponential",
    chapter: CH,
    title: "Derivatan av exponentialfunktioner",
    intro: "Talet e, regeln för e^(kx) och hur man deriverar a^x.",
    theory: [
      {
        title: "Talet e",
        text: R`<p>Det finns en speciell bas, \(e \approx 2{,}718\), där exponentialfunktionen \(y = e^x\) har en magisk egenskap: <strong>lutningen är lika med funktionsvärdet</strong> i varje punkt.</p>`,
        graph: {
          xmin: -3, xmax: 2.6, ymin: -1, ymax: 10, alt: "Tangent till e^x",
          sliders: [{ key: "a", label: R`\(x\)`, min: -2, max: 2.2, step: 0.1, value: 1 }],
          draw: ({ a }) => {
            const f = Math.exp;
            return {
              fns: [{ f }],
              lines: [tangent(f, f(a), a, a - 2, a + 1.5), { x1: a, y1: 0, x2: a, y2: f(a), cls: "cm", dash: true, thin: true }],
              points: [{ x: a, y: f(a), cls: "c2" }],
              labels: [{ x: 2.2, y: 9.4, text: "y = eˣ", anchor: "end" }],
            };
          },
          caption: ({ a }) => R`\(e^{${fmt(a, 1)}} \approx ${fmt(Math.exp(a))}\) och tangentens lutning är också \(\approx ${fmt(Math.exp(a))}\).`,
        },
      },
      {
        title: "Regeln för e",
        rule: R`\(D\big(e^x\big) = e^x \qquad D\big(e^{kx}\big) = k\,e^{kx}\)`,
        text: R`<p>Exempel: \(D\big(5e^{3x}\big) = 5 \cdot 3e^{3x} = 15e^{3x}\) och \(D\big(e^{-x}\big) = -e^{-x}\).</p>`,
        note: R`Exponenten ändras inte! Bara faktorn \(k\) "trillar ner" framför.`,
      },
      {
        title: "Andra baser",
        text: R`<p>Alla exponentialfunktioner kan skrivas med basen \(e\), eftersom \(a = e^{\ln a}\). Då blir \(a^x = e^{x \ln a}\), och regeln för \(e^{kx}\) med \(k = \ln a\) ger:</p>`,
        rule: R`\(D\big(a^x\big) = a^x \cdot \ln a\)`,
        note: R`Exempel: \(D\big(2^x\big) = 2^x \ln 2 \approx 0{,}693 \cdot 2^x\).`,
      },
      {
        title: "Tillämpning: tillväxt",
        text: R`<p>En bakteriekultur växer enligt \(N(t) = 200e^{0{,}03t}\), där \(t\) är tiden i timmar.</p>
<p>\(N'(t) = 200 \cdot 0{,}03\,e^{0{,}03t} = 6e^{0{,}03t}\)</p>
<p>\(N'(10) = 6e^{0{,}3} \approx 8{,}1\). Efter 10 timmar ökar antalet med ungefär 8 bakterier per timme.</p>`,
      },
    ],
    examples: [
      {
        q: R`Derivera \(f(x) = 5e^{2x} - 3x^2\).`,
        hints: [R`Använd \(D(e^{kx}) = ke^{kx}\) med \(k = 2\).`, R`Derivera \(-3x^2\) som vanligt.`],
        steps: [R`\(D(5e^{2x}) = 5 \cdot 2e^{2x} = 10e^{2x}\)`, R`\(D(-3x^2) = -6x\)`],
        answer: R`\(f'(x) = 10e^{2x} - 6x\)`,
      },
      {
        q: R`Låt \(f(x) = 4 \cdot 3^x\). Beräkna \(f'(2)\) med två decimaler.`,
        hints: [R`\(D(a^x) = a^x \ln a\).`, R`\(f'(x) = 4 \cdot 3^x \ln 3\). Sätt in \(x = 2\).`],
        steps: [R`\(f'(x) = 4 \cdot 3^x \cdot \ln 3\)`, R`\(f'(2) = 4 \cdot 9 \cdot \ln 3 = 36 \ln 3 \approx 39{,}55\)`],
        answer: R`\(f'(2) \approx 39{,}55\)`,
      },
      {
        q: R`En bil är värd \(V(t) = 150\,000 \cdot 0{,}85^t\) kr efter \(t\) år. Beräkna och tolka \(V'(3)\).`,
        hints: [R`Basen är \(0{,}85\), så \(V'(t) = 150\,000 \cdot 0{,}85^t \cdot \ln 0{,}85\).`, R`\(\ln 0{,}85\) är negativt – vad betyder det?`],
        steps: [
          R`\(V'(t) = 150\,000 \cdot 0{,}85^t \cdot \ln 0{,}85\)`,
          R`\(V'(3) = 150\,000 \cdot 0{,}614125 \cdot (-0{,}1625) \approx -14\,971\)`,
          "Efter 3 år minskar bilens värde med ungefär 15 000 kr per år.",
        ],
        answer: R`\(V'(3) \approx -15\,000\) kr/år`,
      },
    ],
    exercises: [
      { q: R`Derivera \(f(x) = e^{3x}\).`, answer: R`\(f'(x) = 3e^{3x}\)` },
      { q: R`Derivera \(f(x) = 2e^{-x} + x\).`, answer: R`\(f'(x) = -2e^{-x} + 1\)` },
      { q: R`Derivera \(f(x) = 10^x\).`, answer: R`\(f'(x) = 10^x \ln 10\)` },
      { q: R`Låt \(f(x) = e^{0{,}5x}\). Beräkna \(f'(0)\).`, answer: R`\(0{,}5\)`, steps: [R`\(f'(x) = 0{,}5e^{0{,}5x}\), \(\;f'(0) = 0{,}5 \cdot e^0 = 0{,}5\)`] },
      { q: R`Ett ämnes massa är \(y = 100e^{-0{,}2t}\) gram efter \(t\) år. Beräkna \(y'(5)\) och tolka svaret.`, answer: R`\(y'(5) \approx -7{,}36\): massan minskar med ca 7,4 g/år efter 5 år.`, steps: [R`\(y'(t) = -20e^{-0{,}2t}\)`, R`\(y'(5) = -20e^{-1} \approx -7{,}36\)`] },
      { q: R`I vilken punkt har kurvan \(y = e^x\) en tangent med lutningen 1?`, answer: R`\((0,\ 1)\)`, steps: [R`\(y' = e^x = 1 \Rightarrow x = 0\)`, R`\(y(0) = e^0 = 1\)`] },
    ],
  });

  // ------------------------------------------------------------------
  L.push({
    id: "tangenter",
    chapter: CH,
    title: "Tangentens ekvation",
    intro: "Använd derivatan för att ta fram ekvationen för tangenten i en punkt.",
    theory: [
      {
        title: "Vad behövs?",
        text: R`<p>En rät linje bestäms av en <strong>lutning</strong> och en <strong>punkt</strong>. För tangenten i \(x = a\) har vi båda:</p>
<ul><li>Lutningen: \(k = f'(a)\)</li><li>Punkten: \((a,\ f(a))\)</li></ul>`,
        rule: R`\(y = kx + m \quad\text{där}\quad k = f'(a) \;\text{ och }\; f(a) = k \cdot a + m\)`,
      },
      {
        title: "Se tangenten",
        text: R`<p>Kurvan är \(f(x) = \frac{x^3}{4} - 2x + 1\). Flytta tangeringspunkten och se ekvationen ändras.</p>`,
        graph: {
          xmin: -4, xmax: 4, ymin: -6, ymax: 8, alt: "Tangent med ekvation",
          sliders: [{ key: "a", label: R`\(a\)`, min: -3.5, max: 3.5, step: 0.5, value: 2 }],
          draw: ({ a }) => {
            const f = (x) => x ** 3 / 4 - 2 * x + 1, df = (x) => 0.75 * x * x - 2;
            return {
              fns: [{ f }],
              lines: [tangent(f, df(a), a, -4, 4)],
              points: [{ x: a, y: f(a), cls: "c2", label: `(${window.LH.fmtT(a)}, ${window.LH.fmtT(f(a))})` }],
            };
          },
          caption: ({ a }) => {
            const f = (x) => x ** 3 / 4 - 2 * x + 1, k = 0.75 * a * a - 2, m = f(a) - k * a;
            return R`\(f(${fmt(a)}) = ${fmt(f(a), 3)}\), \(\;k = f'(${fmt(a)}) = ${fmt(k, 3)}\) \(\;\Rightarrow\;\) tangent: \(${lineEq(k, m, 3)}\)`;
          },
        },
      },
      {
        title: "Recept",
        text: R`<ol>
<li>Beräkna punktens y-värde: \(f(a)\).</li>
<li>Derivera och beräkna lutningen: \(k = f'(a)\).</li>
<li>Sätt in punkten i \(y = kx + m\) och lös ut \(m\).</li>
</ol>`,
        note: R`Alternativ: enpunktsformen \(y - f(a) = f'(a)(x - a)\) ger samma linje.`,
      },
      {
        title: "Omvänt problem",
        text: R`<p>Ibland är lutningen given och man söker punkten. Då löser man ekvationen \(f'(x) = k\).</p>
<p>En <strong>vågrät</strong> tangent har lutningen 0, så då löser man \(f'(x) = 0\).</p>`,
      },
    ],
    examples: [
      {
        q: R`Bestäm ekvationen för tangenten till \(f(x) = x^2 - 3x + 1\) i punkten där \(x = 2\).`,
        hints: [R`Räkna ut \(f(2)\) för att få punkten.`, R`\(f'(x) = 2x - 3\) ger lutningen \(k = f'(2)\).`, R`Sätt in punkten och \(k\) i \(y = kx + m\).`],
        steps: [
          R`\(f(2) = 4 - 6 + 1 = -1\) – punkten är \((2,\ -1)\).`,
          R`\(f'(x) = 2x - 3 \Rightarrow k = f'(2) = 1\)`,
          R`\(-1 = 1 \cdot 2 + m \Rightarrow m = -3\)`,
          { text: R`Tangenten: \(y = x - 3\)`, graph: { xmin: -1, xmax: 5, ymin: -4, ymax: 4, draw: () => ({ fns: [{ f: (x) => x * x - 3 * x + 1 }], lines: [{ x1: -1, y1: -4, x2: 5, y2: 2, cls: "c2" }], points: [{ x: 2, y: -1, cls: "c2", label: "(2, −1)" }] }) } },
        ],
        answer: R`\(y = x - 3\)`,
      },
      {
        q: R`Bestäm tangenten till \(f(x) = e^{2x}\) i punkten där \(x = 0\).`,
        hints: [R`\(f(0) = e^0 = 1\).`, R`\(f'(x) = 2e^{2x}\).`],
        steps: [R`Punkten: \((0,\ 1)\)`, R`\(k = f'(0) = 2e^0 = 2\)`, R`Eftersom punkten ligger på y-axeln är \(m = 1\).`],
        answer: R`\(y = 2x + 1\)`,
      },
      {
        q: R`I vilka punkter har kurvan \(y = x^3 - 3x\) vågräta tangenter?`,
        hints: ["Vågrät tangent betyder lutning 0.", R`Lös \(3x^2 - 3 = 0\).`],
        steps: [R`\(y' = 3x^2 - 3 = 0 \Rightarrow x^2 = 1 \Rightarrow x = \pm 1\)`, R`\(y(1) = 1 - 3 = -2\), \(\;y(-1) = -1 + 3 = 2\)`],
        answer: R`\((1,\ -2)\) och \((-1,\ 2)\)`,
      },
    ],
    exercises: [
      { q: R`Bestäm tangenten till \(f(x) = x^2\) i punkten där \(x = 3\).`, answer: R`\(y = 6x - 9\)`, steps: [R`\(f(3) = 9\), \(k = f'(3) = 6\)`, R`\(9 = 18 + m \Rightarrow m = -9\)`] },
      { q: R`Bestäm tangenten till \(f(x) = \dfrac{4}{x}\) i punkten där \(x = 2\).`, hint: R`\(f'(x) = -\frac{4}{x^2}\)`, answer: R`\(y = -x + 4\)`, steps: [R`\(f(2) = 2\), \(k = -\frac{4}{4} = -1\)`, R`\(2 = -2 + m \Rightarrow m = 4\)`] },
      { q: R`Bestäm tangenten till \(f(x) = x^3\) i punkten där \(x = -1\).`, answer: R`\(y = 3x + 2\)`, steps: [R`\(f(-1) = -1\), \(k = 3(-1)^2 = 3\)`, R`\(-1 = -3 + m \Rightarrow m = 2\)`] },
      { q: R`I vilken punkt har \(f(x) = x^2 - 4x\) en tangent med lutningen 2?`, answer: R`\((3,\ -3)\)`, steps: [R`\(2x - 4 = 2 \Rightarrow x = 3\)`, R`\(f(3) = 9 - 12 = -3\)`] },
      { q: R`Bestäm tangenten till \(f(x) = 2\sqrt{x}\) i punkten där \(x = 4\).`, hint: R`\(f'(x) = \frac{1}{\sqrt{x}}\)`, answer: R`\(y = 0{,}5x + 2\)`, steps: [R`\(f(4) = 4\), \(k = \frac{1}{2}\)`, R`\(4 = 2 + m \Rightarrow m = 2\)`] },
    ],
  });

  // ------------------------------------------------------------------
  const cub = (x) => x ** 3 - 3 * x;
  L.push({
    id: "extrempunkter",
    chapter: CH,
    title: "Växande, avtagande och extrempunkter",
    intro: "Derivatans tecken avslöjar var grafen går upp och ner – och var toppar och dalar finns.",
    theory: [
      {
        title: "Derivatans tecken",
        text: R`<ul>
<li>\(f'(x) > 0\): tangenten lutar uppåt – \(f\) är <strong>växande</strong>.</li>
<li>\(f'(x) < 0\): tangenten lutar nedåt – \(f\) är <strong>avtagande</strong>.</li>
<li>\(f'(x) = 0\): tangenten är vågrät – en <strong>stationär punkt</strong>.</li>
</ul>`,
        graph: {
          xmin: -2.6, xmax: 2.6, ymin: -5, ymax: 5, alt: "f(x) = x³ − 3x med tangent",
          sliders: [{ key: "a", label: R`\(x\)`, min: -2.2, max: 2.2, step: 0.1, value: -1.6 }],
          draw: ({ a }) => {
            const df = (x) => 3 * x * x - 3;
            return {
              fns: [{ f: cub }, { f: df, cls: "c3", dash: true }],
              lines: [tangent(cub, df(a), a, a - 0.9, a + 0.9)],
              points: [{ x: -1, y: 2, label: "max", cls: "c1" }, { x: 1, y: -2, label: "min", cls: "c1", dy: 20 }, { x: a, y: cub(a), cls: "c2" }],
              labels: [{ x: 2.05, y: 3.9, text: "f′(x)", cls: "c3" }, { x: 2.3, y: 1.4, text: "f(x)" }],
            };
          },
          caption: ({ a }) => {
            const k = 3 * a * a - 3;
            const st = Math.abs(k) < 1e-9 ? "stationär punkt" : k > 0 ? "<strong>växande</strong>" : "<strong>avtagande</strong>";
            return R`\(f(x) = x^3 - 3x\): \(\;f'(${fmt(a, 1)}) = ${fmt(k)}\) – här är \(f\) ${st}.`;
          },
        },
      },
      {
        title: "Tre sorters stationära punkter",
        text: R`<ul>
<li><strong>Maximipunkt</strong>: \(f'\) byter tecken från \(+\) till \(-\) (grafen vänder nedåt).</li>
<li><strong>Minimipunkt</strong>: \(f'\) byter tecken från \(-\) till \(+\).</li>
<li><strong>Terrasspunkt</strong>: \(f'\) har samma tecken på båda sidor. Exempel: \(f(x) = x^3\) i origo.</li>
</ul>`,
        graph: { xmin: -2, xmax: 2, ymin: -4, ymax: 4, h: 260, alt: "Terrasspunkt för x³", draw: () => ({ fns: [{ f: (x) => x ** 3 }], lines: [{ x1: -1, y1: 0, x2: 1, y2: 0, cls: "c2" }], points: [{ x: 0, y: 0, cls: "c2", label: "terrasspunkt", dy: -12 }] }) },
      },
      {
        title: "Teckenstudie",
        text: R`<p>För att avgöra typen gör man en <strong>teckentabell</strong>. För \(f(x) = x^3 - 3x\):</p>
<p>\(f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)\), nollställen \(x = -1\) och \(x = 1\). Testa ett värde i varje intervall, t.ex. \(f'(-2) = 9 > 0\), \(f'(0) = -3 < 0\), \(f'(2) = 9 > 0\).</p>
${signTable(["-1", "1"], ["+", "0", "-", "0", "+"], ["↗", "max", "↘", "min", "↗"])}
<p>Maximipunkt \((-1,\ 2)\) och minimipunkt \((1,\ -2)\).</p>`,
      },
      {
        title: "Största och minsta värde i ett intervall",
        text: R`<p>Ska man hitta största/minsta värdet på ett <strong>begränsat intervall</strong> \(a \le x \le b\) måste man jämföra:</p>
<ul><li>funktionsvärdena i stationära punkter inuti intervallet, och</li><li>funktionsvärdena i <strong>ändpunkterna</strong> \(f(a)\) och \(f(b)\).</li></ul>`,
        note: "Det största värdet kan alltså ligga i en ändpunkt även om det finns en maximipunkt!",
      },
    ],
    examples: [
      {
        q: R`Bestäm extrempunkterna till \(f(x) = x^3 - 6x^2 + 9x + 1\) och avgör deras karaktär.`,
        hints: [R`Derivera och lös \(f'(x) = 0\). Bryt ut 3.`, R`\(x^2 - 4x + 3 = (x-1)(x-3)\).`, "Gör en teckentabell eller testa värden mellan nollställena."],
        steps: [
          R`\(f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)\)`,
          R`\(f'(x) = 0 \Rightarrow x = 1\) eller \(x = 3\)`,
          { text: signTable(["1", "3"], ["+", "0", "-", "0", "+"], ["↗", "max", "↘", "min", "↗"]) },
          R`\(f(1) = 1 - 6 + 9 + 1 = 5\) och \(f(3) = 27 - 54 + 27 + 1 = 1\)`,
          { graph: { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 7, h: 280, draw: () => ({ fns: [{ f: (x) => x ** 3 - 6 * x * x + 9 * x + 1 }], points: [{ x: 1, y: 5, label: "max (1, 5)" }, { x: 3, y: 1, label: "min (3, 1)", dy: 20 }] }) } },
        ],
        answer: R`Maximipunkt \((1,\ 5)\), minimipunkt \((3,\ 1)\)`,
      },
      {
        q: R`Bestäm extrempunkterna till \(f(x) = x^4 - 2x^2\).`,
        hints: [R`\(f'(x) = 4x^3 - 4x\). Bryt ut \(4x\).`, R`\(4x(x^2 - 1) = 0\) ger tre nollställen.`],
        steps: [
          R`\(f'(x) = 4x^3 - 4x = 4x(x - 1)(x + 1) = 0 \Rightarrow x = -1,\ 0,\ 1\)`,
          { text: signTable(["-1", "0", "1"], ["-", "0", "+", "0", "-", "0", "+"], ["↘", "min", "↗", "max", "↘", "min", "↗"]) },
          R`\(f(-1) = -1\), \(\;f(0) = 0\), \(\;f(1) = -1\)`,
        ],
        answer: R`Minimipunkter \((-1,\ -1)\) och \((1,\ -1)\), maximipunkt \((0,\ 0)\)`,
      },
      {
        q: R`Bestäm största och minsta värde för \(f(x) = -x^2 + 4x\) i intervallet \(0 \le x \le 5\).`,
        hints: [R`Hitta den stationära punkten med \(f'(x) = 0\).`, "Glöm inte ändpunkterna x = 0 och x = 5."],
        steps: [R`\(f'(x) = -2x + 4 = 0 \Rightarrow x = 2\), \(f(2) = 4\)`, R`Ändpunkter: \(f(0) = 0\), \(f(5) = -25 + 20 = -5\)`, "Jämför: 4, 0 och −5."],
        answer: "Största värde 4, minsta värde −5",
      },
    ],
    exercises: [
      { q: R`Bestäm extrempunkten till \(f(x) = x^2 - 8x + 3\) och avgör om den är max eller min.`, answer: R`Minimipunkt \((4,\ -13)\)`, steps: [R`\(f'(x) = 2x - 8 = 0 \Rightarrow x = 4\)`, R`\(f(4) = 16 - 32 + 3 = -13\); positiv \(x^2\)-term ger minimum.`] },
      { q: R`Bestäm extrempunkterna till \(f(x) = -2x^3 + 6x\).`, answer: R`Minimipunkt \((-1,\ -4)\), maximipunkt \((1,\ 4)\)`, steps: [R`\(f'(x) = -6x^2 + 6 = 0 \Rightarrow x = \pm 1\)`, R`\(f'(0) = 6 > 0\), \(f'(\pm 2) < 0\): tecken \(-,\ +,\ -\)`, R`\(f(-1) = -4\), \(f(1) = 4\)`] },
      { q: R`Undersök den stationära punkten till \(f(x) = x^3\).`, answer: R`Terrasspunkt i \((0,\ 0)\)`, steps: [R`\(f'(x) = 3x^2 = 0 \Rightarrow x = 0\)`, R`\(f'(x) \ge 0\) på båda sidor – inget teckenbyte.`] },
      { q: R`För vilka \(x\) är \(f(x) = x^3 - 12x\) avtagande?`, answer: R`\(-2 \le x \le 2\)`, steps: [R`\(f'(x) = 3x^2 - 12 \le 0 \Leftrightarrow x^2 \le 4\)`] },
      { q: R`Bestäm största och minsta värde för \(f(x) = x^3 - 3x\) i intervallet \(0 \le x \le 3\).`, answer: "Största 18, minsta −2", steps: [R`\(f'(x) = 3x^2 - 3 = 0 \Rightarrow x = 1\) (\(x = -1\) ligger utanför)`, R`\(f(0) = 0,\ f(1) = -2,\ f(3) = 18\)`] },
      { q: R`Bestäm extrempunkten till \(f(x) = e^x - x\).`, answer: R`Minimipunkt \((0,\ 1)\)`, steps: [R`\(f'(x) = e^x - 1 = 0 \Rightarrow x = 0\)`, R`\(f'(-1) < 0\), \(f'(1) > 0\) ⇒ minimum, \(f(0) = 1\)`] },
    ],
  });

  // ------------------------------------------------------------------
  const g7 = (x) => x ** 3 - 3 * x * x;
  L.push({
    id: "andraderivata",
    chapter: CH,
    title: "Andraderivata och grafritning",
    intro: "Derivatan av derivatan visar hur kurvan böjer – och är ett snabbt sätt att avgöra max och min.",
    theory: [
      {
        title: "Andraderivatan",
        text: R`<p>Deriverar man derivatan får man <strong>andraderivatan</strong> \(f''(x)\). Den beskriver hur <em>lutningen</em> ändras.</p>
<ul><li>\(f''(x) > 0\): lutningen ökar – kurvan böjer <strong>uppåt</strong> (som en dal ∪).</li>
<li>\(f''(x) < 0\): lutningen minskar – kurvan böjer <strong>nedåt</strong> (som en topp ∩).</li></ul>`,
        graph: {
          xmin: -1.5, xmax: 3.5, ymin: -6, ymax: 3, alt: "Böjning hos x³ − 3x²",
          sliders: [{ key: "a", label: R`\(x\)`, min: -1, max: 3, step: 0.1, value: 0.4 }],
          draw: ({ a }) => {
            const df = (x) => 3 * x * x - 6 * x;
            return {
              fns: [{ f: g7 }],
              lines: [tangent(g7, df(a), a, a - 0.9, a + 0.9)],
              points: [{ x: 0, y: 0, label: "max" }, { x: 2, y: -4, label: "min", dy: 20 }, { x: 1, y: -2, label: "f″ = 0", cls: "c3", dx: 10 }, { x: a, y: g7(a), cls: "c2" }],
            };
          },
          caption: ({ a }) => {
            const s = 6 * a - 6;
            const t = Math.abs(s) < 1e-9 ? "kurvan byter böjning här (inflexionspunkt)" : s > 0 ? "kurvan böjer uppåt" : "kurvan böjer nedåt";
            return R`\(f(x) = x^3 - 3x^2\), \(\;f''(x) = 6x - 6\): \(\;f''(${fmt(a, 1)}) = ${fmt(s)}\) – ${t}.`;
          },
        },
      },
      {
        title: "Andraderivatatestet",
        text: R`<p>Om \(f'(a) = 0\) kan man avgöra typen direkt:</p>`,
        rule: R`\(f''(a) < 0 \Rightarrow\) maximipunkt \(\qquad f''(a) > 0 \Rightarrow\) minimipunkt`,
        note: R`Om \(f''(a) = 0\) säger testet ingenting – gör då en teckenstudie av \(f'\).`,
      },
      {
        title: "Recept för grafritning",
        text: R`<ol>
<li>Derivera: \(f'(x)\) och \(f''(x)\).</li>
<li>Lös \(f'(x) = 0\) – stationära punkter.</li>
<li>Avgör typ med teckenstudie eller \(f''\).</li>
<li>Räkna ut y-värden, skärning med y-axeln \((0,\ f(0))\) och gärna några fler punkter.</li>
<li>Rita en mjuk kurva genom punkterna.</li>
</ol>`,
      },
      {
        title: "Exempel: \\(f(x) = x^3 - 3x^2\\)",
        text: R`<p>\(f'(x) = 3x^2 - 6x = 3x(x - 2)\) ger \(x = 0\) och \(x = 2\).</p>
<p>\(f''(x) = 6x - 6\): \(\;f''(0) = -6 < 0\) ⇒ max \((0,\ 0)\), \(\;f''(2) = 6 > 0\) ⇒ min \((2,\ -4)\).</p>`,
        graph: { xmin: -1.5, xmax: 3.5, ymin: -6, ymax: 3, h: 300, draw: () => ({ fns: [{ f: g7 }], points: [{ x: 0, y: 0, label: "max (0, 0)" }, { x: 2, y: -4, label: "min (2, −4)", dy: 20 }, { x: 3, y: 0, label: "(3, 0)", cls: "c3" }] }) },
      },
    ],
    examples: [
      {
        q: R`Bestäm extrempunkterna till \(f(x) = 2x^3 - 3x^2 - 12x\) med hjälp av andraderivatan.`,
        hints: [R`\(f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2)\).`, R`\(x^2 - x - 2 = (x - 2)(x + 1)\).`, R`\(f''(x) = 12x - 6\). Sätt in de stationära punkterna.`],
        steps: [
          R`\(f'(x) = 6(x - 2)(x + 1) = 0 \Rightarrow x = -1\) eller \(x = 2\)`,
          R`\(f''(x) = 12x - 6\): \(\;f''(-1) = -18 < 0\) (max), \(\;f''(2) = 18 > 0\) (min)`,
          R`\(f(-1) = -2 - 3 + 12 = 7\), \(\;f(2) = 16 - 12 - 24 = -20\)`,
        ],
        answer: R`Max \((-1,\ 7)\), min \((2,\ -20)\)`,
      },
      {
        q: R`Skissa grafen till \(f(x) = x^4 - 4x^3\).`,
        hints: [R`\(f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)\).`, R`I \(x = 0\) blir \(f''(0) = 0\) – gör en teckenstudie där.`],
        steps: [
          R`\(f'(x) = 4x^2(x - 3) = 0 \Rightarrow x = 0\) eller \(x = 3\)`,
          R`\(f''(x) = 12x^2 - 24x\): \(\;f''(3) = 36 > 0\) ⇒ min, \(f(3) = 81 - 108 = -27\)`,
          { text: R`\(f''(0) = 0\) – teckenstudie:` + signTable(["0", "3"], ["-", "0", "-", "0", "+"], ["↘", "terrass", "↘", "min", "↗"]) },
          { graph: { xmin: -1.5, xmax: 4.5, ymin: -32, ymax: 12, h: 300, draw: () => ({ fns: [{ f: (x) => x ** 4 - 4 * x ** 3 }], points: [{ x: 0, y: 0, label: "terrass (0, 0)" }, { x: 3, y: -27, label: "min (3, −27)", dy: 20 }, { x: 4, y: 0, cls: "c3", label: "(4, 0)" }] }) } },
        ],
        answer: R`Terrasspunkt \((0,\ 0)\), minimipunkt \((3,\ -27)\), nollställen \(x = 0\) och \(x = 4\)`,
      },
    ],
    exercises: [
      { q: R`Bestäm \(f''(x)\) om \(f(x) = x^4 + 2x^3\).`, answer: R`\(f''(x) = 12x^2 + 12x\)`, steps: [R`\(f'(x) = 4x^3 + 6x^2\)`] },
      { q: R`Låt \(f(x) = e^{2x}\). Beräkna \(f''(0)\).`, answer: R`\(4\)`, steps: [R`\(f'(x) = 2e^{2x}\), \(f''(x) = 4e^{2x}\)`, R`\(f''(0) = 4\)`] },
      { q: R`Bestäm extrempunkterna till \(f(x) = x^3 - 3x + 2\) med andraderivatan.`, answer: R`Max \((-1,\ 4)\), min \((1,\ 0)\)`, steps: [R`\(f'(x) = 3x^2 - 3 = 0 \Rightarrow x = \pm 1\)`, R`\(f''(x) = 6x\): \(f''(-1) = -6\), \(f''(1) = 6\)`, R`\(f(-1) = 4\), \(f(1) = 0\)`] },
      { q: R`För \(f(x) = x^4\) gäller \(f'(0) = f''(0) = 0\). Vad är det för sorts punkt i origo?`, hint: "Andraderivatatestet hjälper inte – gör en teckenstudie av f′.", answer: "Minimipunkt", steps: [R`\(f'(x) = 4x^3\) är negativ för \(x < 0\) och positiv för \(x > 0\).`] },
      { q: R`Bestäm konstanten \(a\) så att \(f(x) = x^2 + ax\) har en minimipunkt där \(x = 3\).`, answer: R`\(a = -6\)`, steps: [R`\(f'(x) = 2x + a\), \(f'(3) = 6 + a = 0\)`] },
    ],
  });

  // ------------------------------------------------------------------
  const vol = (x) => x * (30 - 2 * x) ** 2;
  L.push({
    id: "optimering",
    chapter: CH,
    title: "Optimering och tillämpningar",
    intro: "Största volym, minsta kostnad, högsta höjd – derivatan löser verkliga problem.",
    theory: [
      {
        title: "Arbetsgång",
        text: R`<ol>
<li>Rita en figur och välj en <strong>variabel</strong> (t.ex. \(x\)).</li>
<li>Ställ upp en <strong>funktion</strong> för det som ska bli störst/minst.</li>
<li>Bestäm <strong>definitionsmängden</strong> – vilka \(x\) är möjliga?</li>
<li>Derivera och lös \(f'(x) = 0\).</li>
<li>Kontrollera att det verkligen är max/min (och jämför med ändpunkter).</li>
<li>Svara på frågan – med enhet!</li>
</ol>`,
      },
      {
        title: "Klassikern: lådan",
        text: R`<p>Av en kvadratisk plåt med sidan 30 cm skär man bort lika stora kvadrater (sida \(x\)) i hörnen och viker upp kanterna till en öppen låda. Vilket \(x\) ger störst volym?</p>
<p>Botten blir \((30 - 2x)\) gånger \((30 - 2x)\) och höjden \(x\):</p>`,
        rule: R`\(V(x) = x(30 - 2x)^2, \qquad 0 < x < 15\)`,
        graph: {
          xmin: 0, xmax: 15, ymin: 0, ymax: 2400, xstep: 1, ystep: 400, xlabel: "x (cm)", ylabel: "V (cm³)", alt: "Lådans volym",
          sliders: [{ key: "x", label: R`\(x\)`, min: 0.5, max: 14.5, step: 0.5, value: 2 }],
          draw: ({ x }) => ({ fns: [{ f: vol }], points: [{ x: 5, y: 2000, label: "max", dy: -10 }, { x, y: vol(x), cls: "c2" }], lines: [{ x1: x, y1: 0, x2: x, y2: vol(x), cls: "cm", dash: true, thin: true }] }),
          caption: ({ x }) => R`\(x = ${fmt(x)}\): botten \(${fmt(30 - 2 * x)} \times ${fmt(30 - 2 * x)}\) cm, \(\;V = ${fmt(vol(x))}\) cm³`,
        },
      },
      {
        title: "Lös med derivata",
        text: R`<p>Utveckla: \(V(x) = x(900 - 120x + 4x^2) = 4x^3 - 120x^2 + 900x\)</p>
<p>\(V'(x) = 12x^2 - 240x + 900 = 12(x^2 - 20x + 75) = 12(x - 5)(x - 15)\)</p>
<p>\(V'(x) = 0\) ger \(x = 5\) (\(x = 15\) ger ingen låda). \(V''(x) = 24x - 240\), \(V''(5) = -120 < 0\) ⇒ maximum.</p>`,
        rule: R`\(V(5) = 5 \cdot 20^2 = 2000\) cm³ = 2 liter`,
      },
    ],
    examples: [
      {
        q: R`Ett företags vinst är \(V(x) = -0{,}5x^2 + 60x - 800\) tusen kronor, där \(x\) är antal tillverkade enheter (i tusental). Hur många enheter ger störst vinst, och hur stor är den?`,
        hints: [R`Derivera och sätt \(V'(x) = 0\).`, R`\(V'(x) = -x + 60\).`],
        steps: [R`\(V'(x) = -x + 60 = 0 \Rightarrow x = 60\)`, R`\(V''(x) = -1 < 0\) ⇒ maximum`, R`\(V(60) = -1800 + 3600 - 800 = 1000\)`],
        answer: "60 000 enheter ger maxvinsten 1 000 000 kr",
      },
      {
        q: R`En rektangel har två hörn på x-axeln och två hörn på kurvan \(y = 12 - x^2\) (symmetriskt kring y-axeln). Vilken är den största möjliga arean?`,
        hints: [R`Låt hörnet i första kvadranten vara \((x,\ 12 - x^2)\). Bredden blir då \(2x\).`, R`\(A(x) = 2x(12 - x^2) = 24x - 2x^3\), \(0 < x < \sqrt{12}\).`],
        steps: [
          { graph: { xmin: -4, xmax: 4, ymin: -1, ymax: 13, h: 280, draw: () => ({ fns: [{ f: (x) => 12 - x * x }], areas: [{ f: () => 8, a: -2, b: 2, cls: "f2" }], lines: [{ x1: -2, y1: 0, x2: -2, y2: 8, cls: "c2" }, { x1: 2, y1: 0, x2: 2, y2: 8, cls: "c2" }, { x1: -2, y1: 8, x2: 2, y2: 8, cls: "c2" }], points: [{ x: 2, y: 8, cls: "c2", label: "(x, 12 − x²)" }] }) } },
          R`\(A(x) = 2x(12 - x^2) = 24x - 2x^3\)`,
          R`\(A'(x) = 24 - 6x^2 = 0 \Rightarrow x^2 = 4 \Rightarrow x = 2\)`,
          R`\(A''(x) = -12x\), \(A''(2) < 0\) ⇒ max. \(\;A(2) = 48 - 16 = 32\)`,
        ],
        answer: "32 areaenheter",
      },
    ],
    exercises: [
      { q: "Summan av två positiva tal är 20. Hur stor kan produkten bli som mest?", hint: R`Låt talen vara \(x\) och \(20 - x\).`, answer: R`\(100\)`, steps: [R`\(P(x) = x(20 - x) = 20x - x^2\)`, R`\(P'(x) = 20 - 2x = 0 \Rightarrow x = 10\)`, R`\(P(10) = 100\)`] },
      { q: "Med 60 m stängsel ska en rektangulär hage byggas mot en vägg (väggen behöver inget stängsel). Vilken är den största möjliga arean?", hint: R`Låt de två sidorna vinkelräta mot väggen vara \(x\). Då är den tredje sidan \(60 - 2x\).`, answer: "450 m²", steps: [R`\(A(x) = x(60 - 2x) = 60x - 2x^2\)`, R`\(A'(x) = 60 - 4x = 0 \Rightarrow x = 15\)`, R`\(A(15) = 15 \cdot 30 = 450\)`] },
      { q: R`Kostnaden är \(K(x) = x^2 - 40x + 500\) kr. För vilket \(x\) är kostnaden minst och hur stor är den då?`, answer: R`\(x = 20\), \(K = 100\) kr`, steps: [R`\(K'(x) = 2x - 40 = 0 \Rightarrow x = 20\)`, R`\(K(20) = 400 - 800 + 500 = 100\)`] },
      { q: R`En boll kastas uppåt. Höjden är \(h(t) = 20t - 5t^2\) meter efter \(t\) sekunder. Hur högt kommer bollen?`, answer: "20 m (efter 2 s)", steps: [R`\(h'(t) = 20 - 10t = 0 \Rightarrow t = 2\)`, R`\(h(2) = 40 - 20 = 20\)`] },
      { q: R`En rektangel har ett hörn i origo och det motsatta hörnet på kurvan \(y = 12 - x^2\) i första kvadranten. Bestäm den största arean.`, answer: R`\(16\) a.e.`, steps: [R`\(A(x) = x(12 - x^2) = 12x - x^3\)`, R`\(A'(x) = 12 - 3x^2 = 0 \Rightarrow x = 2\)`, R`\(A(2) = 24 - 8 = 16\)`] },
    ],
  });
})();
