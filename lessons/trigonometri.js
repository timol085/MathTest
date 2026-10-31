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
})();
