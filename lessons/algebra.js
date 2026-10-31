// Matte 3c – Algebra, gränsvärden, e och ln
(() => {
  const R = String.raw;
  const { fmt } = window.LH;
  const L = window.LESSONS;

  // ------------------------------------------------------------------
  L.push({
    id: "rationella-uttryck",
    chapter: "Algebra och gränsvärden",
    title: "Polynom och rationella uttryck",
    intro: "Faktorisera, förkorta och räkna med bråk där det står x i nämnaren.",
    theory: [
      {
        title: "Polynom och rationella uttryck",
        text: R`<p>Ett <strong>polynom</strong> är en summa av termer av typen \(a x^n\) där \(n = 0, 1, 2, \dots\). Den högsta exponenten är polynomets <strong>grad</strong>. Exempel: \(3x^4 - x + 7\) har grad 4.</p>
<p>Ett <strong>rationellt uttryck</strong> är ett polynom delat med ett annat, t.ex. \(\dfrac{x + 1}{x - 2}\).</p>`,
        note: R`Man får aldrig dela med 0. Uttrycket \(\frac{x+1}{x-2}\) är inte definierat för \(x = 2\).`,
      },
      {
        title: "Där nämnaren blir noll",
        text: R`<p>Grafen till \(y = \dfrac{1}{x - 2}\) saknar värde i \(x = 2\). Ju närmare 2 man kommer, desto större blir funktionsvärdena – kurvan närmar sig den streckade linjen \(x = 2\) (en <em>asymptot</em>).</p>`,
        graph: { xmin: -2, xmax: 6, ymin: -5, ymax: 5, h: 300, alt: "Grafen till 1/(x−2)", draw: () => ({ fns: [{ f: (x) => 1 / (x - 2) }], lines: [{ x1: 2, y1: -5, x2: 2, y2: 5, cls: "c4", dash: true, thin: true }], labels: [{ x: 2.15, y: 4.3, text: "x = 2", cls: "c4" }] }) },
      },
      {
        title: "Förenkla genom att förkorta",
        text: R`<p>Man förenklar genom att <strong>faktorisera</strong> täljare och nämnare och sedan <strong>förkorta</strong> gemensamma faktorer. Verktyg:</p>
<ul><li>Bryta ut: \(x^2 + 3x = x(x + 3)\)</li><li>Konjugatregeln: \(x^2 - 9 = (x + 3)(x - 3)\)</li><li>Kvadreringsreglerna: \(x^2 - 6x + 9 = (x - 3)^2\)</li><li>Nollställen: om \(x^2 + bx + c = 0\) har lösningarna \(x_1, x_2\) är \(x^2 + bx + c = (x - x_1)(x - x_2)\)</li></ul>`,
        rule: R`\(\dfrac{x^2 - 9}{x^2 + 3x} = \dfrac{(x + 3)(x - 3)}{x(x + 3)} = \dfrac{x - 3}{x}\)`,
        note: R`Man får bara förkorta <em>faktorer</em>, aldrig termer! \(\frac{x + 3}{x}\) är <strong>inte</strong> lika med \(3\).`,
      },
      {
        title: "Addera och subtrahera",
        text: R`<p>Precis som med vanliga bråk behövs en <strong>gemensam nämnare</strong>. Förläng varje bråk:</p>`,
        rule: R`\(\dfrac{2}{x} + \dfrac{3}{x + 1} = \dfrac{2(x + 1)}{x(x + 1)} + \dfrac{3x}{x(x + 1)} = \dfrac{5x + 2}{x(x + 1)}\)`,
      },
      {
        title: "Multiplicera och dividera",
        text: R`<p>Multiplicera täljare med täljare och nämnare med nämnare. Division = multiplicera med det inverterade bråket.</p>
<p>\(\dfrac{x}{x + 2} \cdot \dfrac{x^2 - 4}{x^2} = \dfrac{x(x + 2)(x - 2)}{(x + 2)x^2} = \dfrac{x - 2}{x}\)</p>`,
      },
    ],
    examples: [
      {
        q: R`Förenkla \(\dfrac{x^2 - 9}{x^2 + 3x}\) och ange för vilka \(x\) uttrycket är definierat.`,
        hints: [R`Täljaren: konjugatregeln. Nämnaren: bryt ut \(x\).`, "Nämnaren får inte bli noll – undersök det i det ursprungliga uttrycket."],
        steps: [R`\(\dfrac{(x + 3)(x - 3)}{x(x + 3)} = \dfrac{x - 3}{x}\)`, R`Nämnaren \(x(x + 3) = 0\) för \(x = 0\) och \(x = -3\).`],
        answer: R`\(\dfrac{x - 3}{x}\), där \(x \neq 0\) och \(x \neq -3\)`,
      },
      {
        q: R`Skriv \(\dfrac{2}{x} + \dfrac{3}{x + 1}\) som ett bråk.`,
        hints: [R`Gemensam nämnare: \(x(x + 1)\).`, R`Förläng första bråket med \((x + 1)\) och andra med \(x\).`],
        steps: [R`\(\dfrac{2(x + 1) + 3x}{x(x + 1)}\)`, R`\(= \dfrac{2x + 2 + 3x}{x(x + 1)} = \dfrac{5x + 2}{x(x + 1)}\)`],
        answer: R`\(\dfrac{5x + 2}{x(x + 1)}\)`,
      },
      {
        q: R`Förenkla \(\dfrac{x^2 - 5x + 6}{x - 2}\).`,
        hints: [R`Faktorisera täljaren med hjälp av dess nollställen (pq-formeln).`, R`\(x^2 - 5x + 6 = 0\) har lösningarna \(x = 2\) och \(x = 3\).`],
        steps: [R`\(x^2 - 5x + 6 = (x - 2)(x - 3)\)`, R`\(\dfrac{(x - 2)(x - 3)}{x - 2} = x - 3\)`],
        answer: R`\(x - 3\) (för \(x \neq 2\))`,
      },
    ],
    exercises: [
      { q: R`Förenkla \(\dfrac{4x + 8}{x + 2}\).`, answer: R`\(4\)`, steps: [R`\(\frac{4(x + 2)}{x + 2} = 4\)`] },
      { q: R`Förenkla \(\dfrac{x^2 - 4x + 4}{x^2 - 4}\).`, answer: R`\(\dfrac{x - 2}{x + 2}\)`, steps: [R`\(\frac{(x - 2)^2}{(x + 2)(x - 2)}\)`] },
      { q: R`Skriv \(\dfrac{1}{x} - \dfrac{1}{x + 2}\) som ett bråk.`, answer: R`\(\dfrac{2}{x(x + 2)}\)`, steps: [R`\(\frac{(x + 2) - x}{x(x + 2)} = \frac{2}{x(x + 2)}\)`] },
      { q: R`För vilka \(x\) är \(\dfrac{x + 1}{x^2 - 9}\) inte definierat?`, answer: R`\(x = 3\) och \(x = -3\)` },
      { q: R`Förenkla \(\dfrac{x^2 + 5x}{x^2 - 25}\).`, answer: R`\(\dfrac{x}{x - 5}\)`, steps: [R`\(\frac{x(x + 5)}{(x + 5)(x - 5)}\)`] },
    ],
  });

  // ------------------------------------------------------------------
  L.push({
    id: "gransvarden",
    chapter: "Algebra och gränsvärden",
    title: "Gränsvärden",
    intro: "Vad närmar sig funktionen när x närmar sig ett tal – eller oändligheten?",
    theory: [
      {
        title: "Vad är ett gränsvärde?",
        text: R`<p>\(\displaystyle\lim_{x \to a} f(x) = L\) betyder att \(f(x)\) kommer godtyckligt nära \(L\) när \(x\) kommer nära \(a\). "lim" kommer från latinets <em>limes</em>, gräns.</p>
<p>Ofta kan man bara sätta in värdet: \(\displaystyle\lim_{x \to 3} (x^2 + 1) = 10\).</p>`,
      },
      {
        title: "När insättning ger 0/0",
        text: R`<p>\(f(x) = \dfrac{x^2 - 1}{x - 1}\) är inte definierad för \(x = 1\) (det blir \(\frac{0}{0}\)). Men vad händer <em>nära</em> 1? Dra \(x\) mot 1:</p>`,
        graph: {
          xmin: -2, xmax: 3, ymin: -1, ymax: 4, alt: "Grafen till (x²−1)/(x−1) med hål i x = 1",
          sliders: [{ key: "x", label: R`\(x\)`, min: 0, max: 2, step: 0.05, value: 0.5 }],
          draw: ({ x }) => {
            const pts = [{ x: 1, y: 2, open: true, label: "hål", cls: "c4" }];
            if (Math.abs(x - 1) > 1e-9) pts.push({ x, y: x + 1, cls: "c2" });
            return { fns: [{ f: (t) => t + 1 }], points: pts };
          },
          caption: ({ x }) => Math.abs(x - 1) < 1e-9
            ? R`\(x = 1\): \(\frac{0}{0}\) – funktionen är inte definierad här, men gränsvärdet är \(2\).`
            : R`\(f(${fmt(x)}) = \dfrac{${fmt(x)}^2 - 1}{${fmt(x)} - 1} = ${fmt(x + 1)}\) \(\quad\) → närmar sig \(2\)`,
        },
      },
      {
        title: "Faktorisera och förkorta",
        text: R`<p>Lösningen är att förenkla uttrycket innan man sätter in:</p>`,
        rule: R`\(\displaystyle\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1} \frac{(x + 1)(x - 1)}{x - 1} = \lim_{x \to 1} (x + 1) = 2\)`,
      },
      {
        title: "När x går mot oändligheten",
        text: R`<p>När \(x \to \infty\) går \(\frac{1}{x} \to 0\). Knep: dela täljare och nämnare med den högsta potensen av \(x\).</p>
<p>\(\displaystyle\lim_{x \to \infty} \frac{2x + 1}{x + 3} = \lim_{x \to \infty} \frac{2 + \frac{1}{x}}{1 + \frac{3}{x}} = \frac{2 + 0}{1 + 0} = 2\)</p>`,
        graph: {
          xmin: 0, xmax: 60, ymin: 0, ymax: 3, xstep: 10, ystep: 0.5, alt: "Kurvan närmar sig y = 2",
          sliders: [{ key: "x", label: R`\(x\)`, min: 1, max: 58, step: 1, value: 5 }],
          draw: ({ x }) => ({ fns: [{ f: (t) => (2 * t + 1) / (t + 3) }], lines: [{ x1: 0, y1: 2, x2: 60, y2: 2, cls: "c4", dash: true, thin: true }], points: [{ x, y: (2 * x + 1) / (x + 3), cls: "c2" }], labels: [{ x: 58, y: 2.15, text: "y = 2", anchor: "end", cls: "c4" }] }),
          caption: ({ x }) => R`\(\dfrac{2 \cdot ${x} + 1}{${x} + 3} \approx ${fmt((2 * x + 1) / (x + 3), 4)}\)`,
        },
      },
      {
        title: "Kopplingen till derivata",
        text: R`<p>Derivatans definition är ett gränsvärde av samma typ – insättning av \(h = 0\) ger alltid \(\frac{0}{0}\), så man förenklar först:</p>`,
        rule: R`\(f'(a) = \displaystyle\lim_{h \to 0} \frac{f(a + h) - f(a)}{h}\)`,
      },
    ],
    examples: [
      {
        q: R`Beräkna \(\displaystyle\lim_{x \to 2} \frac{x^2 - 4}{x - 2}\).`,
        hints: [R`Insättning ger \(\frac{0}{0}\). Faktorisera täljaren.`, "Konjugatregeln."],
        steps: [R`\(\dfrac{(x + 2)(x - 2)}{x - 2} = x + 2\)`, R`\(\displaystyle\lim_{x \to 2} (x + 2) = 4\)`],
        answer: R`\(4\)`,
      },
      {
        q: R`Beräkna \(\displaystyle\lim_{x \to \infty} \frac{3x^2 + x}{x^2 - 5}\).`,
        hints: [R`Dela täljare och nämnare med \(x^2\).`],
        steps: [R`\(\dfrac{3 + \frac{1}{x}}{1 - \frac{5}{x^2}}\)`, R`När \(x \to \infty\): \(\dfrac{3 + 0}{1 - 0} = 3\)`],
        answer: R`\(3\)`,
      },
      {
        q: R`Beräkna \(\displaystyle\lim_{h \to 0} \frac{(2 + h)^2 - 4}{h}\). Vad är det för derivata?`,
        hints: [R`Utveckla \((2 + h)^2\).`],
        steps: [R`\(\dfrac{4 + 4h + h^2 - 4}{h} = \dfrac{4h + h^2}{h} = 4 + h\)`, R`\(\to 4\) när \(h \to 0\)`, R`Det är \(f'(2)\) för \(f(x) = x^2\).`],
        answer: R`\(4\)`,
      },
    ],
    exercises: [
      { q: R`Beräkna \(\displaystyle\lim_{x \to 3} (x^2 + 1)\).`, answer: R`\(10\)` },
      { q: R`Beräkna \(\displaystyle\lim_{x \to -1} \frac{x^2 - 1}{x + 1}\).`, answer: R`\(-2\)`, steps: [R`\(\frac{(x + 1)(x - 1)}{x + 1} = x - 1 \to -2\)`] },
      { q: R`Beräkna \(\displaystyle\lim_{x \to \infty} \frac{5x - 2}{x + 4}\).`, answer: R`\(5\)`, steps: [R`\(\frac{5 - \frac{2}{x}}{1 + \frac{4}{x}} \to 5\)`] },
      { q: R`Beräkna \(\displaystyle\lim_{x \to 0} \frac{x^2 + 3x}{x}\).`, answer: R`\(3\)`, steps: [R`\(\frac{x(x + 3)}{x} = x + 3 \to 3\)`] },
      { q: R`Beräkna \(\displaystyle\lim_{x \to \infty} \left(4 + \frac{2}{x}\right)\).`, answer: R`\(4\)` },
      { q: R`Beräkna \(\displaystyle\lim_{h \to 0} \frac{(3 + h)^2 - 9}{h}\).`, answer: R`\(6\)`, steps: [R`\(\frac{6h + h^2}{h} = 6 + h \to 6\)`] },
    ],
  });

  // ------------------------------------------------------------------
  L.push({
    id: "e-och-ln",
    chapter: "Exponentialfunktioner och logaritmer",
    title: "Talet e och naturliga logaritmen",
    intro: "Basen e, logaritmen ln och hur man löser exponentialekvationer.",
    theory: [
      {
        title: "Exponentialfunktioner",
        text: R`<p>En exponentialfunktion har formen \(y = C \cdot a^x\), där \(C\) är startvärdet och \(a\) är förändringsfaktorn. Den viktigaste basen är \(e \approx 2{,}718\) – den ger de enklaste derivatorna (se lektionen om derivatan av exponentialfunktioner).</p>`,
      },
      {
        title: "Naturliga logaritmen",
        text: R`<p>\(\ln x\) är det tal man ska upphöja \(e\) till för att få \(x\):</p>`,
        rule: R`\(\ln x = y \;\Leftrightarrow\; e^y = x \qquad (x > 0)\)`,
        graph: {
          xmin: -3, xmax: 6, ymin: -3, ymax: 6, h: 380, alt: "e^x och ln x speglade i y = x",
          sliders: [{ key: "a", label: R`\(a\)`, min: -2, max: 1.7, step: 0.1, value: 1 }],
          draw: ({ a }) => ({
            fns: [{ f: Math.exp }, { f: Math.log, cls: "c3", from: 0.001 }, { f: (x) => x, cls: "cm", dash: true }],
            points: [{ x: a, y: Math.exp(a), label: "(a, eᵃ)" }, { x: Math.exp(a), y: a, cls: "c3", label: "(eᵃ, a)", dy: 18 }],
            lines: [{ x1: a, y1: Math.exp(a), x2: Math.exp(a), y2: a, cls: "cm", dash: true, thin: true }],
            labels: [{ x: 1.75, y: 5.6, text: "y = eˣ" }, { x: 5.9, y: 1.2, text: "y = ln x", cls: "c3", anchor: "end" }, { x: 5.6, y: 5.2, text: "y = x", cls: "cm", anchor: "end" }],
          }),
          caption: ({ a }) => R`\(e^{${fmt(a, 1)}} \approx ${fmt(Math.exp(a), 3)}\) \(\;\Leftrightarrow\;\) \(\ln ${fmt(Math.exp(a), 3)} \approx ${fmt(a, 1)}\). Kurvorna är spegelbilder i linjen \(y = x\).`,
        },
      },
      {
        title: "Logaritmlagarna",
        rule: R`\(\ln(ab) = \ln a + \ln b \qquad \ln\dfrac{a}{b} = \ln a - \ln b \qquad \ln a^p = p \ln a\)<br><br>
\(\ln e = 1 \qquad \ln 1 = 0 \qquad \ln e^x = x \qquad e^{\ln x} = x\)`,
        note: "Samma lagar gäller för lg (tiologaritmen) som du mött i Matte 2c.",
      },
      {
        title: "Lösa exponentialekvationer",
        text: R`<ol><li>Isolera potensen.</li><li>Ta \(\ln\) av båda leden.</li><li>Använd \(\ln e^{x} = x\) eller \(\ln a^x = x \ln a\).</li></ol>
<p>\(3e^{2x} = 24 \Rightarrow e^{2x} = 8 \Rightarrow 2x = \ln 8 \Rightarrow x = \dfrac{\ln 8}{2} \approx 1{,}04\)</p>`,
      },
      {
        title: "Byta bas till e",
        text: R`<p>Eftersom \(a = e^{\ln a}\) kan alla exponentialfunktioner skrivas med basen \(e\):</p>`,
        rule: R`\(a^x = e^{x \ln a}\)`,
        note: R`Exempel: \(1{,}05^t = e^{t \ln 1{,}05} \approx e^{0{,}0488t}\). En tillväxt på 5 % per år motsvarar \(k \approx 0{,}0488\) i \(e^{kt}\). Om \(k > 0\) är det tillväxt, om \(k < 0\) avtagande.`,
      },
    ],
    examples: [
      {
        q: R`Lös ekvationen \(3e^{2x} = 24\). Svara exakt och med två decimaler.`,
        hints: [R`Dela med 3 först.`, R`Ta \(\ln\) av båda leden: \(\ln e^{2x} = 2x\).`],
        steps: [R`\(e^{2x} = 8\)`, R`\(2x = \ln 8\)`, R`\(x = \dfrac{\ln 8}{2} \approx 1{,}04\)`],
        answer: R`\(x = \dfrac{\ln 8}{2} \approx 1{,}04\)`,
      },
      {
        q: R`Lös ekvationen \(5 \cdot 1{,}08^x = 20\).`,
        hints: [R`Dela med 5: \(1{,}08^x = 4\).`, R`\(\ln 1{,}08^x = x \ln 1{,}08\).`],
        steps: [R`\(1{,}08^x = 4\)`, R`\(x \ln 1{,}08 = \ln 4\)`, R`\(x = \dfrac{\ln 4}{\ln 1{,}08} \approx 18{,}01\)`],
        answer: R`\(x \approx 18{,}0\)`,
      },
      {
        q: R`Skriv \(f(t) = 200 \cdot 0{,}9^t\) på formen \(f(t) = 200e^{kt}\).`,
        hints: [R`\(0{,}9 = e^{\ln 0{,}9}\).`],
        steps: [R`\(0{,}9^t = e^{t \ln 0{,}9}\)`, R`\(k = \ln 0{,}9 \approx -0{,}105\)`],
        answer: R`\(f(t) \approx 200e^{-0{,}105t}\)`,
      },
    ],
    exercises: [
      { q: R`Lös \(e^x = 7\).`, answer: R`\(x = \ln 7 \approx 1{,}95\)` },
      { q: R`Lös \(\ln x = 3\).`, answer: R`\(x = e^3 \approx 20{,}09\)` },
      { q: R`Lös \(4e^{0{,}5x} = 12\).`, answer: R`\(x = 2\ln 3 \approx 2{,}20\)`, steps: [R`\(e^{0{,}5x} = 3 \Rightarrow 0{,}5x = \ln 3\)`] },
      { q: R`Förenkla \(\ln e^5 - \ln 1\).`, answer: R`\(5\)` },
      { q: R`Skriv \(\ln 8 - \ln 2\) som en logaritm.`, answer: R`\(\ln 4 \approx 1{,}39\)`, steps: [R`\(\ln\frac{8}{2} = \ln 4\)`] },
      { q: R`En mängd minskar enligt \(m(t) = 200e^{-0{,}05t}\). När har mängden halverats?`, answer: R`\(t = \frac{\ln 2}{0{,}05} \approx 13{,}9\)`, steps: [R`\(200e^{-0{,}05t} = 100 \Rightarrow e^{-0{,}05t} = 0{,}5\)`, R`\(-0{,}05t = \ln 0{,}5 \Rightarrow t = \frac{\ln 2}{0{,}05}\)`] },
    ],
  });
})();
