# Matteprov 2c & 3c

Mock-prov med flervalsfrågor (3 alternativ) för Matematik 2c och 3c. Varje prov drar 25 slumpade frågor ur en bank på 200 (100 per kurs). Efter inlämning visas rättning, resultat per område och fullständiga uträkningar.

## Publicera på GitHub Pages

1. Skapa ett nytt repo på GitHub, t.ex. `matteprov`.
2. Ladda upp filerna (eller pusha):
   ```bash
   git init
   git add .
   git commit -m "Matteprov 2c & 3c"
   git branch -M main
   git remote add origin https://github.com/<ditt-användarnamn>/matteprov.git
   git push -u origin main
   ```
3. På GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, välj `main` och `/ (root)`, spara.
4. Efter någon minut finns sidan på `https://<ditt-användarnamn>.github.io/matteprov/`.

## Filer

| Fil | Innehåll |
| --- | --- |
| `index.html` | Sidan |
| `style.css` | Utseende (ljust/mörkt läge följer systemet) |
| `app.js` | Provlogik: slumpning, rättning, historik |
| `questions.js` | Frågebanken (genererad) |
| `tools/generate_questions.py` | Generator som räknar fram alla svar och uträkningar |

## Ändra eller utöka frågebanken

Frågorna skapas av `tools/generate_questions.py`, så facit och uträkningar alltid stämmer. Lägg till en ny frågetyp som en funktion med `@t2` (Matte 2c) eller `@t3` (Matte 3c) och kör:

```bash
python3 tools/generate_questions.py
```

Antal frågor per kurs styrs av `PER_COURSE`. Matematiken renderas med KaTeX (laddas från CDN).
