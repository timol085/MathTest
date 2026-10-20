#!/usr/bin/env python3
"""Genererar frågebanken (questions.js) för Matte 2c/3c-provet.

Alla svar och lösningssteg räknas fram här, så facit blir alltid korrekt.
Kör:  python3 tools/generate_questions.py
"""
import json
import math
import random
from fractions import Fraction as F
from pathlib import Path

rng = random.Random(2026)
PER_COURSE = 100


class Skip(Exception):
    pass


# ---------- formatering ----------

def num(x):
    x = F(x)
    if x.denominator == 1:
        return str(x.numerator)
    s = "-" if x < 0 else ""
    return f"{s}\\frac{{{abs(x.numerator)}}}{{{x.denominator}}}"


def par(x):
    return f"({num(x)})" if F(x) < 0 else num(x)


def dec(x, d=1):
    s = f"{x:.{d}f}"
    if float(s) == 0:
        s = s.lstrip("-")
    return s.replace(".", "{,}")


def nice(x):
    """Heltal om möjligt, annars max 2 decimaler."""
    if abs(x - round(x)) < 1e-9:
        return big(int(round(x)))
    s = f"{x:.2f}".rstrip("0").rstrip(".")
    return s.replace(".", "{,}")


def big(n):
    s = f"{abs(n):,}".replace(",", "\\,")
    return ("-" if n < 0 else "") + s


def M(s):
    return f"\\({s}\\)"


def lincomb(pairs):
    out = ""
    for c, s in pairs:
        c = F(c)
        if c == 0:
            continue
        a = abs(c)
        body = num(a) if s == "" else ("" if a == 1 else num(a)) + s
        if not out:
            out = ("-" if c < 0 else "") + body
        else:
            out += (" - " if c < 0 else " + ") + body
    return out or "0"


def xp(p, v="x"):
    return "" if p == 0 else (v if p == 1 else f"{v}^{{{p}}}")


def poly(cs, v="x"):
    n = len(cs) - 1
    return lincomb([(c, xp(n - i, v)) for i, c in enumerate(cs)])


def peval(cs, x):
    r = F(0)
    for c in cs:
        r = r * x + c
    return r


def deriv(cs):
    n = len(cs) - 1
    return [c * (n - i) for i, c in enumerate(cs[:-1])] or [0]


def subst(cs, x0):
    """Visar insättning, t.ex. 3·(-2)^2 - 4·(-2) + 1."""
    n = len(cs) - 1
    out = ""
    for i, c in enumerate(cs):
        c = F(c)
        p = n - i
        if c == 0:
            continue
        a = abs(c)
        if p == 0:
            body = num(a)
        else:
            xs = par(x0) + ("" if p == 1 else f"^{{{p}}}")
            body = (num(a) + " \\cdot " if a != 1 else "") + xs
        if not out:
            out = ("-" if c < 0 else "") + body
        else:
            out += (" - " if c < 0 else " + ") + body
    return out or "0"


def nz(a, b):
    while True:
        x = rng.randint(a, b)
        if x:
            return x


def roots(*xs):
    xs = sorted(F(x) for x in xs)
    if len(xs) == 1:
        return M(f"x = {num(xs[0])}")
    return M(f"x_1 = {num(xs[0])},\\; x_2 = {num(xs[1])}")


def pt(x, y):
    return M(f"({num(x)},\\ {num(y)})")


def Q(topic, text, correct, cands, steps):
    opts = [correct]
    for c in cands:
        if c not in opts:
            opts.append(c)
        if len(opts) == 3:
            break
    if len(opts) < 3:
        raise Skip
    return {"topic": topic, "q": text, "choices": opts, "steps": steps}


# =====================================================================
#                              MATTE 2c
# =====================================================================
T2 = []


def t2(f):
    T2.append(f)
    return f


@t2
def kvadrering():
    b = rng.choice([1, 1, 2, 3])
    a = nz(-9, 9)
    inner = poly([b, a])
    bx = poly([b, 0])
    sq = "x^2" if b == 1 else f"({bx})^2"
    ans = poly([b * b, 2 * a * b, a * a])
    steps = [
        "Kvadreringsregeln: " + M("(p+q)^2 = p^2 + 2pq + q^2") + ".",
        M(f"({inner})^2 = {sq} + 2 \\cdot {bx} \\cdot {par(a)} + {par(a)}^2"),
        M(f"= {ans}"),
    ]
    return Q("Algebra", f"Utveckla {M(f'({inner})^2')}.", M(ans),
             [M(poly([b * b, 0, a * a])), M(poly([b * b, a * b, a * a])), M(poly([b * b, -2 * a * b, a * a]))],
             steps)


@t2
def konjugat():
    b = rng.choice([1, 1, 2, 3, 4])
    a = rng.randint(1, 9)
    p1, p2 = poly([b, a]), poly([b, -a])
    sq = "x^2" if b == 1 else f"({poly([b, 0])})^2"
    ans = poly([b * b, 0, -a * a])
    steps = [
        "Konjugatregeln: " + M("(p+q)(p-q) = p^2 - q^2") + ".",
        M(f"({p1})({p2}) = {sq} - {a}^2 = {ans}"),
    ]
    return Q("Algebra", f"Förenkla {M(f'({p1})({p2})')}.", M(ans),
             [M(poly([b * b, 0, a * a])), M(poly([b * b, -2 * a * b, -a * a])), M(poly([b * b, -2 * a * b, a * a]))],
             steps)


@t2
def faktorisera():
    if rng.random() < 0.5:
        c = rng.choice([2, 3, 4, 5])
        a = rng.randint(1, 6)
        expr = poly([c, 0, -c * a * a])
        ans = f"{c}(x+{a})(x-{a})"
        steps = [
            f"Bryt ut den gemensamma faktorn {M(str(c))}: {M(f'{expr} = {c}(x^2 - {a * a})')}.",
            f"Konjugatregeln baklänges: {M(f'x^2 - {a * a} = x^2 - {a}^2 = (x+{a})(x-{a})')}.",
            f"Alltså {M(f'{expr} = {ans}')}.",
        ]
        cands = [M(f"{c}(x-{a})^2"), M(f"({c}x+{a})({c}x-{a})"), M(f"{c}(x+{a})^2")]
    else:
        a = nz(-9, 9)
        expr = poly([1, 2 * a, a * a])
        ans = f"({poly([1, a])})^2"
        steps = [
            "Känn igen kvadreringsregeln baklänges: " + M("p^2 + 2pq + q^2 = (p+q)^2") + ".",
            M(f"{expr} = x^2 + 2 \\cdot x \\cdot {par(a)} + {par(a)}^2"),
            M(f"= {ans}"),
        ]
        cands = [M(f"({poly([1, -a])})^2"), M(f"({poly([1, a])})({poly([1, -a])})"), M(f"({poly([1, 2 * a])})^2")]
    return Q("Algebra", f"Faktorisera {M(expr)} så långt som möjligt.", M(ans), cands, steps)


@t2
def pq():
    r1, r2 = sorted(rng.sample(range(-9, 10), 2))
    a = rng.choice([1, 1, 1, 2, 3])
    p, q = -(r1 + r2), r1 * r2
    h = F(-p, 2)
    disc = h * h - q
    root = F(r2 - r1, 2)
    steps = []
    if a != 1:
        steps.append(f"Dela båda leden med {M(str(a))}: {M(poly([1, p, q]) + ' = 0')}.")
    steps += [
        "pq-formeln: " + M("x = -\\frac{p}{2} \\pm \\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}")
        + f" med {M(f'p = {p}')} och {M(f'q = {q}')}.",
        M(f"x = {num(h)} \\pm \\sqrt{{{par(h)}^2 - {par(q)}}} = {num(h)} \\pm \\sqrt{{{num(disc)}}} = {num(h)} \\pm {num(root)}"),
        f"{M(f'x_1 = {num(r1)}')} och {M(f'x_2 = {num(r2)}')}.",
    ]
    return Q("Andragradsekvationer", f"Lös ekvationen {M(poly([a, a * p, a * q]) + ' = 0')}.", roots(r1, r2),
             [roots(-r1, -r2), roots(r1, -r2), roots(-r1, r2), roots(r1 + 1, r2 + 1)], steps)


@t2
def rotekv():
    a = rng.randint(1, 5)
    s = rng.randint(2, 9)
    b = a * s * s
    eq = poly([a, 0, -b]) + " = 0"
    steps = [f"Flytta över konstanten: {M(poly([a, 0, 0]) + f' = {b}')}."]
    if a != 1:
        steps.append(f"Dela med {M(str(a))}: {M(f'x^2 = {s * s}')}.")
    steps.append(f"Dra roten ur – glöm inte den negativa roten: {M(f'x = \\pm\\sqrt{{{s * s}}} = \\pm {s}')}.")
    return Q("Andragradsekvationer", f"Lös ekvationen {M(eq)}.", M(f"x = \\pm {s}"),
             [M(f"x = {s}"), M(f"x = \\pm {s * s}"), M(f"x = \\pm {b}"), M(f"x = \\pm {2 * s}")], steps)


