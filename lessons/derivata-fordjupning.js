// Matte 3c – Derivata, fördjupning: numerisk derivata och kurvskissning.
// Lektionerna läggs in på rätt plats i kapitlet Derivata med LH.insertAfter.
(() => {
  const R = String.raw;
  const { fmt, tangent, insertAfter, signTable } = window.LH;
  const CH = "Derivata";

  // ------------------------------------------------------------------
  const p2 = (x) => 2 ** x;
  const dp2 = (x) => 2 ** x * Math.LN2;

  insertAfter("derivata-exponential", {
    id: "numerisk-derivata",
    chapter: CH,
    title: "Numerisk derivata",
    intro: "Uppskatta derivatan när du inte har någon formel – från en tabell, en graf eller med ett digitalt verktyg.",
    theory: [
      {
        title: "Varför numeriskt?",
        text: R`<p>Ibland har man ingen formel att derivera – bara mätvärden i en tabell eller en graf. Och miniräknare och datorprogram deriverar oftast <em>numeriskt</em>. Idén är derivatans definition, men med ett litet \(h\) istället för gränsvärdet.</p>`,
      },
      {
        title: "Två differenskvoter",
        rule: R`Framåt: \(\;f'(a) \approx \dfrac{f(a + h) - f(a)}{h}\) <br><br> Central (symmetrisk): \(\;f'(a) \approx \dfrac{f(a + h) - f(a - h)}{2h}\)`,
        text: R`<p>Den <strong>centrala differenskvoten</strong> tar en punkt på var sida om \(a\). Jämför sekanterna med tangenten för \(f(x) = 2^x\) i \(a = 1\) – minska \(h\):</p>`,
        graph: {
          xmin: -1, xmax: 3, ymin: -0.5, ymax: 7, alt: "Framåt- och central differenskvot för 2^x",
          sliders: [{ key: "h", label: R`\(h\)`, min: 0.1, max: 1.5, step: 0.05, value: 1 }],
          draw: ({ h }) => {
            const kf = (p2(1 + h) - p2(1)) / h, kc = (p2(1 + h) - p2(1 - h)) / (2 * h);
            return {
              fns: [{ f: p2 }],
              lines: [
                tangent(p2, dp2(1), 1, -1, 3, "c4"),
                { x1: -1, y1: 2 + kf * -2, x2: 3, y2: 2 + kf * 2, cls: "c2", thin: true },
                { x1: -1, y1: p2(1 - h) + kc * (-1 - (1 - h)), x2: 3, y2: p2(1 - h) + kc * (3 - (1 - h)), cls: "c3", thin: true },
              ],
              points: [{ x: 1, y: 2, cls: "c4" }, { x: 1 + h, y: p2(1 + h), cls: "c2" }, { x: 1 - h, y: p2(1 - h), cls: "c3" }],
              labels: [{ x: 2.95, y: 0.2, text: "tangent", cls: "c4", anchor: "end" }],
            };
          },
          caption: ({ h }) => {
            const kf = (p2(1 + h) - p2(1)) / h, kc = (p2(1 + h) - p2(1 - h)) / (2 * h);
            return R`<span style="color:var(--c2)">framåt</span> \(\approx ${fmt(kf, 4)}\), \(\;\) <span style="color:var(--c3)">central</span> \(\approx ${fmt(kc, 4)}\), \(\;\) exakt \(f'(1) = 2\ln 2 \approx ${fmt(dp2(1), 4)}\)`;
          },
        },
        note: "Den centrala differenskvoten är nästan alltid mycket noggrannare. För en andragradsfunktion blir den till och med exakt.",
      },
      {
        title: "Hur bra blir det?",
        text: R`<p>För \(f(x) = 2^x\) i \(a = 1\), där det exakta värdet är \(${fmt(dp2(1), 6)}\):</p>
<table><tr><th>\(h\)</th><th>framåt</th><th>central</th></tr>
${[0.1, 0.01, 0.001].map((h) => R`<tr><td>\(${fmt(h, 3)}\)</td><td>\(${fmt((p2(1 + h) - p2(1)) / h, 6)}\)</td><td>\(${fmt((p2(1 + h) - p2(1 - h)) / (2 * h), 6)}\)</td></tr>`).join("")}</table>`,
      },
      {
        title: "Från en tabell",
        text: R`<p>Har man mätvärden tar man värdena på var sida om den punkt man vill veta derivatan i. En bil har kört sträckan \(s\) meter efter \(t\) sekunder:</p>
<table><tr><th>\(t\) (s)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>\(s\) (m)</th><td>0</td><td>3</td><td>11</td><td>24</td><td>42</td></tr></table>
<p>Hastigheten vid \(t = 2\): \(\;s'(2) \approx \dfrac{s(3) - s(1)}{3 - 1} = \dfrac{24 - 3}{2} = 10{,}5\) m/s.</p>`,
      },
      {
        title: "Från en graf",
        text: R`<p>Rita tangenten i punkten så noga du kan. Välj två punkter på tangenten som ligger långt isär och beräkna \(k = \dfrac{\Delta y}{\Delta x}\).</p>`,
      },
      {
        title: "Digitala verktyg",
        text: R`<ul>
<li><strong>GeoGebra</strong>: skriv <code>f(x) = 2^x</code> och sedan <code>f'(1)</code>, eller <code>Derivata(f)</code> för hela derivatan.</li>
<li><strong>Desmos</strong>: skriv <code>f(x) = 2^x</code> och sedan <code>f'(1)</code>.</li>
<li><strong>Grafräknare</strong>: funktionen heter ofta <code>nDeriv</code> eller <code>d/dx</code>. I grafläget finns oftast <em>dy/dx</em> i beräkningsmenyn.</li>
</ul>`,
        note: "Miniräknare använder ofta den centrala differenskvoten med ett mycket litet h. Svaret är en mycket bra uppskattning, men inte alltid exakt.",
      },
    ],
    examples: [
      {
        q: R`Uppskatta \(f'(2)\) för \(f(x) = x^3\) med den centrala differenskvoten och \(h = 0{,}1\). Jämför med det exakta värdet.`,
        hints: [R`Beräkna \(f(2{,}1)\) och \(f(1{,}9)\).`, R`Dela skillnaden med \(2h = 0{,}2\).`],
        steps: [R`\(f(2{,}1) = 9{,}261\), \(\;f(1{,}9) = 6{,}859\)`, R`\(f'(2) \approx \dfrac{9{,}261 - 6{,}859}{0{,}2} = \dfrac{2{,}402}{0{,}2} = 12{,}01\)`, R`Exakt: \(f'(x) = 3x^2\), \(f'(2) = 12\)`],
        answer: R`\(\approx 12{,}01\) (exakt \(12\))`,
      },
      {
        q: R`Temperaturen \(T\) (°C) i en ugn mäts var 5:e minut. Uppskatta hur snabbt temperaturen ökar efter 10 minuter.<br><table><tr><th>\(t\) (min)</th><td>0</td><td>5</td><td>10</td><td>15</td><td>20</td></tr><tr><th>\(T\) (°C)</th><td>20</td><td>85</td><td>135</td><td>172</td><td>198</td></tr></table>`,
        hints: [R`Använd värdena på var sida om \(t = 10\), alltså \(t = 5\) och \(t = 15\).`],
        steps: [R`\(T'(10) \approx \dfrac{T(15) - T(5)}{15 - 5} = \dfrac{172 - 85}{10} = 8{,}7\)`],
        answer: "Ca 8,7 °C per minut",
      },
      {
        q: R`Uppskatta \(f'(0)\) för \(f(x) = 1{,}5^x\) med central differenskvot och \(h = 0{,}01\). Kontrollera med deriveringsregeln.`,
        hints: [R`\(\dfrac{1{,}5^{0{,}01} - 1{,}5^{-0{,}01}}{0{,}02}\)`, R`Regeln: \(D(a^x) = a^x \ln a\).`],
        steps: [R`\(1{,}5^{0{,}01} \approx 1{,}0040629\), \(\;1{,}5^{-0{,}01} \approx 0{,}9959536\)`, R`\(f'(0) \approx \dfrac{0{,}0081093}{0{,}02} \approx 0{,}4055\)`, R`Exakt: \(f'(0) = 1{,}5^0 \cdot \ln 1{,}5 = \ln 1{,}5 \approx 0{,}4055\)`],
        answer: R`\(\approx 0{,}4055\)`,
      },
    ],
    exercises: [
      { q: R`Beräkna framåtdifferenskvoten för \(f(x) = x^2\) i \(a = 3\) med \(h = 0{,}5\).`, answer: R`\(6{,}5\)`, steps: [R`\(\frac{3{,}5^2 - 3^2}{0{,}5} = \frac{12{,}25 - 9}{0{,}5} = 6{,}5\)`] },
      { q: R`Beräkna den centrala differenskvoten för \(f(x) = x^2\) i \(a = 3\) med \(h = 0{,}5\). Vad är det exakta värdet?`, answer: R`\(6\), vilket är exakt (\(f'(3) = 6\))`, steps: [R`\(\frac{3{,}5^2 - 2{,}5^2}{1} = 12{,}25 - 6{,}25 = 6\)`] },
      { q: R`Uppskatta \(f'(4)\) för \(f(x) = \sqrt{x}\) med central differenskvot och \(h = 0{,}1\).`, answer: R`\(\approx 0{,}2500\) (exakt \(\frac{1}{4}\))`, steps: [R`\(\frac{\sqrt{4{,}1} - \sqrt{3{,}9}}{0{,}2} \approx \frac{2{,}024846 - 1{,}974842}{0{,}2} \approx 0{,}25002\)`] },
      { q: R`En befolkning var 2 400 år 2010, 2 650 år 2015 och 2 980 år 2020. Uppskatta hur snabbt den växte år 2015.`, answer: "Ca 58 personer per år", steps: [R`\(\frac{2980 - 2400}{2020 - 2010} = \frac{580}{10} = 58\)`] },
      { q: R`Uppskatta \(f'(0)\) för \(f(x) = e^x\) med central differenskvot och \(h = 0{,}001\).`, answer: R`\(\approx 1{,}0000002\) (exakt \(1\))`, steps: [R`\(\frac{e^{0{,}001} - e^{-0{,}001}}{0{,}002}\)`] },
      { q: "Varför ger den centrala differenskvoten oftast ett bättre värde än framåtdifferenskvoten?", answer: "Den tar en punkt på varje sida om a, så felen åt de två hållen tar till stor del ut varandra – sekanten blir nästan parallell med tangenten." },
    ],
  });

  // ------------------------------------------------------------------
  const cub = (x) => x ** 3 - 3 * x * x - 9 * x + 5;
  const xr = (x) => x + 4 / x;

  insertAfter("andraderivata", {
    id: "kurvskissning",
    chapter: CH,
    title: "Kurvskissning och derivatans graf",
    intro: "Allt på en gång: nollställen, asymptoter, extrempunkter och inflexionspunkter – och hur man läser grafen till f′.",
    theory: [
      {
        title: "Sambanden mellan f, f′ och f″",
        text: R`<table><tr><th>Grafen till \(f\)</th><th>\(f'\)</th><th>\(f''\)</th></tr>
<tr><td>växande</td><td>positiv (ovanför x-axeln)</td><td></td></tr>
<tr><td>avtagande</td><td>negativ (under x-axeln)</td><td></td></tr>
<tr><td>max- eller minimipunkt</td><td>byter tecken (skär x-axeln)</td><td></td></tr>
<tr><td>böjer uppåt ∪</td><td>växande</td><td>positiv</td></tr>
<tr><td>böjer nedåt ∩</td><td>avtagande</td><td>negativ</td></tr>
<tr><td><strong>inflexionspunkt</strong></td><td>har en extrempunkt</td><td>byter tecken</td></tr></table>`,
      },
      {
        title: "f och f′ i samma koordinatsystem",
        text: R`<p>Den blå kurvan är \(f(x) = x^3 - 3x^2 - 9x + 5\) och den gröna är \(f'(x) = 3x^2 - 6x - 9\). Höjden på den gröna kurvan är lika med lutningen på den blå:</p>`,
        graph: {
          xmin: -3, xmax: 5, ymin: -25, ymax: 20, ystep: 5, alt: "f och f′ i samma koordinatsystem",
          sliders: [{ key: "a", label: R`\(x\)`, min: -2.5, max: 4.5, step: 0.1, value: -2 }],
          draw: ({ a }) => {
            const df = (x) => 3 * x * x - 6 * x - 9;
            return {
              fns: [{ f: cub }, { f: df, cls: "c3" }],
              lines: [tangent(cub, df(a), a, a - 0.8, a + 0.8), { x1: a, y1: cub(a), x2: a, y2: df(a), cls: "cm", dash: true, thin: true }],
              points: [{ x: a, y: cub(a), cls: "c2" }, { x: a, y: df(a), cls: "c3" }],
              labels: [{ x: 4.6, y: 14, text: "f′", cls: "c3", anchor: "end" }, { x: 4.6, y: -5, text: "f", anchor: "end" }],
            };
          },
          caption: ({ a }) => {
            const k = 3 * a * a - 6 * a - 9;
            const st = Math.abs(k) < 0.05 ? R`\(f' = 0\) – vågrät tangent, extrempunkt` : k > 0 ? R`\(f' > 0\) – \(f\) växer` : R`\(f' < 0\) – \(f\) avtar`;
            return R`\(f'(${fmt(a, 1)}) = ${fmt(k)}\): ${st}`;
          },
        },
        note: "Där f′ skär x-axeln har f sina extrempunkter. Där f′ har sin minimipunkt (x = 1) har f en inflexionspunkt.",
      },
      {
        title: "Inflexionspunkt",
        text: R`<p>En <strong>inflexionspunkt</strong> är en punkt där kurvan byter böjningsriktning. Där är \(f''(x) = 0\) och \(f''\) byter tecken.</p>
<p>För \(f(x) = x^3 - 3x^2 - 9x + 5\): \(\;f''(x) = 6x - 6 = 0 \Rightarrow x = 1\), och \(f(1) = -6\). Inflexionspunkten är \((1,\ -6)\).</p>`,
        note: "En terrasspunkt är en inflexionspunkt där tangenten dessutom är vågrät.",
      },
      {
        title: "Arbetsgång för kurvskissning",
        text: R`<ol>
<li><strong>Definitionsmängd</strong> – finns det x där funktionen inte är definierad?</li>
<li><strong>Skärning med axlarna</strong> – \(f(0)\) och lösningar till \(f(x) = 0\) (om de går att hitta).</li>
<li><strong>Asymptoter</strong> – för rationella funktioner.</li>
<li><strong>Stationära punkter</strong> – lös \(f'(x) = 0\), gör en teckentabell.</li>
<li><strong>Inflexionspunkter</strong> – lös \(f''(x) = 0\) och kontrollera teckenbyte.</li>
<li><strong>Rita</strong> – markera allt och dra en mjuk kurva.</li>
</ol>`,
      },
      {
        title: "Steg för steg: \\(f(x) = x + \\frac{4}{x}\\)",
        text: R`<p>Dra i reglaget för att bygga upp grafen.</p>`,
        graph: {
          xmin: -8, xmax: 8, ymin: -10, ymax: 10, alt: "Kurvskissning av x + 4/x",
          sliders: [{ key: "s", label: "steg", min: 1, max: 4, step: 1, value: 1 }],
          draw: ({ s }) => {
            const d = { lines: [], points: [], fns: [], labels: [] };
            if (s >= 1) {
              d.lines.push({ x1: 0, y1: -10, x2: 0, y2: 10, cls: "c4", dash: true }, { x1: -10, y1: -10, x2: 10, y2: 10, cls: "c3", dash: true, thin: true });
              d.labels.push({ x: 6.3, y: 4.8, text: "y = x", cls: "c3" }, { x: 0.25, y: 9, text: "x = 0", cls: "c4" });
            }
            if (s >= 2) d.points.push({ x: 2, y: 4, cls: "c2", label: "min (2, 4)", dy: 20 }, { x: -2, y: -4, cls: "c2", label: "max (−2, −4)", dy: -10, anchor: "end", dx: -8 });
            if (s >= 3) d.labels.push({ x: 4.2, y: 1.6, text: "böjer uppåt ∪", cls: "c2" }, { x: -4.2, y: -1.8, text: "böjer nedåt ∩", cls: "c2", anchor: "end" });
            if (s >= 4) d.fns.push({ f: xr });
            return d;
          },
          caption: ({ s }) => [
            "",
            R`<strong>1. Asymptoter.</strong> \(x = 0\) ingår inte i definitionsmängden ⇒ lodrät asymptot \(x = 0\). När \(x \to \pm\infty\) går \(\frac{4}{x} \to 0\) ⇒ sned asymptot \(y = x\). Inga nollställen eftersom \(x^2 + 4 = 0\) saknar lösning.`,
            R`<strong>2. Stationära punkter.</strong> \(f'(x) = 1 - \frac{4}{x^2} = 0 \Rightarrow x^2 = 4 \Rightarrow x = \pm 2\). \(\;f(2) = 4\), \(f(-2) = -4\).`,
            R`<strong>3. Böjning.</strong> \(f''(x) = \frac{8}{x^3}\): positiv för \(x > 0\) (min i \(x = 2\)) och negativ för \(x < 0\) (max i \(x = -2\)). Ingen inflexionspunkt.`,
            R`<strong>4. Rita</strong> kurvan genom punkterna så att den närmar sig asymptoterna.`,
          ][s],
        },
      },
    ],
    examples: [
      {
        q: R`Skissa grafen till \(f(x) = x^3 - 3x^2 - 9x + 5\). Ange extrempunkter och inflexionspunkt.`,
        hints: [R`\(f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3)\).`, R`\(x^2 - 2x - 3 = (x - 3)(x + 1)\).`, R`Inflexionspunkten: lös \(f''(x) = 0\).`],
        steps: [
          R`\(f'(x) = 3(x - 3)(x + 1) = 0 \Rightarrow x = -1\) eller \(x = 3\)`,
          { text: signTable(["-1", "3"], ["+", "0", "-", "0", "+"], ["↗", "max", "↘", "min", "↗"]) },
          R`\(f(-1) = -1 - 3 + 9 + 5 = 10\), \(\;f(3) = 27 - 27 - 27 + 5 = -22\)`,
          R`\(f''(x) = 6x - 6 = 0 \Rightarrow x = 1\), \(f(1) = -6\). \(f''\) byter tecken ⇒ inflexionspunkt.`,
          R`Skärning med y-axeln: \(f(0) = 5\)`,
          { graph: { xmin: -3, xmax: 5, ymin: -25, ymax: 15, ystep: 5, h: 320, draw: () => ({ fns: [{ f: cub }], points: [{ x: -1, y: 10, label: "max (−1, 10)" }, { x: 3, y: -22, label: "min (3, −22)", dy: 20 }, { x: 1, y: -6, cls: "c3", label: "infl. (1, −6)" }, { x: 0, y: 5, cls: "c4", label: "(0, 5)" }] }) } },
        ],
        answer: R`Max \((-1,\ 10)\), min \((3,\ -22)\), inflexionspunkt \((1,\ -6)\)`,
      },
      {
        q: { text: R`Grafen visar <strong>derivatan</strong> \(f'\) till en funktion \(f\). Var har \(f\) max, min och inflexionspunkt?`, graph: { xmin: -3, xmax: 5, ymin: -5, ymax: 6, h: 280, ylabel: "y = f′(x)", alt: "Grafen till f′", draw: () => ({ fns: [{ f: (x) => x * x - 2 * x - 3, cls: "c3" }] }) } },
        hints: [R`Där \(f'\) skär x-axeln är \(f'(x) = 0\). Hur byter \(f'\) tecken där?`, R`En inflexionspunkt hos \(f\) är där \(f'\) har en extrempunkt.`],
        steps: [
          R`\(f'\) skär x-axeln i \(x = -1\) och \(x = 3\).`,
          R`I \(x = -1\) byter \(f'\) från \(+\) till \(-\) ⇒ \(f\) har en <strong>maximipunkt</strong>.`,
          R`I \(x = 3\) byter \(f'\) från \(-\) till \(+\) ⇒ \(f\) har en <strong>minimipunkt</strong>.`,
          R`\(f'\) har sin minimipunkt i \(x = 1\) ⇒ \(f\) har en <strong>inflexionspunkt</strong> där.`,
          { graph: { xmin: -3, xmax: 5, ymin: -5, ymax: 6, h: 280, draw: () => ({ areas: [{ f: (x) => x * x - 2 * x - 3, a: -3, b: -1, cls: "f3" }, { f: (x) => x * x - 2 * x - 3, a: -1, b: 3, cls: "f4" }, { f: (x) => x * x - 2 * x - 3, a: 3, b: 5, cls: "f3" }], fns: [{ f: (x) => x * x - 2 * x - 3, cls: "c3" }], labels: [{ x: -2.7, y: 1, text: "f växer" }, { x: 1, y: -1.5, text: "f avtar", anchor: "middle" }, { x: 3.4, y: 1, text: "f växer" }] }) } },
        ],
        answer: R`Max i \(x = -1\), min i \(x = 3\), inflexionspunkt i \(x = 1\)`,
      },
      {
        q: R`Bestäm extrempunkter och asymptoter till \(f(x) = x + \dfrac{9}{x}\).`,
        hints: [R`Skriv \(\frac{9}{x} = 9x^{-1}\) och derivera.`, R`\(f'(x) = 1 - \frac{9}{x^2}\).`],
        steps: [R`Asymptoter: \(x = 0\) (lodrät) och \(y = x\) (sned)`, R`\(f'(x) = 1 - \dfrac{9}{x^2} = 0 \Rightarrow x^2 = 9 \Rightarrow x = \pm 3\)`, R`\(f''(x) = \dfrac{18}{x^3}\): \(\;f''(3) > 0\) ⇒ min, \(\;f''(-3) < 0\) ⇒ max`, R`\(f(3) = 3 + 3 = 6\), \(\;f(-3) = -6\)`],
        answer: R`Max \((-3,\ -6)\), min \((3,\ 6)\), asymptoter \(x = 0\) och \(y = x\)`,
      },
    ],
    exercises: [
      { q: R`Bestäm inflexionspunkten till \(f(x) = x^3 - 6x^2 + 4\).`, answer: R`\((2,\ -12)\)`, steps: [R`\(f''(x) = 6x - 12 = 0 \Rightarrow x = 2\)`, R`\(f(2) = 8 - 24 + 4 = -12\)`] },
      { q: R`Bestäm inflexionspunkterna till \(f(x) = x^4 - 6x^2\).`, answer: R`\((-1,\ -5)\) och \((1,\ -5)\)`, steps: [R`\(f''(x) = 12x^2 - 12 = 0 \Rightarrow x = \pm 1\)`, R`\(f''\) byter tecken i båda punkterna, \(f(\pm 1) = 1 - 6 = -5\)`] },
      { q: R`Derivatan till en funktion är \(f'(x) = (x - 2)^2\). Vad har \(f\) för sorts punkt där \(x = 2\)?`, answer: "En terrasspunkt", steps: [R`\(f'(x) \ge 0\) på båda sidor – inget teckenbyte.`] },
      { q: R`\(f'(x)\) är positiv för \(x < 2\) och negativ för \(x > 2\). Vad har \(f\) i \(x = 2\)?`, answer: "En maximipunkt" },
      { q: R`Bestäm extrempunkterna och asymptoterna till \(f(x) = 4x + \dfrac{1}{x}\).`, answer: R`Max \((-\tfrac{1}{2},\ -4)\), min \((\tfrac{1}{2},\ 4)\), asymptoter \(x = 0\) och \(y = 4x\)`, steps: [R`\(f'(x) = 4 - \frac{1}{x^2} = 0 \Rightarrow x = \pm\frac{1}{2}\)`, R`\(f(\tfrac{1}{2}) = 2 + 2 = 4\)`] },
      { q: "Sant eller falskt: Om f′(a) = 0 har f alltid en max- eller minimipunkt i x = a.", answer: R`Falskt – det kan vara en terrasspunkt, t.ex. \(f(x) = x^3\) i \(x = 0\).` },
      { q: { text: R`Grafen visar \(f'\). För vilka \(x\) är \(f\) avtagande?`, graph: { xmin: -4, xmax: 4, ymin: -4, ymax: 5, h: 260, ylabel: "y = f′(x)", alt: "Grafen till f′", draw: () => ({ fns: [{ f: (x) => -(x + 2) * (x - 1), cls: "c3" }] }) } }, answer: R`\(x \le -2\) och \(x \ge 1\)`, steps: [R`\(f\) avtar där \(f'(x) \le 0\), alltså där grafen ligger under x-axeln.`] },
    ],
  });
})();
