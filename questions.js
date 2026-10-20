// Genererad av tools/generate_questions.py – redigera inte för hand.
window.QUESTIONS = [
 {
  "topic": "Algebra",
  "q": "Utveckla \\((x + 1)^2\\).",
  "choices": [
   "\\(x^{2} + 2x + 1\\)",
   "\\(x^{2} + 1\\)",
   "\\(x^{2} + x + 1\\)"
  ],
  "steps": [
   "Kvadreringsregeln: \\((p+q)^2 = p^2 + 2pq + q^2\\).",
   "\\((x + 1)^2 = x^2 + 2 \\cdot x \\cdot 1 + 1^2\\)",
   "\\(= x^{2} + 2x + 1\\)"
  ],
  "course": "2c",
  "id": "A001"
 },
 {
  "topic": "Algebra",
  "q": "Förenkla \\((4x + 9)(4x - 9)\\).",
  "choices": [
   "\\(16x^{2} - 81\\)",
   "\\(16x^{2} + 81\\)",
   "\\(16x^{2} - 72x - 81\\)"
  ],
  "steps": [
   "Konjugatregeln: \\((p+q)(p-q) = p^2 - q^2\\).",
   "\\((4x + 9)(4x - 9) = (4x)^2 - 9^2 = 16x^{2} - 81\\)"
  ],
  "course": "2c",
  "id": "A002"
 },
 {
  "topic": "Algebra",
  "q": "Faktorisera \\(x^{2} - 12x + 36\\) så långt som möjligt.",
  "choices": [
   "\\((x - 6)^2\\)",
   "\\((x + 6)^2\\)",
   "\\((x - 6)(x + 6)\\)"
  ],
  "steps": [
   "Känn igen kvadreringsregeln baklänges: \\(p^2 + 2pq + q^2 = (p+q)^2\\).",
   "\\(x^{2} - 12x + 36 = x^2 + 2 \\cdot x \\cdot (-6) + (-6)^2\\)",
   "\\(= (x - 6)^2\\)"
  ],
  "course": "2c",
  "id": "A003"
 },
 {
  "topic": "Andragradsekvationer",
  "q": "Lös ekvationen \\(2x^{2} - 12x - 32 = 0\\).",
  "choices": [
   "\\(x_1 = -2,\\; x_2 = 8\\)",
   "\\(x_1 = -8,\\; x_2 = 2\\)",
   "\\(x_1 = -8,\\; x_2 = -2\\)"
  ],
  "steps": [
   "Dela båda leden med \\(2\\): \\(x^{2} - 6x - 16 = 0\\).",
   "pq-formeln: \\(x = -\\frac{p}{2} \\pm \\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}\\) med \\(p = -6\\) och \\(q = -16\\).",
   "\\(x = 3 \\pm \\sqrt{3^2 - (-16)} = 3 \\pm \\sqrt{25} = 3 \\pm 5\\)",
   "\\(x_1 = -2\\) och \\(x_2 = 8\\)."
  ],
  "course": "2c",
  "id": "A004"
 },
 {
  "topic": "Andragradsekvationer",
  "q": "Lös ekvationen \\(5x^{2} - 405 = 0\\).",
  "choices": [
   "\\(x = \\pm 9\\)",
   "\\(x = 9\\)",
   "\\(x = \\pm 81\\)"
  ],
  "steps": [
   "Flytta över konstanten: \\(5x^{2} = 405\\).",
   "Dela med \\(5\\): \\(x^2 = 81\\).",
   "Dra roten ur – glöm inte den negativa roten: \\(x = \\pm\\sqrt{81} = \\pm 9\\)."
  ],
  "course": "2c",
  "id": "A005"
 },
 {
  "topic": "Andragradsekvationer",
  "q": "Lös ekvationen \\(4x^{2} + 4x = 0\\).",
  "choices": [
   "\\(x_1 = -1,\\; x_2 = 0\\)",
   "\\(x_1 = 0,\\; x_2 = 1\\)",
   "\\(x = -1\\)"
  ],
  "steps": [
   "Bryt ut \\(x\\): \\(x(4x + 4) = 0\\).",
   "Nollproduktmetoden: en produkt är noll om någon faktor är noll.",
   "\\(x = 0\\) eller \\(4x + 4 = 0\\) \\(\\Rightarrow x = -1\\)."
  ],
  "course": "2c",
  "id": "A006"
 },
 {
  "topic": "Ekvationssystem",
  "q": "Lös ekvationssystemet \\(\\begin{cases} y = -3x - 11 \\\\ -3x + y = 19 \\end{cases}\\)",
  "choices": [
   "\\(x = -5,\\; y = 4\\)",
   "\\(x = 4,\\; y = -5\\)",
   "\\(x = -5,\\; y = -4\\)"
  ],
  "steps": [
   "Sätt in \\(y = -3x - 11\\) i den andra ekvationen (substitutionsmetoden):",
   "\\(-3x + (-3x - 11) = 19\\)",
   "\\(-6x - 11 = 19 \\;\\Rightarrow\\; -6x = 30 \\;\\Rightarrow\\; x = -5\\)",
   "Sätt in \\(x = -5\\): \\(y = -3 \\cdot (-5) - 11 = 4\\)."
  ],
  "course": "2c",
  "id": "A007"
 },
 {
  "topic": "Ekvationssystem",
  "q": "Lös ekvationssystemet \\(\\begin{cases} x + y = -2 \\\\ 3x - y = -14 \\end{cases}\\)",
  "choices": [
   "\\(x = -4,\\; y = 2\\)",
   "\\(x = 2,\\; y = -4\\)",
   "\\(x = -4,\\; y = -2\\)"
  ],
  "steps": [
   "Addera ekvationerna så att \\(y\\) försvinner (additionsmetoden):",
   "\\(4x = -2 + (-14) = -16 \\;\\Rightarrow\\; x = -4\\)",
   "Sätt in i första ekvationen: \\((-4) + y = -2\\) \\(\\Rightarrow y = -2 - (-4) = 2\\)."
  ],
  "course": "2c",
  "id": "A008"
 },
 {
  "topic": "Räta linjen",
  "q": "En rät linje går genom punkterna \\((1,\\ 4)\\) och \\((-1,\\ -3)\\). Vilken är linjens riktningskoefficient?",
  "choices": [
   "\\(k = \\frac{7}{2}\\)",
   "\\(k = \\frac{2}{7}\\)",
   "\\(k = -\\frac{7}{2}\\)"
  ],
  "steps": [
   "Riktningskoefficienten: \\(k = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}\\).",
   "\\(k = \\frac{-3 - 4}{-1 - 1} = \\frac{-7}{-2} = \\frac{7}{2}\\)"
  ],
  "course": "2c",
  "id": "A009"
 },
 {
  "topic": "Räta linjen",
  "q": "Bestäm ekvationen för den räta linje som går genom \\((1,\\ 2)\\) och \\((3,\\ 6)\\).",
  "choices": [
   "\\(y = 2x\\)",
   "\\(y = 2x + 4\\)",
   "\\(y = -2x + 4\\)"
  ],
  "steps": [
   "\\(k = \\frac{6 - 2}{3 - 1} = \\frac{4}{2} = 2\\)",
   "Sätt in punkten \\((1,\\ 2)\\) i \\(y = 2x + m\\): \\(2 = 2 \\cdot 1 + m\\).",
   "\\(m = 2 - 2 = 0\\), alltså \\(y = 2x\\)."
  ],
  "course": "2c",
  "id": "A010"
 },
 {
  "topic": "Logaritmer",
  "q": "Beräkna \\(\\lg 1\\,000\\,000 + \\lg 100\\) utan räknare.",
  "choices": [
   "\\(8\\)",
   "\\(12\\)",
   "\\(9\\)"
  ],
  "steps": [
   "Använd att \\(\\lg 10^n = n\\).",
   "\\(\\lg 1\\,000\\,000 = \\lg 10^{6} = 6\\) och \\(\\lg 100 = \\lg 10^{2} = 2\\)",
   "\\(6 + 2 = 8\\)"
  ],
  "course": "2c",
  "id": "A011"
 },
 {
  "topic": "Logaritmer",
  "q": "Lös ekvationen \\(\\lg x = -2\\).",
  "choices": [
   "\\(x = 0{,}01\\)",
   "\\(x = -20\\)",
   "\\(x = 100\\)"
  ],
  "steps": [
   "Definitionen av logaritm: \\(\\lg x = n \\;\\Leftrightarrow\\; x = 10^n\\).",
   "\\(x = 10^{-2} = 0{,}01\\)"
  ],
  "course": "2c",
  "id": "A012"
 },
 {
  "topic": "Logaritmer",
  "q": "Lös ekvationen \\(6 \\cdot 10^x = 12\\). Svara exakt och med tre decimaler.",
  "choices": [
   "\\(x = \\lg 2 \\approx 0{,}301\\)",
   "\\(x = \\lg 6 \\approx 0{,}778\\)",
   "\\(x = \\frac{\\lg 12}{6} \\approx 0{,}180\\)"
  ],
  "steps": [
   "Dela med \\(6\\): \\(10^x = \\frac{12}{6} = 2\\).",
   "Logaritmera: \\(x = \\lg 2 \\approx 0{,}301\\)."
  ],
  "course": "2c",
  "id": "A013"
 },
 {
  "topic": "Potenser och exponentialekvationer",
  "q": "Lös ekvationen \\(5 \\cdot 4^x = 320\\).",
  "choices": [
   "\\(x = 3\\)",
   "\\(x = 4\\)",
   "\\(x = 2\\)"
  ],
  "steps": [
   "Dela med \\(5\\): \\(4^x = 64\\).",
   "Skriv högerledet som en potens av \\(4\\): \\(64 = 4^{3}\\).",
   "Samma bas ger samma exponent: \\(x = 3\\)."
  ],
  "course": "2c",
  "id": "A014"
 },
 {
  "topic": "Potenser och exponentialekvationer",
  "q": "Ett belopp växer med 8 % per år. Efter hur många år har beloppet fördubblats? (En decimal.)",
  "choices": [
   "\\(9{,}0\\) år",
   "\\(12{,}5\\) år",
   "\\(6{,}2\\) år"
  ],
  "steps": [
   "Förändringsfaktorn är \\(1{,}08\\). Ställ upp: \\(1{,}08^x = 2\\).",
   "Logaritmera båda leden: \\(x \\cdot \\lg 1{,}08 = \\lg 2\\).",
   "\\(x = \\frac{\\lg 2}{\\lg 1{,}08} \\approx 9{,}0\\) år."
  ],
  "course": "2c",
  "id": "A015"
 },
 {
  "topic": "Potenser och exponentialekvationer",
  "q": "Värdet på en vara är \\(39\\,000\\) kr och minskar med 10 % per år. Vad är värdet efter 10 år? (Avrunda till hela kronor.)",
  "choices": [
   "\\(13\\,598\\) kr",
   "\\(15\\,109\\) kr",
   "\\(12\\,239\\) kr"
  ],
  "steps": [
   "En minskning med 10 % ger förändringsfaktorn \\(0{,}90\\).",
   "Efter 10 år: \\(39\\,000 \\cdot 0{,}90^{10} \\approx 13\\,598\\) kr."
  ],
  "course": "2c",
  "id": "A016"
 },
 {
  "topic": "Andragradsfunktioner",
  "q": "Bestäm koordinaterna för minimipunkten till \\(f(x) = 2x^{2} - 12x + 6\\).",
  "choices": [
   "\\((3,\\ -12)\\)",
   "\\((-3,\\ -12)\\)",
   "\\((3,\\ 6)\\)"
  ],
  "steps": [
   "Symmetrilinjen för \\(f(x) = ax^2 + bx + c\\) är \\(x = -\\frac{b}{2a}\\).",
   "\\(x = -\\frac{-12}{2 \\cdot 2} = 3\\)",
   "\\(f(3) = 2 \\cdot 3^{2} - 12 \\cdot 3 + 6 = -12\\)",
   "Positiv \\(x^2\\)-koefficient ger en minimipunkt: \\((3,\\ -12)\\)."
  ],
  "course": "2c",
  "id": "A017"
 },
 {
  "topic": "Koordinatgeometri",
  "q": "Beräkna avståndet mellan punkterna \\((4,\\ 2)\\) och \\((-4,\\ -13)\\).",
  "choices": [
   "\\(17\\) l.e.",
   "\\(23\\) l.e.",
   "\\(289\\) l.e."
  ],
  "steps": [
   "Avståndsformeln: \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\).",
   "\\(d = \\sqrt{(-4 - 4)^2 + (-13 - 2)^2} = \\sqrt{(-8)^2 + (-15)^2} = \\sqrt{289} = 17\\)"
  ],
  "course": "2c",
  "id": "A018"
 },
 {
  "topic": "Koordinatgeometri",
  "q": "Bestäm mittpunkten på sträckan mellan \\((8,\\ 8)\\) och \\((-8,\\ -1)\\).",
  "choices": [
   "\\((0,\\ \\frac{7}{2})\\)",
   "\\((-8,\\ -\\frac{9}{2})\\)",
   "\\((0,\\ 7)\\)"
  ],
  "steps": [
   "Mittpunktsformeln: \\(\\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right)\\).",
   "\\(\\left(\\frac{8 + (-8)}{2},\\ \\frac{8 + (-1)}{2}\\right) = (0,\\ \\frac{7}{2})\\)"
  ],
  "course": "2c",
  "id": "A019"
 },
 {
  "topic": "Geometri",
  "q": "En triangel är inskriven i en cirkel så att en av sidorna är cirkelns diameter. En av de andra vinklarna är \\(67^\\circ\\). Hur stor är den tredje vinkeln?",
  "choices": [
   "\\(23^\\circ\\)",
   "\\(113^\\circ\\)",
   "\\(67^\\circ\\)"
  ],
  "steps": [
   "Triangeln har en sida som är diameter, så vinkeln mitt emot den är en randvinkel på en halvcirkel: \\(90^\\circ\\) (Thales sats).",
   "Vinkelsumman i en triangel är \\(180^\\circ\\): \\(180^\\circ - 90^\\circ - 67^\\circ = 23^\\circ\\)"
  ],
  "course": "2c",
  "id": "A020"
 },
 {
  "topic": "Geometri",
  "q": "Trianglarna \\(ABC\\) och \\(DEF\\) är likformiga (\\(A \\leftrightarrow D\\), \\(B \\leftrightarrow E\\), \\(C \\leftrightarrow F\\)). \\(AB = 12\\) cm, \\(BC = 11\\) cm och \\(DE = 18\\) cm. Hur lång är \\(EF\\)?",
  "choices": [
   "\\(16{,}5\\) cm",
   "\\(17\\) cm",
   "\\(7{,}33\\) cm"
  ],
  "steps": [
   "Likformiga trianglar har proportionerliga sidor: \\(\\frac{EF}{BC} = \\frac{DE}{AB}\\).",
   "\\(\\text{Skala} = \\frac{DE}{AB} = \\frac{18}{12} = 1{,}5\\)",
   "\\(EF = 11 \\cdot 1{,}5 = 16{,}5\\) cm"
  ],
  "course": "2c",
  "id": "A021"
 },
 {
  "topic": "Geometri",
  "q": "Två likformiga figurer har längdskalan \\(2\\) (den större är \\(2\\) gånger så lång). Den mindre har arean \\(24\\) cm². Vilken area har den större?",
  "choices": [
   "\\(96\\) cm²",
   "\\(48\\) cm²",
   "\\(192\\) cm²"
  ],
  "steps": [
   "Areaskalan är längdskalan i kvadrat.",
   "\\(24 \\cdot 2^2 = 96\\) cm²"
  ],
  "course": "2c",
  "id": "A022"
 },
 {
  "topic": "Statistik",
  "q": "Bestäm medianen av talen \\(5,\\ 16,\\ 8,\\ 4,\\ 15,\\ 16,\\ 18,\\ 9\\).",
  "choices": [
   "\\(12\\)",
   "\\(9{,}5\\)",
   "\\(11{,}38\\)"
  ],
  "steps": [
   "Sortera talen: \\(4,\\ 5,\\ 8,\\ 9,\\ 15,\\ 16,\\ 16,\\ 18\\).",
   "\\(\\frac{9 + 15}{2} = 12\\)"
  ],
  "course": "2c",
  "id": "A023"
 },
 {
  "topic": "Algebra",
  "q": "Förenkla \\(\\frac{x^{6} \\cdot x^{9}}{x^{8}}\\).",
  "choices": [
   "\\(x^{7}\\)",
   "\\(x^{23}\\)",
   "\\(x^{46}\\)"
  ],
  "steps": [
   "Potenslagar: \\(x^m \\cdot x^n = x^{m+n}\\) och \\(\\frac{x^m}{x^n} = x^{m-n}\\).",
   "\\(x^{6+9-8} = x^{7}\\)"
  ],
  "course": "2c",
  "id": "A024"
 },
 {
  "topic": "Algebra",
  "q": "Utveckla \\((2x - 1)^2\\).",
  "choices": [
   "\\(4x^{2} - 4x + 1\\)",
   "\\(4x^{2} + 1\\)",
   "\\(4x^{2} - 2x + 1\\)"
  ],
  "steps": [
   "Kvadreringsregeln: \\((p+q)^2 = p^2 + 2pq + q^2\\).",
   "\\((2x - 1)^2 = (2x)^2 + 2 \\cdot 2x \\cdot (-1) + (-1)^2\\)",
   "\\(= 4x^{2} - 4x + 1\\)"
  ],
  "course": "2c",
  "id": "A025"
 },
 {
  "topic": "Algebra",
  "q": "Förenkla \\((x + 1)(x - 1)\\).",
  "choices": [
   "\\(x^{2} - 1\\)",
   "\\(x^{2} + 1\\)",
   "\\(x^{2} - 2x - 1\\)"
  ],
  "steps": [
   "Konjugatregeln: \\((p+q)(p-q) = p^2 - q^2\\).",
   "\\((x + 1)(x - 1) = x^2 - 1^2 = x^{2} - 1\\)"
  ],
  "course": "2c",
  "id": "A026"
 },
 {
  "topic": "Algebra",
  "q": "Faktorisera \\(5x^{2} - 125\\) så långt som möjligt.",
  "choices": [
   "\\(5(x+5)(x-5)\\)",
   "\\(5(x-5)^2\\)",
   "\\((5x+5)(5x-5)\\)"
  ],
  "steps": [
   "Bryt ut den gemensamma faktorn \\(5\\): \\(5x^{2} - 125 = 5(x^2 - 25)\\).",
   "Konjugatregeln baklänges: \\(x^2 - 25 = x^2 - 5^2 = (x+5)(x-5)\\).",
   "Alltså \\(5x^{2} - 125 = 5(x+5)(x-5)\\)."
  ],
  "course": "2c",
  "id": "A027"
 },
 {
  "topic": "Andragradsekvationer",
  "q": "Lös ekvationen \\(x^{2} - 8x + 12 = 0\\).",
  "choices": [
   "\\(x_1 = 2,\\; x_2 = 6\\)",
   "\\(x_1 = -6,\\; x_2 = -2\\)",
   "\\(x_1 = -6,\\; x_2 = 2\\)"
  ],
  "steps": [
   "pq-formeln: \\(x = -\\frac{p}{2} \\pm \\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}\\) med \\(p = -8\\) och \\(q = 12\\).",
   "\\(x = 4 \\pm \\sqrt{4^2 - 12} = 4 \\pm \\sqrt{4} = 4 \\pm 2\\)",
   "\\(x_1 = 2\\) och \\(x_2 = 6\\)."
  ],
  "course": "2c",
  "id": "A028"
 },
 {
  "topic": "Andragradsekvationer",
  "q": "Lös ekvationen \\(3x^{2} - 243 = 0\\).",
  "choices": [
   "\\(x = \\pm 9\\)",
   "\\(x = 9\\)",
   "\\(x = \\pm 81\\)"
  ],
  "steps": [
   "Flytta över konstanten: \\(3x^{2} = 243\\).",
   "Dela med \\(3\\): \\(x^2 = 81\\).",
   "Dra roten ur – glöm inte den negativa roten: \\(x = \\pm\\sqrt{81} = \\pm 9\\)."
  ],
  "course": "2c",
  "id": "A029"
 },
 {
  "topic": "Andragradsekvationer",
  "q": "Lös ekvationen \\(4x^{2} - 32x = 0\\).",
  "choices": [
   "\\(x_1 = 0,\\; x_2 = 8\\)",
   "\\(x_1 = -8,\\; x_2 = 0\\)",
   "\\(x = 8\\)"
  ],
  "steps": [
   "Bryt ut \\(x\\): \\(x(4x - 32) = 0\\).",
   "Nollproduktmetoden: en produkt är noll om någon faktor är noll.",
   "\\(x = 0\\) eller \\(4x - 32 = 0\\) \\(\\Rightarrow x = 8\\)."
  ],
  "course": "2c",
  "id": "A030"
 },
 {
  "topic": "Ekvationssystem",
  "q": "Lös ekvationssystemet \\(\\begin{cases} y = x - 1 \\\\ -4x + y = -7 \\end{cases}\\)",
  "choices": [
   "\\(x = 2,\\; y = 1\\)",
   "\\(x = 1,\\; y = 2\\)",
   "\\(x = 2,\\; y = -1\\)"
  ],
  "steps": [
   "Sätt in \\(y = x - 1\\) i den andra ekvationen (substitutionsmetoden):",
   "\\(-4x + (x - 1) = -7\\)",
   "\\(-3x - 1 = -7 \\;\\Rightarrow\\; -3x = -6 \\;\\Rightarrow\\; x = 2\\)",
   "Sätt in \\(x = 2\\): \\(y = 2 - 1 = 1\\)."
  ],
  "course": "2c",
  "id": "A031"
 },
 {
  "topic": "Ekvationssystem",
  "q": "Lös ekvationssystemet \\(\\begin{cases} x + y = 2 \\\\ 2x - y = -2 \\end{cases}\\)",
  "choices": [
   "\\(x = 0,\\; y = 2\\)",
   "\\(x = 2,\\; y = 0\\)",
   "\\(x = 0,\\; y = -2\\)"
  ],
  "steps": [
   "Addera ekvationerna så att \\(y\\) försvinner (additionsmetoden):",
   "\\(3x = 2 + (-2) = 0 \\;\\Rightarrow\\; x = 0\\)",
   "Sätt in i första ekvationen: \\(0 + y = 2\\) \\(\\Rightarrow y = 2 - 0 = 2\\)."
  ],
  "course": "2c",
  "id": "A032"
 },
 {
  "topic": "Räta linjen",
  "q": "En rät linje går genom punkterna \\((5,\\ 5)\\) och \\((6,\\ 2)\\). Vilken är linjens riktningskoefficient?",
  "choices": [
   "\\(k = -3\\)",
   "\\(k = -\\frac{1}{3}\\)",
   "\\(k = 3\\)"
  ],
  "steps": [
   "Riktningskoefficienten: \\(k = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}\\).",
   "\\(k = \\frac{2 - 5}{6 - 5} = \\frac{-3}{1} = -3\\)"
  ],
  "course": "2c",
  "id": "A033"
 },
 {
  "topic": "Räta linjen",
  "q": "Bestäm ekvationen för den räta linje som går genom \\((2,\\ 3)\\) och \\((5,\\ 12)\\).",
  "choices": [
   "\\(y = 3x - 3\\)",
   "\\(y = 3x + 9\\)",
   "\\(y = -3x + 9\\)"
  ],
  "steps": [
   "\\(k = \\frac{12 - 3}{5 - 2} = \\frac{9}{3} = 3\\)",
   "Sätt in punkten \\((2,\\ 3)\\) i \\(y = 3x + m\\): \\(3 = 3 \\cdot 2 + m\\).",
   "\\(m = 3 - 6 = -3\\), alltså \\(y = 3x - 3\\)."
  ],
  "course": "2c",
  "id": "A034"
 },
 {
  "topic": "Räta linjen",
  "q": "Linjen \\(L\\) har ekvationen \\(y = 2x + 4\\). Vilken riktningskoefficient har en linje som är vinkelrät mot \\(L\\)?",
  "choices": [
   "\\(k = -\\frac{1}{2}\\)",
   "\\(k = 2\\)",
   "\\(k = -2\\)"
  ],
  "steps": [
   "Två linjer är vinkelräta om \\(k_1 \\cdot k_2 = -1\\).",
   "\\(2 \\cdot k_2 = -1 \\;\\Rightarrow\\; k_2 = \\frac{-1}{2} = -\\frac{1}{2}\\)"
  ],
  "course": "2c",
  "id": "A035"
 },
 {
  "topic": "Logaritmer",
  "q": "Beräkna \\(\\lg 100\\,000 + \\lg 1\\,000\\) utan räknare.",
  "choices": [
   "\\(8\\)",
   "\\(15\\)",
   "\\(9\\)"
  ],
  "steps": [
   "Använd att \\(\\lg 10^n = n\\).",
   "\\(\\lg 100\\,000 = \\lg 10^{5} = 5\\) och \\(\\lg 1\\,000 = \\lg 10^{3} = 3\\)",
   "\\(5 + 3 = 8\\)"
  ],
  "course": "2c",
  "id": "A036"
 },
 {
  "topic": "Logaritmer",
  "q": "Lös ekvationen \\(\\lg x = 4\\).",
  "choices": [
   "\\(x = 10\\,000\\)",
   "\\(x = 40\\)",
   "\\(x = 0{,}0001\\)"
  ],
  "steps": [
   "Definitionen av logaritm: \\(\\lg x = n \\;\\Leftrightarrow\\; x = 10^n\\).",
   "\\(x = 10^{4} = 10\\,000\\)"
  ],
  "course": "2c",
  "id": "A037"
 },
 {
  "topic": "Logaritmer",
  "q": "Lös ekvationen \\(8 \\cdot 10^x = 32\\). Svara exakt och med tre decimaler.",
  "choices": [
   "\\(x = \\lg 4 \\approx 0{,}602\\)",
   "\\(x = \\lg 24 \\approx 1{,}380\\)",
   "\\(x = \\frac{\\lg 32}{8} \\approx 0{,}188\\)"
  ],
  "steps": [
   "Dela med \\(8\\): \\(10^x = \\frac{32}{8} = 4\\).",
   "Logaritmera: \\(x = \\lg 4 \\approx 0{,}602\\)."
  ],
  "course": "2c",
  "id": "A038"
 },
 {
  "topic": "Potenser och exponentialekvationer",
  "q": "Lös ekvationen \\(5^x = 25\\).",
  "choices": [
   "\\(x = 2\\)",
   "\\(x = 3\\)",
   "\\(x = 1\\)"
  ],
  "steps": [
   "Skriv högerledet som en potens av \\(5\\): \\(25 = 5^{2}\\).",
   "Samma bas ger samma exponent: \\(x = 2\\)."
  ],
  "course": "2c",
  "id": "A039"
 },
 {
  "topic": "Potenser och exponentialekvationer",
  "q": "Ett belopp växer med 2 % per år. Efter hur många år har beloppet fördubblats? (En decimal.)",
  "choices": [
   "\\(35{,}0\\) år",
   "\\(50{,}0\\) år",
   "\\(25{,}0\\) år"
  ],
  "steps": [
   "Förändringsfaktorn är \\(1{,}02\\). Ställ upp: \\(1{,}02^x = 2\\).",
   "Logaritmera båda leden: \\(x \\cdot \\lg 1{,}02 = \\lg 2\\).",
   "\\(x = \\frac{\\lg 2}{\\lg 1{,}02} \\approx 35{,}0\\) år."
  ],
  "course": "2c",
  "id": "A040"
 },
 {
  "topic": "Potenser och exponentialekvationer",
  "q": "Värdet på en vara är \\(36\\,500\\) kr och minskar med 15 % per år. Vad är värdet efter 4 år? (Avrunda till hela kronor.)",
  "choices": [
   "\\(19\\,053\\) kr",
   "\\(22\\,416\\) kr",
   "\\(16\\,195\\) kr"
  ],
  "steps": [
   "En minskning med 15 % ger förändringsfaktorn \\(0{,}85\\).",
   "Efter 4 år: \\(36\\,500 \\cdot 0{,}85^{4} \\approx 19\\,053\\) kr."
  ],
  "course": "2c",
  "id": "A041"
 },
 {
  "topic": "Andragradsfunktioner",
  "q": "Bestäm koordinaterna för minimipunkten till \\(f(x) = x^{2} + 4x - 6\\).",
  "choices": [
   "\\((-2,\\ -10)\\)",
   "\\((2,\\ -10)\\)",
   "\\((-2,\\ -6)\\)"
  ],
  "steps": [
   "Symmetrilinjen för \\(f(x) = ax^2 + bx + c\\) är \\(x = -\\frac{b}{2a}\\).",
   "\\(x = -\\frac{4}{2 \\cdot 1} = -2\\)",
   "\\(f(-2) = (-2)^{2} + 4 \\cdot (-2) - 6 = -10\\)",
   "Positiv \\(x^2\\)-koefficient ger en minimipunkt: \\((-2,\\ -10)\\)."
  ],
  "course": "2c",
  "id": "A042"
 },
 {
  "topic": "Koordinatgeometri",
  "q": "Beräkna avståndet mellan punkterna \\((-3,\\ -5)\\) och \\((-6,\\ -9)\\).",
  "choices": [
   "\\(5\\) l.e.",
   "\\(7\\) l.e.",
   "\\(25\\) l.e."
  ],
  "steps": [
   "Avståndsformeln: \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\).",
   "\\(d = \\sqrt{(-6 - (-3))^2 + (-9 - (-5))^2} = \\sqrt{(-3)^2 + (-4)^2} = \\sqrt{25} = 5\\)"
  ],
  "course": "2c",
  "id": "A043"
 },
 {
  "topic": "Koordinatgeometri",
  "q": "Bestäm mittpunkten på sträckan mellan \\((2,\\ 7)\\) och \\((-4,\\ -1)\\).",
  "choices": [
   "\\((-1,\\ 3)\\)",
   "\\((-3,\\ -4)\\)",
   "\\((-2,\\ 6)\\)"
  ],
  "steps": [
   "Mittpunktsformeln: \\(\\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right)\\).",
   "\\(\\left(\\frac{2 + (-4)}{2},\\ \\frac{7 + (-1)}{2}\\right) = (-1,\\ 3)\\)"
  ],
  "course": "2c",
  "id": "A044"
 },
 {
  "topic": "Geometri",
  "q": "En randvinkel i en cirkel är \\(36^\\circ\\). Hur stor är medelpunktsvinkeln på samma båge?",
  "choices": [
   "\\(72^\\circ\\)",
   "\\(36^\\circ\\)",
   "\\(18^\\circ\\)"
  ],
  "steps": [
   "Randvinkelsatsen: medelpunktsvinkeln är dubbelt så stor som randvinkeln på samma båge.",
   "\\(2 \\cdot 36^\\circ = 72^\\circ\\)"
  ],
  "course": "2c",
  "id": "A045"
 },
 {
  "topic": "Geometri",
  "q": "Trianglarna \\(ABC\\) och \\(DEF\\) är likformiga (\\(A \\leftrightarrow D\\), \\(B \\leftrightarrow E\\), \\(C \\leftrightarrow F\\)). \\(AB = 10\\) cm, \\(BC = 7\\) cm och \\(DE = 40\\) cm. Hur lång är \\(EF\\)?",
  "choices": [
   "\\(28\\) cm",
   "\\(37\\) cm",
   "\\(1{,}75\\) cm"
  ],
  "steps": [
   "Likformiga trianglar har proportionerliga sidor: \\(\\frac{EF}{BC} = \\frac{DE}{AB}\\).",
   "\\(\\text{Skala} = \\frac{DE}{AB} = \\frac{40}{10} = 4\\)",
   "\\(EF = 7 \\cdot 4 = 28\\) cm"
  ],
  "course": "2c",
  "id": "A046"
 },
 {
  "topic": "Geometri",
  "q": "Två likformiga figurer har längdskalan \\(2\\) (den större är \\(2\\) gånger så lång). Den mindre har arean \\(8\\) cm². Vilken area har den större?",
  "choices": [
   "\\(32\\) cm²",
   "\\(16\\) cm²",
   "\\(64\\) cm²"
  ],
  "steps": [
   "Areaskalan är längdskalan i kvadrat.",
   "\\(8 \\cdot 2^2 = 32\\) cm²"
  ],
  "course": "2c",
  "id": "A047"
 },
 {
  "topic": "Statistik",
  "q": "Bestäm medianen av talen \\(19,\\ 10,\\ 17,\\ 14,\\ 13,\\ 5\\).",
  "choices": [
   "\\(13{,}5\\)",
   "\\(15{,}5\\)",
   "\\(13\\)"
  ],
  "steps": [
   "Sortera talen: \\(5,\\ 10,\\ 13,\\ 14,\\ 17,\\ 19\\).",
   "\\(\\frac{13 + 14}{2} = 13{,}5\\)"
  ],
  "course": "2c",
  "id": "A048"
 },
 {
  "topic": "Algebra",
  "q": "Förenkla \\((x^{5})^{8} \\cdot x^{2}\\).",
  "choices": [
   "\\(x^{42}\\)",
   "\\(x^{15}\\)",
   "\\(x^{80}\\)"
  ],
  "steps": [
   "Potenslagar: \\((x^m)^n = x^{mn}\\) och \\(x^m \\cdot x^n = x^{m+n}\\).",
   "\\(x^{5 \\cdot 8 + 2} = x^{42}\\)"
  ],
  "course": "2c",
  "id": "A049"
 },
 {
  "topic": "Algebra",
  "q": "Utveckla \\((3x - 7)^2\\).",
  "choices": [
   "\\(9x^{2} - 42x + 49\\)",
   "\\(9x^{2} + 49\\)",
   "\\(9x^{2} - 21x + 49\\)"
  ],
  "steps": [
   "Kvadreringsregeln: \\((p+q)^2 = p^2 + 2pq + q^2\\).",
   "\\((3x - 7)^2 = (3x)^2 + 2 \\cdot 3x \\cdot (-7) + (-7)^2\\)",
   "\\(= 9x^{2} - 42x + 49\\)"
  ],
  "course": "2c",
  "id": "A050"
 },
 {
  "topic": "Algebra",
  "q": "Förenkla \\((x + 6)(x - 6)\\).",
  "choices": [
   "\\(x^{2} - 36\\)",
   "\\(x^{2} + 36\\)",
   "\\(x^{2} - 12x - 36\\)"
  ],
  "steps": [
   "Konjugatregeln: \\((p+q)(p-q) = p^2 - q^2\\).",
   "\\((x + 6)(x - 6) = x^2 - 6^2 = x^{2} - 36\\)"
  ],
  "course": "2c",
  "id": "A051"
 },
 {
  "topic": "Algebra",
  "q": "Faktorisera \\(x^{2} - 18x + 81\\) så långt som möjligt.",
  "choices": [
   "\\((x - 9)^2\\)",
   "\\((x + 9)^2\\)",
   "\\((x - 9)(x + 9)\\)"
  ],
  "steps": [
   "Känn igen kvadreringsregeln baklänges: \\(p^2 + 2pq + q^2 = (p+q)^2\\).",
   "\\(x^{2} - 18x + 81 = x^2 + 2 \\cdot x \\cdot (-9) + (-9)^2\\)",
   "\\(= (x - 9)^2\\)"
  ],
  "course": "2c",
  "id": "A052"
 },
 {
  "topic": "Andragradsekvationer",
  "q": "Lös ekvationen \\(2x^{2} + 4x - 126 = 0\\).",
  "choices": [
   "\\(x_1 = -9,\\; x_2 = 7\\)",
   "\\(x_1 = -7,\\; x_2 = 9\\)",
   "\\(x_1 = -9,\\; x_2 = -7\\)"
  ],
  "steps": [
   "Dela båda leden med \\(2\\): \\(x^{2} + 2x - 63 = 0\\).",
   "pq-formeln: \\(x = -\\frac{p}{2} \\pm \\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}\\) med \\(p = 2\\) och \\(q = -63\\).",
   "\\(x = -1 \\pm \\sqrt{(-1)^2 - (-63)} = -1 \\pm \\sqrt{64} = -1 \\pm 8\\)",
   "\\(x_1 = -9\\) och \\(x_2 = 7\\)."
  ],
  "course": "2c",
  "id": "A053"
 },
 {
  "topic": "Andragradsekvationer",
  "q": "Lös ekvationen \\(3x^{2} - 108 = 0\\).",
  "choices": [
   "\\(x = \\pm 6\\)",
   "\\(x = 6\\)",
   "\\(x = \\pm 36\\)"
  ],
  "steps": [
   "Flytta över konstanten: \\(3x^{2} = 108\\).",
   "Dela med \\(3\\): \\(x^2 = 36\\).",
   "Dra roten ur – glöm inte den negativa roten: \\(x = \\pm\\sqrt{36} = \\pm 6\\)."
  ],
  "course": "2c",
  "id": "A054"
 },
 {
  "topic": "Andragradsekvationer",
  "q": "Lös ekvationen \\(4x^{2} - 8x = 0\\).",
  "choices": [
   "\\(x_1 = 0,\\; x_2 = 2\\)",
   "\\(x_1 = -2,\\; x_2 = 0\\)",
   "\\(x = 2\\)"
  ],
  "steps": [
   "Bryt ut \\(x\\): \\(x(4x - 8) = 0\\).",
   "Nollproduktmetoden: en produkt är noll om någon faktor är noll.",
   "\\(x = 0\\) eller \\(4x - 8 = 0\\) \\(\\Rightarrow x = 2\\)."
  ],
  "course": "2c",
  "id": "A055"
 },
 {
  "topic": "Ekvationssystem",
  "q": "Lös ekvationssystemet \\(\\begin{cases} y = x + 6 \\\\ 5x - y = -22 \\end{cases}\\)",
  "choices": [
   "\\(x = -4,\\; y = 2\\)",
   "\\(x = 2,\\; y = -4\\)",
   "\\(x = -4,\\; y = -2\\)"
  ],
  "steps": [
   "Sätt in \\(y = x + 6\\) i den andra ekvationen (substitutionsmetoden):",
   "\\(5x - (x + 6) = -22\\)",
   "\\(4x - 6 = -22 \\;\\Rightarrow\\; 4x = -16 \\;\\Rightarrow\\; x = -4\\)",
   "Sätt in \\(x = -4\\): \\(y = (-4) + 6 = 2\\)."
  ],
  "course": "2c",
  "id": "A056"
 },
 {
  "topic": "Ekvationssystem",
  "q": "Lös ekvationssystemet \\(\\begin{cases} 3x + y = -5 \\\\ x - y = -7 \\end{cases}\\)",
  "choices": [
   "\\(x = -3,\\; y = 4\\)",
   "\\(x = 4,\\; y = -3\\)",
   "\\(x = -3,\\; y = -4\\)"
  ],
  "steps": [
   "Addera ekvationerna så att \\(y\\) försvinner (additionsmetoden):",
   "\\(4x = -5 + (-7) = -12 \\;\\Rightarrow\\; x = -3\\)",
   "Sätt in i första ekvationen: \\(3 \\cdot (-3) + y = -5\\) \\(\\Rightarrow y = -5 - (-9) = 4\\)."
  ],
  "course": "2c",
  "id": "A057"
 },
 {
  "topic": "Räta linjen",
  "q": "En rät linje går genom punkterna \\((0,\\ 3)\\) och \\((-1,\\ 1)\\). Vilken är linjens riktningskoefficient?",
  "choices": [
   "\\(k = 2\\)",
   "\\(k = \\frac{1}{2}\\)",
   "\\(k = -2\\)"
  ],
  "steps": [
   "Riktningskoefficienten: \\(k = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}\\).",
   "\\(k = \\frac{1 - 3}{-1 - 0} = \\frac{-2}{-1} = 2\\)"
  ],
  "course": "2c",
  "id": "A058"
 },
 {
  "topic": "Räta linjen",
  "q": "Bestäm ekvationen för den räta linje som går genom \\((4,\\ -10)\\) och \\((6,\\ -12)\\).",
  "choices": [
   "\\(y = -x - 6\\)",
   "\\(y = -x - 14\\)",
   "\\(y = x - 14\\)"
  ],
  "steps": [
   "\\(k = \\frac{-12 - (-10)}{6 - 4} = \\frac{-2}{2} = -1\\)",
   "Sätt in punkten \\((4,\\ -10)\\) i \\(y = -x + m\\): \\(-10 = -1 \\cdot 4 + m\\).",
   "\\(m = -10 - (-4) = -6\\), alltså \\(y = -x - 6\\)."
  ],
  "course": "2c",
  "id": "A059"
 },
 {
  "topic": "Räta linjen",
  "q": "Linjen \\(L\\) har ekvationen \\(y = -5x + 4\\). Vilken riktningskoefficient har en linje som är parallell med \\(L\\)?",
  "choices": [
   "\\(k = -5\\)",
   "\\(k = \\frac{1}{5}\\)",
   "\\(k = 5\\)"
  ],
  "steps": [
   "Parallella linjer har samma riktningskoefficient.",
   "\\(k = -5\\)"
  ],
  "course": "2c",
  "id": "A060"
 },
 {
  "topic": "Logaritmer",
  "q": "Beräkna \\(\\lg 0{,}001 + \\lg 1\\,000\\,000\\) utan räknare.",
  "choices": [
   "\\(3\\)",
   "\\(-18\\)",
   "\\(4\\)"
  ],
  "steps": [
   "Använd att \\(\\lg 10^n = n\\).",
   "\\(\\lg 0{,}001 = \\lg 10^{-3} = -3\\) och \\(\\lg 1\\,000\\,000 = \\lg 10^{6} = 6\\)",
   "\\(-3 + 6 = 3\\)"
  ],
  "course": "2c",
  "id": "A061"
 },
 {
  "topic": "Logaritmer",
  "q": "Lös ekvationen \\(\\lg x = 5\\).",
  "choices": [
   "\\(x = 100\\,000\\)",
   "\\(x = 50\\)",
   "\\(x = 0{,}00001\\)"
  ],
  "steps": [
   "Definitionen av logaritm: \\(\\lg x = n \\;\\Leftrightarrow\\; x = 10^n\\).",
   "\\(x = 10^{5} = 100\\,000\\)"
  ],
  "course": "2c",
  "id": "A062"
 },
 {
  "topic": "Logaritmer",
  "q": "Lös ekvationen \\(5 \\cdot 10^x = 45\\). Svara exakt och med tre decimaler.",
  "choices": [
   "\\(x = \\lg 9 \\approx 0{,}954\\)",
   "\\(x = \\lg 40 \\approx 1{,}602\\)",
   "\\(x = \\frac{\\lg 45}{5} \\approx 0{,}331\\)"
  ],
  "steps": [
   "Dela med \\(5\\): \\(10^x = \\frac{45}{5} = 9\\).",
   "Logaritmera: \\(x = \\lg 9 \\approx 0{,}954\\)."
  ],
  "course": "2c",
  "id": "A063"
 },
 {
  "topic": "Potenser och exponentialekvationer",
  "q": "Lös ekvationen \\(2 \\cdot 2^x = 16\\).",
  "choices": [
   "\\(x = 3\\)",
   "\\(x = 4\\)",
   "\\(x = 2\\)"
  ],
  "steps": [
   "Dela med \\(2\\): \\(2^x = 8\\).",
   "Skriv högerledet som en potens av \\(2\\): \\(8 = 2^{3}\\).",
   "Samma bas ger samma exponent: \\(x = 3\\)."
  ],
  "course": "2c",
  "id": "A064"
 },
 {
  "topic": "Potenser och exponentialekvationer",
  "q": "Ett ämnes massa minskar med 12 % per år. Efter hur många år har massan halverats? (En decimal.)",
  "choices": [
   "\\(5{,}4\\) år",
   "\\(8{,}3\\) år",
   "\\(4{,}2\\) år"
  ],
  "steps": [
   "Förändringsfaktorn är \\(0{,}88\\). Ställ upp: \\(0{,}88^x = 0{,}5\\).",
   "Logaritmera båda leden: \\(x \\cdot \\lg 0{,}88 = \\lg 0{,}5\\).",
   "\\(x = \\frac{\\lg 0{,}5}{\\lg 0{,}88} \\approx 5{,}4\\) år."
  ],
  "course": "2c",
  "id": "A065"
 },
 {
  "topic": "Potenser och exponentialekvationer",
  "q": "Värdet på en vara är \\(10\\,500\\) kr och ökar med 4 % per år. Vad är värdet efter 5 år? (Avrunda till hela kronor.)",
  "choices": [
   "\\(12\\,775\\) kr",
   "\\(12\\,284\\) kr",
   "\\(13\\,286\\) kr"
  ],
  "steps": [
   "En ökning med 4 % ger förändringsfaktorn \\(1{,}04\\).",
   "Efter 5 år: \\(10\\,500 \\cdot 1{,}04^{5} \\approx 12\\,775\\) kr."
  ],
  "course": "2c",
  "id": "A066"
 },
 {
  "topic": "Andragradsfunktioner",
  "q": "Bestäm koordinaterna för minimipunkten till \\(f(x) = 2x^{2} - 12x + 4\\).",
  "choices": [
   "\\((3,\\ -14)\\)",
   "\\((-3,\\ -14)\\)",
   "\\((3,\\ 4)\\)"
  ],
  "steps": [
   "Symmetrilinjen för \\(f(x) = ax^2 + bx + c\\) är \\(x = -\\frac{b}{2a}\\).",
   "\\(x = -\\frac{-12}{2 \\cdot 2} = 3\\)",
   "\\(f(3) = 2 \\cdot 3^{2} - 12 \\cdot 3 + 4 = -14\\)",
   "Positiv \\(x^2\\)-koefficient ger en minimipunkt: \\((3,\\ -14)\\)."
  ],
  "course": "2c",
  "id": "A067"
 },
 {
  "topic": "Koordinatgeometri",
  "q": "Beräkna avståndet mellan punkterna \\((-3,\\ 0)\\) och \\((-7,\\ -3)\\).",
  "choices": [
   "\\(5\\) l.e.",
   "\\(7\\) l.e.",
   "\\(25\\) l.e."
  ],
  "steps": [
   "Avståndsformeln: \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\).",
   "\\(d = \\sqrt{(-7 - (-3))^2 + (-3 - 0)^2} = \\sqrt{(-4)^2 + (-3)^2} = \\sqrt{25} = 5\\)"
  ],
  "course": "2c",
  "id": "A068"
 },
 {
  "topic": "Koordinatgeometri",
  "q": "Bestäm mittpunkten på sträckan mellan \\((-3,\\ 0)\\) och \\((6,\\ 7)\\).",
  "choices": [
   "\\((\\frac{3}{2},\\ \\frac{7}{2})\\)",
   "\\((\\frac{9}{2},\\ \\frac{7}{2})\\)",
   "\\((3,\\ 7)\\)"
  ],
  "steps": [
   "Mittpunktsformeln: \\(\\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right)\\).",
   "\\(\\left(\\frac{-3 + 6}{2},\\ \\frac{0 + 7}{2}\\right) = (\\frac{3}{2},\\ \\frac{7}{2})\\)"
  ],
  "course": "2c",
  "id": "A069"
 },
 {
  "topic": "Geometri",
  "q": "Trianglarna \\(ABC\\) och \\(DEF\\) är likformiga (\\(A \\leftrightarrow D\\), \\(B \\leftrightarrow E\\), \\(C \\leftrightarrow F\\)). \\(AB = 6\\) cm, \\(BC = 10\\) cm och \\(DE = 18\\) cm. Hur lång är \\(EF\\)?",
  "choices": [
   "\\(30\\) cm",
   "\\(22\\) cm",
   "\\(3{,}33\\) cm"
  ],
  "steps": [
   "Likformiga trianglar har proportionerliga sidor: \\(\\frac{EF}{BC} = \\frac{DE}{AB}\\).",
   "\\(\\text{Skala} = \\frac{DE}{AB} = \\frac{18}{6} = 3\\)",
   "\\(EF = 10 \\cdot 3 = 30\\) cm"
  ],
  "course": "2c",
  "id": "A070"
 },
 {
  "topic": "Geometri",
  "q": "Två kuber (likformiga kroppar) har längdskalan \\(3\\). Den mindre har volymen \\(30\\) cm³. Vilken volym har den större?",
  "choices": [
   "\\(810\\) cm³",
   "\\(90\\) cm³",
   "\\(270\\) cm³"
  ],
  "steps": [
   "Volymskalan är längdskalan i kubik.",
   "\\(30 \\cdot 3^3 = 810\\) cm³"
  ],
  "course": "2c",
  "id": "A071"
 },
 {
  "topic": "Statistik",
  "q": "Bestäm medianen av talen \\(4,\\ 17,\\ 17,\\ 9,\\ 4,\\ 7,\\ 8,\\ 1\\).",
  "choices": [
   "\\(7{,}5\\)",
   "\\(6{,}5\\)",
   "\\(8{,}38\\)"
  ],
  "steps": [
   "Sortera talen: \\(1,\\ 4,\\ 4,\\ 7,\\ 8,\\ 9,\\ 17,\\ 17\\).",
   "\\(\\frac{7 + 8}{2} = 7{,}5\\)"
  ],
  "course": "2c",
  "id": "A072"
 },
 {
  "topic": "Algebra",
  "q": "Förenkla \\((x^{9})^{7} \\cdot x^{8}\\).",
  "choices": [
   "\\(x^{71}\\)",
   "\\(x^{24}\\)",
   "\\(x^{504}\\)"
  ],
  "steps": [
   "Potenslagar: \\((x^m)^n = x^{mn}\\) och \\(x^m \\cdot x^n = x^{m+n}\\).",
   "\\(x^{9 \\cdot 7 + 8} = x^{71}\\)"
  ],
  "course": "2c",
  "id": "A073"
 },
 {
  "topic": "Algebra",
  "q": "Utveckla \\((x - 9)^2\\).",
  "choices": [
   "\\(x^{2} - 18x + 81\\)",
   "\\(x^{2} + 81\\)",
   "\\(x^{2} - 9x + 81\\)"
  ],
  "steps": [
   "Kvadreringsregeln: \\((p+q)^2 = p^2 + 2pq + q^2\\).",
   "\\((x - 9)^2 = x^2 + 2 \\cdot x \\cdot (-9) + (-9)^2\\)",
   "\\(= x^{2} - 18x + 81\\)"
  ],
  "course": "2c",
  "id": "A074"
 },
 {
  "topic": "Algebra",
  "q": "Förenkla \\((2x + 3)(2x - 3)\\).",
  "choices": [
   "\\(4x^{2} - 9\\)",
   "\\(4x^{2} + 9\\)",
   "\\(4x^{2} - 12x - 9\\)"
  ],
  "steps": [
   "Konjugatregeln: \\((p+q)(p-q) = p^2 - q^2\\).",
   "\\((2x + 3)(2x - 3) = (2x)^2 - 3^2 = 4x^{2} - 9\\)"
  ],
  "course": "2c",
  "id": "A075"
 },
 {
  "topic": "Algebra",
  "q": "Faktorisera \\(3x^{2} - 3\\) så långt som möjligt.",
  "choices": [
   "\\(3(x+1)(x-1)\\)",
   "\\(3(x-1)^2\\)",
   "\\((3x+1)(3x-1)\\)"
  ],
  "steps": [
   "Bryt ut den gemensamma faktorn \\(3\\): \\(3x^{2} - 3 = 3(x^2 - 1)\\).",
   "Konjugatregeln baklänges: \\(x^2 - 1 = x^2 - 1^2 = (x+1)(x-1)\\).",
   "Alltså \\(3x^{2} - 3 = 3(x+1)(x-1)\\)."
  ],
  "course": "2c",
  "id": "A076"
 },
 {
  "topic": "Andragradsekvationer",
  "q": "Lös ekvationen \\(3x^{2} - 21x - 24 = 0\\).",
  "choices": [
   "\\(x_1 = -1,\\; x_2 = 8\\)",
   "\\(x_1 = -8,\\; x_2 = 1\\)",
   "\\(x_1 = -8,\\; x_2 = -1\\)"
  ],
  "steps": [
   "Dela båda leden med \\(3\\): \\(x^{2} - 7x - 8 = 0\\).",
   "pq-formeln: \\(x = -\\frac{p}{2} \\pm \\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}\\) med \\(p = -7\\) och \\(q = -8\\).",
   "\\(x = \\frac{7}{2} \\pm \\sqrt{\\frac{7}{2}^2 - (-8)} = \\frac{7}{2} \\pm \\sqrt{\\frac{81}{4}} = \\frac{7}{2} \\pm \\frac{9}{2}\\)",
   "\\(x_1 = -1\\) och \\(x_2 = 8\\)."
  ],
  "course": "2c",
  "id": "A077"
 },
 {
  "topic": "Andragradsekvationer",
  "q": "Lös ekvationen \\(2x^{2} - 72 = 0\\).",
  "choices": [
   "\\(x = \\pm 6\\)",
   "\\(x = 6\\)",
   "\\(x = \\pm 36\\)"
  ],
  "steps": [
   "Flytta över konstanten: \\(2x^{2} = 72\\).",
   "Dela med \\(2\\): \\(x^2 = 36\\).",
   "Dra roten ur – glöm inte den negativa roten: \\(x = \\pm\\sqrt{36} = \\pm 6\\)."
  ],
  "course": "2c",
  "id": "A078"
 },
 {
  "topic": "Andragradsekvationer",
  "q": "Lös ekvationen \\(3x^{2} + 12x = 0\\).",
  "choices": [
   "\\(x_1 = -4,\\; x_2 = 0\\)",
   "\\(x_1 = 0,\\; x_2 = 4\\)",
   "\\(x = -4\\)"
  ],
  "steps": [
   "Bryt ut \\(x\\): \\(x(3x + 12) = 0\\).",
   "Nollproduktmetoden: en produkt är noll om någon faktor är noll.",
   "\\(x = 0\\) eller \\(3x + 12 = 0\\) \\(\\Rightarrow x = -4\\)."
  ],
  "course": "2c",
  "id": "A079"
 },
 {
  "topic": "Ekvationssystem",
  "q": "Lös ekvationssystemet \\(\\begin{cases} y = -3x - 13 \\\\ 2x - y = -7 \\end{cases}\\)",
  "choices": [
   "\\(x = -4,\\; y = -1\\)",
   "\\(x = -1,\\; y = -4\\)",
   "\\(x = -4,\\; y = 1\\)"
  ],
  "steps": [
   "Sätt in \\(y = -3x - 13\\) i den andra ekvationen (substitutionsmetoden):",
   "\\(2x - (-3x - 13) = -7\\)",
   "\\(5x + 13 = -7 \\;\\Rightarrow\\; 5x = -20 \\;\\Rightarrow\\; x = -4\\)",
   "Sätt in \\(x = -4\\): \\(y = -3 \\cdot (-4) - 13 = -1\\)."
  ],
  "course": "2c",
  "id": "A080"
 },
 {
  "topic": "Ekvationssystem",
  "q": "Lös ekvationssystemet \\(\\begin{cases} x + y = 1 \\\\ 2x - y = -13 \\end{cases}\\)",
  "choices": [
   "\\(x = -4,\\; y = 5\\)",
   "\\(x = 5,\\; y = -4\\)",
   "\\(x = -4,\\; y = -5\\)"
  ],
  "steps": [
   "Addera ekvationerna så att \\(y\\) försvinner (additionsmetoden):",
   "\\(3x = 1 + (-13) = -12 \\;\\Rightarrow\\; x = -4\\)",
   "Sätt in i första ekvationen: \\((-4) + y = 1\\) \\(\\Rightarrow y = 1 - (-4) = 5\\)."
  ],
  "course": "2c",
  "id": "A081"
 },
 {
  "topic": "Räta linjen",
  "q": "En rät linje går genom punkterna \\((5,\\ 6)\\) och \\((-4,\\ 4)\\). Vilken är linjens riktningskoefficient?",
  "choices": [
   "\\(k = \\frac{2}{9}\\)",
   "\\(k = \\frac{9}{2}\\)",
   "\\(k = -\\frac{2}{9}\\)"
  ],
  "steps": [
   "Riktningskoefficienten: \\(k = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}\\).",
   "\\(k = \\frac{4 - 6}{-4 - 5} = \\frac{-2}{-9} = \\frac{2}{9}\\)"
  ],
  "course": "2c",
  "id": "A082"
 },
 {
  "topic": "Räta linjen",
  "q": "Bestäm ekvationen för den räta linje som går genom \\((1,\\ 5)\\) och \\((3,\\ -1)\\).",
  "choices": [
   "\\(y = -3x + 8\\)",
   "\\(y = -3x + 2\\)",
   "\\(y = 3x + 2\\)"
  ],
  "steps": [
   "\\(k = \\frac{-1 - 5}{3 - 1} = \\frac{-6}{2} = -3\\)",
   "Sätt in punkten \\((1,\\ 5)\\) i \\(y = -3x + m\\): \\(5 = -3 \\cdot 1 + m\\).",
   "\\(m = 5 - (-3) = 8\\), alltså \\(y = -3x + 8\\)."
  ],
  "course": "2c",
  "id": "A083"
 },
 {
  "topic": "Räta linjen",
  "q": "Linjen \\(L\\) har ekvationen \\(y = 4x - 2\\). Vilken riktningskoefficient har en linje som är parallell med \\(L\\)?",
  "choices": [
   "\\(k = 4\\)",
   "\\(k = -\\frac{1}{4}\\)",
   "\\(k = -4\\)"
  ],
  "steps": [
   "Parallella linjer har samma riktningskoefficient.",
   "\\(k = 4\\)"
  ],
  "course": "2c",
  "id": "A084"
 },
 {
  "topic": "Logaritmer",
  "q": "Beräkna \\(\\lg 0{,}1 + \\lg 100\\) utan räknare.",
  "choices": [
   "\\(1\\)",
   "\\(-2\\)",
   "\\(2\\)"
  ],
  "steps": [
   "Använd att \\(\\lg 10^n = n\\).",
   "\\(\\lg 0{,}1 = \\lg 10^{-1} = -1\\) och \\(\\lg 100 = \\lg 10^{2} = 2\\)",
   "\\(-1 + 2 = 1\\)"
  ],
  "course": "2c",
  "id": "A085"
 },
 {
  "topic": "Logaritmer",
  "q": "Lös ekvationen \\(\\lg x = -3\\).",
  "choices": [
   "\\(x = 0{,}001\\)",
   "\\(x = -30\\)",
   "\\(x = 1\\,000\\)"
  ],
  "steps": [
   "Definitionen av logaritm: \\(\\lg x = n \\;\\Leftrightarrow\\; x = 10^n\\).",
   "\\(x = 10^{-3} = 0{,}001\\)"
  ],
  "course": "2c",
  "id": "A086"
 },
 {
  "topic": "Logaritmer",
  "q": "Lös ekvationen \\(8 \\cdot 10^x = 48\\). Svara exakt och med tre decimaler.",
  "choices": [
   "\\(x = \\lg 6 \\approx 0{,}778\\)",
   "\\(x = \\lg 40 \\approx 1{,}602\\)",
   "\\(x = \\frac{\\lg 48}{8} \\approx 0{,}210\\)"
  ],
  "steps": [
   "Dela med \\(8\\): \\(10^x = \\frac{48}{8} = 6\\).",
   "Logaritmera: \\(x = \\lg 6 \\approx 0{,}778\\)."
  ],
  "course": "2c",
  "id": "A087"
 },
 {
  "topic": "Potenser och exponentialekvationer",
  "q": "Ett belopp växer med 3 % per år. Efter hur många år har beloppet fördubblats? (En decimal.)",
  "choices": [
   "\\(23{,}4\\) år",
   "\\(33{,}3\\) år",
   "\\(16{,}7\\) år"
  ],
  "steps": [
   "Förändringsfaktorn är \\(1{,}03\\). Ställ upp: \\(1{,}03^x = 2\\).",
   "Logaritmera båda leden: \\(x \\cdot \\lg 1{,}03 = \\lg 2\\).",
   "\\(x = \\frac{\\lg 2}{\\lg 1{,}03} \\approx 23{,}4\\) år."
  ],
  "course": "2c",
  "id": "A088"
 },
 {
  "topic": "Potenser och exponentialekvationer",
  "q": "Värdet på en vara är \\(21\\,500\\) kr och minskar med 3 % per år. Vad är värdet efter 4 år? (Avrunda till hela kronor.)",
  "choices": [
   "\\(19\\,034\\) kr",
   "\\(19\\,622\\) kr",
   "\\(18\\,463\\) kr"
  ],
  "steps": [
   "En minskning med 3 % ger förändringsfaktorn \\(0{,}97\\).",
   "Efter 4 år: \\(21\\,500 \\cdot 0{,}97^{4} \\approx 19\\,034\\) kr."
  ],
  "course": "2c",
  "id": "A089"
 },
 {
  "topic": "Koordinatgeometri",
  "q": "Beräkna avståndet mellan punkterna \\((0,\\ 4)\\) och \\((9,\\ -8)\\).",
  "choices": [
   "\\(15\\) l.e.",
   "\\(21\\) l.e.",
   "\\(225\\) l.e."
  ],
  "steps": [
   "Avståndsformeln: \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\).",
   "\\(d = \\sqrt{(9 - 0)^2 + (-8 - 4)^2} = \\sqrt{9^2 + (-12)^2} = \\sqrt{225} = 15\\)"
  ],
  "course": "2c",
  "id": "A090"
 },
 {
  "topic": "Koordinatgeometri",
  "q": "Bestäm mittpunkten på sträckan mellan \\((-2,\\ 6)\\) och \\((5,\\ -5)\\).",
  "choices": [
   "\\((\\frac{3}{2},\\ \\frac{1}{2})\\)",
   "\\((\\frac{7}{2},\\ -\\frac{11}{2})\\)",
   "\\((3,\\ 1)\\)"
  ],
  "steps": [
   "Mittpunktsformeln: \\(\\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right)\\).",
   "\\(\\left(\\frac{-2 + 5}{2},\\ \\frac{6 + (-5)}{2}\\right) = (\\frac{3}{2},\\ \\frac{1}{2})\\)"
  ],
  "course": "2c",
  "id": "A091"
 },
 {
  "topic": "Geometri",
  "q": "En randvinkel i en cirkel är \\(84^\\circ\\). Hur stor är medelpunktsvinkeln på samma båge?",
  "choices": [
   "\\(168^\\circ\\)",
   "\\(84^\\circ\\)",
   "\\(42^\\circ\\)"
  ],
  "steps": [
   "Randvinkelsatsen: medelpunktsvinkeln är dubbelt så stor som randvinkeln på samma båge.",
   "\\(2 \\cdot 84^\\circ = 168^\\circ\\)"
  ],
  "course": "2c",
  "id": "A092"
 },
 {
  "topic": "Geometri",
  "q": "Trianglarna \\(ABC\\) och \\(DEF\\) är likformiga (\\(A \\leftrightarrow D\\), \\(B \\leftrightarrow E\\), \\(C \\leftrightarrow F\\)). \\(AB = 6\\) cm, \\(BC = 9\\) cm och \\(DE = 3\\) cm. Hur lång är \\(EF\\)?",
  "choices": [
   "\\(4{,}5\\) cm",
   "\\(6\\) cm",
   "\\(18\\) cm"
  ],
  "steps": [
   "Likformiga trianglar har proportionerliga sidor: \\(\\frac{EF}{BC} = \\frac{DE}{AB}\\).",
   "\\(\\text{Skala} = \\frac{DE}{AB} = \\frac{3}{6} = 0{,}5\\)",
   "\\(EF = 9 \\cdot 0{,}5 = 4{,}5\\) cm"
  ],
  "course": "2c",
  "id": "A093"
 },
 {
  "topic": "Geometri",
  "q": "Två likformiga figurer har längdskalan \\(4\\) (den större är \\(4\\) gånger så lång). Den mindre har arean \\(20\\) cm². Vilken area har den större?",
  "choices": [
   "\\(320\\) cm²",
   "\\(80\\) cm²",
   "\\(1\\,280\\) cm²"
  ],
  "steps": [
   "Areaskalan är längdskalan i kvadrat.",
   "\\(20 \\cdot 4^2 = 320\\) cm²"
  ],
  "course": "2c",
  "id": "A094"
 },
 {
  "topic": "Statistik",
  "q": "Bestäm medianen av talen \\(14,\\ 1,\\ 10,\\ 11,\\ 10\\).",
  "choices": [
   "\\(10\\)",
   "\\(9{,}2\\)",
   "\\(11\\)"
  ],
  "steps": [
   "Sortera talen: \\(1,\\ 10,\\ 10,\\ 11,\\ 14\\).",
   "Det mittersta (nummer 3) av 5 värden är \\(10\\)."
  ],
  "course": "2c",
  "id": "A095"
 },
 {
  "topic": "Algebra",
  "q": "Förenkla \\(\\frac{x^{3} \\cdot x^{6}}{x^{8}}\\).",
  "choices": [
   "\\(x\\)",
   "\\(x^{17}\\)",
   "\\(x^{10}\\)"
  ],
  "steps": [
   "Potenslagar: \\(x^m \\cdot x^n = x^{m+n}\\) och \\(\\frac{x^m}{x^n} = x^{m-n}\\).",
   "\\(x^{3+6-8} = x\\)"
  ],
  "course": "2c",
  "id": "A096"
 },
 {
  "topic": "Algebra",
  "q": "Utveckla \\((x + 8)^2\\).",
  "choices": [
   "\\(x^{2} + 16x + 64\\)",
   "\\(x^{2} + 64\\)",
   "\\(x^{2} + 8x + 64\\)"
  ],
  "steps": [
   "Kvadreringsregeln: \\((p+q)^2 = p^2 + 2pq + q^2\\).",
   "\\((x + 8)^2 = x^2 + 2 \\cdot x \\cdot 8 + 8^2\\)",
   "\\(= x^{2} + 16x + 64\\)"
  ],
  "course": "2c",
  "id": "A097"
 },
 {
  "topic": "Algebra",
  "q": "Förenkla \\((2x + 4)(2x - 4)\\).",
  "choices": [
   "\\(4x^{2} - 16\\)",
   "\\(4x^{2} + 16\\)",
   "\\(4x^{2} - 16x - 16\\)"
  ],
  "steps": [
   "Konjugatregeln: \\((p+q)(p-q) = p^2 - q^2\\).",
   "\\((2x + 4)(2x - 4) = (2x)^2 - 4^2 = 4x^{2} - 16\\)"
  ],
  "course": "2c",
  "id": "A098"
 },
 {
  "topic": "Andragradsekvationer",
  "q": "Lös ekvationen \\(x^{2} + 10x + 24 = 0\\).",
  "choices": [
   "\\(x_1 = -6,\\; x_2 = -4\\)",
   "\\(x_1 = 4,\\; x_2 = 6\\)",
   "\\(x_1 = -6,\\; x_2 = 4\\)"
  ],
  "steps": [
   "pq-formeln: \\(x = -\\frac{p}{2} \\pm \\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}\\) med \\(p = 10\\) och \\(q = 24\\).",
   "\\(x = -5 \\pm \\sqrt{(-5)^2 - 24} = -5 \\pm \\sqrt{1} = -5 \\pm 1\\)",
   "\\(x_1 = -6\\) och \\(x_2 = -4\\)."
  ],
  "course": "2c",
  "id": "A099"
 },
 {
  "topic": "Andragradsekvationer",
  "q": "Lös ekvationen \\(x^{2} - 16 = 0\\).",
  "choices": [
   "\\(x = \\pm 4\\)",
   "\\(x = 4\\)",
   "\\(x = \\pm 16\\)"
  ],
  "steps": [
   "Flytta över konstanten: \\(x^{2} = 16\\).",
   "Dra roten ur – glöm inte den negativa roten: \\(x = \\pm\\sqrt{16} = \\pm 4\\)."
  ],
  "course": "2c",
  "id": "A100"
 },
 {
  "topic": "Derivata",
  "q": "Låt \\(f(x) = x^{3} + 3x\\). Beräkna \\(f^{\\prime}(-3)\\).",
  "choices": [
   "\\(30\\)",
   "\\(-36\\)",
   "\\(12\\)"
  ],
  "steps": [
   "Derivera term för term med \\(D(x^n) = nx^{n-1}\\) (konstanter har derivatan 0):",
   "\\(f'(x) = 3x^{2} + 3\\)",
   "\\(f'(-3) = 3 \\cdot (-3)^{2} + 3 = 30\\)"
  ],
  "course": "3c",
  "id": "B001"
 },
 {
  "topic": "Derivata",
  "q": "Derivera \\(f(x) = x^{4} - x + 3\\).",
  "choices": [
   "\\(f'(x) = 4x^{3} - 1\\)",
   "\\(f'(x) = 4x^{3} + 2\\)",
   "\\(f'(x) = x^{3} - 1\\)"
  ],
  "steps": [
   "Deriveringsregeln \\(D(ax^n) = a \\cdot n x^{n-1}\\), och konstanten \\(3\\) försvinner.",
   "\\(f'(x) = 1\\cdot 4x^{3} + (-1) \\cdot 1 = 4x^{3} - 1\\)"
  ],
  "course": "3c",
  "id": "B002"
 },
 {
  "topic": "Derivata",
  "q": "Derivera \\(f(x) = -2e^{\\frac{1}{2}x} + 2x^2\\).",
  "choices": [
   "\\(f'(x) = -e^{\\frac{1}{2}x} + 4x\\)",
   "\\(f'(x) = -2e^{\\frac{1}{2}x} + 4x\\)",
   "\\(f'(x) = -4e^{\\frac{1}{2}x} + 4x\\)"
  ],
  "steps": [
   "Regeln \\(D\\left(e^{kx}\\right) = k e^{kx}\\) och \\(D(x^2) = 2x\\).",
   "\\(f'(x) = (-2) \\cdot \\frac{1}{2} \\cdot e^{\\frac{1}{2}x} + 2 \\cdot 2x = -e^{\\frac{1}{2}x} + 4x\\)"
  ],
  "course": "3c",
  "id": "B003"
 },
 {
  "topic": "Derivata",
  "q": "Låt \\(f(x) = \\frac{4}{x}\\). Beräkna \\(f^{\\prime}(-2)\\).",
  "choices": [
   "\\(-1\\)",
   "\\(1\\)",
   "\\(2\\)"
  ],
  "steps": [
   "Skriv om: \\(\\frac{4}{x} = 4x^{-1}\\).",
   "\\(f'(x) = 4 \\cdot (-1) x^{-2} = -\\frac{4}{x^2}\\)",
   "\\(f'(-2) = -\\frac{4}{(-2)^2} = -1\\)"
  ],
  "course": "3c",
  "id": "B004"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Bestäm ekvationen för tangenten till \\(f(x) = x^{2} + 4x + 4\\) i punkten där \\(x = -1\\).",
  "choices": [
   "\\(y = 2x + 3\\)",
   "\\(y = 2x + 1\\)",
   "\\(y = x + 3\\)"
  ],
  "steps": [
   "\\(f(-1) = (-1)^{2} + 4 \\cdot (-1) + 4 = 1\\), så tangeringspunkten är \\((-1,\\ 1)\\).",
   "\\(f'(x) = 2x + 4\\) ger lutningen \\(k = f'(-1) = 2\\).",
   "Sätt in punkten i \\(y = kx + m\\): \\(1 = 2 \\cdot (-1) + m \\Rightarrow m = 3\\).",
   "Tangentens ekvation: \\(y = 2x + 3\\)."
  ],
  "course": "3c",
  "id": "B005"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Funktionen \\(f(x) = x^{3} - 12x - 5\\) har två extrempunkter. Bestäm x-koordinaten för maximipunkten.",
  "choices": [
   "\\(x = -2\\)",
   "\\(x = 2\\)",
   "\\(x = 0\\)"
  ],
  "steps": [
   "\\(f'(x) = 3x^{2} - 12 = 0 \\;\\Rightarrow\\; x^2 = 4 \\;\\Rightarrow\\; x = \\pm 2\\)",
   "\\(f''(x) = 6x\\): \\(f''(-2) = -12\\) och \\(f''(2) = 12\\).",
   "Negativ andraderivata ger maximum, positiv ger minimum. Alltså är maximipunktens x-koordinat \\(x = -2\\)."
  ],
  "course": "3c",
  "id": "B006"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Bestäm x-koordinaterna för de stationära punkterna till \\(f(x) = x^{3} + 3x^{2} + 1\\).",
  "choices": [
   "\\(x_1 = -2,\\; x_2 = 0\\)",
   "\\(x_1 = 0,\\; x_2 = 2\\)",
   "\\(x_1 = -3,\\; x_2 = 0\\)"
  ],
  "steps": [
   "\\(f'(x) = 3x^{2} + 6x\\)",
   "Sätt \\(f'(x) = 0\\) och bryt ut \\(x\\): \\(x(3x + 6) = 0\\).",
   "\\(x = 0\\) eller \\(3x + 6 = 0 \\Rightarrow x = -2\\)."
  ],
  "course": "3c",
  "id": "B007"
 },
 {
  "topic": "Integraler",
  "q": "Beräkna \\(\\int_{-2}^{-1} (-3x^{2} + 2x - 3)\\,dx\\).",
  "choices": [
   "\\(-13\\)",
   "\\(11\\)",
   "\\(5\\)"
  ],
  "steps": [
   "Primitiv funktion: \\(F(x) = -x^{3} + x^{2} - 3x\\).",
   "\\(\\int_{-2}^{-1} f(x)\\,dx = F(-1) - F(-2) = 5 - 18 = -13\\)"
  ],
  "course": "3c",
  "id": "B008"
 },
 {
  "topic": "Integraler",
  "q": "Bestäm alla primitiva funktioner till \\(f(x) = x^{2} - 7x + 7\\).",
  "choices": [
   "\\(F(x) = \\frac{1}{3}x^{3} - \\frac{7}{2}x^{2} + 7x + C\\)",
   "\\(F(x) = 2x - 7 + C\\)",
   "\\(F(x) = x^{3} - 7x^{2} + 7x + C\\)"
  ],
  "steps": [
   "Regeln: en primitiv funktion till \\(x^n\\) är \\(\\frac{x^{n+1}}{n+1}\\). Glöm inte konstanten \\(C\\).",
   "\\(F(x) = 1 \\cdot \\frac{x^3}{3} + (-7) \\cdot \\frac{x^2}{2} + 7x + C = \\frac{1}{3}x^{3} - \\frac{7}{2}x^{2} + 7x + C\\)"
  ],
  "course": "3c",
  "id": "B009"
 },
 {
  "topic": "Integraler",
  "q": "Bestäm alla primitiva funktioner till \\(f(x) = 7e^{4x}\\).",
  "choices": [
   "\\(F(x) = \\frac{7}{4}e^{4x} + C\\)",
   "\\(F(x) = 28e^{4x} + C\\)",
   "\\(F(x) = 7e^{4x} + C\\)"
  ],
  "steps": [
   "En primitiv funktion till \\(e^{kx}\\) är \\(\\frac{e^{kx}}{k}\\).",
   "\\(F(x) = 7 \\cdot \\frac{e^{4x}}{4} + C = \\frac{7}{4}e^{4x} + C\\)"
  ],
  "course": "3c",
  "id": "B010"
 },
 {
  "topic": "Integraler",
  "q": "Beräkna \\(\\int_0^{\\ln 7} 2e^{2x}\\,dx\\) exakt.",
  "choices": [
   "\\(48\\)",
   "\\(49\\)",
   "\\(96\\)"
  ],
  "steps": [
   "Primitiv funktion: \\(F(x) = e^{2x}\\).",
   "\\(\\left[e^{2x}\\right]_0^{\\ln 7} = e^{2\\ln 7} - e^0 = 7^2 - 1 = 48\\)",
   "Här används att \\(e^{\\ln a} = a\\) och \\(e^0 = 1\\)."
  ],
  "course": "3c",
  "id": "B011"
 },
 {
  "topic": "Integraler",
  "q": "Beräkna arean av området som begränsas av kurvan \\(y = -x^{2} + 1\\) och x-axeln.",
  "choices": [
   "\\(\\frac{4}{3}\\) a.e.",
   "\\(\\frac{2}{3}\\) a.e.",
   "\\(2\\) a.e."
  ],
  "steps": [
   "Nollställen: \\(-x^{2} + 1 = 0 \\Rightarrow x = \\pm 1\\). Kurvan ligger ovanför x-axeln mellan dem.",
   "\\(A = \\int_{-1}^{1} (-x^{2} + 1)\\,dx = \\left[-\\frac{1}{3}x^{3} + x\\right]_{-1}^{1}\\)",
   "\\(= \\frac{2}{3} - (-\\frac{2}{3}) = \\frac{4}{3}\\) a.e."
  ],
  "course": "3c",
  "id": "B012"
 },
 {
  "topic": "Gränsvärden",
  "q": "Beräkna \\(\\lim_{x \\to 3} \\frac{x^{2} + x - 12}{x - 3}\\).",
  "choices": [
   "\\(7\\)",
   "\\(0\\)",
   "\\(-7\\)"
  ],
  "steps": [
   "Direkt insättning ger \\(\\frac{0}{0}\\), så faktorisera täljaren.",
   "\\(\\frac{x^{2} + x - 12}{x - 3} = \\frac{(x - 3)(x + 4)}{x - 3} = x + 4\\) (för \\(x \\neq 3\\))",
   "\\(\\lim_{x \\to 3} (x + 4) = 3 - (-4) = 7\\)"
  ],
  "course": "3c",
  "id": "B013"
 },
 {
  "topic": "Gränsvärden",
  "q": "Låt \\(f(x) = -x^{2}\\). Beräkna \\(\\lim_{h \\to 0} \\frac{f(-5+h) - f(-5)}{h}\\).",
  "choices": [
   "\\(10\\)",
   "\\(0\\)",
   "\\(-25\\)"
  ],
  "steps": [
   "\\(f(-5+h) - f(-5) = -(-5+h)^2 - (-25)\\) ",
   "\\(= -h^{2} + 10h\\)",
   "Dela med \\(h\\): \\(-h + 10\\). Låt \\(h \\to 0\\): \\(10\\).",
   "(Det är derivatans definition – svaret är \\(f'(-5)\\).)"
  ],
  "course": "3c",
  "id": "B014"
 },
 {
  "topic": "Algebra och rationella uttryck",
  "q": "Förenkla \\(\\frac{x^{2} + 8x + 16}{x^2 - 16}\\) så långt som möjligt.",
  "choices": [
   "\\(\\frac{x + 4}{x - 4}\\)",
   "\\(\\frac{x - 4}{x + 4}\\)",
   "\\(x + 4\\)"
  ],
  "steps": [
   "Täljaren: \\((x + 4)^2\\) (kvadreringsregeln). Nämnaren: \\((x + 4)(x - 4)\\).",
   "Förkorta bort en faktor \\((x + 4)\\): \\(\\frac{x + 4}{x - 4}\\)."
  ],
  "course": "3c",
  "id": "B015"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Beräkna den genomsnittliga förändringshastigheten för \\(f(x) = x^{2} + 3x - 3\\) i intervallet \\(3 \\leq x \\leq 6\\).",
  "choices": [
   "\\(12\\)",
   "\\(36\\)",
   "\\(15\\)"
  ],
  "steps": [
   "Ändringskvoten: \\(\\frac{\\Delta y}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}\\).",
   "\\(f(6) = 51\\), \\(f(3) = 15\\)",
   "\\(\\frac{51 - 15}{6 - 3} = \\frac{36}{3} = 12\\)"
  ],
  "course": "3c",
  "id": "B016"
 },
 {
  "topic": "Trigonometri",
  "q": "Bestäm det exakta värdet av \\(\\cos 330^\\circ\\).",
  "choices": [
   "\\(\\frac{\\sqrt{3}}{2}\\)",
   "\\(-\\frac{\\sqrt{3}}{2}\\)",
   "\\(\\frac{1}{2}\\)"
  ],
  "steps": [
   "\\(330^\\circ\\) ligger i kvadrant 4. Referensvinkeln är \\(30^\\circ\\).",
   "I kvadrant 4 är \\(\\cos\\) positiv (enhetscirkeln).",
   "\\(\\cos 30^\\circ\\) = \\(\\frac{\\sqrt{3}}{2}\\), så \\(\\cos 330^\\circ\\) = \\(\\frac{\\sqrt{3}}{2}\\)."
  ],
  "course": "3c",
  "id": "B017"
 },
 {
  "topic": "Trigonometri",
  "q": "I triangeln \\(ABC\\) är \\(a = 8\\) cm, \\(b = 8\\) cm och vinkeln \\(C = 138^\\circ\\). Beräkna triangelns area. (En decimal.)",
  "choices": [
   "\\(21{,}4\\) cm²",
   "\\(42{,}8\\) cm²",
   "\\(23{,}8\\) cm²"
  ],
  "steps": [
   "Areasatsen: \\(A = \\frac{ab \\sin C}{2}\\).",
   "\\(A = \\frac{8 \\cdot 8 \\cdot \\sin 138^\\circ}{2} \\approx 21{,}4\\) cm²"
  ],
  "course": "3c",
  "id": "B018"
 },
 {
  "topic": "Trigonometri",
  "q": "En triangel har sidorna \\(6\\) cm, \\(10\\) cm och \\(14\\) cm. Hur stor är vinkeln mittemot sidan som är \\(14\\) cm?",
  "choices": [
   "\\(120^\\circ\\)",
   "\\(60^\\circ\\)",
   "\\(90^\\circ\\)"
  ],
  "steps": [
   "Cosinussatsen löst för vinkeln: \\(\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}\\).",
   "\\(\\cos C = \\frac{6^2 + 10^2 - 14^2}{2 \\cdot 6 \\cdot 10} = \\frac{-60}{120} = -\\frac{1}{2}\\)",
   "\\(C = 120^\\circ\\) (cosinus är negativt, så vinkeln är trubbig)."
  ],
  "course": "3c",
  "id": "B019"
 },
 {
  "topic": "Trigonometri",
  "q": "I triangeln \\(ABC\\) är \\(a = 15\\) cm, \\(A = 62^\\circ\\) och \\(B = 69^\\circ\\). Beräkna sidan \\(b\\). (En decimal.)",
  "choices": [
   "\\(15{,}9\\) cm",
   "\\(14{,}2\\) cm",
   "\\(16{,}7\\) cm"
  ],
  "steps": [
   "Sinussatsen: \\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B}\\).",
   "\\(b = \\frac{15 \\cdot \\sin 69^\\circ}{\\sin 62^\\circ} \\approx 15{,}9\\) cm"
  ],
  "course": "3c",
  "id": "B020"
 },
 {
  "topic": "Exponentialfunktioner och ln",
  "q": "Lös ekvationen \\(3e^{-x} = 12\\). (Tre decimaler.)",
  "choices": [
   "\\(x = -\\ln 4 \\approx -1{,}386\\)",
   "\\(x = -\\ln 9 \\approx -2{,}197\\)",
   "\\(x = -4\\)"
  ],
  "steps": [
   "Dela med \\(3\\): \\(e^{-x} = 4\\).",
   "Ta naturliga logaritmen: \\(-x = \\ln 4\\).",
   "\\(x = -\\ln 4 \\approx -1{,}386\\)"
  ],
  "course": "3c",
  "id": "B021"
 },
 {
  "topic": "Exponentialfunktioner och ln",
  "q": "Derivera \\(f(x) = 2 \\cdot 10^x\\).",
  "choices": [
   "\\(f'(x) = 2 \\cdot 10^x \\cdot \\ln 10\\)",
   "\\(f'(x) = 2 \\cdot x \\cdot 10^{x-1}\\)",
   "\\(f'(x) = 2 \\cdot 10^x\\)"
  ],
  "steps": [
   "Regeln: \\(D\\left(a^x\\right) = a^x \\ln a\\) (eftersom \\(a^x = e^{x \\ln a}\\)).",
   "\\(f'(x) = 2 \\cdot 10^x \\cdot \\ln 10\\)"
  ],
  "course": "3c",
  "id": "B022"
 },
 {
  "topic": "Exponentialfunktioner och ln",
  "q": "Beräkna \\(\\ln e^{6} + \\ln 1 + e^{\\ln 2}\\) exakt.",
  "choices": [
   "\\(8\\)",
   "\\(9\\)",
   "\\(12\\)"
  ],
  "steps": [
   "\\(\\ln e^{6} = 6\\), \\(\\ln 1 = 0\\) och \\(e^{\\ln 2} = 2\\).",
   "\\(6 + 0 + 2 = 8\\)"
  ],
  "course": "3c",
  "id": "B023"
 },
 {
  "topic": "Derivata",
  "q": "Låt \\(f(x) = x^{4} - 4x^{3} + 5x^{2} - 4x - 4\\). Beräkna \\(f^{\\prime\\prime}(2)\\).",
  "choices": [
   "\\(10\\)",
   "\\(0\\)",
   "\\(-10\\)"
  ],
  "steps": [
   "\\(f'(x) = 4x^{3} - 12x^{2} + 10x - 4\\)",
   "\\(f''(x) = 12x^{2} - 24x + 10\\)",
   "\\(f''(2) = 12 \\cdot 2^{2} - 24 \\cdot 2 + 10 = 10\\)"
  ],
  "course": "3c",
  "id": "B024"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "För vilka \\(x\\) är \\(f(x) = 2x^{2} + 4x - 4\\) avtagande?",
  "choices": [
   "\\(x \\leq -1\\)",
   "\\(x \\geq -1\\)",
   "\\(x \\leq 1\\)"
  ],
  "steps": [
   "\\(f'(x) = 4x + 4\\)",
   "Avtagande där \\(f^{\\prime}(x) \\leq 0\\): \\(4x + 4 \\leq 0\\).",
   "Lös olikheten: \\(x \\leq -1\\)."
  ],
  "course": "3c",
  "id": "B025"
 },
 {
  "topic": "Derivata",
  "q": "Låt \\(f(x) = -3x^{3} - 5x^{2} + 2x - 3\\). Beräkna \\(f^{\\prime}(3)\\).",
  "choices": [
   "\\(-109\\)",
   "\\(-123\\)",
   "\\(-40\\)"
  ],
  "steps": [
   "Derivera term för term med \\(D(x^n) = nx^{n-1}\\) (konstanter har derivatan 0):",
   "\\(f'(x) = -9x^{2} - 10x + 2\\)",
   "\\(f'(3) = -9 \\cdot 3^{2} - 10 \\cdot 3 + 2 = -109\\)"
  ],
  "course": "3c",
  "id": "B026"
 },
 {
  "topic": "Derivata",
  "q": "Derivera \\(f(x) = 4x^{5} - 7x^{2} + 3\\).",
  "choices": [
   "\\(f'(x) = 20x^{4} - 14x\\)",
   "\\(f'(x) = 20x^{4} - 14x + 3\\)",
   "\\(f'(x) = 4x^{4} - 7x\\)"
  ],
  "steps": [
   "Deriveringsregeln \\(D(ax^n) = a \\cdot n x^{n-1}\\), och konstanten \\(3\\) försvinner.",
   "\\(f'(x) = 4\\cdot 5x^{4} + (-7) \\cdot 2x = 20x^{4} - 14x\\)"
  ],
  "course": "3c",
  "id": "B027"
 },
 {
  "topic": "Derivata",
  "q": "Derivera \\(f(x) = e^{4x} + 4x^2\\).",
  "choices": [
   "\\(f'(x) = 4e^{4x} + 8x\\)",
   "\\(f'(x) = e^{4x} + 8x\\)",
   "\\(f'(x) = \\frac{1}{4}e^{4x} + 8x\\)"
  ],
  "steps": [
   "Regeln \\(D\\left(e^{kx}\\right) = k e^{kx}\\) och \\(D(x^2) = 2x\\).",
   "\\(f'(x) = 1 \\cdot 4 \\cdot e^{4x} + 4 \\cdot 2x = 4e^{4x} + 8x\\)"
  ],
  "course": "3c",
  "id": "B028"
 },
 {
  "topic": "Derivata",
  "q": "Låt \\(f(x) = \\frac{12}{x}\\). Beräkna \\(f^{\\prime}(-2)\\).",
  "choices": [
   "\\(-3\\)",
   "\\(3\\)",
   "\\(6\\)"
  ],
  "steps": [
   "Skriv om: \\(\\frac{12}{x} = 12x^{-1}\\).",
   "\\(f'(x) = 12 \\cdot (-1) x^{-2} = -\\frac{12}{x^2}\\)",
   "\\(f'(-2) = -\\frac{12}{(-2)^2} = -3\\)"
  ],
  "course": "3c",
  "id": "B029"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Bestäm ekvationen för tangenten till \\(f(x) = x^{2} - 5x - 4\\) i punkten där \\(x = 2\\).",
  "choices": [
   "\\(y = -x - 8\\)",
   "\\(y = -x - 10\\)",
   "\\(y = -10x - 8\\)"
  ],
  "steps": [
   "\\(f(2) = 2^{2} - 5 \\cdot 2 - 4 = -10\\), så tangeringspunkten är \\((2,\\ -10)\\).",
   "\\(f'(x) = 2x - 5\\) ger lutningen \\(k = f'(2) = -1\\).",
   "Sätt in punkten i \\(y = kx + m\\): \\(-10 = (-1) \\cdot 2 + m \\Rightarrow m = -8\\).",
   "Tangentens ekvation: \\(y = -x - 8\\)."
  ],
  "course": "3c",
  "id": "B030"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Funktionen \\(f(x) = -x^{3} + 27x + 3\\) har två extrempunkter. Bestäm x-koordinaten för maximipunkten.",
  "choices": [
   "\\(x = 3\\)",
   "\\(x = -3\\)",
   "\\(x = 0\\)"
  ],
  "steps": [
   "\\(f'(x) = -3x^{2} + 27 = 0 \\;\\Rightarrow\\; x^2 = 9 \\;\\Rightarrow\\; x = \\pm 3\\)",
   "\\(f''(x) = -6x\\): \\(f''(-3) = 18\\) och \\(f''(3) = -18\\).",
   "Negativ andraderivata ger maximum, positiv ger minimum. Alltså är maximipunktens x-koordinat \\(x = 3\\)."
  ],
  "course": "3c",
  "id": "B031"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Bestäm x-koordinaterna för de stationära punkterna till \\(f(x) = 2x^{3} - 18x^{2} + 5\\).",
  "choices": [
   "\\(x_1 = 0,\\; x_2 = 6\\)",
   "\\(x_1 = -6,\\; x_2 = 0\\)",
   "\\(x_1 = 0,\\; x_2 = 9\\)"
  ],
  "steps": [
   "\\(f'(x) = 6x^{2} - 36x\\)",
   "Sätt \\(f'(x) = 0\\) och bryt ut \\(x\\): \\(x(6x - 36) = 0\\).",
   "\\(x = 0\\) eller \\(6x - 36 = 0 \\Rightarrow x = 6\\)."
  ],
  "course": "3c",
  "id": "B032"
 },
 {
  "topic": "Integraler",
  "q": "Beräkna \\(\\int_{0}^{2} (-x^{2} - 2x - 3)\\,dx\\).",
  "choices": [
   "\\(-\\frac{38}{3}\\)",
   "\\(-8\\)",
   "\\(\\frac{38}{3}\\)"
  ],
  "steps": [
   "Primitiv funktion: \\(F(x) = -\\frac{1}{3}x^{3} - x^{2} - 3x\\).",
   "\\(\\int_{0}^{2} f(x)\\,dx = F(2) - F(0) = (-\\frac{38}{3}) - 0 = -\\frac{38}{3}\\)"
  ],
  "course": "3c",
  "id": "B033"
 },
 {
  "topic": "Integraler",
  "q": "Bestäm alla primitiva funktioner till \\(f(x) = x^{2} + x + 2\\).",
  "choices": [
   "\\(F(x) = \\frac{1}{3}x^{3} + \\frac{1}{2}x^{2} + 2x + C\\)",
   "\\(F(x) = 2x + 1 + C\\)",
   "\\(F(x) = x^{3} + x^{2} + 2x + C\\)"
  ],
  "steps": [
   "Regeln: en primitiv funktion till \\(x^n\\) är \\(\\frac{x^{n+1}}{n+1}\\). Glöm inte konstanten \\(C\\).",
   "\\(F(x) = 1 \\cdot \\frac{x^3}{3} + 1 \\cdot \\frac{x^2}{2} + 2x + C = \\frac{1}{3}x^{3} + \\frac{1}{2}x^{2} + 2x + C\\)"
  ],
  "course": "3c",
  "id": "B034"
 },
 {
  "topic": "Integraler",
  "q": "Beräkna \\(\\int_0^{\\ln 5} e^x\\,dx\\) exakt.",
  "choices": [
   "\\(4\\)",
   "\\(5\\)",
   "\\(\\ln 5\\)"
  ],
  "steps": [
   "Primitiv funktion: \\(F(x) = e^x\\).",
   "\\(\\left[e^x\\right]_0^{\\ln 5} = e^{\\ln 5} - e^0 = 5 - 1 = 4\\)",
   "Här används att \\(e^{\\ln a} = a\\) och \\(e^0 = 1\\)."
  ],
  "course": "3c",
  "id": "B035"
 },
 {
  "topic": "Integraler",
  "q": "Beräkna arean av området som begränsas av kurvan \\(y = -3x^{2} + 48\\) och x-axeln.",
  "choices": [
   "\\(256\\) a.e.",
   "\\(128\\) a.e.",
   "\\(384\\) a.e."
  ],
  "steps": [
   "Nollställen: \\(-3x^{2} + 48 = 0 \\Rightarrow x = \\pm 4\\). Kurvan ligger ovanför x-axeln mellan dem.",
   "\\(A = \\int_{-4}^{4} (-3x^{2} + 48)\\,dx = \\left[-x^{3} + 48x\\right]_{-4}^{4}\\)",
   "\\(= 128 - (-128) = 256\\) a.e."
  ],
  "course": "3c",
  "id": "B036"
 },
 {
  "topic": "Gränsvärden",
  "q": "Beräkna \\(\\lim_{x \\to -2} \\frac{x^{2} - 3x - 10}{x + 2}\\).",
  "choices": [
   "\\(-7\\)",
   "\\(0\\)",
   "\\(7\\)"
  ],
  "steps": [
   "Direkt insättning ger \\(\\frac{0}{0}\\), så faktorisera täljaren.",
   "\\(\\frac{x^{2} - 3x - 10}{x + 2} = \\frac{(x + 2)(x - 5)}{x + 2} = x - 5\\) (för \\(x \\neq -2\\))",
   "\\(\\lim_{x \\to -2} (x - 5) = -2 - 5 = -7\\)"
  ],
  "course": "3c",
  "id": "B037"
 },
 {
  "topic": "Gränsvärden",
  "q": "Låt \\(f(x) = 4x^{2}\\). Beräkna \\(\\lim_{h \\to 0} \\frac{f(-3+h) - f(-3)}{h}\\).",
  "choices": [
   "\\(-24\\)",
   "\\(0\\)",
   "\\(36\\)"
  ],
  "steps": [
   "\\(f(-3+h) - f(-3) = 4(-3+h)^2 - 36\\) ",
   "\\(= 4h^{2} - 24h\\)",
   "Dela med \\(h\\): \\(4h - 24\\). Låt \\(h \\to 0\\): \\(-24\\).",
   "(Det är derivatans definition – svaret är \\(f'(-3)\\).)"
  ],
  "course": "3c",
  "id": "B038"
 },
 {
  "topic": "Algebra och rationella uttryck",
  "q": "Förenkla \\(\\frac{3x + 27}{x^2 - 81}\\) så långt som möjligt.",
  "choices": [
   "\\(\\frac{3}{x - 9}\\)",
   "\\(\\frac{3}{x + 9}\\)",
   "\\(\\frac{3}{x - 81}\\)"
  ],
  "steps": [
   "Faktorisera: täljaren \\(3(x + 9)\\), nämnaren \\((x + 9)(x - 9)\\) (konjugatregeln).",
   "Förkorta bort \\((x + 9)\\): \\(\\frac{3}{x - 9}\\)."
  ],
  "course": "3c",
  "id": "B039"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Beräkna den genomsnittliga förändringshastigheten för \\(f(x) = x^{2} + 3\\) i intervallet \\(-1 \\leq x \\leq 1\\).",
  "choices": [
   "\\(0\\)",
   "\\(2\\)",
   "\\(4\\)"
  ],
  "steps": [
   "Ändringskvoten: \\(\\frac{\\Delta y}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}\\).",
   "\\(f(1) = 4\\), \\(f(-1) = 4\\)",
   "\\(\\frac{4 - 4}{1 - (-1)} = \\frac{0}{2} = 0\\)"
  ],
  "course": "3c",
  "id": "B040"
 },
 {
  "topic": "Trigonometri",
  "q": "Bestäm det exakta värdet av \\(\\sin 30^\\circ\\).",
  "choices": [
   "\\(\\frac{1}{2}\\)",
   "\\(-\\frac{1}{2}\\)",
   "\\(\\frac{\\sqrt{3}}{2}\\)"
  ],
  "steps": [
   "Standardvärde (exakta värden från triangeln): \\(\\sin 30^\\circ\\) = \\(\\frac{1}{2}\\)."
  ],
  "course": "3c",
  "id": "B041"
 },
 {
  "topic": "Trigonometri",
  "q": "I triangeln \\(ABC\\) är \\(a = 8\\) cm, \\(b = 7\\) cm och vinkeln \\(C = 75^\\circ\\). Beräkna triangelns area. (En decimal.)",
  "choices": [
   "\\(27{,}0\\) cm²",
   "\\(54{,}1\\) cm²",
   "\\(7{,}2\\) cm²"
  ],
  "steps": [
   "Areasatsen: \\(A = \\frac{ab \\sin C}{2}\\).",
   "\\(A = \\frac{8 \\cdot 7 \\cdot \\sin 75^\\circ}{2} \\approx 27{,}0\\) cm²"
  ],
  "course": "3c",
  "id": "B042"
 },
 {
  "topic": "Trigonometri",
  "q": "En triangel har sidorna \\(15\\) cm, \\(8\\) cm och \\(13\\) cm. Hur stor är vinkeln mittemot sidan som är \\(13\\) cm?",
  "choices": [
   "\\(60^\\circ\\)",
   "\\(120^\\circ\\)",
   "\\(90^\\circ\\)"
  ],
  "steps": [
   "Cosinussatsen löst för vinkeln: \\(\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}\\).",
   "\\(\\cos C = \\frac{15^2 + 8^2 - 13^2}{2 \\cdot 15 \\cdot 8} = \\frac{120}{240} = \\frac{1}{2}\\)",
   "\\(C = 60^\\circ\\)."
  ],
  "course": "3c",
  "id": "B043"
 },
 {
  "topic": "Trigonometri",
  "q": "I triangeln \\(ABC\\) är \\(a = 12\\) cm, \\(A = 31^\\circ\\) och \\(B = 39^\\circ\\). Beräkna sidan \\(b\\). (En decimal.)",
  "choices": [
   "\\(14{,}7\\) cm",
   "\\(9{,}8\\) cm",
   "\\(15{,}1\\) cm"
  ],
  "steps": [
   "Sinussatsen: \\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B}\\).",
   "\\(b = \\frac{12 \\cdot \\sin 39^\\circ}{\\sin 31^\\circ} \\approx 14{,}7\\) cm"
  ],
  "course": "3c",
  "id": "B044"
 },
 {
  "topic": "Exponentialfunktioner och ln",
  "q": "Lös ekvationen \\(5e^{-2x} = 30\\). (Tre decimaler.)",
  "choices": [
   "\\(x = -\\frac{\\ln 6}{2} \\approx -0{,}896\\)",
   "\\(x = -\\frac{\\ln 25}{2} \\approx -1{,}609\\)",
   "\\(x = -3\\)"
  ],
  "steps": [
   "Dela med \\(5\\): \\(e^{-2x} = 6\\).",
   "Ta naturliga logaritmen: \\(-2x = \\ln 6\\).",
   "\\(x = -\\frac{\\ln 6}{2} \\approx -0{,}896\\)"
  ],
  "course": "3c",
  "id": "B045"
 },
 {
  "topic": "Exponentialfunktioner och ln",
  "q": "Derivera \\(f(x) = 3 \\cdot 2^x\\).",
  "choices": [
   "\\(f'(x) = 3 \\cdot 2^x \\cdot \\ln 2\\)",
   "\\(f'(x) = 3 \\cdot x \\cdot 2^{x-1}\\)",
   "\\(f'(x) = 3 \\cdot 2^x\\)"
  ],
  "steps": [
   "Regeln: \\(D\\left(a^x\\right) = a^x \\ln a\\) (eftersom \\(a^x = e^{x \\ln a}\\)).",
   "\\(f'(x) = 3 \\cdot 2^x \\cdot \\ln 2\\)"
  ],
  "course": "3c",
  "id": "B046"
 },
 {
  "topic": "Exponentialfunktioner och ln",
  "q": "Beräkna \\(\\ln e^{2} + \\ln 1 + e^{\\ln 7}\\) exakt.",
  "choices": [
   "\\(9\\)",
   "\\(10\\)",
   "\\(14\\)"
  ],
  "steps": [
   "\\(\\ln e^{2} = 2\\), \\(\\ln 1 = 0\\) och \\(e^{\\ln 7} = 7\\).",
   "\\(2 + 0 + 7 = 9\\)"
  ],
  "course": "3c",
  "id": "B047"
 },
 {
  "topic": "Derivata",
  "q": "Låt \\(f(x) = 2x^{4} + 4x^{3} - 2x^{2} - x + 5\\). Beräkna \\(f^{\\prime\\prime}(1)\\).",
  "choices": [
   "\\(44\\)",
   "\\(15\\)",
   "\\(-44\\)"
  ],
  "steps": [
   "\\(f'(x) = 8x^{3} + 12x^{2} - 4x - 1\\)",
   "\\(f''(x) = 24x^{2} + 24x - 4\\)",
   "\\(f''(1) = 24 \\cdot 1^{2} + 24 \\cdot 1 - 4 = 44\\)"
  ],
  "course": "3c",
  "id": "B048"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "För vilka \\(x\\) är \\(f(x) = 2x^{2} + 16x - 5\\) avtagande?",
  "choices": [
   "\\(x \\leq -4\\)",
   "\\(x \\geq -4\\)",
   "\\(x \\leq 4\\)"
  ],
  "steps": [
   "\\(f'(x) = 4x + 16\\)",
   "Avtagande där \\(f^{\\prime}(x) \\leq 0\\): \\(4x + 16 \\leq 0\\).",
   "Lös olikheten: \\(x \\leq -4\\)."
  ],
  "course": "3c",
  "id": "B049"
 },
 {
  "topic": "Derivata",
  "q": "Låt \\(f(x) = -3x^{3} + 2x^{2} + 6x\\). Beräkna \\(f^{\\prime}(-1)\\).",
  "choices": [
   "\\(-7\\)",
   "\\(-1\\)",
   "\\(1\\)"
  ],
  "steps": [
   "Derivera term för term med \\(D(x^n) = nx^{n-1}\\) (konstanter har derivatan 0):",
   "\\(f'(x) = -9x^{2} + 4x + 6\\)",
   "\\(f'(-1) = -9 \\cdot (-1)^{2} + 4 \\cdot (-1) + 6 = -7\\)"
  ],
  "course": "3c",
  "id": "B050"
 },
 {
  "topic": "Derivata",
  "q": "Derivera \\(f(x) = -3x^{5} - 2x + 4\\).",
  "choices": [
   "\\(f'(x) = -15x^{4} - 2\\)",
   "\\(f'(x) = -15x^{4} + 2\\)",
   "\\(f'(x) = -3x^{4} - 2\\)"
  ],
  "steps": [
   "Deriveringsregeln \\(D(ax^n) = a \\cdot n x^{n-1}\\), och konstanten \\(4\\) försvinner.",
   "\\(f'(x) = -3\\cdot 5x^{4} + (-2) \\cdot 1 = -15x^{4} - 2\\)"
  ],
  "course": "3c",
  "id": "B051"
 },
 {
  "topic": "Derivata",
  "q": "Derivera \\(f(x) = 3e^{4x} + x^2\\).",
  "choices": [
   "\\(f'(x) = 12e^{4x} + 2x\\)",
   "\\(f'(x) = 3e^{4x} + 2x\\)",
   "\\(f'(x) = \\frac{3}{4}e^{4x} + 2x\\)"
  ],
  "steps": [
   "Regeln \\(D\\left(e^{kx}\\right) = k e^{kx}\\) och \\(D(x^2) = 2x\\).",
   "\\(f'(x) = 3 \\cdot 4 \\cdot e^{4x} + 1 \\cdot 2x = 12e^{4x} + 2x\\)"
  ],
  "course": "3c",
  "id": "B052"
 },
 {
  "topic": "Derivata",
  "q": "Låt \\(f(x) = 12\\sqrt{x}\\). Beräkna \\(f^{\\prime}(16)\\).",
  "choices": [
   "\\(\\frac{3}{2}\\)",
   "\\(3\\)",
   "\\(24\\)"
  ],
  "steps": [
   "Skriv om: \\(12\\sqrt{x} = 12x^{1/2}\\).",
   "\\(f'(x) = 12 \\cdot \\frac{1}{2} x^{-1/2} = \\frac{12}{2\\sqrt{x}}\\)",
   "\\(f'(16) = \\frac{12}{2\\sqrt{16}} = \\frac{12}{8} = \\frac{3}{2}\\)"
  ],
  "course": "3c",
  "id": "B053"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Bestäm ekvationen för tangenten till \\(f(x) = 2x^{2} - x - 3\\) i punkten där \\(x = -2\\).",
  "choices": [
   "\\(y = -9x - 11\\)",
   "\\(y = -9x + 7\\)",
   "\\(y = 7x - 11\\)"
  ],
  "steps": [
   "\\(f(-2) = 2 \\cdot (-2)^{2} - (-2) - 3 = 7\\), så tangeringspunkten är \\((-2,\\ 7)\\).",
   "\\(f'(x) = 4x - 1\\) ger lutningen \\(k = f'(-2) = -9\\).",
   "Sätt in punkten i \\(y = kx + m\\): \\(7 = (-9) \\cdot (-2) + m \\Rightarrow m = -11\\).",
   "Tangentens ekvation: \\(y = -9x - 11\\)."
  ],
  "course": "3c",
  "id": "B054"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Funktionen \\(f(x) = -x^{3} + 12x\\) har två extrempunkter. Bestäm x-koordinaten för minimipunkten.",
  "choices": [
   "\\(x = -2\\)",
   "\\(x = 2\\)",
   "\\(x = 0\\)"
  ],
  "steps": [
   "\\(f'(x) = -3x^{2} + 12 = 0 \\;\\Rightarrow\\; x^2 = 4 \\;\\Rightarrow\\; x = \\pm 2\\)",
   "\\(f''(x) = -6x\\): \\(f''(-2) = 12\\) och \\(f''(2) = -12\\).",
   "Negativ andraderivata ger maximum, positiv ger minimum. Alltså är minimipunktens x-koordinat \\(x = -2\\)."
  ],
  "course": "3c",
  "id": "B055"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Bestäm x-koordinaterna för de stationära punkterna till \\(f(x) = 2x^{3} - 6x^{2}\\).",
  "choices": [
   "\\(x_1 = 0,\\; x_2 = 2\\)",
   "\\(x_1 = -2,\\; x_2 = 0\\)",
   "\\(x_1 = 0,\\; x_2 = 3\\)"
  ],
  "steps": [
   "\\(f'(x) = 6x^{2} - 12x\\)",
   "Sätt \\(f'(x) = 0\\) och bryt ut \\(x\\): \\(x(6x - 12) = 0\\).",
   "\\(x = 0\\) eller \\(6x - 12 = 0 \\Rightarrow x = 2\\)."
  ],
  "course": "3c",
  "id": "B056"
 },
 {
  "topic": "Integraler",
  "q": "Beräkna \\(\\int_{1}^{4} (6x^{2} - 2x - 3)\\,dx\\).",
  "choices": [
   "\\(102\\)",
   "\\(84\\)",
   "\\(100\\)"
  ],
  "steps": [
   "Primitiv funktion: \\(F(x) = 2x^{3} - x^{2} - 3x\\).",
   "\\(\\int_{1}^{4} f(x)\\,dx = F(4) - F(1) = 100 - (-2) = 102\\)"
  ],
  "course": "3c",
  "id": "B057"
 },
 {
  "topic": "Integraler",
  "q": "Bestäm alla primitiva funktioner till \\(f(x) = x^{2} - 4x + 4\\).",
  "choices": [
   "\\(F(x) = \\frac{1}{3}x^{3} - 2x^{2} + 4x + C\\)",
   "\\(F(x) = 2x - 4 + C\\)",
   "\\(F(x) = x^{3} - 4x^{2} + 4x + C\\)"
  ],
  "steps": [
   "Regeln: en primitiv funktion till \\(x^n\\) är \\(\\frac{x^{n+1}}{n+1}\\). Glöm inte konstanten \\(C\\).",
   "\\(F(x) = 1 \\cdot \\frac{x^3}{3} + (-4) \\cdot \\frac{x^2}{2} + 4x + C = \\frac{1}{3}x^{3} - 2x^{2} + 4x + C\\)"
  ],
  "course": "3c",
  "id": "B058"
 },
 {
  "topic": "Integraler",
  "q": "Bestäm alla primitiva funktioner till \\(f(x) = -2e^{4x}\\).",
  "choices": [
   "\\(F(x) = -\\frac{1}{2}e^{4x} + C\\)",
   "\\(F(x) = -8e^{4x} + C\\)",
   "\\(F(x) = -2e^{4x} + C\\)"
  ],
  "steps": [
   "En primitiv funktion till \\(e^{kx}\\) är \\(\\frac{e^{kx}}{k}\\).",
   "\\(F(x) = (-2) \\cdot \\frac{e^{4x}}{4} + C = -\\frac{1}{2}e^{4x} + C\\)"
  ],
  "course": "3c",
  "id": "B059"
 },
 {
  "topic": "Integraler",
  "q": "Beräkna \\(\\int_0^{\\ln 3} 2e^{2x}\\,dx\\) exakt.",
  "choices": [
   "\\(8\\)",
   "\\(9\\)",
   "\\(16\\)"
  ],
  "steps": [
   "Primitiv funktion: \\(F(x) = e^{2x}\\).",
   "\\(\\left[e^{2x}\\right]_0^{\\ln 3} = e^{2\\ln 3} - e^0 = 3^2 - 1 = 8\\)",
   "Här används att \\(e^{\\ln a} = a\\) och \\(e^0 = 1\\)."
  ],
  "course": "3c",
  "id": "B060"
 },
 {
  "topic": "Integraler",
  "q": "Beräkna arean av området som begränsas av kurvan \\(y = -3x^{2} + 27\\) och x-axeln.",
  "choices": [
   "\\(108\\) a.e.",
   "\\(54\\) a.e.",
   "\\(162\\) a.e."
  ],
  "steps": [
   "Nollställen: \\(-3x^{2} + 27 = 0 \\Rightarrow x = \\pm 3\\). Kurvan ligger ovanför x-axeln mellan dem.",
   "\\(A = \\int_{-3}^{3} (-3x^{2} + 27)\\,dx = \\left[-x^{3} + 27x\\right]_{-3}^{3}\\)",
   "\\(= 54 - (-54) = 108\\) a.e."
  ],
  "course": "3c",
  "id": "B061"
 },
 {
  "topic": "Gränsvärden",
  "q": "Beräkna \\(\\lim_{x \\to -3} \\frac{x^{2} + 8x + 15}{x + 3}\\).",
  "choices": [
   "\\(2\\)",
   "\\(0\\)",
   "\\(-2\\)"
  ],
  "steps": [
   "Direkt insättning ger \\(\\frac{0}{0}\\), så faktorisera täljaren.",
   "\\(\\frac{x^{2} + 8x + 15}{x + 3} = \\frac{(x + 3)(x + 5)}{x + 3} = x + 5\\) (för \\(x \\neq -3\\))",
   "\\(\\lim_{x \\to -3} (x + 5) = -3 - (-5) = 2\\)"
  ],
  "course": "3c",
  "id": "B062"
 },
 {
  "topic": "Gränsvärden",
  "q": "Låt \\(f(x) = 4x^{2}\\). Beräkna \\(\\lim_{h \\to 0} \\frac{f(5+h) - f(5)}{h}\\).",
  "choices": [
   "\\(40\\)",
   "\\(0\\)",
   "\\(100\\)"
  ],
  "steps": [
   "\\(f(5+h) - f(5) = 4(5+h)^2 - 100\\) ",
   "\\(= 4h^{2} + 40h\\)",
   "Dela med \\(h\\): \\(4h + 40\\). Låt \\(h \\to 0\\): \\(40\\).",
   "(Det är derivatans definition – svaret är \\(f'(5)\\).)"
  ],
  "course": "3c",
  "id": "B063"
 },
 {
  "topic": "Algebra och rationella uttryck",
  "q": "Förenkla \\(\\frac{4x + 20}{x^2 - 25}\\) så långt som möjligt.",
  "choices": [
   "\\(\\frac{4}{x - 5}\\)",
   "\\(\\frac{4}{x + 5}\\)",
   "\\(\\frac{4}{x - 25}\\)"
  ],
  "steps": [
   "Faktorisera: täljaren \\(4(x + 5)\\), nämnaren \\((x + 5)(x - 5)\\) (konjugatregeln).",
   "Förkorta bort \\((x + 5)\\): \\(\\frac{4}{x - 5}\\)."
  ],
  "course": "3c",
  "id": "B064"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Beräkna den genomsnittliga förändringshastigheten för \\(f(x) = x^{2} - 3x + 3\\) i intervallet \\(-2 \\leq x \\leq 1\\).",
  "choices": [
   "\\(-4\\)",
   "\\(-12\\)",
   "\\(-1\\)"
  ],
  "steps": [
   "Ändringskvoten: \\(\\frac{\\Delta y}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}\\).",
   "\\(f(1) = 1\\), \\(f(-2) = 13\\)",
   "\\(\\frac{1 - 13}{1 - (-2)} = \\frac{-12}{3} = -4\\)"
  ],
  "course": "3c",
  "id": "B065"
 },
 {
  "topic": "Trigonometri",
  "q": "Bestäm det exakta värdet av \\(\\tan 135^\\circ\\).",
  "choices": [
   "\\(-1\\)",
   "\\(1\\)",
   "\\(-\\frac{\\sqrt{3}}{2}\\)"
  ],
  "steps": [
   "\\(135^\\circ\\) ligger i kvadrant 2. Referensvinkeln är \\(45^\\circ\\).",
   "I kvadrant 2 är \\(\\tan\\) negativ (enhetscirkeln).",
   "\\(\\tan 45^\\circ\\) = \\(1\\), så \\(\\tan 135^\\circ\\) = \\(-1\\)."
  ],
  "course": "3c",
  "id": "B066"
 },
 {
  "topic": "Trigonometri",
  "q": "I triangeln \\(ABC\\) är \\(a = 11\\) cm, \\(b = 14\\) cm och vinkeln \\(C = 105^\\circ\\). Beräkna triangelns area. (En decimal.)",
  "choices": [
   "\\(74{,}4\\) cm²",
   "\\(148{,}8\\) cm²",
   "\\(19{,}9\\) cm²"
  ],
  "steps": [
   "Areasatsen: \\(A = \\frac{ab \\sin C}{2}\\).",
   "\\(A = \\frac{11 \\cdot 14 \\cdot \\sin 105^\\circ}{2} \\approx 74{,}4\\) cm²"
  ],
  "course": "3c",
  "id": "B067"
 },
 {
  "topic": "Trigonometri",
  "q": "En triangel har sidorna \\(16\\) cm, \\(5\\) cm och \\(19\\) cm. Hur stor är vinkeln mittemot sidan som är \\(19\\) cm?",
  "choices": [
   "\\(120^\\circ\\)",
   "\\(60^\\circ\\)",
   "\\(90^\\circ\\)"
  ],
  "steps": [
   "Cosinussatsen löst för vinkeln: \\(\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}\\).",
   "\\(\\cos C = \\frac{16^2 + 5^2 - 19^2}{2 \\cdot 16 \\cdot 5} = \\frac{-80}{160} = -\\frac{1}{2}\\)",
   "\\(C = 120^\\circ\\) (cosinus är negativt, så vinkeln är trubbig)."
  ],
  "course": "3c",
  "id": "B068"
 },
 {
  "topic": "Trigonometri",
  "q": "I triangeln \\(ABC\\) är \\(a = 12\\) cm, \\(A = 68^\\circ\\) och \\(B = 99^\\circ\\). Beräkna sidan \\(b\\). (En decimal.)",
  "choices": [
   "\\(12{,}8\\) cm",
   "\\(11{,}3\\) cm",
   "\\(17{,}5\\) cm"
  ],
  "steps": [
   "Sinussatsen: \\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B}\\).",
   "\\(b = \\frac{12 \\cdot \\sin 99^\\circ}{\\sin 68^\\circ} \\approx 12{,}8\\) cm"
  ],
  "course": "3c",
  "id": "B069"
 },
 {
  "topic": "Exponentialfunktioner och ln",
  "q": "Lös ekvationen \\(3e^{3x} = 24\\). (Tre decimaler.)",
  "choices": [
   "\\(x = \\frac{\\ln 8}{3} \\approx 0{,}693\\)",
   "\\(x = \\frac{\\ln 21}{3} \\approx 1{,}015\\)",
   "\\(x = \\frac{8}{3}\\)"
  ],
  "steps": [
   "Dela med \\(3\\): \\(e^{3x} = 8\\).",
   "Ta naturliga logaritmen: \\(3x = \\ln 8\\).",
   "\\(x = \\frac{\\ln 8}{3} \\approx 0{,}693\\)"
  ],
  "course": "3c",
  "id": "B070"
 },
 {
  "topic": "Exponentialfunktioner och ln",
  "q": "Derivera \\(f(x) = -2 \\cdot 5^x\\).",
  "choices": [
   "\\(f'(x) = -2 \\cdot 5^x \\cdot \\ln 5\\)",
   "\\(f'(x) = -2 \\cdot x \\cdot 5^{x-1}\\)",
   "\\(f'(x) = -2 \\cdot 5^x\\)"
  ],
  "steps": [
   "Regeln: \\(D\\left(a^x\\right) = a^x \\ln a\\) (eftersom \\(a^x = e^{x \\ln a}\\)).",
   "\\(f'(x) = -2 \\cdot 5^x \\cdot \\ln 5\\)"
  ],
  "course": "3c",
  "id": "B071"
 },
 {
  "topic": "Exponentialfunktioner och ln",
  "q": "Beräkna \\(\\ln e^{2} + \\ln 1 + e^{\\ln 2}\\) exakt.",
  "choices": [
   "\\(4\\)",
   "\\(5\\)",
   "\\(2 + \\ln 2\\)"
  ],
  "steps": [
   "\\(\\ln e^{2} = 2\\), \\(\\ln 1 = 0\\) och \\(e^{\\ln 2} = 2\\).",
   "\\(2 + 0 + 2 = 4\\)"
  ],
  "course": "3c",
  "id": "B072"
 },
 {
  "topic": "Derivata",
  "q": "Låt \\(f(x) = 2x^{4} - 3x^{2} - x + 4\\). Beräkna \\(f^{\\prime\\prime}(2)\\).",
  "choices": [
   "\\(90\\)",
   "\\(51\\)",
   "\\(-90\\)"
  ],
  "steps": [
   "\\(f'(x) = 8x^{3} - 6x - 1\\)",
   "\\(f''(x) = 24x^{2} - 6\\)",
   "\\(f''(2) = 24 \\cdot 2^{2} - 6 = 90\\)"
  ],
  "course": "3c",
  "id": "B073"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "För vilka \\(x\\) är \\(f(x) = -x^{2} + 4x + 1\\) växande?",
  "choices": [
   "\\(x \\leq 2\\)",
   "\\(x \\geq 2\\)",
   "\\(x \\leq -2\\)"
  ],
  "steps": [
   "\\(f'(x) = -2x + 4\\)",
   "Växande där \\(f^{\\prime}(x) \\geq 0\\): \\(-2x + 4 \\geq 0\\).",
   "Lös olikheten (dela med negativt tal vänder olikheten): \\(x \\leq 2\\)."
  ],
  "course": "3c",
  "id": "B074"
 },
 {
  "topic": "Derivata",
  "q": "Låt \\(f(x) = -3x^{3} - 2x^{2} + 4x - 6\\). Beräkna \\(f^{\\prime}(2)\\).",
  "choices": [
   "\\(-40\\)",
   "\\(-30\\)",
   "\\(-12\\)"
  ],
  "steps": [
   "Derivera term för term med \\(D(x^n) = nx^{n-1}\\) (konstanter har derivatan 0):",
   "\\(f'(x) = -9x^{2} - 4x + 4\\)",
   "\\(f'(2) = -9 \\cdot 2^{2} - 4 \\cdot 2 + 4 = -40\\)"
  ],
  "course": "3c",
  "id": "B075"
 },
 {
  "topic": "Derivata",
  "q": "Derivera \\(f(x) = -5x^{4} + 5x^{2} - 3\\).",
  "choices": [
   "\\(f'(x) = -20x^{3} + 10x\\)",
   "\\(f'(x) = -20x^{3} + 10x - 3\\)",
   "\\(f'(x) = -5x^{3} + 5x\\)"
  ],
  "steps": [
   "Deriveringsregeln \\(D(ax^n) = a \\cdot n x^{n-1}\\), och konstanten \\(-3\\) försvinner.",
   "\\(f'(x) = -5\\cdot 4x^{3} + 5 \\cdot 2x = -20x^{3} + 10x\\)"
  ],
  "course": "3c",
  "id": "B076"
 },
 {
  "topic": "Derivata",
  "q": "Derivera \\(f(x) = 2e^{4x} + x^2\\).",
  "choices": [
   "\\(f'(x) = 8e^{4x} + 2x\\)",
   "\\(f'(x) = 2e^{4x} + 2x\\)",
   "\\(f'(x) = \\frac{1}{2}e^{4x} + 2x\\)"
  ],
  "steps": [
   "Regeln \\(D\\left(e^{kx}\\right) = k e^{kx}\\) och \\(D(x^2) = 2x\\).",
   "\\(f'(x) = 2 \\cdot 4 \\cdot e^{4x} + 1 \\cdot 2x = 8e^{4x} + 2x\\)"
  ],
  "course": "3c",
  "id": "B077"
 },
 {
  "topic": "Derivata",
  "q": "Låt \\(f(x) = 5\\sqrt{x}\\). Beräkna \\(f^{\\prime}(25)\\).",
  "choices": [
   "\\(\\frac{1}{2}\\)",
   "\\(1\\)",
   "\\(\\frac{25}{2}\\)"
  ],
  "steps": [
   "Skriv om: \\(5\\sqrt{x} = 5x^{1/2}\\).",
   "\\(f'(x) = 5 \\cdot \\frac{1}{2} x^{-1/2} = \\frac{5}{2\\sqrt{x}}\\)",
   "\\(f'(25) = \\frac{5}{2\\sqrt{25}} = \\frac{5}{10} = \\frac{1}{2}\\)"
  ],
  "course": "3c",
  "id": "B078"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Bestäm ekvationen för tangenten till \\(f(x) = x^{2} - 5x - 4\\) i punkten där \\(x = -1\\).",
  "choices": [
   "\\(y = -7x - 5\\)",
   "\\(y = -7x + 2\\)",
   "\\(y = 2x - 5\\)"
  ],
  "steps": [
   "\\(f(-1) = (-1)^{2} - 5 \\cdot (-1) - 4 = 2\\), så tangeringspunkten är \\((-1,\\ 2)\\).",
   "\\(f'(x) = 2x - 5\\) ger lutningen \\(k = f'(-1) = -7\\).",
   "Sätt in punkten i \\(y = kx + m\\): \\(2 = (-7) \\cdot (-1) + m \\Rightarrow m = -5\\).",
   "Tangentens ekvation: \\(y = -7x - 5\\)."
  ],
  "course": "3c",
  "id": "B079"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Funktionen \\(f(x) = x^{3} - 48x - 2\\) har två extrempunkter. Bestäm x-koordinaten för minimipunkten.",
  "choices": [
   "\\(x = 4\\)",
   "\\(x = -4\\)",
   "\\(x = 0\\)"
  ],
  "steps": [
   "\\(f'(x) = 3x^{2} - 48 = 0 \\;\\Rightarrow\\; x^2 = 16 \\;\\Rightarrow\\; x = \\pm 4\\)",
   "\\(f''(x) = 6x\\): \\(f''(-4) = -24\\) och \\(f''(4) = 24\\).",
   "Negativ andraderivata ger maximum, positiv ger minimum. Alltså är minimipunktens x-koordinat \\(x = 4\\)."
  ],
  "course": "3c",
  "id": "B080"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Bestäm x-koordinaterna för de stationära punkterna till \\(f(x) = x^{3} - 6x^{2} + 5\\).",
  "choices": [
   "\\(x_1 = 0,\\; x_2 = 4\\)",
   "\\(x_1 = -4,\\; x_2 = 0\\)",
   "\\(x_1 = 0,\\; x_2 = 6\\)"
  ],
  "steps": [
   "\\(f'(x) = 3x^{2} - 12x\\)",
   "Sätt \\(f'(x) = 0\\) och bryt ut \\(x\\): \\(x(3x - 12) = 0\\).",
   "\\(x = 0\\) eller \\(3x - 12 = 0 \\Rightarrow x = 4\\)."
  ],
  "course": "3c",
  "id": "B081"
 },
 {
  "topic": "Integraler",
  "q": "Beräkna \\(\\int_{-1}^{0} (4x + 6)\\,dx\\).",
  "choices": [
   "\\(4\\)",
   "\\(0\\)",
   "\\(-4\\)"
  ],
  "steps": [
   "Primitiv funktion: \\(F(x) = 2x^{2} + 6x\\).",
   "\\(\\int_{-1}^{0} f(x)\\,dx = F(0) - F(-1) = 0 - (-4) = 4\\)"
  ],
  "course": "3c",
  "id": "B082"
 },
 {
  "topic": "Integraler",
  "q": "Bestäm alla primitiva funktioner till \\(f(x) = 3x^{2} + 5x - 8\\).",
  "choices": [
   "\\(F(x) = x^{3} + \\frac{5}{2}x^{2} - 8x + C\\)",
   "\\(F(x) = 6x + 5 + C\\)",
   "\\(F(x) = 3x^{3} + 5x^{2} - 8x + C\\)"
  ],
  "steps": [
   "Regeln: en primitiv funktion till \\(x^n\\) är \\(\\frac{x^{n+1}}{n+1}\\). Glöm inte konstanten \\(C\\).",
   "\\(F(x) = 3 \\cdot \\frac{x^3}{3} + 5 \\cdot \\frac{x^2}{2} + (-8)x + C = x^{3} + \\frac{5}{2}x^{2} - 8x + C\\)"
  ],
  "course": "3c",
  "id": "B083"
 },
 {
  "topic": "Integraler",
  "q": "Bestäm alla primitiva funktioner till \\(f(x) = -4e^{-2x}\\).",
  "choices": [
   "\\(F(x) = 2e^{-2x} + C\\)",
   "\\(F(x) = 8e^{-2x} + C\\)",
   "\\(F(x) = -4e^{-2x} + C\\)"
  ],
  "steps": [
   "En primitiv funktion till \\(e^{kx}\\) är \\(\\frac{e^{kx}}{k}\\).",
   "\\(F(x) = (-4) \\cdot \\frac{e^{-2x}}{-2} + C = 2e^{-2x} + C\\)"
  ],
  "course": "3c",
  "id": "B084"
 },
 {
  "topic": "Integraler",
  "q": "Beräkna \\(\\int_0^{\\ln 5} 2e^{2x}\\,dx\\) exakt.",
  "choices": [
   "\\(24\\)",
   "\\(25\\)",
   "\\(48\\)"
  ],
  "steps": [
   "Primitiv funktion: \\(F(x) = e^{2x}\\).",
   "\\(\\left[e^{2x}\\right]_0^{\\ln 5} = e^{2\\ln 5} - e^0 = 5^2 - 1 = 24\\)",
   "Här används att \\(e^{\\ln a} = a\\) och \\(e^0 = 1\\)."
  ],
  "course": "3c",
  "id": "B085"
 },
 {
  "topic": "Integraler",
  "q": "Beräkna arean av området som begränsas av kurvan \\(y = -2x^{2} + 18\\) och x-axeln.",
  "choices": [
   "\\(72\\) a.e.",
   "\\(36\\) a.e.",
   "\\(108\\) a.e."
  ],
  "steps": [
   "Nollställen: \\(-2x^{2} + 18 = 0 \\Rightarrow x = \\pm 3\\). Kurvan ligger ovanför x-axeln mellan dem.",
   "\\(A = \\int_{-3}^{3} (-2x^{2} + 18)\\,dx = \\left[-\\frac{2}{3}x^{3} + 18x\\right]_{-3}^{3}\\)",
   "\\(= 36 - (-36) = 72\\) a.e."
  ],
  "course": "3c",
  "id": "B086"
 },
 {
  "topic": "Gränsvärden",
  "q": "Beräkna \\(\\lim_{x \\to -2} \\frac{x^{2} - 5x - 14}{x + 2}\\).",
  "choices": [
   "\\(-9\\)",
   "\\(0\\)",
   "\\(9\\)"
  ],
  "steps": [
   "Direkt insättning ger \\(\\frac{0}{0}\\), så faktorisera täljaren.",
   "\\(\\frac{x^{2} - 5x - 14}{x + 2} = \\frac{(x + 2)(x - 7)}{x + 2} = x - 7\\) (för \\(x \\neq -2\\))",
   "\\(\\lim_{x \\to -2} (x - 7) = -2 - 7 = -9\\)"
  ],
  "course": "3c",
  "id": "B087"
 },
 {
  "topic": "Gränsvärden",
  "q": "Låt \\(f(x) = 4x^{2}\\). Beräkna \\(\\lim_{h \\to 0} \\frac{f(2+h) - f(2)}{h}\\).",
  "choices": [
   "\\(16\\)",
   "\\(0\\)",
   "\\(8\\)"
  ],
  "steps": [
   "\\(f(2+h) - f(2) = 4(2+h)^2 - 16\\) ",
   "\\(= 4h^{2} + 16h\\)",
   "Dela med \\(h\\): \\(4h + 16\\). Låt \\(h \\to 0\\): \\(16\\).",
   "(Det är derivatans definition – svaret är \\(f'(2)\\).)"
  ],
  "course": "3c",
  "id": "B088"
 },
 {
  "topic": "Algebra och rationella uttryck",
  "q": "Förenkla \\(\\frac{x^2 - 25}{x - 5}\\) så långt som möjligt.",
  "choices": [
   "\\(x + 5\\)",
   "\\(x - 5\\)",
   "\\(x + 25\\)"
  ],
  "steps": [
   "Konjugatregeln: \\(x^2 - 25 = (x + 5)(x - 5)\\).",
   "Förkorta bort \\((x - 5)\\): \\(x + 5\\)."
  ],
  "course": "3c",
  "id": "B089"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "Beräkna den genomsnittliga förändringshastigheten för \\(f(x) = x^{2} - 1\\) i intervallet \\(-2 \\leq x \\leq 2\\).",
  "choices": [
   "\\(0\\)",
   "\\(4\\)",
   "\\(\\frac{3}{2}\\)"
  ],
  "steps": [
   "Ändringskvoten: \\(\\frac{\\Delta y}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}\\).",
   "\\(f(2) = 3\\), \\(f(-2) = 3\\)",
   "\\(\\frac{3 - 3}{2 - (-2)} = \\frac{0}{4} = 0\\)"
  ],
  "course": "3c",
  "id": "B090"
 },
 {
  "topic": "Trigonometri",
  "q": "Bestäm det exakta värdet av \\(\\sin 225^\\circ\\).",
  "choices": [
   "\\(-\\frac{\\sqrt{2}}{2}\\)",
   "\\(\\frac{\\sqrt{2}}{2}\\)",
   "\\(-\\sqrt{3}\\)"
  ],
  "steps": [
   "\\(225^\\circ\\) ligger i kvadrant 3. Referensvinkeln är \\(45^\\circ\\).",
   "I kvadrant 3 är \\(\\sin\\) negativ (enhetscirkeln).",
   "\\(\\sin 45^\\circ\\) = \\(\\frac{\\sqrt{2}}{2}\\), så \\(\\sin 225^\\circ\\) = \\(-\\frac{\\sqrt{2}}{2}\\)."
  ],
  "course": "3c",
  "id": "B091"
 },
 {
  "topic": "Trigonometri",
  "q": "I triangeln \\(ABC\\) är \\(a = 15\\) cm, \\(b = 10\\) cm och vinkeln \\(C = 70^\\circ\\). Beräkna triangelns area. (En decimal.)",
  "choices": [
   "\\(70{,}5\\) cm²",
   "\\(141{,}0\\) cm²",
   "\\(25{,}7\\) cm²"
  ],
  "steps": [
   "Areasatsen: \\(A = \\frac{ab \\sin C}{2}\\).",
   "\\(A = \\frac{15 \\cdot 10 \\cdot \\sin 70^\\circ}{2} \\approx 70{,}5\\) cm²"
  ],
  "course": "3c",
  "id": "B092"
 },
 {
  "topic": "Trigonometri",
  "q": "En triangel har sidorna \\(5\\) cm, \\(16\\) cm och \\(19\\) cm. Hur stor är vinkeln mittemot sidan som är \\(19\\) cm?",
  "choices": [
   "\\(120^\\circ\\)",
   "\\(60^\\circ\\)",
   "\\(90^\\circ\\)"
  ],
  "steps": [
   "Cosinussatsen löst för vinkeln: \\(\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}\\).",
   "\\(\\cos C = \\frac{5^2 + 16^2 - 19^2}{2 \\cdot 5 \\cdot 16} = \\frac{-80}{160} = -\\frac{1}{2}\\)",
   "\\(C = 120^\\circ\\) (cosinus är negativt, så vinkeln är trubbig)."
  ],
  "course": "3c",
  "id": "B093"
 },
 {
  "topic": "Trigonometri",
  "q": "I triangeln \\(ABC\\) är \\(a = 9\\) cm, \\(A = 38^\\circ\\) och \\(B = 36^\\circ\\). Beräkna sidan \\(b\\). (En decimal.)",
  "choices": [
   "\\(8{,}6\\) cm",
   "\\(9{,}4\\) cm",
   "\\(8{,}5\\) cm"
  ],
  "steps": [
   "Sinussatsen: \\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B}\\).",
   "\\(b = \\frac{9 \\cdot \\sin 36^\\circ}{\\sin 38^\\circ} \\approx 8{,}6\\) cm"
  ],
  "course": "3c",
  "id": "B094"
 },
 {
  "topic": "Exponentialfunktioner och ln",
  "q": "Lös ekvationen \\(5e^{-2x} = 15\\). (Tre decimaler.)",
  "choices": [
   "\\(x = -\\frac{\\ln 3}{2} \\approx -0{,}549\\)",
   "\\(x = -\\frac{\\ln 10}{2} \\approx -1{,}151\\)",
   "\\(x = -\\frac{3}{2}\\)"
  ],
  "steps": [
   "Dela med \\(5\\): \\(e^{-2x} = 3\\).",
   "Ta naturliga logaritmen: \\(-2x = \\ln 3\\).",
   "\\(x = -\\frac{\\ln 3}{2} \\approx -0{,}549\\)"
  ],
  "course": "3c",
  "id": "B095"
 },
 {
  "topic": "Exponentialfunktioner och ln",
  "q": "Förenkla \\(e^{\\ln 9 + \\ln 6}\\).",
  "choices": [
   "\\(54\\)",
   "\\(15\\)",
   "\\(\\ln 54\\)"
  ],
  "steps": [
   "Logaritmlagen: \\(\\ln a + \\ln b = \\ln(ab)\\).",
   "\\(e^{\\ln 54} = 54\\) eftersom \\(e^{\\ln x} = x\\)."
  ],
  "course": "3c",
  "id": "B096"
 },
 {
  "topic": "Derivata",
  "q": "Låt \\(f(x) = 2x^{4} + 4x^{3} + 4x^{2} - x + 2\\). Beräkna \\(f^{\\prime\\prime}(-1)\\).",
  "choices": [
   "\\(8\\)",
   "\\(-5\\)",
   "\\(-8\\)"
  ],
  "steps": [
   "\\(f'(x) = 8x^{3} + 12x^{2} + 8x - 1\\)",
   "\\(f''(x) = 24x^{2} + 24x + 8\\)",
   "\\(f''(-1) = 24 \\cdot (-1)^{2} + 24 \\cdot (-1) + 8 = 8\\)"
  ],
  "course": "3c",
  "id": "B097"
 },
 {
  "topic": "Derivatans tillämpningar",
  "q": "För vilka \\(x\\) är \\(f(x) = x^{2} - 6x + 6\\) växande?",
  "choices": [
   "\\(x \\geq 3\\)",
   "\\(x \\leq 3\\)",
   "\\(x \\geq -3\\)"
  ],
  "steps": [
   "\\(f'(x) = 2x - 6\\)",
   "Växande där \\(f^{\\prime}(x) \\geq 0\\): \\(2x - 6 \\geq 0\\).",
   "Lös olikheten: \\(x \\geq 3\\)."
  ],
  "course": "3c",
  "id": "B098"
 },
 {
  "topic": "Derivata",
  "q": "Låt \\(f(x) = -x^{3} + 3x^{2} + 2x + 3\\). Beräkna \\(f^{\\prime}(2)\\).",
  "choices": [
   "\\(2\\)",
   "\\(11\\)",
   "\\(4\\)"
  ],
  "steps": [
   "Derivera term för term med \\(D(x^n) = nx^{n-1}\\) (konstanter har derivatan 0):",
   "\\(f'(x) = -3x^{2} + 6x + 2\\)",
   "\\(f'(2) = -3 \\cdot 2^{2} + 6 \\cdot 2 + 2 = 2\\)"
  ],
  "course": "3c",
  "id": "B099"
 },
 {
  "topic": "Derivata",
  "q": "Derivera \\(f(x) = -5x^{3} - 4x - 3\\).",
  "choices": [
   "\\(f'(x) = -15x^{2} - 4\\)",
   "\\(f'(x) = -15x^{2} - 7\\)",
   "\\(f'(x) = -5x^{2} - 4\\)"
  ],
  "steps": [
   "Deriveringsregeln \\(D(ax^n) = a \\cdot n x^{n-1}\\), och konstanten \\(-3\\) försvinner.",
   "\\(f'(x) = -5\\cdot 3x^{2} + (-4) \\cdot 1 = -15x^{2} - 4\\)"
  ],
  "course": "3c",
  "id": "B100"
 }
];