@t2
def nollprodukt():
    b = rng.randint(1, 4)
    r = nz(-8, 8)
    c = -b * r
    eq = poly([b, c, 0]) + " = 0"
    steps = [
        f"Bryt ut {M('x')}: {M(f'x({poly([b, c])}) = 0')}.",
        "Nollproduktmetoden: en produkt är noll om någon faktor är noll.",
        f"{M('x = 0')} eller {M(poly([b, c]) + ' = 0')} {M(f'\\Rightarrow x = {num(r)}')}.",
    ]
    return Q("Andragradsekvationer", f"Lös ekvationen {M(eq)}.", roots(0, r),
             [roots(0, -r), M(f"x = {num(r)}"), roots(0, c), roots(0, -c)], steps)


def lin_xy(a, b):
    return lincomb([(a, "x"), (b, "y")])


@t2
def ekvsystem_subst():
    x, y = rng.randint(-5, 6), rng.randint(-5, 6)
    k = nz(-3, 3)
    m = y - k * x
    a, b = nz(-4, 5), nz(-3, 4)
    if a + b * k == 0:
        raise Skip
    c = a * x + b * y
    line = poly([k, m])
    sysx = f"\\begin{{cases}} y = {line} \\\\ {lin_xy(a, b)} = {c} \\end{{cases}}"
    bco = "" if b == 1 else ("-" if b == -1 else str(b))
    ax = poly([a, 0])
    sub = f"{ax} {'+' if b > 0 else '-'} {'' if abs(b) == 1 else abs(b)}({line}) = {c}"
    steps = [
        f"Sätt in {M('y = ' + line)} i den andra ekvationen (substitutionsmetoden):",
        M(sub),
        M(f"{poly([a + b * k, b * m])} = {c} \\;\\Rightarrow\\; {poly([a + b * k, 0])} = {c - b * m} \\;\\Rightarrow\\; x = {x}"),
        f"Sätt in {M(f'x = {x}')}: {M(f'y = {subst([k, m], x)} = {y}')}.",
    ]
    _ = bco
    ans = M(f"x = {x},\\; y = {y}")
    return Q("Ekvationssystem", f"Lös ekvationssystemet {M(sysx)}", ans,
             [M(f"x = {y},\\; y = {x}"), M(f"x = {x},\\; y = {-y}"), M(f"x = {-x},\\; y = {y}"),
              M(f"x = {x + 1},\\; y = {y - 1}")], steps)


@t2
def ekvsystem_add():
    x, y = rng.randint(-5, 7), rng.randint(-5, 7)
    a, b = rng.randint(1, 3), rng.randint(1, 3)
    s, d = a * x + y, b * x - y
    sysx = f"\\begin{{cases}} {lin_xy(a, 1)} = {s} \\\\ {lin_xy(b, -1)} = {d} \\end{{cases}}"
    steps = [
        f"Addera ekvationerna så att {M('y')} försvinner (additionsmetoden):",
        M(f"{poly([a + b, 0])} = {s} + {par(d)} = {s + d} \\;\\Rightarrow\\; x = {x}"),
        f"Sätt in i första ekvationen: {M(('' if a == 1 else f'{a} \\cdot ') + f'{par(x)} + y = {s}')} {M(f'\\Rightarrow y = {s} - {par(a * x)} = {y}')}.",
    ]
    ans = M(f"x = {x},\\; y = {y}")
    return Q("Ekvationssystem", f"Lös ekvationssystemet {M(sysx)}", ans,
             [M(f"x = {y},\\; y = {x}"), M(f"x = {x},\\; y = {-y}"), M(f"x = {-x},\\; y = {y}"),
              M(f"x = {x + 1},\\; y = {y + 1}")], steps)


@t2
def lutning():
    x1, y1, x2, y2 = (rng.randint(-6, 7) for _ in range(4))
    if x1 == x2 or y1 == y2:
        raise Skip
    k = F(y2 - y1, x2 - x1)
    steps = [
        "Riktningskoefficienten: " + M("k = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}") + ".",
        M(f"k = \\frac{{{y2} - {par(y1)}}}{{{x2} - {par(x1)}}} = \\frac{{{y2 - y1}}}{{{x2 - x1}}} = {num(k)}"),
    ]
    c = [M(f"k = {num(F(x2 - x1, y2 - y1))}"), M(f"k = {num(-k)}")]
    if x1 + x2:
        c.append(M(f"k = {num(F(y1 + y2, x1 + x2))}"))
    c.append(M(f"k = {num(-1 / k)}"))
    return Q("Räta linjen", f"En rät linje går genom punkterna {pt(x1, y1)} och {pt(x2, y2)}. Vilken är linjens riktningskoefficient?",
             M(f"k = {num(k)}"), c, steps)


@t2
def linjens_ekv():
    k = nz(-4, 4)
    m = rng.randint(-8, 8)
    x1 = nz(-4, 4)
    x2 = x1 + rng.randint(1, 3)
    y1, y2 = k * x1 + m, k * x2 + m
    steps = [
        M(f"k = \\frac{{{y2} - {par(y1)}}}{{{x2} - {par(x1)}}} = \\frac{{{y2 - y1}}}{{{x2 - x1}}} = {k}"),
        f"Sätt in punkten {pt(x1, y1)} i {M(f'y = {poly([k, 0])} + m')}: {M(f'{y1} = {k} \\cdot {par(x1)} + m')}.",
        f"{M(f'm = {y1} - {par(k * x1)} = {m}')}, alltså {M('y = ' + poly([k, m]))}.",
    ]
    return Q("Räta linjen", f"Bestäm ekvationen för den räta linje som går genom {pt(x1, y1)} och {pt(x2, y2)}.",
             M("y = " + poly([k, m])),
             [M("y = " + poly([k, y1 + k * x1])), M("y = " + poly([-k, y1 + k * x1])), M("y = " + poly([k, -m])),
              M("y = " + poly([m, k]))], steps)


@t2
def vinkelrat():
    k = F(nz(-5, 5), rng.choice([1, 1, 2, 3]))
    m = rng.randint(-6, 6)
    line = "y = " + poly([k, m])
    if rng.random() < 0.6:
        ans = -1 / k
        steps = [
            "Två linjer är vinkelräta om " + M("k_1 \\cdot k_2 = -1") + ".",
            M(f"{par(k)} \\cdot k_2 = -1 \\;\\Rightarrow\\; k_2 = \\frac{{-1}}{{{num(k)}}} = {num(ans)}"),
        ]
        word = "vinkelrät mot"
        cands = [k, -k, 1 / k]
    else:
        ans = k
        steps = ["Parallella linjer har samma riktningskoefficient.", M(f"k = {num(k)}")]
        word = "parallell med"
        cands = [-1 / k, -k, 1 / k]
    return Q("Räta linjen", f"Linjen {M('L')} har ekvationen {M(line)}. Vilken riktningskoefficient har en linje som är {word} {M('L')}?",
             M(f"k = {num(ans)}"), [M(f"k = {num(c)}") for c in cands], steps)


def tal(n):
    if n >= 0:
        return big(10 ** n)
    return "0{,}" + "0" * (-n - 1) + "1"


@t2
def lg_berakna():
    a, b = rng.sample([-3, -2, -1, 1, 2, 3, 4, 5, 6], 2)
    plus = rng.random() < 0.6
    op = "+" if plus else "-"
    ans = a + b if plus else a - b
    steps = [
        "Använd att " + M("\\lg 10^n = n") + ".",
        M(f"\\lg {tal(a)} = \\lg 10^{{{a}}} = {a}") + " och " + M(f"\\lg {tal(b)} = \\lg 10^{{{b}}} = {b}"),
        M(f"{a} {op} {par(b)} = {ans}"),
    ]
    return Q("Logaritmer", f"Beräkna {M(f'\\lg {tal(a)} {op} \\lg {tal(b)}')} utan räknare.", M(str(ans)),
             [M(str(a * b)), M(str(ans + 1)), M(str(a - b if plus else a + b)), M(str(ans - 1))], steps)


@t2
def lg_ekv():
    n = rng.choice([-3, -2, -1, 2, 3, 4, 5])
    steps = [
        "Definitionen av logaritm: " + M("\\lg x = n \\;\\Leftrightarrow\\; x = 10^n") + ".",
        M(f"x = 10^{{{n}}} = {tal(n)}"),
    ]
    return Q("Logaritmer", f"Lös ekvationen {M(f'\\lg x = {n}')}.", M(f"x = {tal(n)}"),
             [M(f"x = {10 * n}"), M(f"x = {tal(-n)}"), M(f"x = {n ** 10 if n > 0 else 10 * n + 1}")], steps)


@t2
def tiopotens():
    a = rng.randint(2, 9)
    q = rng.choice([2, 3, 4, 5, 6, 7, 8, 9, 12, 15])
    b = a * q
    steps = [
        f"Dela med {M(str(a))}: {M(f'10^x = \\frac{{{b}}}{{{a}}} = {q}')}.",
        "Logaritmera: " + M(f"x = \\lg {q} \\approx {dec(math.log10(q), 3)}") + ".",
    ]
    return Q("Logaritmer", f"Lös ekvationen {M(f'{a} \\cdot 10^x = {b}')}. Svara exakt och med tre decimaler.",
             M(f"x = \\lg {q} \\approx {dec(math.log10(q), 3)}"),
             [M(f"x = \\lg {b - a} \\approx {dec(math.log10(b - a), 3)}"),
              M(f"x = \\frac{{\\lg {b}}}{{{a}}} \\approx {dec(math.log10(b) / a, 3)}")], steps)


