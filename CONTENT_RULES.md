# AI Assistant Rules and Protected Content (TestAcademy)

> **MEGJEGYZÉS / NOTE:** A projekt teljes körű technikai és ágens szabályzata a gyökérkönyvtárban lévő [AGENTS.md](file:///c:/Users/Daniel/Projects/websites/testacademy.hu/AGENTS.md) fájlban található. Ez a dokumentum a védett üzleti alapadatokat és tartalmi invariánsokat rögzíti.

**FONTOS:** Ez a dokumentum a `TestAcademy` weboldal stabil, rögzített adatait és struktúráját tartalmazza. AI asszisztensként **SZIGORÚAN TILOS** a szövegek, árak, kapcsolati adatok és alapvető üzleti logika önkényes átírása, törlése Daniel kifejezett kérése nélkül!

---

## 1. Védett Üzleti Adatok és Elérhetőségek
- **Név:** TestAcademy | Senior QA Mentoring & AI Automation
- **Email:** testacademyhungary@gmail.com
- **Telefon:** +36 30 309 3302
- **Űrlap Action (Application):** `https://formspree.io/f/mreygyry`
- **Copyright:** &copy; 2026 TestAcademy

---

## 2. Termékkínálat és Árak (Invariánsok)

1. **1v1 Vibe Coding & AI Ágens Alapok (1 napos intenzív, 4 óra):** `59.000 Ft` (Listaár: 79.000 Ft)
   - Fókusz: Kódolás nélkül valódi szoftverek és AI ágensek építése, Google Antigravity, `.md` specifikációk.
2. **1v1 Vibe Coding & AI Deep Dive (2 napos mesterkurzus, 2x4 óra):** `99.000 Ft` (Listaár: 140.000 Ft)
   - Fókusz: Komplex szoftverarchitektúra, autonóm subágensek, spec-driven development.
3. **Senior QA & Karrier Mentoring (1v1 VIP Mentorship):** `500.000 Ft`
   - Fókusz: Manuális + Automatizálás (Java 17, Selenide, REST Assured) + AI munkafolyamatok + Garancia.
4. **Vállalati AI & Ágens Workshop (Enterprise Agenda):** `Egyedi árajánlat`
   - Fókusz: Vállalati csapatoknak: Spec-driven dev, POM, autonóm QA subagensek, CI/CD, trace debugging, hackathon.
5. **1-on-1 Személyes Tanácsadás / Konzultáció:** `15.000 Ft / óra`

---

## 3. Tartalmi és Stílusbeli Szabályok
- **Zéró Emoji Szabály:** Tilos emojikat tenni a weboldal felületeire (tiszta SVG ikonok használandók).
- **Zéró "Laza" Szóhasználat:** Tilos a "laza" szó használata minden képzésnél és workshopnál.
- **Közös Modul:** A kurzuskínálat és az interaktív kalkulátor egyetlen közös modulban él (`#kalkulator`).
- **Adatszétválasztás:** Minden szöveg és ár a `data.js` `SITE_DATA` objektumában él, nem az `index.html`-ben.
