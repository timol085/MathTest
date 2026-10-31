// Matte 3c – Integraler
(() => {
  const R = String.raw;
  const { fmt, tangent } = window.LH;
  const L = window.LESSONS;
  const CH = "Integraler";

  // ------------------------------------------------------------------
  L.push({
    id: "primitiva-funktioner",
    chapter: CH,
    title: "Primitiva funktioner",
    intro: "Att derivera baklänges: vilken funktion har den här derivatan?",
    theory: [
      {
        title: "Derivera baklänges",
        text: R`<p>Om \(F'(x) = f(x)\) säger man att \(F\) är en <strong>primitiv funktion</strong> till \(f\).</p>
<p>Exempel: \(F(x) = x^2\) är en primitiv funktion till \(f(x) = 2x\), eftersom \(D(x^2) = 2x\).</p>
<p>Men även \(x^2 + 5\) och \(x^2 - 3\) har derivatan \(2x\) – konstanten försvinner ju vid derivering.</p>`,
        rule: R`Alla primitiva funktioner till \(f(x) = 2x\): \(\quad F(x) = x^2 + C\)`,
      },
      {
        title: "En hel familj av kurvor",
        text: R`<p>Här är \(F(x) = \frac{x^2}{2} + C\), alla primitiva funktioner till \(f(x) = x\). Ändra \(C\): kurvan flyttas upp och ner, men lutningen i varje x-värde är densamma.</p>`,
        graph: {
          xmin: -3, xmax: 3, ymin: -4, ymax: 6, alt: "Primitiva funktioner x²/2 + C",
          sliders: [{ key: "C", label: R`\(C\)`, min: -3, max: 3, step: 0.5, value: 1 }],
          draw: ({ C }) => {
            const F = (x) => x * x / 2 + C;
            return {
              fns: [-2, 0, 2].map((c) => ({ f: (x) => x * x / 2 + c, cls: "cm", dash: true })).concat([{ f: F }]),
              lines: [tangent(F, 1, 1, 0, 2.2)],
              points: [{ x: 1, y: F(1), cls: "c2" }],
            };
          },
          caption: ({ C }) => R`\(F(x) = \frac{x^2}{2} ${C < 0 ? "-" : "+"} ${fmt(Math.abs(C))}\): \(\;F'(1) = 1\) – oavsett värdet på \(C\).`,
        },
      },
      {
        title: "Regler",
        text: "<p>Varje deriveringsregel ger en regel baklänges:</p>",
        rule: R`\(f(x) = k \;\Rightarrow\; F(x) = kx + C\)<br><br>
\(f(x) = x^n \;\Rightarrow\; F(x) = \dfrac{x^{n+1}}{n+1} + C \quad (n \neq -1)\)<br><br>
\(f(x) = e^{kx} \;\Rightarrow\; F(x) = \dfrac{e^{kx}}{k} + C\)<br><br>
\(f(x) = a^x \;\Rightarrow\; F(x) = \dfrac{a^x}{\ln a} + C\)`,
        note: "Kontrollera alltid genom att derivera ditt svar – då ska du få tillbaka f(x).",
      },
      {
        title: "Ett villkor bestämmer C",
        text: R`<p>Om man vet ett värde, t.ex. \(F(1) = 5\), kan man räkna ut \(C\).</p>
<p>\(f(x) = 3x^2 + 2 \Rightarrow F(x) = x^3 + 2x + C\)</p>
<p>\(F(1) = 1 + 2 + C = 5 \Rightarrow C = 2\), alltså \(F(x) = x^3 + 2x + 2\).</p>`,
      },
    ],
    examples: [
      {
        q: R`Bestäm alla primitiva funktioner till \(f(x) = 6x^2 - 4x + 3\).`,
        hints: [R`Öka exponenten med 1 och dela med den nya exponenten.`, R`\(6x^2 \to \frac{6x^3}{3}\).`],
        steps: [R`\(6x^2 \to \frac{6x^3}{3} = 2x^3\)`, R`\(-4x \to \frac{-4x^2}{2} = -2x^2\)`, R`\(3 \to 3x\)`, R`Kontroll: \(D(2x^3 - 2x^2 + 3x) = 6x^2 - 4x + 3\) ✓`],
        answer: R`\(F(x) = 2x^3 - 2x^2 + 3x + C\)`,
      },
      {
        q: R`Bestäm alla primitiva funktioner till \(f(x) = 4e^{2x} + \dfrac{1}{x^2}\).`,
        hints: [R`Primitiv till \(e^{2x}\) är \(\frac{e^{2x}}{2}\).`, R`Skriv \(\frac{1}{x^2} = x^{-2}\) och använd potensregeln.`],
        steps: [R`\(4e^{2x} \to 4 \cdot \frac{e^{2x}}{2} = 2e^{2x}\)`, R`\(x^{-2} \to \frac{x^{-1}}{-1} = -\frac{1}{x}\)`],
        answer: R`\(F(x) = 2e^{2x} - \dfrac{1}{x} + C\)`,
      },
      {
        q: R`Bestäm den primitiva funktion till \(f(x) = 3x^2 + 2\) som uppfyller \(F(1) = 5\).`,
        hints: [R`Ta fram \(F(x) = x^3 + 2x + C\) först.`, R`Sätt in \(x = 1\) och lös ut \(C\).`],
        steps: [R`\(F(x) = x^3 + 2x + C\)`, R`\(F(1) = 1 + 2 + C = 5 \Rightarrow C = 2\)`],
        answer: R`\(F(x) = x^3 + 2x + 2\)`,
      },
    ],
    exercises: [
      { q: R`Bestäm alla primitiva funktioner till \(f(x) = 8x^3\).`, answer: R`\(F(x) = 2x^4 + C\)` },
      { q: R`Bestäm alla primitiva funktioner till \(f(x) = x^2 - x + 1\).`, answer: R`\(F(x) = \dfrac{x^3}{3} - \dfrac{x^2}{2} + x + C\)` },
      { q: R`Bestäm alla primitiva funktioner till \(f(x) = e^{3x}\).`, answer: R`\(F(x) = \dfrac{e^{3x}}{3} + C\)` },
      { q: R`Bestäm alla primitiva funktioner till \(f(x) = 5\).`, answer: R`\(F(x) = 5x + C\)` },
      { q: R`Bestäm den primitiva funktion till \(f(x) = 2x + 3\) som uppfyller \(F(0) = 4\).`, answer: R`\(F(x) = x^2 + 3x + 4\)`, steps: [R`\(F(x) = x^2 + 3x + C\), \(F(0) = C = 4\)`] },
      { q: R`Bestäm alla primitiva funktioner till \(f(x) = 6\sqrt{x}\).`, hint: R`\(\sqrt{x} = x^{1/2}\). Den nya exponenten blir \(\frac{3}{2}\).`, answer: R`\(F(x) = 4x^{3/2} + C = 4x\sqrt{x} + C\)`, steps: [R`\(6x^{1/2} \to 6 \cdot \frac{x^{3/2}}{3/2} = 4x^{3/2}\)`] },
    ],
  });

  // ------------------------------------------------------------------
  const fq = (x) => x * x / 2 + 1;
  L.push({
    id: "integral-som-area",
    chapter: CH,
    title: "Integralen som area",
    intro: "Fyll området under en kurva med rektanglar – integralen är vad summan närmar sig.",
    theory: [
      {
        title: "Problemet",
        text: R`<p>Hur stor är arean mellan kurvan \(f(x) = \frac{x^2}{2} + 1\) och x-axeln, från \(x = 0\) till \(x = 3\)? Kurvan är böjd, så vi kan inte använda någon vanlig areaformel.</p>
<p>Idé: fyll området med smala <strong>rektanglar</strong> och summera deras areor.</p>`,
      },
      {
        title: "Fler rektanglar – bättre approximation",
        text: R`<p>Varje rektangel har bredden \(\Delta x = \frac{3}{n}\) och höjden = funktionsvärdet i dess vänstra kant. Öka antalet \(n\):</p>`,
        graph: {
          xmin: -0.5, xmax: 3.5, ymin: -0.5, ymax: 6, alt: "Rektanglar under kurvan",
          sliders: [{ key: "n", label: R`\(n\)`, min: 1, max: 40, step: 1, value: 4 }],
          draw: ({ n }) => {
            const w = 3 / n;
            const rects = [];
            for (let i = 0; i < n; i++) rects.push({ x: i * w, w, y: fq(i * w) });
            return { rects, fns: [{ f: fq }], labels: [{ x: 3.05, y: 5.6, text: "f(x)" }] };
          },
          caption: ({ n }) => {
            const w = 3 / n;
            let s = 0;
            for (let i = 0; i < n; i++) s += fq(i * w) * w;
            return R`Summan av \(${n}\) rektanglar: \(\approx ${fmt(s, 3)}\). \(\quad\) Exakt area: \(7{,}5\).`;
          },
        },
        note: "Med vänsterkanter blir summan lite för liten här, eftersom kurvan växer. Ju fler rektanglar desto mindre fel.",
      },
      {
        title: "Integralen",
        text: R`<p>Det värde som summan närmar sig när rektanglarna blir oändligt smala kallas <strong>integralen</strong> av \(f\) från \(a\) till \(b\):</p>`,
        rule: R`\(\displaystyle\int_a^b f(x)\,dx\)`,
        note: R`\(a\) och \(b\) är <strong>integrationsgränser</strong>, \(f(x)\) är <strong>integranden</strong> och \(dx\) visar att vi integrerar med avseende på \(x\). Tecknet ∫ är ett utdraget S – för "summa".`,
      },
      {
        title: "Integralkalkylens huvudsats",
        text: R`<p>Det fantastiska är att arean kan beräknas med en <strong>primitiv funktion</strong> \(F\):</p>`,
        rule: R`\(\displaystyle\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)\)`,
        graph: { xmin: -0.5, xmax: 3.5, ymin: -0.5, ymax: 6, h: 260, draw: () => ({ areas: [{ f: fq, a: 0, b: 3 }], fns: [{ f: fq }], labels: [{ x: 1.5, y: 1.2, text: "7,5", anchor: "middle" }] }) },
        note: R`\(F(x) = \frac{x^3}{6} + x\) ger \(F(3) - F(0) = \frac{27}{6} + 3 - 0 = 7{,}5\). Precis vad rektanglarna närmade sig!`,
      },
      {
        title: "Kontroll med geometri",
        text: R`<p>För raka linjer kan man kontrollera med vanliga areaformler. \(\int_0^3 x\,dx\) är en triangel med bas 3 och höjd 3:</p>`,
        graph: { xmin: -0.5, xmax: 4, ymin: -0.5, ymax: 4, h: 240, draw: () => ({ areas: [{ f: (x) => x, a: 0, b: 3 }], fns: [{ f: (x) => x }], labels: [{ x: 2, y: 0.6, text: "4,5", anchor: "middle" }] }) },
        rule: R`\(\dfrac{3 \cdot 3}{2} = 4{,}5 \qquad \Big[\tfrac{x^2}{2}\Big]_0^3 = \tfrac{9}{2} - 0 = 4{,}5\) ✓`,
      },
    ],
    examples: [
      {
        q: R`Beräkna \(\displaystyle\int_0^3 \left(\frac{x^2}{2} + 1\right) dx\) och jämför med rektanglarna i genomgången.`,
        hints: [R`En primitiv funktion är \(F(x) = \frac{x^3}{6} + x\).`, R`Beräkna \(F(3) - F(0)\).`],
        steps: [R`\(F(x) = \frac{x^3}{6} + x\)`, R`\(F(3) = \frac{27}{6} + 3 = 7{,}5\) och \(F(0) = 0\)`, R`\(\int_0^3 = 7{,}5 - 0 = 7{,}5\)`],
        answer: R`\(7{,}5\)`,
      },
      {
        q: R`Beräkna \(\displaystyle\int_1^5 (x - 1)\,dx\) både med geometri och med en primitiv funktion.`,
        hints: ["Rita linjen y = x − 1 mellan x = 1 och x = 5. Vilken figur bildas?", R`Primitiv funktion: \(\frac{x^2}{2} - x\).`],
        steps: [
          { graph: { xmin: -0.5, xmax: 6, ymin: -1, ymax: 5, h: 240, draw: () => ({ areas: [{ f: (x) => x - 1, a: 1, b: 5 }], fns: [{ f: (x) => x - 1 }] }) } },
          R`Geometri: triangel med bas 4 och höjd 4: \(\frac{4 \cdot 4}{2} = 8\)`,
          R`Integral: \(\Big[\frac{x^2}{2} - x\Big]_1^5 = \left(\frac{25}{2} - 5\right) - \left(\frac{1}{2} - 1\right) = 7{,}5 + 0{,}5 = 8\)`,
        ],
        answer: R`\(8\)`,
      },
    ],
    exercises: [
      { q: R`Beräkna \(\displaystyle\int_0^5 3\,dx\). Rita gärna.`, answer: R`\(15\)`, steps: ["En rektangel med bredd 5 och höjd 3."] },
      { q: R`Beräkna \(\displaystyle\int_0^4 x\,dx\).`, answer: R`\(8\)`, steps: [R`Triangel: \(\frac{4 \cdot 4}{2} = 8\)`] },
      { q: R`Beräkna \(\displaystyle\int_1^3 2x\,dx\).`, answer: R`\(8\)`, steps: [R`\(\Big[x^2\Big]_1^3 = 9 - 1 = 8\)`] },
      { q: R`Beräkna \(\displaystyle\int_0^2 (4 - 2x)\,dx\) med geometri.`, answer: R`\(4\)`, steps: [R`Linjen går från \((0, 4)\) till \((2, 0)\): triangel med area \(\frac{2 \cdot 4}{2} = 4\)`] },
      { q: R`Approximera arean under \(f(x) = x^2\) mellan \(x = 0\) och \(x = 2\) med 4 rektanglar (vänsterkant). Jämför med det exakta värdet \(\frac{8}{3}\).`, hint: R`Bredden är \(0{,}5\). Höjderna är \(f(0),\ f(0{,}5),\ f(1),\ f(1{,}5)\).`, answer: R`\(1{,}75\) (för litet jämfört med \(\frac{8}{3} \approx 2{,}67\))`, steps: [R`\(0{,}5 \cdot (0 + 0{,}25 + 1 + 2{,}25) = 0{,}5 \cdot 3{,}5 = 1{,}75\)`] },
    ],
  });

  // ------------------------------------------------------------------
  L.push({
    id: "berakna-integraler",
    chapter: CH,
    title: "Beräkna integraler",
    intro: "Primitiv funktion, sätt in gränserna – och se upp när kurvan går under x-axeln.",
    theory: [
      {
        title: "Arbetsgång",
        rule: R`\(\displaystyle\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)\)`,
        text: R`<ol><li>Bestäm en primitiv funktion \(F\) (konstanten \(C\) behövs inte – den tar ut sig själv).</li><li>Sätt in övre gränsen, sedan undre.</li><li>Subtrahera.</li></ol>
<p>Exempel: \(\displaystyle\int_1^2 (3x^2 + 2x)\,dx = \Big[x^3 + x^2\Big]_1^2 = (8 + 4) - (1 + 1) = 10\)</p>`,
      },
      {
        title: "När kurvan ligger under x-axeln",
        text: R`<p>Där \(f(x) < 0\) blir rektanglarnas höjder negativa – <strong>integralen blir negativ</strong>. Arean är ändå positiv.</p>
<p>\(\displaystyle\int_{-2}^{2} (x^2 - 4)\,dx = \Big[\tfrac{x^3}{3} - 4x\Big]_{-2}^{2} = -\tfrac{32}{3}\). Arean är \(\frac{32}{3}\).</p>`,
        graph: { xmin: -3, xmax: 3, ymin: -5, ymax: 3, h: 280, draw: () => ({ areas: [{ f: (x) => x * x - 4, a: -2, b: 2, cls: "f4" }], fns: [{ f: (x) => x * x - 4 }], labels: [{ x: 0, y: -2, text: "integral = −32/3", anchor: "middle", cls: "c4" }] }) },
      },
      {
        title: "När kurvan korsar x-axeln",
        text: R`<p>Delar av området ovanför och under axeln tar ut varandra i integralen. Vill man ha <strong>arean</strong> delar man upp vid nollställena. Dra gränsen \(b\) och se:</p>`,
        graph: {
          xmin: -0.5, xmax: 2.5, ymin: -1.5, ymax: 3.5, alt: "Integral av x² − 1",
          sliders: [{ key: "b", label: R`\(b\)`, min: 0.1, max: 2.4, step: 0.1, value: 2 }],
          draw: ({ b }) => {
            const f = (x) => x * x - 1;
            const areas = [{ f, a: 0, b: Math.min(b, 1), cls: "f4" }];
            if (b > 1) areas.push({ f, a: 1, b, cls: "f3" });
            return { areas, fns: [{ f }] };
          },
          caption: ({ b }) => {
            const F = (x) => x ** 3 / 3 - x;
            const integral = F(b) - F(0);
            const area = b <= 1 ? -integral : -(F(1) - F(0)) + (F(b) - F(1));
            return R`\(\displaystyle\int_0^{${fmt(b, 1)}} (x^2 - 1)\,dx = ${fmt(integral, 3)}\) \(\quad\) men arean är \(${fmt(area, 3)}\)`;
          },
        },
        note: R`Vid \(b = 2\): \(\int_0^1 = -\frac{2}{3}\) och \(\int_1^2 = \frac{4}{3}\). Integralen blir \(\frac{2}{3}\) men arean \(\frac{2}{3} + \frac{4}{3} = 2\).`,
      },
      {
        title: "Exponentialfunktioner",
        text: R`<p>\(\displaystyle\int_0^1 e^x\,dx = \Big[e^x\Big]_0^1 = e^1 - e^0 = e - 1 \approx 1{,}718\)</p>`,
      },
    ],
    examples: [
      {
        q: R`Beräkna \(\displaystyle\int_0^2 (x^3 - x)\,dx\).`,
        hints: [R`\(F(x) = \frac{x^4}{4} - \frac{x^2}{2}\).`],
        steps: [R`\(\Big[\frac{x^4}{4} - \frac{x^2}{2}\Big]_0^2 = (4 - 2) - 0 = 2\)`],
        answer: R`\(2\)`,
      },
      {
        q: R`Beräkna \(\displaystyle\int_0^1 4e^{2x}\,dx\) exakt och med två decimaler.`,
        hints: [R`Primitiv till \(4e^{2x}\) är \(\frac{4e^{2x}}{2} = 2e^{2x}\).`, R`\(e^0 = 1\).`],
        steps: [R`\(\Big[2e^{2x}\Big]_0^1 = 2e^2 - 2e^0 = 2e^2 - 2\)`, R`\(\approx 2 \cdot 7{,}389 - 2 \approx 12{,}78\)`],
        answer: R`\(2e^2 - 2 \approx 12{,}78\)`,
      },
      {
        q: R`Beräkna arean av området mellan kurvan \(y = x^2 - 2x\) och x-axeln.`,
        hints: [R`Nollställen: \(x(x - 2) = 0\).`, "Kurvan ligger under x-axeln mellan nollställena – integralen blir negativ."],
        steps: [
          R`Nollställen \(x = 0\) och \(x = 2\).`,
          { graph: { xmin: -0.5, xmax: 2.5, ymin: -1.5, ymax: 1.5, h: 220, draw: () => ({ areas: [{ f: (x) => x * x - 2 * x, a: 0, b: 2, cls: "f4" }], fns: [{ f: (x) => x * x - 2 * x }] }) } },
          R`\(\displaystyle\int_0^2 (x^2 - 2x)\,dx = \Big[\tfrac{x^3}{3} - x^2\Big]_0^2 = \tfrac{8}{3} - 4 = -\tfrac{4}{3}\)`,
          R`Arean är beloppet: \(\frac{4}{3}\).`,
        ],
        answer: R`\(\frac{4}{3}\) a.e.`,
      },
    ],
    exercises: [
      { q: R`Beräkna \(\displaystyle\int_0^3 x^2\,dx\).`, answer: R`\(9\)`, steps: [R`\(\Big[\frac{x^3}{3}\Big]_0^3 = 9\)`] },
      { q: R`Beräkna \(\displaystyle\int_1^4 (2x - 1)\,dx\).`, answer: R`\(12\)`, steps: [R`\(\Big[x^2 - x\Big]_1^4 = 12 - 0 = 12\)`] },
      { q: R`Beräkna \(\displaystyle\int_{-1}^{1} (x^3 + 1)\,dx\).`, answer: R`\(2\)`, steps: [R`\(\Big[\frac{x^4}{4} + x\Big]_{-1}^{1} = \frac{5}{4} - \left(-\frac{3}{4}\right) = 2\)`] },
      { q: R`Beräkna \(\displaystyle\int_0^2 e^x\,dx\) exakt och med två decimaler.`, answer: R`\(e^2 - 1 \approx 6{,}39\)` },
      { q: R`Beräkna \(\displaystyle\int_1^4 \frac{1}{\sqrt{x}}\,dx\).`, hint: R`\(\frac{1}{\sqrt{x}} = x^{-1/2}\), primitiv \(2x^{1/2}\).`, answer: R`\(2\)`, steps: [R`\(\Big[2\sqrt{x}\Big]_1^4 = 4 - 2 = 2\)`] },
      { q: R`Beräkna arean mellan kurvan \(y = 4 - x^2\) och x-axeln.`, answer: R`\(\frac{32}{3} \approx 10{,}67\) a.e.`, steps: [R`Nollställen \(\pm 2\)`, R`\(\Big[4x - \frac{x^3}{3}\Big]_{-2}^{2} = \frac{16}{3} - \left(-\frac{16}{3}\right) = \frac{32}{3}\)`] },
    ],
  });

  // ------------------------------------------------------------------
  L.push({
    id: "area-mellan-kurvor",
    chapter: CH,
    title: "Area mellan kurvor",
    intro: "Övre kurva minus undre kurva – integrera mellan skärningspunkterna.",
    theory: [
      {
        title: "Övre minus undre",
        text: R`<p>Om \(f(x) \ge g(x)\) på intervallet \(a \le x \le b\) är arean mellan kurvorna:</p>`,
        rule: R`\(A = \displaystyle\int_a^b \big(f(x) - g(x)\big)\,dx\)`,
        note: "Det fungerar även om kurvorna ligger under x-axeln – det är skillnaden i höjd som räknas.",
      },
      {
        title: "Exempel i koordinatsystemet",
        text: R`<p>Linjen \(f(x) = x + 2\) och parabeln \(g(x) = x^2\) avgränsar ett område:</p>`,
        graph: { xmin: -2, xmax: 3, ymin: -1, ymax: 6, alt: "Area mellan linje och parabel", draw: () => ({ areas: [{ f: (x) => x + 2, g: (x) => x * x, a: -1, b: 2 }], fns: [{ f: (x) => x + 2, cls: "c2" }, { f: (x) => x * x }], points: [{ x: -1, y: 1, label: "(−1, 1)", dx: -8, anchor: "end" }, { x: 2, y: 4, label: "(2, 4)" }], labels: [{ x: 2.6, y: 5.2, text: "y = x + 2", cls: "c2" }, { x: -1.9, y: 3.4, text: "y = x²" }] }) },
      },
      {
        title: "Recept",
        text: R`<ol>
<li><strong>Skärningspunkter</strong>: lös \(f(x) = g(x)\). Här: \(x^2 = x + 2 \Rightarrow x^2 - x - 2 = 0 \Rightarrow x = -1,\ x = 2\).</li>
<li><strong>Vilken ligger överst?</strong> Testa ett x-värde emellan, t.ex. \(x = 0\): \(f(0) = 2 > g(0) = 0\).</li>
<li><strong>Integrera</strong> skillnaden.</li>
</ol>
<p>\(A = \displaystyle\int_{-1}^{2} (x + 2 - x^2)\,dx = \Big[\tfrac{x^2}{2} + 2x - \tfrac{x^3}{3}\Big]_{-1}^{2} = \tfrac{10}{3} - \left(-\tfrac{7}{6}\right) = \tfrac{9}{2}\)</p>`,
        rule: R`\(A = 4{,}5\) a.e.`,
      },
    ],
    examples: [
      {
        q: R`Beräkna arean mellan \(y = x + 2\) och \(y = x^2\).`,
        hints: ["Hitta skärningspunkterna genom att sätta uttrycken lika.", R`Linjen ligger överst. Integrera \(x + 2 - x^2\) från \(-1\) till \(2\).`],
        steps: [
          R`\(x^2 = x + 2 \Rightarrow x = -1,\ x = 2\)`,
          R`\(F(x) = \frac{x^2}{2} + 2x - \frac{x^3}{3}\)`,
          R`\(F(2) = 2 + 4 - \frac{8}{3} = \frac{10}{3}\), \(\;F(-1) = \frac{1}{2} - 2 + \frac{1}{3} = -\frac{7}{6}\)`,
          R`\(\frac{10}{3} + \frac{7}{6} = \frac{27}{6} = 4{,}5\)`,
        ],
        answer: R`\(4{,}5\) a.e.`,
      },
      {
        q: R`Beräkna arean mellan kurvorna \(y = 4 - x^2\) och \(y = x^2 - 4\).`,
        hints: [R`Skärning: \(4 - x^2 = x^2 - 4 \Rightarrow x = \pm 2\).`, R`Skillnaden är \((4 - x^2) - (x^2 - 4) = 8 - 2x^2\).`],
        steps: [
          { graph: { xmin: -3, xmax: 3, ymin: -5, ymax: 5, h: 300, draw: () => ({ areas: [{ f: (x) => 4 - x * x, g: (x) => x * x - 4, a: -2, b: 2 }], fns: [{ f: (x) => 4 - x * x }, { f: (x) => x * x - 4, cls: "c2" }] }) } },
          R`\(A = \displaystyle\int_{-2}^{2} (8 - 2x^2)\,dx = \Big[8x - \tfrac{2x^3}{3}\Big]_{-2}^{2}\)`,
          R`\(= \left(16 - \tfrac{16}{3}\right) - \left(-16 + \tfrac{16}{3}\right) = \tfrac{64}{3}\)`,
        ],
        answer: R`\(\frac{64}{3} \approx 21{,}3\) a.e.`,
      },
    ],
    exercises: [
      { q: R`Beräkna arean mellan \(y = x\) och \(y = x^2\).`, answer: R`\(\frac{1}{6}\)`, steps: [R`Skärning \(x = 0,\ 1\); \(y = x\) överst`, R`\(\Big[\frac{x^2}{2} - \frac{x^3}{3}\Big]_0^1 = \frac{1}{6}\)`] },
      { q: R`Beräkna arean mellan \(y = 6\) och \(y = x^2 + 2\).`, answer: R`\(\frac{32}{3}\)`, steps: [R`\(x^2 + 2 = 6 \Rightarrow x = \pm 2\)`, R`\(\int_{-2}^{2}(4 - x^2)\,dx = \frac{32}{3}\)`] },
      { q: R`Beräkna arean mellan \(y = 2x\) och \(y = x^2\).`, answer: R`\(\frac{4}{3}\)`, steps: [R`Skärning \(x = 0,\ 2\)`, R`\(\Big[x^2 - \frac{x^3}{3}\Big]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}\)`] },
      { q: R`Beräkna arean mellan \(y = e^x\), \(y = 1\) och linjen \(x = 1\).`, hint: R`Kurvorna möts i \(x = 0\). \(e^x\) ligger överst för \(x > 0\).`, answer: R`\(e - 2 \approx 0{,}72\)`, steps: [R`\(\int_0^1 (e^x - 1)\,dx = \Big[e^x - x\Big]_0^1 = (e - 1) - 1 = e - 2\)`] },
      { q: R`Beräkna arean mellan \(y = x\) och \(y = x^3\) i första kvadranten.`, answer: R`\(\frac{1}{4}\)`, steps: [R`Skärning \(x = 0,\ 1\); \(y = x\) överst`, R`\(\Big[\frac{x^2}{2} - \frac{x^4}{4}\Big]_0^1 = \frac{1}{4}\)`] },
    ],
  });

  // ------------------------------------------------------------------
  L.push({
    id: "integraler-tillampningar",
    chapter: CH,
    title: "Tillämpningar av integraler",
    intro: "Från hastighet till sträcka, från flöde till total mängd.",
    theory: [
      {
        title: "Integralen av en förändringshastighet",
        text: R`<p>Om \(f'(t)\) är förändringshastigheten för något, så är integralen av den den <strong>totala förändringen</strong>:</p>`,
        rule: R`\(\displaystyle\int_a^b f'(t)\,dt = f(b) - f(a)\)`,
      },
      {
        title: "Hastighet → sträcka",
        text: R`<p>En cyklist har hastigheten \(v(t) = 2t + 1\) m/s. Arean under hastighetsgrafen är den <strong>sträcka</strong> cyklisten har färdats.</p>`,
        graph: {
          xmin: -0.3, xmax: 5, ymin: -0.5, ymax: 10, xlabel: "t (s)", ylabel: "v (m/s)", alt: "Sträcka som area",
          sliders: [{ key: "T", label: R`\(t\)`, min: 0.5, max: 4, step: 0.5, value: 4 }],
          draw: ({ T }) => ({ areas: [{ f: (t) => 2 * t + 1, a: 0, b: T, cls: "f3" }], fns: [{ f: (t) => 2 * t + 1 }] }),
          caption: ({ T }) => R`Sträcka de första \(${fmt(T)}\) sekunderna: \(\displaystyle\int_0^{${fmt(T)}} (2t + 1)\,dt = \Big[t^2 + t\Big]_0^{${fmt(T)}} = ${fmt(T * T + T)}\) m`,
        },
      },
      {
        title: "Enheter",
        text: R`<p>Integralens enhet är <em>(y-axelns enhet)</em> · <em>(x-axelns enhet)</em>:</p>
<ul><li>m/s · s = <strong>m</strong></li><li>liter/minut · minut = <strong>liter</strong></li><li>personer/år · år = <strong>personer</strong></li></ul>`,
      },
    ],
    examples: [
      {
        q: R`En bil accelererar med hastigheten \(v(t) = 3t^2\) m/s. Hur långt kör den mellan \(t = 1\) och \(t = 3\) sekunder?`,
        hints: ["Sträckan är integralen av hastigheten.", R`Primitiv funktion: \(t^3\).`],
        steps: [R`\(\displaystyle\int_1^3 3t^2\,dt = \Big[t^3\Big]_1^3 = 27 - 1 = 26\)`],
        answer: "26 m",
      },
      {
        q: R`En tank fylls med hastigheten \(r(t) = 20e^{-0{,}1t}\) liter per minut. Hur mycket vatten rinner in under de första 10 minuterna?`,
        hints: [R`Primitiv till \(20e^{-0{,}1t}\) är \(\frac{20e^{-0{,}1t}}{-0{,}1} = -200e^{-0{,}1t}\).`],
        steps: [
          R`\(\displaystyle\int_0^{10} 20e^{-0{,}1t}\,dt = \Big[-200e^{-0{,}1t}\Big]_0^{10}\)`,
          R`\(= -200e^{-1} - (-200) = 200(1 - e^{-1}) \approx 126{,}4\)`,
        ],
        answer: "Ca 126 liter",
      },
    ],
    exercises: [
      { q: R`Ett föremål rör sig med hastigheten \(v(t) = 4t\) m/s. Hur långt rör det sig under de första 5 sekunderna?`, answer: "50 m", steps: [R`\(\Big[2t^2\Big]_0^5 = 50\)`] },
      { q: R`En befolkning ökar med \(N'(t) = 30 + 6t\) personer per år. Hur mycket ökar befolkningen under de första 10 åren?`, answer: "600 personer", steps: [R`\(\Big[30t + 3t^2\Big]_0^{10} = 300 + 300 = 600\)`] },
      { q: R`En bil bromsar med hastigheten \(v(t) = 10 - 2t\) m/s tills den står still. Hur lång är bromssträckan?`, hint: "När står bilen still?", answer: "25 m", steps: [R`\(v = 0\) när \(t = 5\)`, R`\(\Big[10t - t^2\Big]_0^5 = 50 - 25 = 25\)`] },
      { q: R`Olja läcker ut med hastigheten \(r(t) = 50e^{-0{,}5t}\) liter per timme. Hur mycket läcker ut under de första 4 timmarna?`, answer: "Ca 86,5 liter", steps: [R`\(\Big[-100e^{-0{,}5t}\Big]_0^4 = 100(1 - e^{-2}) \approx 86{,}5\)`] },
    ],
  });
})();