@t2
def exp_heltal():
    base = rng.choice([2, 3, 4, 5])
    n = rng.randint(2, {2: 7, 3: 5, 4: 4, 5: 4}[base])
    A = rng.choice([1, 2, 3, 5])
    c = A * base ** n
    lhs = (f"{A} \\cdot " if A != 1 else "") + f"{base}^x"
    steps = []
    if A != 1:
        steps.append(f"Dela med {M(str(A))}: {M(f'{base}^x = {base ** n}')}.")
    steps.append(f"Skriv högerledet som en potens av {M(str(base))}: {M(f'{base ** n} = {base}^{{{n}}}')}.")
    steps.append(f"Samma bas ger samma exponent: {M(f'x = {n}')}.")
    return Q("Potenser och exponentialekvationer", f"Lös ekvationen {M(f'{lhs} = {c}')}.", M(f"x = {n}"),
             [M(f"x = {n + 1}"), M(f"x = {n - 1}"), M(f"x = {F(c, A * base)}")], steps)


@t2
def fordubbling():
    p = rng.choice([2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20])
    up = rng.random() < 0.6
    f = 1 + p / 100 if up else 1 - p / 100
    target = 2 if up else 0.5
    x = math.log10(target) / math.log10(f)
    fs = dec(f, 2)
    ts = "2" if up else "0{,}5"
    if up:
        text = f"Ett belopp växer med {p} % per år. Efter hur många år har beloppet fördubblats? (En decimal.)"
    else:
        text = f"Ett ämnes massa minskar med {p} % per år. Efter hur många år har massan halverats? (En decimal.)"
    steps = [
        f"Förändringsfaktorn är {M(fs)}. Ställ upp: {M(f'{fs}^x = {ts}')}.",
        "Logaritmera båda leden: " + M(f"x \\cdot \\lg {fs} = \\lg {ts}") + ".",
        M(f"x = \\frac{{\\lg {ts}}}{{\\lg {fs}}} \\approx {dec(x, 1)}") + " år.",
    ]
    return Q("Potenser och exponentialekvationer", text, M(dec(x, 1)) + " år",
             [M(dec(100 / p, 1)) + " år", M(dec(50 / p, 1)) + " år", M(dec(x * 1.5, 1)) + " år"], steps)


@t2
def forandringsfaktor():
    S = rng.randrange(2000, 50001, 500)
    p = rng.randint(2, 15)
    n = rng.randint(3, 10)
    up = rng.random() < 0.6
    f = F(100 + p, 100) if up else F(100 - p, 100)
    val = round(S * float(f) ** n)
    lin = round(S * float(f) ** (n - 1))
    alt = round(S * float(f) ** (n + 1))
    word = "ökar" if up else "minskar"
    steps = [
        f"En {'ökning' if up else 'minskning'} med {p} % ger förändringsfaktorn {M(dec(float(f), 2))}.",
        f"Efter {n} år: {M(f'{big(S)} \\cdot {dec(float(f), 2)}^{{{n}}} \\approx {big(val)}')} kr.",
    ]
    return Q("Potenser och exponentialekvationer",
             f"Värdet på en vara är {M(big(S))} kr och {word} med {p} % per år. Vad är värdet efter {n} år? (Avrunda till hela kronor.)",
             M(big(val)) + " kr", [M(big(lin)) + " kr", M(big(alt)) + " kr"], steps)


@t2
def vertex():
    a = rng.choice([1, 1, -1, 2, -2])
    x0 = rng.randint(-5, 5)
    b = -2 * a * x0
    c = rng.randint(-9, 9)
    y0 = a * x0 * x0 + b * x0 + c
    kind = "minimipunkt" if a > 0 else "maximipunkt"
    f = poly([a, b, c])
    steps = [
        "Symmetrilinjen för " + M("f(x) = ax^2 + bx + c") + " är " + M("x = -\\frac{b}{2a}") + ".",
        M(f"x = -\\frac{{{b}}}{{2 \\cdot {par(a)}}} = {x0}"),
        M(f"f({x0}) = {subst([a, b, c], x0)} = {y0}"),
        f"{'Positiv' if a > 0 else 'Negativ'} {M('x^2')}-koefficient ger en {kind}: {pt(x0, y0)}.",
    ]
    return Q("Andragradsfunktioner", f"Bestäm koordinaterna för {kind}en till {M('f(x) = ' + f)}.", pt(x0, y0),
             [pt(-x0, y0), pt(x0, c), pt(x0, y0 + a * x0 * x0 * 2), pt(-x0, c)], steps)


@t2
def avstand():
    dx, dy = rng.choice([(3, 4), (4, 3), (6, 8), (8, 6), (5, 12), (12, 5), (8, 15), (9, 12)])
    dx *= rng.choice([1, -1])
    dy *= rng.choice([1, -1])
    x1, y1 = rng.randint(-5, 5), rng.randint(-5, 5)
    x2, y2 = x1 + dx, y1 + dy
    d = int(math.isqrt(dx * dx + dy * dy))
    steps = [
        "Avståndsformeln: " + M("d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}") + ".",
        M(f"d = \\sqrt{{({x2} - {par(x1)})^2 + ({y2} - {par(y1)})^2}} = \\sqrt{{{par(dx)}^2 + {par(dy)}^2}} = \\sqrt{{{d * d}}} = {d}"),
    ]
    return Q("Koordinatgeometri", f"Beräkna avståndet mellan punkterna {pt(x1, y1)} och {pt(x2, y2)}.",
             M(f"{d}") + " l.e.", [M(f"{abs(dx) + abs(dy)}") + " l.e.", M(f"{d * d}") + " l.e."], steps)


@t2
def mittpunkt():
    x1, y1, x2, y2 = (rng.randint(-8, 8) for _ in range(4))
    if (x1, y1) == (x2, y2):
        raise Skip
    mx, my = F(x1 + x2, 2), F(y1 + y2, 2)
    steps = [
        "Mittpunktsformeln: " + M("\\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right)") + ".",
        M(f"\\left(\\frac{{{x1} + {par(x2)}}}{{2}},\\ \\frac{{{y1} + {par(y2)}}}{{2}}\\right) = ({num(mx)},\\ {num(my)})"),
    ]
    return Q("Koordinatgeometri", f"Bestäm mittpunkten på sträckan mellan {pt(x1, y1)} och {pt(x2, y2)}.", pt(mx, my),
             [pt(F(x2 - x1, 2), F(y2 - y1, 2)), pt(x1 + x2, y1 + y2), pt(my, mx)], steps)


@t2
def randvinkel():
    v = rng.random()
    if v < 0.4:
        c = rng.randrange(40, 172, 2)
        ans = c // 2
        steps = ["Randvinkelsatsen: randvinkeln är hälften av medelpunktsvinkeln på samma båge.",
                 M(f"\\frac{{{c}^\\circ}}{{2}} = {ans}^\\circ")]
        text = f"En medelpunktsvinkel i en cirkel är {M(f'{c}^\\circ')}. Hur stor är en randvinkel som står på samma båge?"
        cands = [c, 2 * c, 180 - ans]
    elif v < 0.75:
        u = rng.randint(20, 85)
        ans = 2 * u
        steps = ["Randvinkelsatsen: medelpunktsvinkeln är dubbelt så stor som randvinkeln på samma båge.",
                 M(f"2 \\cdot {u}^\\circ = {ans}^\\circ")]
        text = f"En randvinkel i en cirkel är {M(f'{u}^\\circ')}. Hur stor är medelpunktsvinkeln på samma båge?"
        cands = [u, u / 2 if u % 2 == 0 else 180 - u, 180 - 2 * u]
    else:
        a = rng.randint(15, 75)
        ans = 90 - a
        steps = ["Triangeln har en sida som är diameter, så vinkeln mitt emot den är en randvinkel på en halvcirkel: " + M("90^\\circ") + " (Thales sats).",
                 "Vinkelsumman i en triangel är " + M("180^\\circ") + ": " + M(f"180^\\circ - 90^\\circ - {a}^\\circ = {ans}^\\circ")]
        text = f"En triangel är inskriven i en cirkel så att en av sidorna är cirkelns diameter. En av de andra vinklarna är {M(f'{a}^\\circ')}. Hur stor är den tredje vinkeln?"
        cands = [180 - a, a, 2 * a]
    return Q("Geometri", text, M(f"{nice(ans)}^\\circ"), [M(f"{nice(c)}^\\circ") for c in cands], steps)


@t2
def likformighet():
    s = rng.choice([1.5, 2, 2.5, 3, 4, 0.5])
    a = rng.choice([x for x in range(2, 13) if (x * s) == int(x * s)])
    b = rng.randint(3, 14)
    if b == a:
        raise Skip
    c = a * s
    x = b * s
    steps = [
        "Likformiga trianglar har proportionerliga sidor: " + M("\\frac{EF}{BC} = \\frac{DE}{AB}") + ".",
        M(f"\\text{{Skala}} = \\frac{{DE}}{{AB}} = \\frac{{{nice(c)}}}{{{a}}} = {nice(s)}"),
        M(f"EF = {b} \\cdot {nice(s)} = {nice(x)}") + " cm",
    ]
    return Q("Geometri",
             f"Trianglarna {M('ABC')} och {M('DEF')} är likformiga ({M('A \\leftrightarrow D')}, {M('B \\leftrightarrow E')}, {M('C \\leftrightarrow F')}). "
             f"{M(f'AB = {a}')} cm, {M(f'BC = {b}')} cm och {M(f'DE = {nice(c)}')} cm. Hur lång är {M('EF')}?",
             M(nice(x)) + " cm", [M(nice(b + c - a)) + " cm", M(nice(a * b / c)) + " cm", M(nice(b * s * s)) + " cm"], steps)


