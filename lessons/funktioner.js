// Matte 3c – Funktioner och grafer: polynomfunktioner, rationella funktioner, kontinuitet
(() => {
  const R = String.raw;
  const { fmt } = window.LH;
  const L = window.LESSONS;
  const CH = "Funktioner och grafer";

  // a(x − r1)(x − r2)… som KaTeX, t.ex. "2(x + 1)(x - 3)".
  const factor = (r) => (Math.abs(r) < 1e-9 ? "x" : r > 0 ? `(x - ${fmt(r, 1)})` : `(x + ${fmt(-r, 1)})`);
  const lead = (a) => (a === 1 ? "" : a === -1 ? "-" : fmt(a, 1));

  // ------------------------------------------------------------------
  const DEG = {
    1: { f: (x) => x, tex: "x", note: "en rät linje – inga extrempunkter" },
    2: { f: (x) => x * x - 2, tex: "x^2 - 2", note: "en parabel – en extrempunkt" },
    3: { f: (x) => x ** 3 - 3 * x, tex: "x^3 - 3x", note: "högst 3 nollställen och 2 extrempunkter" },
    4: { f: (x) => x ** 4 - 4 * x * x + 1, tex: "x^4 - 4x^2 + 1", note: "högst 4 nollställen och 3 extrempunkter" },
    5: { f: (x) => x ** 5 / 4 - 5 * x ** 3 / 4 + x, tex: R`\tfrac{1}{4}x^5 - \tfrac{5}{4}x^3 + x`, note: "högst 5 nollställen och 4 extrempunkter" },
  };

  L.push({
    id: "polynomfunktioner",
    chapter: CH,
    title: "Polynomfunktioner av högre grad",
    intro: "Graden avslöjar hur många nollställen och svängar grafen kan ha – och faktorformen visar var den skär x-axeln.",
    theory: [
      {
        title: "Grad, nollställen och extrempunkter",
        text: R`<p>En <strong>polynomfunktion</strong> av grad \(n\) kan skrivas \(f(x) = a_n x^n + \dots + a_1 x + a_0\) där \(a_n \neq 0\). Graden bestämmer hur "krokig" grafen kan vara:</p>`,
        rule: R`Grad \(n\): högst \(n\) nollställen och högst \(n - 1\) extrempunkter`,
        graph: {
          xmin: -3, xmax: 3, ymin: -4, ymax: 4, alt: "Polynom av olika grad",
          sliders: [{ key: "n", label: "grad", min: 1, max: 5, step: 1, value: 3 }],
          draw: ({ n }) => ({ fns: [{ f: DEG[n].f }] }),
          caption: ({ n }) => R`\(f(x) = ${DEG[n].tex}\) har grad ${n}: ${DEG[n].note}.`,
        },
        note: R`Det står <em>högst</em>. \(f(x) = x^3\) har grad 3 men bara ett nollställe och inga extrempunkter.`,
      },
      {
        title: "Hur grafen beter sig långt ut",
        text: R`<p>När \(|x|\) är stort är termen med högst grad helt dominerande. Därför avgör den <strong>ledande termen</strong> \(a_n x^n\) hur grafen ser ut i ändarna:</p>
<table><tr><th></th><th>\(a_n > 0\)</th><th>\(a_n < 0\)</th></tr>
<tr><th>\(n\) udda</th><td>nere till vänster, uppe till höger</td><td>uppe till vänster, nere till höger</td></tr>
<tr><th>\(n\) jämn</th><td>uppe i båda ändarna</td><td>nere i båda ändarna</td></tr></table>`,
      },
      {
        title: "Faktorform",
        text: R`<p>Om nollställena är \(x_1, x_2, x_3\) kan ett tredjegradspolynom skrivas i <strong>faktorform</strong> \(f(x) = a(x - x_1)(x - x_2)(x - x_3)\). Dra i reglagen och se hur nollstället och konstanten \(a\) ändrar grafen:</p>`,
        graph: {
          xmin: -4, xmax: 4, ymin: -8, ymax: 8, alt: "Tredjegradspolynom i faktorform",
          sliders: [
            { key: "r", label: R`nollställe \(x_3\)`, min: -3, max: 3, step: 0.5, value: 2.5 },
            { key: "a", label: R`\(a\)`, min: -2, max: 2, step: 0.5, value: 1 },
          ],
          draw: ({ r, a }) => {
            const f = (x) => a * (x + 2) * (x - 1) * (x - r);
            return { fns: [{ f }], points: [{ x: -2, y: 0, cls: "c2" }, { x: 1, y: 0, cls: "c2" }, { x: r, y: 0, cls: "c3", label: "x₃", dy: 18 }, { x: 0, y: f(0), cls: "c4", label: "f(0)" }] };
          },
          caption: ({ r, a }) => a === 0
            ? R`Med \(a = 0\) blir \(f(x) = 0\) – då är det inget tredjegradspolynom längre.`
            : R`\(f(x) = ${lead(a)}(x + 2)(x - 1)${factor(r)}\), \(\quad f(0) = ${fmt(2 * a * r, 2)}\)`,
        },
        note: R`Nollställena syns direkt i faktorformen. Konstanten \(a\) får man fram ur en känd punkt, ofta skärningen med y-axeln \(f(0)\).`,
      },
      {
        title: "Dubbelrot – grafen nuddar x-axeln",
        text: R`<p>Förekommer en faktor två gånger, som \((x - 1)^2\), kallas nollstället en <strong>dubbelrot</strong>. Där byter \(f\) inte tecken, så grafen <em>tangerar</em> x-axeln istället för att skära den.</p>`,
        graph: {
          xmin: -3.5, xmax: 2.5, ymin: -3, ymax: 6, h: 300, alt: "Grafen till (x+2)(x−1)²",
          draw: () => ({ fns: [{ f: (x) => (x + 2) * (x - 1) ** 2 }], points: [{ x: -2, y: 0, cls: "c2", label: "skär", dy: 18, anchor: "end", dx: -8 }, { x: 1, y: 0, cls: "c3", label: "tangerar (dubbelrot)", dy: 18 }] }),
          caption: () => R`\(f(x) = (x + 2)(x - 1)^2\)`,
        },
      },
      {
        title: "Hitta nollställen",
        text: R`<ul>
<li><strong>Bryt ut</strong> \(x\): \(x^3 - 4x = x(x^2 - 4) = x(x + 2)(x - 2)\).</li>
<li><strong>Nollproduktmetoden</strong>: en produkt är 0 om någon faktor är 0.</li>
<li><strong>Substitution</strong> för \(x^4 + bx^2 + c\): sätt \(t = x^2\) och lös andragradsekvationen i \(t\).</li>
</ul>`,
        note: R`Ett nollställe \(x = a\) betyder att \((x - a)\) är en faktor i polynomet (faktorsatsen).`,
      },
    ],
    examples: [
      {
        q: R`Bestäm nollställena till \(f(x) = x^3 - 4x\).`,
        hints: [R`Alla termer innehåller \(x\) – bryt ut det.`, R`\(x^2 - 4\) kan faktoriseras med konjugatregeln.`],
        steps: [R`\(x^3 - 4x = x(x^2 - 4) = x(x + 2)(x - 2)\)`, R`Nollproduktmetoden: \(x = 0\), \(x = -2\) eller \(x = 2\)`],
        answer: R`\(x = -2,\ 0,\ 2\)`,
      },
      {
        q: R`Ett tredjegradspolynom har nollställena \(-1\), \(2\) och \(3\) och skär y-axeln i \(y = 12\). Bestäm polynomet.`,
        hints: [R`Skriv \(f(x) = a(x + 1)(x - 2)(x - 3)\).`, R`Använd \(f(0) = 12\) för att bestämma \(a\).`],
        steps: [
          R`\(f(x) = a(x + 1)(x - 2)(x - 3)\)`,
          R`\(f(0) = a \cdot 1 \cdot (-2) \cdot (-3) = 6a = 12 \Rightarrow a = 2\)`,
          { graph: { xmin: -2, xmax: 4, ymin: -6, ymax: 16, h: 280, draw: () => ({ fns: [{ f: (x) => 2 * (x + 1) * (x - 2) * (x - 3) }], points: [{ x: -1, y: 0, cls: "c2" }, { x: 2, y: 0, cls: "c2" }, { x: 3, y: 0, cls: "c2" }, { x: 0, y: 12, cls: "c4", label: "(0, 12)" }] }) } },
        ],
        answer: R`\(f(x) = 2(x + 1)(x - 2)(x - 3)\)`,
      },
      {
        q: R`Lös ekvationen \(x^4 - 5x^2 + 4 = 0\).`,
        hints: [R`Bara jämna potenser – sätt \(t = x^2\).`, R`\(t^2 - 5t + 4 = 0\) ger \(t = 1\) och \(t = 4\).`],
        steps: [R`\(t = x^2\): \(\;t^2 - 5t + 4 = 0\)`, R`\(t = \dfrac{5}{2} \pm \sqrt{\dfrac{25}{4} - 4} = \dfrac{5}{2} \pm \dfrac{3}{2}\), alltså \(t = 1\) eller \(t = 4\)`, R`\(x^2 = 1 \Rightarrow x = \pm 1\), \(\quad x^2 = 4 \Rightarrow x = \pm 2\)`],
        answer: R`\(x = \pm 1\) och \(x = \pm 2\)`,
      },
      {
        q: { text: "Grafen visar ett tredjegradspolynom. Bestäm dess ekvation.", graph: { xmin: -4, xmax: 2.5, ymin: -2, ymax: 8, h: 280, alt: "Tredjegradspolynom", draw: () => ({ fns: [{ f: (x) => (x + 3) * (x - 1) ** 2 }], points: [{ x: 0, y: 3, cls: "c4", label: "(0, 3)" }] }) } },
        hints: ["Var skär grafen x-axeln, och var nuddar den bara?", R`Den nuddar i \(x = 1\) – det är en dubbelrot, faktorn \((x - 1)^2\).`, R`Bestäm \(a\) med punkten \((0,\ 3)\).`],
        steps: [R`Nollställen: \(x = -3\) (skär) och \(x = 1\) (tangerar, dubbelrot)`, R`\(f(x) = a(x + 3)(x - 1)^2\)`, R`\(f(0) = a \cdot 3 \cdot 1 = 3 \Rightarrow a = 1\)`],
        answer: R`\(f(x) = (x + 3)(x - 1)^2\)`,
      },
    ],
    exercises: [
      { q: R`Vilken grad har \(f(x) = (x - 2)(x + 1)^3\)?`, answer: "Grad 4", steps: [R`Ledande termen blir \(x \cdot x^3 = x^4\).`] },
      { q: R`Bestäm nollställena till \(f(x) = 2x^3 - 18x\).`, answer: R`\(x = -3,\ 0,\ 3\)`, steps: [R`\(2x(x^2 - 9) = 2x(x + 3)(x - 3)\)`] },
      { q: R`Lös ekvationen \(x^4 - 10x^2 + 9 = 0\).`, hint: R`Sätt \(t = x^2\).`, answer: R`\(x = \pm 1\) och \(x = \pm 3\)`, steps: [R`\(t^2 - 10t + 9 = 0 \Rightarrow t = 1\) eller \(t = 9\)`] },
      { q: R`Ett tredjegradspolynom har nollställena \(0\), \(1\) och \(4\), och \(f(2) = 8\). Bestäm polynomet.`, answer: R`\(f(x) = -2x(x - 1)(x - 4)\)`, steps: [R`\(f(x) = a\,x(x - 1)(x - 4)\)`, R`\(f(2) = a \cdot 2 \cdot 1 \cdot (-2) = -4a = 8 \Rightarrow a = -2\)`] },
      { q: "Hur många nollställen och extrempunkter kan ett femtegradspolynom högst ha?", answer: "Högst 5 nollställen och 4 extrempunkter" },
      { q: R`Vad händer med \(f(x) = -x^3 + 5x^2 + 2\) när \(x \to \infty\)?`, answer: R`\(f(x) \to -\infty\)`, steps: [R`Ledande termen \(-x^3\) dominerar och blir mycket negativ.`] },
      { q: R`I vilken punkt tangerar grafen till \(f(x) = (x - 3)^2(x + 1)\) x-axeln?`, answer: R`\((3,\ 0)\)`, steps: [R`\(x = 3\) är en dubbelrot.`] },
    ],
  });

  // ------------------------------------------------------------------
  L.push({
    id: "rationella-funktioner",
    chapter: CH,
    title: "Rationella funktioner och asymptoter",
    intro: "Linjer som grafen närmar sig men aldrig når – lodräta, vågräta och sneda asymptoter.",
    theory: [
      {
        title: "Rationell funktion",
        text: R`<p>En <strong>rationell funktion</strong> är en kvot av två polynom, \(f(x) = \dfrac{p(x)}{q(x)}\). Den är definierad för alla \(x\) utom där nämnaren \(q(x) = 0\).</p>
<p>En <strong>asymptot</strong> är en linje som grafen kommer godtyckligt nära.</p>`,
      },
      {
        title: "Lodrät asymptot",
        text: R`<p>Om nämnaren är 0 men <em>inte</em> täljaren för \(x = a\) växer \(|f(x)|\) obegränsat när \(x \to a\). Linjen \(x = a\) är en <strong>lodrät asymptot</strong>. Dra punkten mot \(x = 1\) från båda håll:</p>`,
        graph: {
          xmin: -4, xmax: 6, ymin: -10, ymax: 14, alt: "Grafen till 2x/(x−1)",
          sliders: [{ key: "x", label: R`\(x\)`, min: -3, max: 5, step: 0.05, value: 2 }],
          draw: ({ x }) => {
            const f = (t) => (2 * t) / (t - 1);
            const d = { fns: [{ f }], lines: [{ x1: 1, y1: -10, x2: 1, y2: 14, cls: "c4", dash: true, thin: true }], labels: [{ x: 1.15, y: 12.5, text: "x = 1", cls: "c4" }] };
            if (Math.abs(x - 1) > 1e-9) d.points = [{ x, y: f(x), cls: "c2" }];
            return d;
          },
          caption: ({ x }) => Math.abs(x - 1) < 1e-9
            ? R`\(x = 1\): nämnaren blir 0 – funktionen är inte definierad.`
            : R`\(f(${fmt(x)}) = \dfrac{2 \cdot ${fmt(x)}}{${fmt(x)} - 1} \approx ${fmt((2 * x) / (x - 1), 2)}\)`,
        },
        note: R`Är <em>både</em> täljare och nämnare 0 kan faktorn förkortas bort – då blir det ett <strong>hål</strong> i grafen, ingen asymptot. Exempel: \(\frac{x^2 - 1}{x - 1}\) i \(x = 1\).`,
      },
      {
        title: "Vågrät asymptot",
        text: R`<p>Vad händer när \(x \to \pm\infty\)? Dela täljare och nämnare med den högsta potensen av \(x\) i nämnaren:</p>
<p>\(\dfrac{2x}{x - 1} = \dfrac{2}{1 - \frac{1}{x}} \to \dfrac{2}{1} = 2\), så \(y = 2\) är en <strong>vågrät asymptot</strong>.</p>`,
        rule: R`<table><tr><th>Grad i täljaren jämfört med nämnaren</th><th>Vågrät asymptot</th></tr>
<tr><td>lägre</td><td>\(y = 0\)</td></tr>
<tr><td>samma</td><td>\(y = \) kvoten av de ledande koefficienterna</td></tr>
<tr><td>högre</td><td>ingen (men ibland en sned)</td></tr></table>`,
      },
      {
        title: "Båda asymptoterna i samma graf",
        text: R`<p>För \(f(x) = \dfrac{ax + 1}{x - b}\) är den lodräta asymptoten \(x = b\) och den vågräta \(y = a\). Prova:</p>`,
        graph: {
          xmin: -6, xmax: 6, ymin: -8, ymax: 8, alt: "Rationell funktion med asymptoter",
          sliders: [
            { key: "a", label: R`\(a\)`, min: -3, max: 3, step: 0.5, value: 2 },
            { key: "b", label: R`\(b\)`, min: -3, max: 3, step: 0.5, value: 1 },
          ],
          draw: ({ a, b }) => {
            const f = (x) => (a * x + 1) / (x - b);
            if (Math.abs(a * b + 1) < 1e-9) return { fns: [{ f: () => a }], points: [{ x: b, y: a, open: true, cls: "c4", label: "hål" }] };
            return {
              fns: [{ f }],
              lines: [
                { x1: b, y1: -8, x2: b, y2: 8, cls: "c4", dash: true, thin: true },
                { x1: -6, y1: a, x2: 6, y2: a, cls: "c3", dash: true, thin: true },
              ],
              labels: [{ x: b + 0.15, y: 7.1, text: `x = ${fmt(b, 1).replace("{,}", ",").replace("-", "−")}`, cls: "c4" }, { x: 5.8, y: a + 0.4, text: `y = ${fmt(a, 1).replace("{,}", ",").replace("-", "−")}`, cls: "c3", anchor: "end" }],
            };
          },
          caption: ({ a, b }) => Math.abs(a * b + 1) < 1e-9
            ? R`Här är \(ab + 1 = 0\): täljaren blir \(a(x - b)\) och kan förkortas. Grafen blir den räta linjen \(y = ${fmt(a, 1)}\) med ett hål – inga asymptoter.`
            : R`\(f(x) = \dfrac{${a === 0 ? "" : a === 1 ? "x" : a === -1 ? "-x" : fmt(a, 1) + "x"}${a === 0 ? "1" : " + 1"}}{${b === 0 ? "x" : b > 0 ? `x - ${fmt(b, 1)}` : `x + ${fmt(-b, 1)}`}}\): \(\;\) lodrät asymptot \(x = ${fmt(b, 1)}\), vågrät \(y = ${fmt(a, 1)}\)`,
        },
      },
      {
        title: "Sned asymptot",
        text: R`<p>Om täljaren har grad ett högre än nämnaren kan grafen närma sig en sned linje. Dela upp bråket:</p>
<p>\(f(x) = \dfrac{x^2 + 4}{x} = x + \dfrac{4}{x}\). När \(x \to \pm\infty\) går \(\frac{4}{x} \to 0\), så grafen närmar sig linjen \(y = x\).</p>`,
        graph: {
          xmin: -8, xmax: 8, ymin: -10, ymax: 10, h: 320, alt: "x + 4/x med sned asymptot",
          draw: () => ({
            fns: [{ f: (x) => x + 4 / x }],
            lines: [{ x1: -8, y1: -8, x2: 8, y2: 8, cls: "c3", dash: true, thin: true }, { x1: 0, y1: -10, x2: 0, y2: 10, cls: "c4", dash: true, thin: true }],
            labels: [{ x: 6.2, y: 4.6, text: "y = x", cls: "c3" }],
          }),
          caption: () => R`\(f(x) = x + \dfrac{4}{x}\): lodrät asymptot \(x = 0\), sned asymptot \(y = x\)`,
        },
        note: "Sneda asymptoter tas upp i en del läroböcker för 3c och i andra först i 4. Det är bra att känna igen dem.",
      },
    ],
    examples: [
      {
        q: R`Bestäm asymptoterna till \(f(x) = \dfrac{3x - 1}{x + 2}\).`,
        hints: ["Var blir nämnaren noll? Är täljaren noll där?", R`Dela med \(x\) och låt \(x \to \infty\).`],
        steps: [R`Nämnaren är 0 för \(x = -2\), täljaren är då \(-7 \neq 0\) ⇒ lodrät asymptot \(x = -2\)`, R`\(\dfrac{3 - \frac{1}{x}}{1 + \frac{2}{x}} \to 3\) ⇒ vågrät asymptot \(y = 3\)`],
        answer: R`\(x = -2\) och \(y = 3\)`,
      },
      {
        q: R`Har \(f(x) = \dfrac{x^2 - 4}{x - 2}\) någon lodrät asymptot?`,
        hints: [R`Vad blir täljaren när \(x = 2\)?`, "Faktorisera täljaren och förkorta."],
        steps: [R`\(\dfrac{(x + 2)(x - 2)}{x - 2} = x + 2\) för \(x \neq 2\)`, R`Grafen är linjen \(y = x + 2\) med ett hål i \((2,\ 4)\).`],
        answer: R`Nej – det blir ett hål i \((2,\ 4)\), ingen asymptot`,
      },
      {
        q: R`Bestäm asymptoterna till \(f(x) = \dfrac{5}{x^2 - 9}\).`,
        hints: [R`\(x^2 - 9 = 0\) har två lösningar.`, "Täljaren har lägre grad än nämnaren."],
        steps: [R`\(x^2 - 9 = 0 \Rightarrow x = \pm 3\), täljaren \(5 \neq 0\) ⇒ lodräta asymptoter \(x = -3\) och \(x = 3\)`, R`\(\dfrac{5}{x^2 - 9} \to 0\) när \(x \to \pm\infty\) ⇒ vågrät asymptot \(y = 0\)`, { graph: { xmin: -7, xmax: 7, ymin: -3, ymax: 3, h: 280, draw: () => ({ fns: [{ f: (x) => 5 / (x * x - 9) }], lines: [{ x1: -3, y1: -3, x2: -3, y2: 3, cls: "c4", dash: true, thin: true }, { x1: 3, y1: -3, x2: 3, y2: 3, cls: "c4", dash: true, thin: true }] }) } }],
        answer: R`\(x = -3\), \(x = 3\) och \(y = 0\)`,
      },
      {
        q: R`Bestäm asymptoterna till \(f(x) = \dfrac{x^2 + 1}{x}\).`,
        hints: ["Dela upp bråket i två termer.", R`\(\frac{x^2}{x} + \frac{1}{x}\).`],
        steps: [R`\(f(x) = x + \dfrac{1}{x}\)`, R`Nämnaren 0 för \(x = 0\) ⇒ lodrät asymptot \(x = 0\)`, R`\(\frac{1}{x} \to 0\) ⇒ grafen närmar sig \(y = x\) (sned asymptot)`],
        answer: R`\(x = 0\) och \(y = x\)`,
      },
    ],
    exercises: [
      { q: R`Bestäm asymptoterna till \(f(x) = \dfrac{2x + 5}{x - 3}\).`, answer: R`\(x = 3\) och \(y = 2\)` },
      { q: R`Bestäm asymptoterna till \(f(x) = \dfrac{4}{x + 1}\).`, answer: R`\(x = -1\) och \(y = 0\)` },
      { q: R`Bestäm asymptoterna till \(f(x) = \dfrac{x^2}{x^2 - 4}\).`, answer: R`\(x = -2\), \(x = 2\) och \(y = 1\)`, steps: [R`Samma grad, ledande koefficienter \(\frac{1}{1} = 1\).`] },
      { q: R`Undersök \(f(x) = \dfrac{x^2 - 9}{x + 3}\) i \(x = -3\).`, answer: R`Hål i \((-3,\ -6)\), ingen asymptot`, steps: [R`\(\frac{(x + 3)(x - 3)}{x + 3} = x - 3\), och \(-3 - 3 = -6\)`] },
      { q: R`Ange definitionsmängden till \(f(x) = \dfrac{x + 2}{x^2 - 5x + 6}\).`, answer: R`Alla \(x\) utom \(x = 2\) och \(x = 3\)`, steps: [R`\(x^2 - 5x + 6 = (x - 2)(x - 3)\)`] },
      { q: R`Bestäm konstanten \(a\) så att \(f(x) = \dfrac{ax + 1}{x - 2}\) har den vågräta asymptoten \(y = 4\).`, answer: R`\(a = 4\)`, steps: [R`\(\frac{a + \frac{1}{x}}{1 - \frac{2}{x}} \to a\)`] },
      { q: R`Bestäm asymptoterna till \(f(x) = \dfrac{x^2 + x + 1}{x}\).`, hint: "Dela upp i tre termer.", answer: R`\(x = 0\) och den sneda asymptoten \(y = x + 1\)`, steps: [R`\(f(x) = x + 1 + \frac{1}{x}\)`] },
    ],
  });

  // ------------------------------------------------------------------
  const pw = (k) => [{ f: (x) => x * x, to: 1 }, { f: (x) => x + k, from: 1 }];

  L.push({
    id: "kontinuitet",
    chapter: CH,
    title: "Kontinuerliga och diskreta funktioner",
    intro: "Kan grafen ritas utan att lyfta pennan? Och när består en funktion bara av lösa punkter?",
    theory: [
      {
        title: "Kontinuerlig funktion",
        text: R`<p>En funktion är <strong>kontinuerlig</strong> om grafen hänger ihop – den kan ritas utan att man lyfter pennan (inom definitionsmängden). Mer exakt är \(f\) kontinuerlig i \(x = a\) om</p>`,
        rule: R`\(\displaystyle\lim_{x \to a} f(x) = f(a)\)`,
        note: "Polynom och exponentialfunktioner är kontinuerliga för alla x. Rationella funktioner är kontinuerliga överallt där de är definierade.",
      },
      {
        title: "Hopp i en styckvis definierad funktion",
        text: R`<p>En funktion kan definieras med olika uttryck på olika intervall:</p>
<p>\(f(x) = \begin{cases} x^2 & x \le 1 \\ x + k & x > 1 \end{cases}\)</p>
<p>Från vänster går \(f(x) \to 1\) och från höger \(f(x) \to 1 + k\). Dra i \(k\) och se när hoppet försvinner:</p>`,
        graph: {
          xmin: -2, xmax: 3, ymin: -1, ymax: 5, alt: "Styckvis definierad funktion",
          sliders: [{ key: "k", label: R`\(k\)`, min: -1, max: 2, step: 0.5, value: 1 }],
          draw: ({ k }) => ({
            fns: pw(k),
            points: Math.abs(k) < 1e-9 ? [{ x: 1, y: 1, cls: "c1" }] : [{ x: 1, y: 1, cls: "c1" }, { x: 1, y: 1 + k, cls: "c1", open: true }],
          }),
          caption: ({ k }) => Math.abs(k) < 1e-9
            ? R`\(k = 0\): båda delarna möts i \((1,\ 1)\) – \(f\) är <strong>kontinuerlig</strong>.`
            : R`\(k = ${fmt(k, 1)}\): vänster gränsvärde \(1\), höger \(${fmt(1 + k, 1)}\) – ett <strong>hopp</strong> i \(x = 1\).`,
        },
        note: "Fylld punkt = värdet ingår, ofylld punkt = värdet ingår inte.",
      },
      {
        title: "Diskret funktion",
        text: R`<p>En <strong>diskret</strong> funktion är bara definierad för vissa enskilda värden, ofta heltal. Kostnaden för \(n\) biobiljetter à 25 kr är \(K(n) = 25n\) för \(n = 0, 1, 2, \dots\) – man kan inte köpa 2,7 biljetter. Grafen blir lösa punkter:</p>`,
        graph: {
          xmin: -0.5, xmax: 8.5, ymin: -10, ymax: 220, h: 280, xstep: 1, ystep: 50, xlabel: "n", ylabel: "K", alt: "Diskret funktion",
          draw: () => ({ points: Array.from({ length: 9 }, (_, n) => ({ x: n, y: 25 * n, cls: "c1" })) }),
        },
        note: "För en diskret funktion finns ingen derivata – där använder man ändringskvoter istället.",
      },
      {
        title: "Trappstegsfunktion",
        text: R`<p>Parkering kostar 20 kr per <em>påbörjad</em> timme. Tiden \(t\) är kontinuerlig, men kostnaden hoppar vid varje hel timme – funktionen är <strong>inte kontinuerlig</strong> där.</p>`,
        graph: {
          xmin: -0.3, xmax: 4.5, ymin: -5, ymax: 95, h: 260, xstep: 1, ystep: 20, xlabel: "t (h)", ylabel: "kr", alt: "Trappstegsfunktion",
          draw: () => {
            const lines = [], points = [];
            for (let i = 0; i < 4; i++) {
              const y = 20 * (i + 1);
              lines.push({ x1: i, y1: y, x2: i + 1, y2: y, cls: "c1" });
              points.push({ x: i, y, cls: "c1", open: true }, { x: i + 1, y, cls: "c1" });
            }
            return { lines, points };
          },
          caption: () => R`\(K(0{,}5) = 20\), \(\;K(1) = 20\), \(\;K(1{,}2) = 40\)`,
        },
      },
    ],
    examples: [
      {
        q: R`Är \(f(x) = \dfrac{x^2 - 4}{x - 2}\) kontinuerlig i \(x = 2\)? Hur kan man definiera \(f(2)\) så att den blir det?`,
        hints: [R`Är \(f(2)\) ens definierat?`, R`Beräkna \(\displaystyle\lim_{x \to 2} f(x)\).`],
        steps: [R`\(f(2)\) ger \(\frac{0}{0}\) – inte definierat, alltså inte kontinuerlig i \(x = 2\).`, R`\(\displaystyle\lim_{x \to 2} \frac{(x + 2)(x - 2)}{x - 2} = \lim_{x \to 2} (x + 2) = 4\)`, R`Sätter man \(f(2) = 4\) fylls hålet och funktionen blir kontinuerlig.`],
        answer: R`Nej. Med \(f(2) = 4\) blir den kontinuerlig.`,
      },
      {
        q: R`Bestäm \(k\) så att \(f(x) = \begin{cases} x^2 + 1 & x \le 2 \\ kx - 1 & x > 2 \end{cases}\) blir kontinuerlig.`,
        hints: [R`Båda uttrycken måste ge samma värde i \(x = 2\).`],
        steps: [R`Vänster: \(2^2 + 1 = 5\). Höger: \(2k - 1\).`, R`\(2k - 1 = 5 \Rightarrow k = 3\)`, { graph: { xmin: -1, xmax: 4, ymin: -1, ymax: 12, h: 260, draw: () => ({ fns: [{ f: (x) => x * x + 1, to: 2 }, { f: (x) => 3 * x - 1, from: 2, cls: "c3" }], points: [{ x: 2, y: 5, label: "(2, 5)" }] }) } }],
        answer: R`\(k = 3\)`,
      },
      {
        q: "Är funktionerna kontinuerliga eller diskreta? (a) Temperaturen som funktion av tiden. (b) Antalet elever i en skola som funktion av årtalet. (c) Kostnaden för n st bussbiljetter.",
        hints: ["Kan variabeln anta alla värden i ett intervall, eller bara enskilda värden?"],
        steps: ["(a) Tiden är kontinuerlig och temperaturen ändras utan hopp – kontinuerlig.", "(b) Årtalet räknas i hela år – diskret.", "(c) n är ett heltal – diskret."],
        answer: "(a) kontinuerlig, (b) diskret, (c) diskret",
      },
    ],
    exercises: [
      { q: R`Bestäm \(k\) så att \(f(x) = \begin{cases} 2x + k & x < 1 \\ x^2 + 4 & x \ge 1 \end{cases}\) blir kontinuerlig.`, answer: R`\(k = 3\)`, steps: [R`\(2 \cdot 1 + k = 1 + 4 \Rightarrow k = 3\)`] },
      { q: R`I vilka punkter är \(f(x) = \dfrac{1}{x^2 - 1}\) inte kontinuerlig?`, answer: R`\(x = -1\) och \(x = 1\)`, steps: ["Där är funktionen inte definierad."] },
      { q: R`Hur ska \(f(3)\) definieras för att \(f(x) = \dfrac{x^2 - 9}{x - 3}\) ska bli kontinuerlig?`, answer: R`\(f(3) = 6\)`, steps: [R`\(\frac{(x + 3)(x - 3)}{x - 3} = x + 3 \to 6\)`] },
      { q: "Ett paket kostar 30 kr upp till 1 kg och sedan 15 kr extra för varje påbörjat kilo. Vad kostar ett paket på 2,3 kg? Är kostnaden en kontinuerlig funktion av vikten?", answer: "60 kr. Nej – den hoppar vid varje helt kilo.", steps: ["Upp till 1 kg: 30 kr, (1, 2]: 45 kr, (2, 3]: 60 kr."] },
      { q: "Är antalet sålda glassar per dag en kontinuerlig eller diskret funktion av dagen?", answer: "Diskret", steps: ["Både dagar och antal glassar är heltal."] },
      { q: R`Är \(f(x) = e^x + x^3\) kontinuerlig för alla \(x\)?`, answer: "Ja", steps: ["En summa av kontinuerliga funktioner är kontinuerlig."] },
    ],
  });
})();
