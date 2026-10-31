// Matte 3c – Trigonometri
(() => {
  const R = String.raw;
  const { fmt, fmtT } = window.LH;
  const L = window.LESSONS;
  const CH = "Trigonometri";
  const rad = (v) => (v * Math.PI) / 180;

  // Exakta värden för multiplar av 30° och 45°, annars null.
  const BASE = { 0: ["0", "1"], 30: [R`\frac{1}{2}`, R`\frac{\sqrt{3}}{2}`], 45: [R`\frac{\sqrt{2}}{2}`, R`\frac{\sqrt{2}}{2}`], 60: [R`\frac{\sqrt{3}}{2}`, R`\frac{1}{2}`], 90: ["1", "0"] };
  function exact(v) {
    v = ((v % 360) + 360) % 360;
    if (v % 30 && v % 45) return null;
    const q = Math.floor(v / 90);
    const ref = [v, 180 - v, v - 180, 360 - v][q];
    const [s, c] = BASE[ref] || BASE[90 - ref].slice().reverse();
    const sSign = Math.sin(rad(v)) < -1e-9 ? "-" : "";
    const cSign = Math.cos(rad(v)) < -1e-9 ? "-" : "";
    return [s === "0" ? "0" : sSign + s, c === "0" ? "0" : cSign + c];
  }

  // ------------------------------------------------------------------
  L.push({
    id: "enhetscirkeln",
    chapter: CH,
    title: "Enhetscirkeln och exakta värden",
    intro: "Sinus och cosinus för alla vinklar – och de exakta värden du ska kunna utantill.",
    theory: [
      {
        title: "Exakta värden från två trianglar",
        text: R`<p>En liksidig triangel delad på mitten ger vinklarna 30° och 60°, och en halv kvadrat ger 45°. Med Pythagoras sats får man:</p>
<table><tr><th>\(v\)</th><th>\(30^\circ\)</th><th>\(45^\circ\)</th><th>\(60^\circ\)</th></tr>
<tr><th>\(\sin v\)</th><td>\(\frac{1}{2}\)</td><td>\(\frac{\sqrt{2}}{2}\)</td><td>\(\frac{\sqrt{3}}{2}\)</td></tr>
<tr><th>\(\cos v\)</th><td>\(\frac{\sqrt{3}}{2}\)</td><td>\(\frac{\sqrt{2}}{2}\)</td><td>\(\frac{1}{2}\)</td></tr>
<tr><th>\(\tan v\)</th><td>\(\frac{1}{\sqrt{3}}\)</td><td>\(1\)</td><td>\(\sqrt{3}\)</td></tr></table>`,
        note: R`Minnesregel: sinus för 30°, 45°, 60° är \(\frac{\sqrt{1}}{2}, \frac{\sqrt{2}}{2}, \frac{\sqrt{3}}{2}\). Cosinus är samma tal baklänges.`,
      },
      {
        title: "Enhetscirkeln",
        text: R`<p>Rita en cirkel med radien 1 och medelpunkt i origo. En vinkel \(v\) mäts moturs från positiva x-axeln. Punkten på cirkeln har koordinaterna</p>`,
        rule: R`\((\cos v,\ \sin v) \qquad \tan v = \dfrac{\sin v}{\cos v}\)`,
        graph: {
          xmin: -1.6, xmax: 1.6, ymin: -1.25, ymax: 1.25, h: 450, xstep: 0.5, ystep: 0.5, alt: "Enhetscirkeln",
          sliders: [{ key: "v", label: R`\(v\) (grader)`, min: 0, max: 360, step: 15, value: 150 }],
          draw: ({ v }) => {
            const c = Math.cos(rad(v)), s = Math.sin(rad(v));
            return {
              curves: [
                { x: (t) => Math.cos(t), y: (t) => Math.sin(t), t0: 0, t1: 2 * Math.PI, cls: "cm" },
                { x: (t) => 0.22 * Math.cos(t), y: (t) => 0.22 * Math.sin(t), t0: 0, t1: rad(v), cls: "c2" },
              ],
              lines: [
                { x1: 0, y1: 0, x2: c, y2: s, cls: "c2" },
                { x1: 0, y1: 0, x2: c, y2: 0, cls: "c1" },
                { x1: c, y1: 0, x2: c, y2: s, cls: "c3" },
              ],
              points: [{ x: c, y: s, cls: "c2", label: `(${fmtT(c, 2)}, ${fmtT(s, 2)})`, anchor: c < 0 ? "end" : "start", dx: c < 0 ? -8 : 8 }],
              labels: [{ x: c / 2, y: 0.07, text: "cos v", cls: "c1", anchor: "middle" }, { x: c + (c < 0 ? -0.05 : 0.05), y: s / 2, text: "sin v", cls: "c3", anchor: c < 0 ? "end" : "start" }],
            };
          },
          caption: ({ v }) => {
            const e = exact(v);
            const c = Math.cos(rad(v)), s = Math.sin(rad(v));
            const q = v % 90 === 0 ? "på en axel" : `i kvadrant ${Math.floor(v / 90) + 1}`;
            const ex = e ? R`\(\sin ${v}^\circ = ${e[0]}\), \(\;\cos ${v}^\circ = ${e[1]}\)` : R`\(\sin ${v}^\circ \approx ${fmt(s, 3)}\), \(\;\cos ${v}^\circ \approx ${fmt(c, 3)}\)`;
            return `${ex}   (vinkeln ligger ${q})`;
          },
        },
      },
      {
        title: "Tecken i kvadranterna",
        text: R`<table><tr><th></th><th>Kvadrant 1<br>0°–90°</th><th>Kvadrant 2<br>90°–180°</th><th>Kvadrant 3<br>180°–270°</th><th>Kvadrant 4<br>270°–360°</th></tr>
<tr><th>\(\sin v\)</th><td>\(+\)</td><td>\(+\)</td><td>\(-\)</td><td>\(-\)</td></tr>
<tr><th>\(\cos v\)</th><td>\(+\)</td><td>\(-\)</td><td>\(-\)</td><td>\(+\)</td></tr>
<tr><th>\(\tan v\)</th><td>\(+\)</td><td>\(-\)</td><td>\(+\)</td><td>\(-\)</td></tr></table>`,
      },
      {
        title: "Symmetrier",
        rule: R`\(\sin(180^\circ - v) = \sin v \qquad \cos(180^\circ - v) = -\cos v\)<br><br>\(\sin(360^\circ - v) = -\sin v \qquad \cos(360^\circ - v) = \cos v\)`,
        text: R`<p><strong>Metod för exakta värden:</strong></p>
<ol><li>Bestäm i vilken kvadrant vinkeln ligger.</li><li>Bestäm <em>referensvinkeln</em> – den spetsiga vinkeln till x-axeln.</li><li>Ta värdet för referensvinkeln och sätt rätt tecken.</li></ol>
<p>Exempel: \(\cos 240^\circ\): kvadrant 3, referensvinkel \(60^\circ\), cosinus negativ ⇒ \(\cos 240^\circ = -\frac{1}{2}\).</p>`,
      },
      {
        title: "Två vinklar med samma sinus",
        text: R`<p>Eftersom \(\sin(180^\circ - v) = \sin v\) har ekvationen \(\sin v = \frac{1}{2}\) <strong>två</strong> lösningar mellan 0° och 180°: \(v = 30^\circ\) och \(v = 150^\circ\). Det är viktigt när man använder sinussatsen!</p>`,
      },
    ],
    examples: [
      {
        q: R`Bestäm det exakta värdet av \(\sin 150^\circ\).`,
        hints: ["Vilken kvadrant? Vilken är referensvinkeln?", R`\(\sin(180^\circ - v) = \sin v\).`],
        steps: [R`\(150^\circ\) ligger i kvadrant 2, referensvinkeln är \(30^\circ\).`, R`Sinus är positiv i kvadrant 2.`, R`\(\sin 150^\circ = \sin 30^\circ = \frac{1}{2}\)`],
        answer: R`\(\frac{1}{2}\)`,
      },
      {
        q: R`Bestäm det exakta värdet av \(\cos 240^\circ\).`,
        hints: [R`\(240^\circ = 180^\circ + 60^\circ\).`, "Vilket tecken har cosinus i kvadrant 3?"],
        steps: [R`Kvadrant 3, referensvinkel \(60^\circ\).`, R`Cosinus är negativ i kvadrant 3.`, R`\(\cos 240^\circ = -\cos 60^\circ = -\frac{1}{2}\)`],
        answer: R`\(-\frac{1}{2}\)`,
      },
      {
        q: R`Lös ekvationen \(\sin v = 0{,}5\) för \(0^\circ \le v \le 360^\circ\).`,
        hints: [R`Vilken spetsig vinkel har sinus \(\frac{1}{2}\)?`, R`Sinus är positiv i kvadrant 1 och 2.`],
        steps: [R`\(v_1 = 30^\circ\)`, R`\(v_2 = 180^\circ - 30^\circ = 150^\circ\)`],
        answer: R`\(v = 30^\circ\) eller \(v = 150^\circ\)`,
      },
    ],
    exercises: [
      { q: R`Bestäm det exakta värdet av \(\cos 120^\circ\).`, answer: R`\(-\frac{1}{2}\)` },
      { q: R`Bestäm det exakta värdet av \(\sin 225^\circ\).`, answer: R`\(-\frac{\sqrt{2}}{2}\)` },
      { q: R`Bestäm det exakta värdet av \(\tan 300^\circ\).`, answer: R`\(-\sqrt{3}\)`, steps: [R`\(\sin 300^\circ = -\frac{\sqrt{3}}{2}\), \(\cos 300^\circ = \frac{1}{2}\)`] },
      { q: R`Bestäm det exakta värdet av \(\cos 330^\circ\).`, answer: R`\(\frac{\sqrt{3}}{2}\)` },
      { q: R`Vinkeln \(v\) är trubbig och \(\sin v = 0{,}6\). Bestäm \(\cos v\).`, hint: R`Trigonometriska ettan: \(\sin^2 v + \cos^2 v = 1\).`, answer: R`\(\cos v = -0{,}8\)`, steps: [R`\(\cos^2 v = 1 - 0{,}36 = 0{,}64\)`, R`Trubbig vinkel ⇒ cosinus negativ: \(-0{,}8\)`] },
    ],
  });

  // ------------------------------------------------------------------
  const triangle = (a, b, C, opts = {}) => {
    const Ax = b * Math.cos(rad(C)), Ay = b * Math.sin(rad(C));
    const lines = [
      { x1: 0, y1: 0, x2: a, y2: 0, cls: "c1" },
      { x1: 0, y1: 0, x2: Ax, y2: Ay, cls: "c1" },
      { x1: a, y1: 0, x2: Ax, y2: Ay, cls: "c1" },
    ];
    if (opts.height) {
      lines.push({ x1: Ax, y1: Ay, x2: Ax, y2: 0, cls: "c2", dash: true });
      if (Ax < 0 || Ax > a) lines.push({ x1: Math.min(0, Ax), y1: 0, x2: Math.max(a, Ax), y2: 0, cls: "cm", dash: true, thin: true });
    }
    return {
      lines,
      curves: [{ x: (t) => 0.5 * Math.cos(t), y: (t) => 0.5 * Math.sin(t), t0: 0, t1: rad(C), cls: "c2" }],
      labels: [
        { x: -0.15, y: -0.35, text: "C", anchor: "end", cls: "cm" },
        { x: a + 0.15, y: -0.35, text: "B", cls: "cm" },
        { x: Ax, y: Ay + 0.2, text: "A", anchor: "middle", cls: "cm" },
        { x: a / 2, y: -0.4, text: "a", anchor: "middle" },
        { x: Ax / 2 - 0.25, y: Ay / 2 + 0.1, text: "b", anchor: "end" },
        { x: (a + Ax) / 2 + 0.2, y: Ay / 2 + 0.1, text: "c" },
      ].concat(opts.height ? [{ x: Ax + 0.12, y: Ay / 2, text: "h", cls: "c2" }] : []),
    };
  };

  L.push({
    id: "triangelsatser",
    chapter: CH,
    title: "Areasatsen, sinussatsen och cosinussatsen",
    intro: "Räkna ut sidor, vinklar och area i trianglar som inte är rätvinkliga.",
    theory: [
      {
        title: "Beteckningar",
        text: R`<p>Hörnen kallas \(A\), \(B\) och \(C\). Sidan <em>mittemot</em> hörnet \(A\) kallas \(a\), mittemot \(B\) kallas \(b\) och mittemot \(C\) kallas \(c\). Vinklarna betecknas med samma bokstäver som hörnen.</p>`,
      },
      {
        title: "Areasatsen",
        text: R`<p>Höjden mot sidan \(a\) är \(h = b \sin C\). Arean blir då \(\frac{a \cdot h}{2}\):</p>`,
        rule: R`\(T = \dfrac{ab \sin C}{2}\)`,
        graph: {
          xmin: -4.5, xmax: 5.5, ymin: -0.8, ymax: 4.4, h: 318, axes: false, alt: "Triangel med höjd",
          sliders: [{ key: "C", label: R`\(C\) (grader)`, min: 20, max: 160, step: 5, value: 60 }],
          draw: ({ C }) => {
            const d = triangle(5, 4, C, { height: true });
            const Ax = 4 * Math.cos(rad(C)), Ay = 4 * Math.sin(rad(C));
            d.areas = [{ f: (x) => (x <= Ax ? (Ax === 0 ? Ay : (Ay * x) / Ax) : (Ay * (5 - x)) / (5 - Ax)), a: Math.min(0, Ax), b: 5, cls: "f1" }];
            if (Ax < 0) d.areas = [];
            return d;
          },
          caption: ({ C }) => R`\(a = 5,\ b = 4,\ C = ${C}^\circ\): \(\quad T = \dfrac{5 \cdot 4 \cdot \sin ${C}^\circ}{2} \approx ${fmt(10 * Math.sin(rad(C)), 2)}\) a.e.`,
        },
        note: "Areasatsen kräver två sidor och vinkeln mellan dem. Arean blir störst när C = 90°.",
      },
      {
        title: "Sinussatsen",
        rule: R`\(\dfrac{\sin A}{a} = \dfrac{\sin B}{b} = \dfrac{\sin C}{c}\)`,
        text: R`<p>Används när man känner en sida och vinkeln mittemot den, plus ytterligare en sida eller vinkel.</p>`,
        note: R`Se upp! När man söker en <em>vinkel</em> med sinussatsen kan det finnas två lösningar, \(v\) och \(180^\circ - v\). Kontrollera om båda ger en möjlig triangel (vinkelsumman 180°).`,
      },
      {
        title: "Cosinussatsen",
        rule: R`\(c^2 = a^2 + b^2 - 2ab\cos C\)`,
        text: R`<p>Används när man känner <strong>två sidor och vinkeln mellan dem</strong> (för att få den tredje sidan), eller <strong>alla tre sidor</strong> (för att få en vinkel).</p>
<p>Om \(C = 90^\circ\) är \(\cos C = 0\) och satsen blir Pythagoras sats!</p>`,
      },
      {
        title: "Vilken sats ska jag använda?",
        text: R`<table><tr><th>Du känner</th><th>Använd</th></tr>
<tr><td>två sidor + vinkeln mellan, söker arean</td><td>Areasatsen</td></tr>
<tr><td>två vinklar + en sida</td><td>Sinussatsen</td></tr>
<tr><td>två sidor + vinkeln mellan, söker tredje sidan</td><td>Cosinussatsen</td></tr>
<tr><td>tre sidor, söker en vinkel</td><td>Cosinussatsen</td></tr>
<tr><td>två sidor + vinkel mittemot en av dem</td><td>Sinussatsen (kolla två fall)</td></tr></table>`,
      },
    ],
    examples: [
      {
        q: R`I triangeln \(ABC\) är \(a = 7\) cm, \(b = 10\) cm och \(C = 40^\circ\). Beräkna arean.`,
        hints: ["Två sidor och vinkeln mellan dem – areasatsen."],
        steps: [R`\(T = \dfrac{7 \cdot 10 \cdot \sin 40^\circ}{2} = 35 \sin 40^\circ \approx 22{,}5\)`],
        answer: "Ca 22,5 cm²",
      },
      {
        q: R`I triangeln \(ABC\) är \(a = 8\) cm, \(A = 35^\circ\) och \(B = 70^\circ\). Beräkna sidan \(b\).`,
        hints: [R`Du känner sidan \(a\) och vinkeln mittemot, \(A\). Sinussatsen.`, R`\(\frac{b}{\sin B} = \frac{a}{\sin A}\).`],
        steps: [R`\(\dfrac{b}{\sin 70^\circ} = \dfrac{8}{\sin 35^\circ}\)`, R`\(b = \dfrac{8 \sin 70^\circ}{\sin 35^\circ} \approx 13{,}1\)`],
        answer: "Ca 13,1 cm",
      },
      {
        q: R`I triangeln \(ABC\) är \(a = 5\) cm, \(b = 7\) cm och \(C = 60^\circ\). Beräkna \(c\).`,
        hints: ["Två sidor och vinkeln mellan – cosinussatsen.", R`\(\cos 60^\circ = \frac{1}{2}\).`],
        steps: [{ graph: { xmin: -1, xmax: 6, ymin: -0.8, ymax: 6.6, h: 420, axes: false, draw: () => triangle(5, 7, 60) } }, R`\(c^2 = 25 + 49 - 2 \cdot 5 \cdot 7 \cdot \frac{1}{2} = 74 - 35 = 39\)`, R`\(c = \sqrt{39} \approx 6{,}24\)`],
        answer: "Ca 6,2 cm",
      },
      {
        q: "En triangel har sidorna 4 cm, 6 cm och 8 cm. Bestäm den största vinkeln.",
        hints: ["Den största vinkeln ligger mittemot den längsta sidan.", R`Lös ut \(\cos C\) ur cosinussatsen med \(c = 8\).`],
        steps: [R`\(\cos C = \dfrac{a^2 + b^2 - c^2}{2ab} = \dfrac{16 + 36 - 64}{48} = -0{,}25\)`, R`\(C \approx 104{,}5^\circ\)`],
        answer: R`Ca \(104{,}5^\circ\)`,
      },
    ],
    exercises: [
      { q: R`Beräkna arean av en triangel där \(a = 6\) cm, \(b = 9\) cm och \(C = 30^\circ\).`, answer: "13,5 cm²", steps: [R`\(\frac{6 \cdot 9 \cdot \frac{1}{2}}{2} = 13{,}5\)`] },
      { q: R`I triangeln \(ABC\) är \(a = 8\), \(b = 5\) och \(C = 60^\circ\). Beräkna \(c\).`, answer: R`\(c = 7\)`, steps: [R`\(c^2 = 64 + 25 - 40 = 49\)`] },
      { q: R`I triangeln \(ABC\) är \(a = 12\) cm, \(A = 50^\circ\) och \(B = 60^\circ\). Beräkna \(b\).`, answer: "Ca 13,6 cm", steps: [R`\(b = \frac{12 \sin 60^\circ}{\sin 50^\circ} \approx 13{,}57\)`] },
      { q: "En triangel har sidorna 5, 7 och 8. Bestäm vinkeln mittemot sidan 7.", answer: R`\(60^\circ\)`, steps: [R`\(\cos v = \frac{25 + 64 - 49}{2 \cdot 5 \cdot 8} = \frac{40}{80} = \frac{1}{2}\)`] },
      { q: R`Två sidor i en triangel är båda 4 cm och vinkeln mellan dem är \(150^\circ\). Beräkna arean exakt.`, answer: "4 cm²", steps: [R`\(\sin 150^\circ = \frac{1}{2}\)`, R`\(\frac{4 \cdot 4 \cdot \frac{1}{2}}{2} = 4\)`] },
    ],
  });

  // ------------------------------------------------------------------
  // Det tvetydiga fallet: A = 30°, b = AC = 6, sidan a varierar.
  const AMB = { A: 30, b: 6 };
  const ambiguous = (a) => {
    const Cx = AMB.b * Math.cos(rad(AMB.A)), Cy = AMB.b * Math.sin(rad(AMB.A));
    const disc = a * a - Cy * Cy;
    const Bs = disc < -1e-9 ? [] : Math.abs(disc) < 1e-9 ? [Cx] : [Cx - Math.sqrt(disc), Cx + Math.sqrt(disc)].filter((x) => x > 1e-9);
    return { Cx, Cy, Bs };
  };

  L.push({
    id: "bevis-triangelsatser",
    chapter: CH,
    title: "Bevisen och det tvetydiga fallet",
    intro: "Varför satserna stämmer – och varför sinussatsen ibland ger två trianglar.",
    theory: [
      {
        title: "Trigonometriska ettan",
        text: R`<p>Punkten \((\cos v,\ \sin v)\) ligger på enhetscirkeln, som har radien 1. Pythagoras sats ger då sambandet som används i flera av bevisen:</p>`,
        rule: R`\(\sin^2 v + \cos^2 v = 1\)`,
      },
      {
        title: "Bevis av areasatsen",
        text: R`<p>Dra höjden \(h\) från \(A\) ner mot sidan \(a\) (eller dess förlängning). I den rätvinkliga triangel som bildas är \(b\) hypotenusa, så</p>
<ul><li>om \(C\) är spetsig: \(h = b \sin C\)</li>
<li>om \(C\) är trubbig: \(h = b \sin(180^\circ - C) = b \sin C\)</li></ul>
<p>I båda fallen blir arean \(T = \dfrac{a \cdot h}{2} = \dfrac{ab \sin C}{2}\). Dra \(C\) över 90° och se hur höjden hamnar utanför triangeln:</p>`,
        graph: {
          xmin: -4.5, xmax: 5.5, ymin: -0.8, ymax: 4.4, h: 318, axes: false, alt: "Höjden i en spetsig och en trubbig triangel",
          sliders: [{ key: "C", label: R`\(C\) (grader)`, min: 30, max: 150, step: 5, value: 120 }],
          draw: ({ C }) => triangle(5, 4, C, { height: true }),
          caption: ({ C }) => C > 90
            ? R`\(C = ${C}^\circ\) är trubbig: \(h = 4 \sin(180^\circ - ${C}^\circ) = 4 \sin ${180 - C}^\circ \approx ${fmt(4 * Math.sin(rad(C)), 2)}\)`
            : R`\(C = ${C}^\circ\): \(h = 4 \sin ${C}^\circ \approx ${fmt(4 * Math.sin(rad(C)), 2)}\)`,
        },
      },
      {
        title: "Bevis av sinussatsen",
        text: R`<p>Arean kan beräknas med areasatsen utifrån vilket hörn som helst:</p>
<p>\(T = \dfrac{ab \sin C}{2} = \dfrac{bc \sin A}{2} = \dfrac{ac \sin B}{2}\)</p>
<p>Multiplicera alla tre leden med \(\dfrac{2}{abc}\):</p>`,
        rule: R`\(\dfrac{\sin C}{c} = \dfrac{\sin A}{a} = \dfrac{\sin B}{b}\) \(\qquad\blacksquare\)`,
      },
      {
        title: "Bevis av cosinussatsen",
        text: R`<p>Lägg triangeln i ett koordinatsystem med \(C\) i origo och sidan \(a\) längs x-axeln. Då är \(B = (a,\ 0)\) och \(A = (b\cos C,\ b\sin C)\).</p>
<p>Avståndsformeln ger sidan \(c = |AB|\):</p>
<p>\(c^2 = (b\cos C - a)^2 + (b \sin C)^2\)</p>
<p>\(\phantom{c^2} = b^2\cos^2 C - 2ab\cos C + a^2 + b^2\sin^2 C\)</p>
<p>\(\phantom{c^2} = a^2 + b^2(\underbrace{\sin^2 C + \cos^2 C}_{=1}) - 2ab \cos C\)</p>`,
        rule: R`\(c^2 = a^2 + b^2 - 2ab\cos C\) \(\qquad\blacksquare\)`,
        graph: {
          xmin: -2, xmax: 6, ymin: -0.8, ymax: 4.6, h: 300, xstep: 1, ystep: 1, alt: "Triangeln i ett koordinatsystem",
          sliders: [{ key: "C", label: R`\(C\) (grader)`, min: 20, max: 160, step: 5, value: 55 }],
          draw: ({ C }) => {
            const d = triangle(5, 4, C);
            const Ax = 4 * Math.cos(rad(C)), Ay = 4 * Math.sin(rad(C));
            d.lines.push({ x1: Ax, y1: 0, x2: Ax, y2: Ay, cls: "cm", dash: true, thin: true });
            d.points = [{ x: Ax, y: Ay, cls: "c2", label: `(4cos C, 4sin C)`, dx: Ax < 0 ? -8 : 8, anchor: Ax < 0 ? "end" : "start", dy: -14 }, { x: 5, y: 0, cls: "c2" }, { x: 0, y: 0, cls: "c2" }];
            return d;
          },
          caption: ({ C }) => R`\(a = 5,\ b = 4,\ C = ${C}^\circ\): \(\;c = \sqrt{25 + 16 - 40\cos ${C}^\circ} \approx ${fmt(Math.sqrt(41 - 40 * Math.cos(rad(C))), 2)}\)`,
        },
      },
      {
        title: "Det tvetydiga fallet",
        text: R`<p>Känner man två sidor och en vinkel som <em>inte</em> ligger mellan dem kan det finnas 0, 1 eller 2 trianglar. Här är \(A = 30^\circ\) och \(b = 6\). Sidan \(a\) svänger runt hörnet \(C\) – var träffar den den nedre linjen?</p>`,
        graph: {
          xmin: -0.8, xmax: 11, ymin: -1, ymax: 4.6, h: 300, axes: false, alt: "Det tvetydiga fallet",
          sliders: [{ key: "a", label: R`\(a\)`, min: 2, max: 7.5, step: 0.25, value: 4 }],
          draw: ({ a }) => {
            const { Cx, Cy, Bs } = ambiguous(a);
            const lines = [{ x1: 0, y1: 0, x2: 11, y2: 0, cls: "cm", thin: true }, { x1: 0, y1: 0, x2: Cx, y2: Cy, cls: "c1" }];
            Bs.forEach((x, i) => lines.push({ x1: Cx, y1: Cy, x2: x, y2: 0, cls: i ? "c3" : "c2" }));
            return {
              lines,
              curves: [{ x: (t) => Cx + a * Math.cos(t), y: (t) => Cy + a * Math.sin(t), t0: 0, t1: 2 * Math.PI, cls: "cm", dash: true }, { x: (t) => 0.9 * Math.cos(t), y: (t) => 0.9 * Math.sin(t), t0: 0, t1: rad(AMB.A), cls: "c2" }],
              points: Bs.map((x, i) => ({ x, y: 0, cls: i ? "c3" : "c2", label: Bs.length > 1 ? `B${i ? "₂" : "₁"}` : "B", dy: 18, anchor: "middle", dx: 0 })),
              labels: [{ x: -0.2, y: -0.4, text: "A", cls: "cm", anchor: "end" }, { x: Cx, y: Cy + 0.25, text: "C", cls: "cm", anchor: "middle" }, { x: Cx / 2 - 0.2, y: Cy / 2 + 0.25, text: "b = 6", anchor: "end" }],
            };
          },
          caption: ({ a }) => {
            const n = ambiguous(a).Bs.length;
            const s = Math.asin(6 * 0.5 / a) * 180 / Math.PI;
            if (n === 0) return R`\(a = ${fmt(a)}\): \(\sin B = \frac{6 \sin 30^\circ}{${fmt(a)}} > 1\) – <strong>ingen</strong> triangel.`;
            if (Math.abs(a - 3) < 1e-9) return R`\(a = 3\): \(\sin B = 1\), \(B = 90^\circ\) – <strong>en</strong> (rätvinklig) triangel.`;
            if (n === 2) return R`\(a = ${fmt(a)}\): \(B \approx ${fmt(s, 1)}^\circ\) eller \(B \approx ${fmt(180 - s, 1)}^\circ\) – <strong>två</strong> trianglar.`;
            return R`\(a = ${fmt(a)}\): \(B \approx ${fmt(s, 1)}^\circ\) (\(180^\circ - ${fmt(s, 1)}^\circ\) ger vinkelsumma över 180°) – <strong>en</strong> triangel.`;
          },
        },
        note: R`Kontrollera alltid: om \(A + (180^\circ - B) < 180^\circ\) finns även den trubbiga lösningen.`,
      },
    ],
    examples: [
      {
        q: R`I triangeln \(ABC\) är \(A = 30^\circ\), \(a = 4\) cm och \(b = 6\) cm. Bestäm vinkeln \(B\).`,
        hints: [R`Sinussatsen: \(\sin B = \dfrac{b \sin A}{a}\).`, R`Ekvationen \(\sin B = 0{,}75\) har två lösningar mellan 0° och 180°.`, "Kontrollera vinkelsumman för båda."],
        steps: [R`\(\sin B = \dfrac{6 \sin 30^\circ}{4} = 0{,}75\)`, R`\(B_1 \approx 48{,}6^\circ\) eller \(B_2 \approx 180^\circ - 48{,}6^\circ = 131{,}4^\circ\)`, R`\(30^\circ + 131{,}4^\circ = 161{,}4^\circ < 180^\circ\) – båda fungerar.`, { graph: { xmin: -0.8, xmax: 11, ymin: -1, ymax: 4.6, h: 260, axes: false, draw: () => { const { Cx, Cy, Bs } = ambiguous(4); return { lines: [{ x1: 0, y1: 0, x2: Bs[1], y2: 0, cls: "cm" }, { x1: 0, y1: 0, x2: Cx, y2: Cy, cls: "c1" }, { x1: Cx, y1: Cy, x2: Bs[0], y2: 0, cls: "c2" }, { x1: Cx, y1: Cy, x2: Bs[1], y2: 0, cls: "c3" }], points: [{ x: Bs[0], y: 0, cls: "c2", label: "B₁", dy: 18, dx: 0, anchor: "middle" }, { x: Bs[1], y: 0, cls: "c3", label: "B₂", dy: 18, dx: 0, anchor: "middle" }] }; } } }],
        answer: R`\(B \approx 48{,}6^\circ\) eller \(B \approx 131{,}4^\circ\) (två trianglar)`,
      },
      {
        q: R`I triangeln \(ABC\) är \(A = 40^\circ\), \(a = 8\) cm och \(b = 5\) cm. Bestäm vinkeln \(B\).`,
        hints: [R`Sinussatsen ger \(\sin B\).`, R`Prova om även \(180^\circ - B\) är möjlig.`],
        steps: [R`\(\sin B = \dfrac{5 \sin 40^\circ}{8} \approx 0{,}402\)`, R`\(B_1 \approx 23{,}7^\circ\), \(\;B_2 \approx 156{,}3^\circ\)`, R`\(40^\circ + 156{,}3^\circ > 180^\circ\) – bara \(B_1\) fungerar.`],
        answer: R`\(B \approx 23{,}7^\circ\) (en triangel)`,
      },
      {
        q: R`Visa att arean av en liksidig triangel med sidan \(s\) är \(\dfrac{\sqrt{3}}{4}s^2\).`,
        hints: ["Alla vinklar i en liksidig triangel är 60°.", R`Areasatsen med \(a = b = s\) och \(C = 60^\circ\).`],
        steps: [R`\(T = \dfrac{s \cdot s \cdot \sin 60^\circ}{2}\)`, R`\(= \dfrac{s^2 \cdot \frac{\sqrt{3}}{2}}{2} = \dfrac{\sqrt{3}}{4}s^2\) \(\quad\blacksquare\)`],
        answer: R`\(T = \dfrac{\sqrt{3}}{4}s^2\)`,
      },
      {
        q: R`Vinkeln \(v\) är trubbig och \(\sin v = \frac{3}{5}\). Bestäm \(\cos v\) exakt.`,
        hints: ["Trigonometriska ettan.", "Vilket tecken har cosinus för trubbiga vinklar?"],
        steps: [R`\(\cos^2 v = 1 - \left(\tfrac{3}{5}\right)^2 = \tfrac{16}{25}\)`, R`\(\cos v = \pm\tfrac{4}{5}\). Trubbig vinkel (kvadrant 2) ⇒ negativ.`],
        answer: R`\(\cos v = -\tfrac{4}{5}\)`,
      },
    ],
    exercises: [
      { q: R`I triangeln \(ABC\) är \(A = 50^\circ\), \(a = 7\) och \(b = 8\). Bestäm alla möjliga värden på \(B\).`, answer: R`\(B \approx 61{,}1^\circ\) eller \(B \approx 118{,}9^\circ\)`, steps: [R`\(\sin B = \frac{8 \sin 50^\circ}{7} \approx 0{,}875\)`, R`\(50^\circ + 118{,}9^\circ < 180^\circ\) – båda fungerar.`] },
      { q: R`I triangeln \(ABC\) är \(A = 35^\circ\), \(a = 10\) och \(b = 6\). Bestäm \(B\).`, answer: R`\(B \approx 20{,}1^\circ\) (bara en triangel)`, steps: [R`\(\sin B = \frac{6 \sin 35^\circ}{10} \approx 0{,}344\)`, R`\(35^\circ + 159{,}9^\circ > 180^\circ\)`] },
      { q: R`Hur många trianglar finns det med \(A = 30^\circ\), \(b = 10\) och \(a = 5\)?`, answer: R`En (rätvinklig, \(B = 90^\circ\))`, steps: [R`\(\sin B = \frac{10 \cdot 0{,}5}{5} = 1\)`] },
      { q: R`Hur många trianglar finns det med \(A = 30^\circ\), \(b = 10\) och \(a = 4\)?`, answer: "Ingen", steps: [R`\(\sin B = \frac{10 \cdot 0{,}5}{4} = 1{,}25 > 1\) – omöjligt.`] },
      { q: R`Visa att cosinussatsen blir Pythagoras sats när \(C = 90^\circ\).`, answer: R`\(c^2 = a^2 + b^2 - 2ab \cdot 0 = a^2 + b^2\)`, steps: [R`\(\cos 90^\circ = 0\)`] },
      { q: R`Vinkeln \(v\) är spetsig och \(\cos v = 0{,}6\). Bestäm \(\sin v\).`, answer: R`\(\sin v = 0{,}8\)`, steps: [R`\(\sin^2 v = 1 - 0{,}36 = 0{,}64\)`] },
      { q: R`Visa med sinussatsen att \(\dfrac{\sin A}{a} = \dfrac{1}{c}\) i en rätvinklig triangel med \(C = 90^\circ\). Stämmer det med definitionen av sinus?`, answer: R`Ja: \(\frac{\sin A}{a} = \frac{\sin 90^\circ}{c} = \frac{1}{c}\), alltså \(\sin A = \frac{a}{c}\) – motstående katet genom hypotenusan.` },
    ],
  });
})();