@t2
def areaskala():
    k = rng.choice([2, 3, 4, 5, 1.5])
    vol = rng.random() < 0.35
    A = rng.choice([4, 6, 8, 10, 12, 20, 24, 30])
    if vol:
        ans = A * k ** 3
        text = f"Två kuber (likformiga kroppar) har längdskalan {M(nice(k))}. Den mindre har volymen {M(str(A))} cm³. Vilken volym har den större?"
        steps = ["Volymskalan är längdskalan i kubik.", M(f"{A} \\cdot {nice(k)}^3 = {nice(ans)}") + " cm³"]
        cands = [A * k, A * k * k]
        unit = " cm³"
    else:
        ans = A * k ** 2
        text = f"Två likformiga figurer har längdskalan {M(nice(k))} (den större är {M(nice(k))} gånger så lång). Den mindre har arean {M(str(A))} cm². Vilken area har den större?"
        steps = ["Areaskalan är längdskalan i kvadrat.", M(f"{A} \\cdot {nice(k)}^2 = {nice(ans)}") + " cm²"]
        cands = [A * k, A * k ** 3]
        unit = " cm²"
    return Q("Geometri", text, M(nice(ans)) + unit, [M(nice(c)) + unit for c in cands], steps)


@t2
def statistik():
    n = rng.choice([5, 6, 7, 8])
    data = [rng.randint(1, 20) for _ in range(n)]
    srt = sorted(data)
    mean = sum(data) / n
    if n % 2:
        med = srt[n // 2]
        medtxt = f"Det mittersta (nummer {n // 2 + 1}) av {n} värden är {M(str(med))}."
    else:
        med = (srt[n // 2 - 1] + srt[n // 2]) / 2
        medtxt = M(f"\\frac{{{srt[n // 2 - 1]} + {srt[n // 2]}}}{{2}} = {nice(med)}")
    shown = ",\\ ".join(map(str, data))
    unsorted_mid = data[n // 2] if n % 2 else (data[n // 2 - 1] + data[n // 2]) / 2
    if rng.random() < 0.5:
        text = f"Bestäm medelvärdet av talen {M(shown)}."
        steps = [f"Summera: {M(' + '.join(map(str, data)) + f' = {sum(data)}')}.",
                 f"Dela med antalet ({n}): {M(f'\\frac{{{sum(data)}}}{{{n}}} \\approx {nice(mean)}' if abs(mean * 100 - round(mean * 100)) > 1e-9 else f'\\frac{{{sum(data)}}}{{{n}}} = {nice(mean)}')}."]
        ans = mean
        cands = [med, sum(data) / (n - 1), unsorted_mid]
    else:
        text = f"Bestäm medianen av talen {M(shown)}."
        steps = [f"Sortera talen: {M(',\\ '.join(map(str, srt)))}.", medtxt]
        ans = med
        cands = [unsorted_mid, mean, srt[n // 2 + 1] if n > 2 else 0]
    return Q("Statistik", text, M(nice(ans)), [M(nice(c)) for c in cands], steps)


def pw(e, v="x"):
    return "1" if e == 0 else (v if e == 1 else f"{v}^{{{e}}}")


@t2
def potenslagar():
    a, b, c = rng.randint(2, 9), rng.randint(2, 9), rng.randint(2, 9)
    if rng.random() < 0.5:
        e = a + b - c
        text = f"Förenkla {M(f'\\frac{{x^{{{a}}} \\cdot x^{{{b}}}}}{{x^{{{c}}}}}')}."
        steps = ["Potenslagar: " + M("x^m \\cdot x^n = x^{m+n}") + " och " + M("\\frac{x^m}{x^n} = x^{m-n}") + ".",
                 M(f"x^{{{a}+{b}-{c}}} = {pw(e)}")]
        cands = [a + b + c, a * b - c, a * b + c]
    else:
        e = a * b + c
        text = f"Förenkla {M(f'(x^{{{a}}})^{{{b}}} \\cdot x^{{{c}}}')}."
        steps = ["Potenslagar: " + M("(x^m)^n = x^{mn}") + " och " + M("x^m \\cdot x^n = x^{m+n}") + ".",
                 M(f"x^{{{a} \\cdot {b} + {c}}} = {pw(e)}")]
        cands = [a + b + c, a * b * c, (a + b) * c]
    return Q("Algebra", text, M(pw(e)), [M(pw(x)) for x in cands], steps)


# =====================================================================
#                              MATTE 3c
# =====================================================================
T3 = []


def t3(f):
    T3.append(f)
    return f


@t3
def derivata_varde():
    a, b, c, d = nz(-3, 3), rng.randint(-5, 5), rng.randint(-6, 6), rng.randint(-9, 9)
    x0 = nz(-3, 3)
    cs = [a, b, c, d]
    dc = deriv(cs)
    val = peval(dc, x0)
    steps = [
        "Derivera term för term med " + M("D(x^n) = nx^{n-1}") + " (konstanter har derivatan 0):",
        M(f"f'(x) = {poly(dc)}"),
        M(f"f'({x0}) = {subst(dc, x0)} = {num(val)}"),
    ]
    return Q("Derivata", f"Låt {M('f(x) = ' + poly(cs))}. Beräkna {M(f'f^{{\\prime}}({x0})')}.", M(num(val)),
             [M(num(peval(cs, x0))), M(num(peval([a, b, c], x0))), M(num(-val)), M(num(val + d))], steps)


@t3
def derivata_uttryck():
    n = rng.randint(3, 5)
    m = rng.randint(1, 2)
    a, b, c = nz(-5, 5), nz(-7, 7), nz(-9, 9)
    cs = [0] * (n + 1)
    cs[0], cs[n - m], cs[n] = a, b, c
    dc = deriv(cs)
    wrong1 = lincomb([(a, xp(n - 1)), (b, xp(m - 1))])
    wrong2 = poly(dc[:-1] + [dc[-1] + c]) if len(dc) else ""
    wrong3 = lincomb([(n * a, xp(n)), (m * b, xp(m))])
    steps = [
        "Deriveringsregeln " + M("D(ax^n) = a \\cdot n x^{n-1}") + ", och konstanten " + M(str(c)) + " försvinner.",
        M(f"f'(x) = {a}\\cdot {n}x^{{{n - 1}}} + {par(b)} \\cdot {m}{xp(m - 1) or ''} = {poly(dc)}".replace("x^{1}", "x")),
    ]
    return Q("Derivata", f"Derivera {M('f(x) = ' + poly(cs))}.", M("f'(x) = " + poly(dc)),
             [M("f'(x) = " + wrong2), M("f'(x) = " + wrong1), M("f'(x) = " + wrong3)], steps)


def kx(k):
    return poly([k, 0])


@t3
def derivata_exp():
    A = nz(-5, 5)
    k = rng.choice([2, 3, -1, -2, 4, 5, F(1, 2)])
    b = nz(-4, 4)
    E = f"e^{{{kx(k)}}}"
    f = lincomb([(A, E), (b, "x^2")])
    ans = lincomb([(A * k, E), (2 * b, "x")])
    steps = [
        "Regeln " + M("D\\left(e^{kx}\\right) = k e^{kx}") + " och " + M("D(x^2) = 2x") + ".",
        M(f"f'(x) = {par(A)} \\cdot {par(k)} \\cdot {E} + {par(b)} \\cdot 2x = {ans}"),
    ]
    return Q("Derivata", f"Derivera {M('f(x) = ' + f)}.", M("f'(x) = " + ans),
             [M("f'(x) = " + lincomb([(A, E), (2 * b, "x")])), M("f'(x) = " + lincomb([(F(A) / k, E), (2 * b, "x")])),
              M("f'(x) = " + lincomb([(A * k, E), (b, "x")]))], steps)


@t3
def derivata_rot_inv():
    if rng.random() < 0.5:
        a = rng.randint(2, 12)
        s = rng.randint(1, 5)
        x0 = s * s
        val = F(a, 2 * s)
        steps = [
            "Skriv om: " + M(f"{a}\\sqrt{{x}} = {a}x^{{1/2}}") + ".",
            M(f"f'(x) = {a} \\cdot \\frac{{1}}{{2}} x^{{-1/2}} = \\frac{{{a}}}{{2\\sqrt{{x}}}}"),
            M(f"f'({x0}) = \\frac{{{a}}}{{2\\sqrt{{{x0}}}}} = \\frac{{{a}}}{{{2 * s}}} = {num(val)}"),
        ]
        return Q("Derivata", f"Låt {M(f'f(x) = {a}\\sqrt{{x}}')}. Beräkna {M(f'f^{{\\prime}}({x0})')}.", M(num(val)),
                 [M(num(F(a, s))), M(num(F(a * s, 2))), M(num(F(a, 2 * x0)))], steps)
    a = rng.randint(2, 12)
    x0 = nz(-4, 5)
    val = F(-a, x0 * x0)
    steps = [
        "Skriv om: " + M(f"\\frac{{{a}}}{{x}} = {a}x^{{-1}}") + ".",
        M(f"f'(x) = {a} \\cdot (-1) x^{{-2}} = -\\frac{{{a}}}{{x^2}}"),
        M(f"f'({x0}) = -\\frac{{{a}}}{{{par(x0)}^2}} = {num(val)}"),
    ]
    return Q("Derivata", f"Låt {M(f'f(x) = \\frac{{{a}}}{{x}}')}. Beräkna {M(f'f^{{\\prime}}({x0})')}.", M(num(val)),
             [M(num(-val)), M(num(F(-a, x0))), M(num(F(a, x0))), M(num(F(-a, 2 * x0)))], steps)


@t3
def tangent():
    a = rng.choice([1, 1, -1, 2])
    b, c = rng.randint(-6, 6), rng.randint(-8, 8)
    x0 = nz(-3, 3)
    cs = [a, b, c]
    y0 = peval(cs, x0)
    k = peval(deriv(cs), x0)
    m = y0 - k * x0
    steps = [
        M(f"f({x0}) = {subst(cs, x0)} = {num(y0)}") + f", så tangeringspunkten är {pt(x0, y0)}.",
        M(f"f'(x) = {poly(deriv(cs))}") + " ger lutningen " + M(f"k = f'({x0}) = {num(k)}") + ".",
        f"Sätt in punkten i {M(f'y = kx + m')}: {M(f'{num(y0)} = {par(k)} \\cdot {par(x0)} + m \\Rightarrow m = {num(m)}')}.",
        "Tangentens ekvation: " + M("y = " + poly([k, m])) + ".",
    ]
    return Q("Derivatans tillämpningar", f"Bestäm ekvationen för tangenten till {M('f(x) = ' + poly(cs))} i punkten där {M(f'x = {x0}')}.",
             M("y = " + poly([k, m])),
             [M("y = " + poly([k, y0])), M("y = " + poly([y0, m])), M("y = " + poly([k, y0 + k * x0])),
              M("y = " + poly([-k, m]))], steps)


@t3
def extrempunkt():
    s = rng.choice([1, -1])
    p = rng.randint(1, 4)
    c = rng.randint(-5, 5)
    cs = [s, 0, -3 * s * p * p, c]
    want_max = rng.random() < 0.5
    xmax = -p if s == 1 else p
    ans = xmax if want_max else -xmax
    kind = "maximipunkt" if want_max else "minimipunkt"
    steps = [
        M(f"f'(x) = {poly(deriv(cs))} = 0 \\;\\Rightarrow\\; x^2 = {p * p} \\;\\Rightarrow\\; x = \\pm {p}"),
        M(f"f''(x) = {poly(deriv(deriv(cs)))}") + ": " + M(f"f''({-p}) = {6 * s * -p}") + " och " + M(f"f''({p}) = {6 * s * p}") + ".",
        "Negativ andraderivata ger maximum, positiv ger minimum. Alltså är " + kind + "ens x-koordinat " + M(f"x = {ans}") + ".",
    ]
    return Q("Derivatans tillämpningar", f"Funktionen {M('f(x) = ' + poly(cs))} har två extrempunkter. Bestäm x-koordinaten för {kind}en.",
             M(f"x = {ans}"), [M(f"x = {-ans}"), M("x = 0"), M(f"x = {3 * p * p}")], steps)


@t3
def stationara():
    t = nz(-3, 3)
    a = 3 * t
    d = rng.randint(-6, 6)
    lead = rng.choice([1, 1, 2])
    cs = [lead, lead * a, 0, d]
    r = F(-2 * a, 3)
    steps = [
        M(f"f'(x) = {poly(deriv(cs))}"),
        "Sätt " + M("f'(x) = 0") + " och bryt ut " + M("x") + ": " + M(f"x({poly([3 * lead, 2 * lead * a])}) = 0") + ".",
        f"{M('x = 0')} eller {M(f'{poly([3 * lead, 2 * lead * a])} = 0 \\Rightarrow x = {num(r)}')}.",
    ]
    return Q("Derivatans tillämpningar", f"Bestäm x-koordinaterna för de stationära punkterna till {M('f(x) = ' + poly(cs))}.",
             roots(0, r), [roots(0, -r), roots(0, -a), roots(r, -r), roots(0, F(-a, 3))], steps)


def antider(cs):
    n = len(cs) - 1
    return [F(c, n - i + 1) for i, c in enumerate(cs)] + [0]


@t3
def integral_poly():
    c2 = rng.choice([0, 3, -3, 6, 1, -1])
    c1, c0 = rng.randint(-4, 4) * 2, rng.randint(-5, 6)
    lo = rng.randint(-2, 1)
    hi = lo + rng.randint(1, 3)
    cs = [c2, c1, c0]
    Fc = antider(cs)
    Fb, Fa = peval(Fc, hi), peval(Fc, lo)
    val = Fb - Fa
    steps = [
        "Primitiv funktion: " + M(f"F(x) = {poly(Fc)}") + ".",
        M(f"\\int_{{{lo}}}^{{{hi}}} f(x)\\,dx = F({hi}) - F({lo}) = {par(Fb)} - {par(Fa)} = {num(val)}"),
    ]
    return Q("Integraler", f"Beräkna {M(f'\\int_{{{lo}}}^{{{hi}}} ({poly(cs)})\\,dx')}.", M(num(val)),
             [M(num(peval(cs, hi) - peval(cs, lo))), M(num(Fb)), M(num(Fb + Fa)), M(num(-val))], steps)


@t3
def primitiv_poly():
    a = rng.choice([3, -3, 6, 9, 1, 2, -6])
    b, c = nz(-8, 8), nz(-9, 9)
    cs = [a, b, c]
    Fc = antider(cs)
    steps = [
        "Regeln: en primitiv funktion till " + M("x^n") + " är " + M("\\frac{x^{n+1}}{n+1}") + ". Glöm inte konstanten " + M("C") + ".",
        M(f"F(x) = {par(a)} \\cdot \\frac{{x^3}}{{3}} + {par(b)} \\cdot \\frac{{x^2}}{{2}} + {par(c)}x + C = {poly(Fc)} + C"),
    ]
    return Q("Integraler", f"Bestäm alla primitiva funktioner till {M('f(x) = ' + poly(cs))}.", M(f"F(x) = {poly(Fc)} + C"),
             [M(f"F(x) = {poly(deriv(cs))} + C"), M(f"F(x) = {poly([a, b, c, 0])} + C"),
              M(f"F(x) = {poly([F(a, 2), b, c, 0])} + C")], steps)


@t3
def primitiv_exp():
    A = nz(-6, 8)
    k = rng.choice([2, 3, 4, -1, -2, F(1, 2)])
    E = f"e^{{{kx(k)}}}"
    ans = lincomb([(F(A) / k, E)])
    steps = [
        "En primitiv funktion till " + M("e^{kx}") + " är " + M("\\frac{e^{kx}}{k}") + ".",
        M(f"F(x) = {par(A)} \\cdot \\frac{{{E}}}{{{num(k)}}} + C = {ans} + C"),
    ]
    c = [M(f"F(x) = {lincomb([(A * k, E)])} + C"), M(f"F(x) = {lincomb([(A, E)])} + C")]
    if k != -1:
        c.append(M(f"F(x) = {lincomb([(F(A) / (k + 1), f'e^{{{kx(k + 1)}}}')])} + C"))
    return Q("Integraler", f"Bestäm alla primitiva funktioner till {M('f(x) = ' + lincomb([(A, E)]))}.",
             M(f"F(x) = {ans} + C"), c, steps)


@t3
def integral_exp():
    a = rng.randint(2, 9)
    k = rng.choice([1, 2])
    f = "e^x" if k == 1 else "2e^{2x}"
    Fx = "e^x" if k == 1 else "e^{2x}"
    val = a ** k - 1
    steps = [
        "Primitiv funktion: " + M(f"F(x) = {Fx}") + ".",
        M(f"\\left[{Fx}\\right]_0^{{\\ln {a}}} = e^{{{'' if k == 1 else '2'}\\ln {a}}} - e^0 = {a}{'' if k == 1 else '^2'} - 1 = {val}"),
        "Här används att " + M("e^{\\ln a} = a") + " och " + M("e^0 = 1") + ".",
    ]
    return Q("Integraler", f"Beräkna {M(f'\\int_0^{{\\ln {a}}} {f}\\,dx')} exakt.", M(str(val)),
             [M(str(a ** k)), M(str(k * val + (1 if k == 1 else 0))), M(f"\\ln {a}"), M(str(a - 1))], steps)


@t3
def area_mellan():
    p = rng.randint(1, 4)
    k = rng.choice([1, 1, 2, 3])
    cs = [-k, 0, k * p * p]
    val = F(4 * k * p ** 3, 3)
    Fc = antider(cs)
    steps = [
        "Nollställen: " + M(f"{poly(cs)} = 0 \\Rightarrow x = \\pm {p}") + ". Kurvan ligger ovanför x-axeln mellan dem.",
        M(f"A = \\int_{{{-p}}}^{{{p}}} ({poly(cs)})\\,dx = \\left[{poly(Fc)}\\right]_{{{-p}}}^{{{p}}}"),
        M(f"= {par(peval(Fc, p))} - {par(peval(Fc, -p))} = {num(val)}") + " a.e.",
    ]
    return Q("Integraler", f"Beräkna arean av området som begränsas av kurvan {M('y = ' + poly(cs))} och x-axeln.",
             M(num(val)) + " a.e.", [M(num(val / 2)) + " a.e.", M(num(2 * k * p ** 3)) + " a.e.", M(num(val * 2)) + " a.e."], steps)


@t3
def gransvarde():
    r1, r2 = rng.sample(range(-7, 8), 2)
    num_ = poly([1, -(r1 + r2), r1 * r2])
    den = poly([1, -r1])
    steps = [
        "Direkt insättning ger " + M("\\frac{0}{0}") + ", så faktorisera täljaren.",
        M(f"\\frac{{{num_}}}{{{den}}} = \\frac{{({den})({poly([1, -r2])})}}{{{den}}} = {poly([1, -r2])}") + " (för " + M(f"x \\neq {r1}") + ")",
        M(f"\\lim_{{x \\to {r1}}} ({poly([1, -r2])}) = {r1} - {par(r2)} = {r1 - r2}"),
    ]
    return Q("Gränsvärden", f"Beräkna {M(f'\\lim_{{x \\to {r1}}} \\frac{{{num_}}}{{{den}}}')}.", M(str(r1 - r2)),
             [M("0"), M(str(r2 - r1)), M(str(r1 + r2)), M(str(r1))], steps)


@t3
def derivatans_def():
    c = rng.choice([1, 2, 3, -1, 4])
    a = nz(-5, 5)
    f = poly([c, 0, 0])
    val = 2 * c * a
    steps = [
        M(f"f({a}+h) - f({a}) = {'' if c == 1 else ('-' if c == -1 else c)}({a}+h)^2 - {par(c * a * a)}") + " ",
        M(f"= {poly([c, 2 * c * a, 0], 'h')}"),
        "Dela med " + M("h") + ": " + M(poly([c, 2 * c * a], "h")) + ". Låt " + M("h \\to 0") + ": " + M(str(val)) + ".",
        "(Det är derivatans definition – svaret är " + M(f"f'({a})") + ".)",
    ]
    return Q("Gränsvärden", f"Låt {M('f(x) = ' + f)}. Beräkna {M(f'\\lim_{{h \\to 0}} \\frac{{f({a}+h) - f({a})}}{{h}}')}.",
             M(str(val)), [M("0"), M(str(c * a * a)), M(str(c * a)), M(str(-val))], steps)


@t3
def rationella():
    a = rng.randint(1, 9)
    v = rng.randint(0, 2)
    if v == 0:
        c = rng.randint(2, 7)
        expr = f"\\frac{{{c}x + {c * a}}}{{x^2 - {a * a}}}"
        ans = f"\\frac{{{c}}}{{x - {a}}}"
        steps = [f"Faktorisera: täljaren {M(f'{c}(x + {a})')}, nämnaren {M(f'(x + {a})(x - {a})')} (konjugatregeln).",
                 "Förkorta bort " + M(f"(x + {a})") + ": " + M(ans) + "."]
        cands = [f"\\frac{{{c}}}{{x + {a}}}", f"\\frac{{{c}}}{{x - {a * a}}}", f"\\frac{{{c}x}}{{x - {a}}}"]
    elif v == 1:
        expr = f"\\frac{{x^2 - {a * a}}}{{x - {a}}}"
        ans = f"x + {a}"
        steps = [f"Konjugatregeln: {M(f'x^2 - {a * a} = (x + {a})(x - {a})')}.",
                 "Förkorta bort " + M(f"(x - {a})") + ": " + M(ans) + "."]
        cands = [f"x - {a}", f"x + {a * a}", f"x^2 + {a}"]
    else:
        expr = f"\\frac{{{poly([1, 2 * a, a * a])}}}{{x^2 - {a * a}}}"
        ans = f"\\frac{{x + {a}}}{{x - {a}}}"
        steps = [f"Täljaren: {M(f'(x + {a})^2')} (kvadreringsregeln). Nämnaren: {M(f'(x + {a})(x - {a})')}.",
                 "Förkorta bort en faktor " + M(f"(x + {a})") + ": " + M(ans) + "."]
        cands = [f"\\frac{{x - {a}}}{{x + {a}}}", f"x + {a}", f"\\frac{{x + {a}}}{{x}}"]
    return Q("Algebra och rationella uttryck", f"Förenkla {M(expr)} så långt som möjligt.", M(ans), [M(x) for x in cands], steps)


@t3
def medelforandring():
    b, c = rng.randint(-5, 5), rng.randint(-5, 5)
    cs = [1, b, c]
    p = rng.randint(-2, 3)
    q = p + rng.randint(2, 4)
    fp, fq = peval(cs, p), peval(cs, q)
    val = F(fq - fp, q - p)
    steps = [
        "Ändringskvoten: " + M("\\frac{\\Delta y}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}") + ".",
        M(f"f({q}) = {num(fq)}") + ", " + M(f"f({p}) = {num(fp)}"),
        M(f"\\frac{{{num(fq)} - {par(fp)}}}{{{q} - {par(p)}}} = \\frac{{{num(fq - fp)}}}{{{q - p}}} = {num(val)}"),
    ]
    return Q("Derivatans tillämpningar", f"Beräkna den genomsnittliga förändringshastigheten för {M('f(x) = ' + poly(cs))} i intervallet {M(f'{p} \\leq x \\leq {q}')}.",
             M(num(val)), [M(num(fq - fp)), M(num(peval(deriv(cs), q))), M(num(F(fq + fp, q - p)))], steps)


TRIG = {
    "0": "0", "1/2": "\\frac{1}{2}", "r2": "\\frac{\\sqrt{2}}{2}", "r3": "\\frac{\\sqrt{3}}{2}",
    "1": "1", "t30": "\\frac{\\sqrt{3}}{3}", "t60": "\\sqrt{3}",
}
BASE = {
    "sin": {30: "1/2", 45: "r2", 60: "r3"},
    "cos": {30: "r3", 45: "r2", 60: "1/2"},
    "tan": {30: "t30", 45: "1", 60: "t60"},
}


def tv(key, sign):
    return M(("-" if sign < 0 and key != "0" else "") + TRIG[key])


@t3
def trig_exakt():
    v = rng.choice([30, 45, 60, 120, 135, 150, 210, 225, 240, 300, 315, 330])
    fn = rng.choice(["sin", "cos", "tan"])
    quad = 1 + v // 90
    ref = {1: v, 2: 180 - v, 3: v - 180, 4: 360 - v}[quad]
    sign = {"sin": 1 if quad in (1, 2) else -1, "cos": 1 if quad in (1, 4) else -1,
            "tan": 1 if quad in (1, 3) else -1}[fn]
    key = BASE[fn][ref]
    other = {"sin": "cos", "cos": "sin", "tan": "tan"}[fn]
    okey = BASE[other][90 - ref] if fn == "tan" else BASE[other][ref]
    fl = f"\\{fn}"
    steps = []
    if quad == 1:
        steps.append(f"Standardvärde (exakta värden från triangeln): {M(f'{fl} {v}^\\circ')} = {tv(key, 1)}.")
    else:
        steps += [
            f"{M(f'{v}^\\circ')} ligger i kvadrant {quad}. Referensvinkeln är {M(f'{ref}^\\circ')}.",
            f"I kvadrant {quad} är {M(fl)} {'positiv' if sign > 0 else 'negativ'} (enhetscirkeln).",
            f"{M(f'{fl} {ref}^\\circ')} = {tv(key, 1)}, så {M(f'{fl} {v}^\\circ')} = {tv(key, sign)}.",
        ]
    fallback = [k for k in TRIG if k not in ("0", key)]
    rng.shuffle(fallback)
    cands = [tv(key, -sign), tv(okey, sign), tv(okey, -sign)] + [tv(k, sign) for k in fallback]
    return Q("Trigonometri", f"Bestäm det exakta värdet av {M(f'{fl} {v}^\\circ')}.", tv(key, sign), cands, steps)


@t3
def triangelarea():
    a, b = rng.randint(3, 15), rng.randint(3, 15)
    C = rng.choice([x for x in range(20, 161) if x != 90])
    r = math.radians(C)
    area = 0.5 * a * b * math.sin(r)
    steps = [
        "Areasatsen: " + M("A = \\frac{ab \\sin C}{2}") + ".",
        M(f"A = \\frac{{{a} \\cdot {b} \\cdot \\sin {C}^\\circ}}{{2}} \\approx {dec(area, 1)}") + " cm²",
    ]
    return Q("Trigonometri",
             f"I triangeln {M('ABC')} är {M(f'a = {a}')} cm, {M(f'b = {b}')} cm och vinkeln {M(f'C = {C}^\\circ')}. Beräkna triangelns area. (En decimal.)",
             M(dec(area, 1)) + " cm²",
             [M(dec(2 * area, 1)) + " cm²", M(dec(abs(0.5 * a * b * math.cos(r)), 1)) + " cm²", M(dec(0.5 * a * b, 1)) + " cm²"], steps)


TRIPLES = {60: [(3, 8, 7), (5, 8, 7), (7, 15, 13), (8, 15, 13), (5, 21, 19), (16, 21, 19), (11, 35, 31), (24, 35, 31)],
           120: [(3, 5, 7), (7, 8, 13), (5, 16, 19), (11, 24, 31), (6, 10, 14), (9, 15, 21)]}


@t3
def cosinussats():
    C = rng.choice([60, 120])
    a, b, c = rng.choice(TRIPLES[C])
    if rng.random() < 0.5:
        a, b = b, a
    cosC = "\\frac{1}{2}" if C == 60 else "\\left(-\\frac{1}{2}\\right)"
    if rng.random() < 0.55:
        steps = [
            "Cosinussatsen: " + M("c^2 = a^2 + b^2 - 2ab\\cos C") + ".",
            M(f"c^2 = {a}^2 + {b}^2 - 2 \\cdot {a} \\cdot {b} \\cdot {cosC} = {a * a + b * b} {'-' if C == 60 else '+'} {a * b} = {c * c}"),
            M(f"c = \\sqrt{{{c * c}}} = {c}") + " cm",
        ]
        oth = a * a + b * b + (a * b if C == 60 else -a * b)
        return Q("Trigonometri",
                 f"I triangeln {M('ABC')} är {M(f'a = {a}')} cm, {M(f'b = {b}')} cm och {M(f'C = {C}^\\circ')}. Beräkna sidan {M('c')}.",
                 M(dec(c, 1)) + " cm",
                 [M(dec(math.sqrt(a * a + b * b), 1)) + " cm", M(dec(math.sqrt(oth), 1)) + " cm", M(dec(a + b - c / 2, 1)) + " cm"], steps)
    cv = F(a * a + b * b - c * c, 2 * a * b)
    steps = [
        "Cosinussatsen löst för vinkeln: " + M("\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}") + ".",
        M(f"\\cos C = \\frac{{{a}^2 + {b}^2 - {c}^2}}{{2 \\cdot {a} \\cdot {b}}} = \\frac{{{a * a + b * b - c * c}}}{{{2 * a * b}}} = {num(cv)}"),
        M(f"C = {C}^\\circ") + (" (cosinus är negativt, så vinkeln är trubbig)." if C == 120 else "."),
    ]
    return Q("Trigonometri",
             f"En triangel har sidorna {M(str(a))} cm, {M(str(b))} cm och {M(str(c))} cm. Hur stor är vinkeln mittemot sidan som är {M(str(c))} cm?",
             M(f"{C}^\\circ"), [M(f"{180 - C}^\\circ"), M("90^\\circ"), M("45^\\circ")], steps)


@t3
def sinussats():
    a = rng.randint(5, 15)
    A = rng.randint(25, 70)
    B = rng.randint(30, 100)
    if A + B >= 170 or A == B:
        raise Skip
    b = a * math.sin(math.radians(B)) / math.sin(math.radians(A))
    steps = [
        "Sinussatsen: " + M("\\frac{a}{\\sin A} = \\frac{b}{\\sin B}") + ".",
        M(f"b = \\frac{{{a} \\cdot \\sin {B}^\\circ}}{{\\sin {A}^\\circ}} \\approx {dec(b, 1)}") + " cm",
    ]
    return Q("Trigonometri",
             f"I triangeln {M('ABC')} är {M(f'a = {a}')} cm, {M(f'A = {A}^\\circ')} och {M(f'B = {B}^\\circ')}. Beräkna sidan {M('b')}. (En decimal.)",
             M(dec(b, 1)) + " cm",
             [M(dec(a * math.sin(math.radians(A)) / math.sin(math.radians(B)), 1)) + " cm", M(dec(a * B / A, 1)) + " cm",
              M(dec(b + 1.5, 1)) + " cm"], steps)


def over_k(top, k):
    if k == 1:
        return top
    if k == -1:
        return "-" + top
    sgn = "-" if k < 0 else ""
    return f"{sgn}\\frac{{{top}}}{{{abs(k)}}}"


@t3
def ln_ekv():
    A = rng.randint(2, 5)
    r = rng.randint(2, 9)
    B = A * r
    k = rng.choice([1, 2, 3, -1, -2])
    x = math.log(r) / k
    E = f"e^{{{kx(k)}}}"
    steps = [f"Dela med {M(str(A))}: {M(f'{E} = {r}')}."]
    steps.append("Ta naturliga logaritmen: " + M(f"{kx(k)} = \\ln {r}") + ".")
    if k != 1:
        steps.append(M(f"x = {over_k(f'\\ln {r}', k)} \\approx {dec(x, 3)}"))
    else:
        steps.append(M(f"x = \\ln {r} \\approx {dec(x, 3)}"))
    c1 = M(f"x = {over_k(f'\\ln {B - A}', k)} \\approx {dec(math.log(B - A) / k, 3)}") if B - A > 1 else M(f"x = {over_k(f'\\ln {B}', k)} \\approx {dec(math.log(B) / k, 3)}")
    c2 = M(f"x = {num(F(r, k))}")
    c3 = M(f"x = {over_k(f'\\ln {B}', k)} \\approx {dec(math.log(B) / k, 3)}")
    return Q("Exponentialfunktioner och ln", f"Lös ekvationen {M(f'{A}{E} = {B}')}. (Tre decimaler.)",
             M(f"x = {over_k(f'\\ln {r}', k)} \\approx {dec(x, 3)}"), [c1, c2, c3], steps)


@t3
def derivata_ax():
    A = rng.choice([1, 2, 3, 4, 5, -2])
    b = rng.choice([2, 3, 5, 10])
    pre = "" if A == 1 else ("-" if A == -1 else f"{A} \\cdot ")
    f = f"{pre}{b}^x"
    steps = [
        "Regeln: " + M("D\\left(a^x\\right) = a^x \\ln a") + " (eftersom " + M("a^x = e^{x \\ln a}") + ").",
        M(f"f'(x) = {pre}{b}^x \\cdot \\ln {b}"),
    ]
    return Q("Exponentialfunktioner och ln", f"Derivera {M('f(x) = ' + f)}.", M(f"f'(x) = {pre}{b}^x \\cdot \\ln {b}"),
             [M(f"f'(x) = {pre}x \\cdot {b}^{{x-1}}"), M(f"f'(x) = {pre}{b}^x"), M(f"f'(x) = {pre}{b}^x \\cdot \\lg {b}")], steps)


@t3
def ln_forenkla():
    a, b = rng.sample(range(2, 10), 2)
    if rng.random() < 0.5:
        text = f"Förenkla {M(f'e^{{\\ln {a} + \\ln {b}}}')}."
        steps = ["Logaritmlagen: " + M("\\ln a + \\ln b = \\ln(ab)") + ".",
                 M(f"e^{{\\ln {a * b}}} = {a * b}") + " eftersom " + M("e^{\\ln x} = x") + "."]
        return Q("Exponentialfunktioner och ln", text, M(str(a * b)), [M(str(a + b)), M(f"\\ln {a * b}"), M(f"e^{{{a + b}}}")], steps)
    n = rng.randint(2, 6)
    text = f"Beräkna {M(f'\\ln e^{{{n}}} + \\ln 1 + e^{{\\ln {a}}}')} exakt."
    steps = [M(f"\\ln e^{{{n}}} = {n}") + ", " + M("\\ln 1 = 0") + " och " + M(f"e^{{\\ln {a}}} = {a}") + ".",
             M(f"{n} + 0 + {a} = {n + a}")]
    return Q("Exponentialfunktioner och ln", text, M(str(n + a)), [M(str(n + a + 1)), M(str(n * a)), M(f"{n} + \\ln {a}")], steps)


@t3
def andraderivata():
    cs = [nz(-2, 2), rng.randint(-4, 4), rng.randint(-5, 5), rng.randint(-6, 6), rng.randint(-5, 5)]
    x0 = nz(-2, 2)
    d1 = deriv(cs)
    d2 = deriv(d1)
    val = peval(d2, x0)
    steps = [M(f"f'(x) = {poly(d1)}"), M(f"f''(x) = {poly(d2)}"), M(f"f''({x0}) = {subst(d2, x0)} = {num(val)}")]
    return Q("Derivata", f"Låt {M('f(x) = ' + poly(cs))}. Beräkna {M(f'f^{{\\prime\\prime}}({x0})')}.", M(num(val)),
             [M(num(peval(d1, x0))), M(num(-val)), M(num(peval(cs, x0))), M(num(val + 2))], steps)


@t3
def vaxande():
    a = rng.choice([1, -1, 2])
    x0 = nz(-5, 5)
    b = -2 * a * x0
    c = rng.randint(-6, 6)
    want_up = rng.random() < 0.5
    # f' = 2a(x - x0); f' >= 0 <=> x >= x0 om a > 0
    ge = (a > 0) == want_up
    rel = "\\geq" if ge else "\\leq"
    opp = "\\leq" if ge else "\\geq"
    word = "växande" if want_up else "avtagande"
    steps = [
        M(f"f'(x) = {poly([2 * a, b])}"),
        f"{'Växande' if want_up else 'Avtagande'} där {M(f'f^{{\\prime}}(x) {'\\geq' if want_up else '\\leq'} 0')}: {M(f'{poly([2 * a, b])} {'\\geq' if want_up else '\\leq'} 0')}.",
        f"Lös olikheten{' (dela med negativt tal vänder olikheten)' if a < 0 else ''}: {M(f'x {rel} {x0}')}.",
    ]
    return Q("Derivatans tillämpningar", f"För vilka {M('x')} är {M('f(x) = ' + poly([a, b, c]))} {word}?", M(f"x {rel} {x0}"),
             [M(f"x {opp} {x0}"), M(f"x {rel} {-x0}"), M(f"x {opp} {-x0}")], steps)


# =====================================================================
#            LEDTRÅDAR (träningsläge) – hur man kommer igång
# =====================================================================

HINTS = {
    # Matte 2c
    "kvadrering": "Använd kvadreringsregeln " + M("(a+b)^2 = a^2 + 2ab + b^2") + ". Glöm inte dubbla produkten " + M("2ab") + ".",
    "konjugat": "Känner du igen konjugatregeln " + M("(a+b)(a-b) = a^2 - b^2") + "? Mittentermerna tar ut varandra.",
    "faktorisera": "Leta först efter en gemensam faktor att bryta ut. Försök sedan känna igen kvadrerings- eller konjugatregeln baklänges.",
    "pq": "Se till att " + M("x^2") + "-termen har koefficienten 1 (dela annars hela ekvationen), läs av " + M("p") + " och " + M("q") + " och använd pq-formeln.",
    "rotekv": "Det finns ingen " + M("x") + "-term. Isolera " + M("x^2") + " och dra roten ur – kom ihåg att det blir två lösningar.",
    "nollprodukt": "Det finns ingen konstantterm. Bryt ut " + M("x") + " och använd nollproduktmetoden.",
    "ekvsystem_subst": "Ena ekvationen ger redan " + M("y") + " uttryckt i " + M("x") + ". Sätt in det uttrycket i den andra ekvationen.",
    "ekvsystem_add": "Titta på " + M("y") + "-termerna: " + M("+y") + " och " + M("-y") + ". Vad händer om du adderar ekvationerna?",
    "lutning": M("k = \\frac{\\Delta y}{\\Delta x}") + ". Subtrahera i samma ordning i täljare och nämnare.",
    "linjens_ekv": "Räkna först ut " + M("k") + " med de två punkterna. Sätt sedan in en av punkterna i " + M("y = kx + m") + " för att få " + M("m") + ".",
    "vinkelrat": "Parallella linjer har samma " + M("k") + ". Vinkelräta linjer uppfyller " + M("k_1 \\cdot k_2 = -1") + ".",
    "lg_berakna": "Skriv talen som tiopotenser och använd att " + M("\\lg 10^n = n") + ".",
    "lg_ekv": M("\\lg x = n") + " betyder att " + M("10^n = x") + ".",
    "tiopotens": "Isolera först tiopotensen genom att dela, logaritmera sedan med " + M("\\lg") + ".",
    "exp_heltal": "Dela bort koefficienten framför potensen (om det finns en) och skriv högerledet som en potens med samma bas.",
    "fordubbling": "Ställ upp " + M("(\\text{förändringsfaktor})^x = 2") + " (eller " + M("0{,}5") + "). Logaritmera båda leden och använd " + M("\\lg a^x = x \\lg a") + ".",
    "forandringsfaktor": "Gör om procenten till en förändringsfaktor (t.ex. +5 % → " + M("1{,}05") + ", −5 % → " + M("0{,}95") + ") och upphöj till antalet år.",
    "vertex": "Extrempunkten ligger på symmetrilinjen " + M("x = -\\frac{b}{2a}") + ". Sätt sedan in x-värdet i funktionen.",
    "avstand": "Tänk dig en rätvinklig triangel mellan punkterna och använd Pythagoras sats (avståndsformeln).",
    "mittpunkt": "Mittpunkten är medelvärdet av x-koordinaterna och medelvärdet av y-koordinaterna.",
    "randvinkel": "Randvinkelsatsen: randvinkeln är hälften av medelpunktsvinkeln på samma båge. En randvinkel som står på en diameter är " + M("90^\\circ") + ".",
    "likformighet": "Bestäm skalan mellan trianglarna med två sidor som motsvarar varandra. Multiplicera sedan den sökta sidans motsvarighet med skalan.",
    "areaskala": "Om längdskalan är " + M("k") + " blir areaskalan " + M("k^2") + " och volymskalan " + M("k^3") + ".",
    "statistik": "Medelvärde: summan delat med antalet. Median: sortera talen först och ta det mittersta (eller medelvärdet av de två mittersta).",
    "potenslagar": "Potenslagarna: " + M("x^a \\cdot x^b = x^{a+b}") + ", " + M("\\frac{x^a}{x^b} = x^{a-b}") + " och " + M("(x^a)^b = x^{ab}") + ".",
    # Matte 3c
    "derivata_varde": "Derivera först hela funktionen term för term. Sätt sedan in x-värdet i " + M("f'(x)") + ", inte i " + M("f(x)") + ".",
    "derivata_uttryck": M("D(ax^n) = a \\cdot n \\cdot x^{n-1}") + ", och konstanter har derivatan 0.",
    "derivata_exp": M("D(e^{kx}) = k e^{kx}") + ". Derivera varje term för sig.",
    "derivata_rot_inv": "Skriv om som potens: " + M("\\sqrt{x} = x^{1/2}") + " och " + M("\\frac{1}{x} = x^{-1}") + ". Använd sedan deriveringsregeln för potenser.",
    "tangent": "Tangenten har lutningen " + M("k = f'(a)") + " och går genom punkten " + M("(a,\\ f(a))") + ". Använd " + M("y = kx + m") + ".",
    "extrempunkt": "Lös " + M("f'(x) = 0") + ". Avgör sedan typen med andraderivatan: " + M("f'' < 0") + " ger max och " + M("f'' > 0") + " ger min.",
    "stationara": "Stationära punkter är där " + M("f'(x) = 0") + ". Bryt ut " + M("x") + " ur derivatan.",
    "integral_poly": "Ta fram en primitiv funktion " + M("F") + " och beräkna " + M("F(\\text{övre}) - F(\\text{undre})") + ".",
    "primitiv_poly": "En primitiv funktion till " + M("x^n") + " är " + M("\\frac{x^{n+1}}{n+1}") + ". Glöm inte " + M("+\\,C") + ".",
    "primitiv_exp": "En primitiv funktion till " + M("e^{kx}") + " är " + M("\\frac{e^{kx}}{k}") + " – kontrollera genom att derivera tillbaka.",
    "integral_exp": "En primitiv funktion till " + M("ke^{kx}") + " är " + M("e^{kx}") + ". Använd sedan att " + M("e^{\\ln a} = a") + ".",
    "area_mellan": "Bestäm nollställena – de är integrationsgränserna. Integrera sedan funktionen mellan dem.",
    "gransvarde": "Direkt insättning ger " + M("\\frac{0}{0}") + ". Faktorisera täljaren och förkorta.",
    "derivatans_def": "Räkna ut " + M("f(a+h) - f(a)") + ", förenkla, dela med " + M("h") + " och låt " + M("h \\to 0") + ".",
    "rationella": "Faktorisera täljare och nämnare (konjugat- och kvadreringsregeln) och förkorta sedan gemensamma faktorer.",
    "medelforandring": "Genomsnittlig förändringshastighet är " + M("\\frac{f(b) - f(a)}{b - a}") + ".",
    "trig_exakt": "Rita enhetscirkeln: i vilken kvadrant ligger vinkeln, och vilken är referensvinkeln (vinkeln till x-axeln)?",
    "triangelarea": "Areasatsen: " + M("A = \\frac{ab \\sin C}{2}") + ".",
    "cosinussats": "Cosinussatsen: " + M("c^2 = a^2 + b^2 - 2ab \\cos C") + ". Exakta värden: " + M("\\cos 60^\\circ = \\frac{1}{2}") + ", " + M("\\cos 120^\\circ = -\\frac{1}{2}") + ".",
    "sinussats": "Sinussatsen: " + M("\\frac{a}{\\sin A} = \\frac{b}{\\sin B}") + ". Lös ut " + M("b") + ".",
    "ln_ekv": "Isolera e-potensen först, ta sedan " + M("\\ln") + " av båda leden.",
    "derivata_ax": "Skriv " + M("a^x = e^{x \\ln a}") + " och derivera – eller använd " + M("D(a^x) = a^x \\ln a") + ".",
    "ln_forenkla": M("\\ln") + " och " + M("e") + " tar ut varandra: " + M("\\ln e^x = x") + " och " + M("e^{\\ln x} = x") + ". Dessutom är " + M("\\ln 1 = 0") + " och " + M("\\ln a + \\ln b = \\ln(ab)") + ".",
    "andraderivata": "Derivera två gånger och sätt sedan in x-värdet.",
    "vaxande": M("f") + " är växande där " + M("f'(x) \\geq 0") + " och avtagande där " + M("f'(x) \\leq 0") + ".",
}


def build(templates, course, prefix):
    out, seen = [], set()
    i = 0
    stalls = 0
    while len(out) < PER_COURSE:
        t = templates[i % len(templates)]
        i += 1
        try:
            q = t()
        except Skip:
            continue
        if q["q"] in seen:
            stalls += 1
            if stalls > 5000:
                raise RuntimeError("för få unika frågor")
            continue
        seen.add(q["q"])
        q["hint"] = HINTS[t.__name__]
        q["course"] = course
        q["id"] = f"{prefix}{len(out) + 1:03d}"
        out.append(q)
    return out


def main():
    missing = [t.__name__ for t in T2 + T3 if t.__name__ not in HINTS]
    assert not missing, f"ledtråd saknas för: {missing}"
    bank = build(T2, "2c", "A") + build(T3, "3c", "B")
    root = Path(__file__).resolve().parent.parent
    js = "// Genererad av tools/generate_questions.py – redigera inte för hand.\n"
    js += "window.QUESTIONS = " + json.dumps(bank, ensure_ascii=False, indent=1) + ";\n"
    (root / "questions.js").write_text(js, encoding="utf-8")
    from collections import Counter
    print(len(bank), "frågor")
    print(Counter((q["course"], q["topic"]) for q in bank))


if __name__ == "__main__":
    main()
