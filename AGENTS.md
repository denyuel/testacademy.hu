# 🤖 TestAcademy — Agent Memory & Project Playbook (AGENTS.md)

Ez a dokumentum a TestAcademy projekt központi specifikációja és memóriája. Minden AI ágensnek (Google Antigravity, Claude, stb.) kötelező követnie az itt leírt szabályokat és architektúrát.

---

## 1. Architektúra és Technikai Szabályok

### A. Szigorú Adat- és Tartalom szétválasztás (Borbás Webdesign Szabály)
- **Tilos** ügyfélszövegeket, árakat, tematikákat vagy elérhetőségeket közvetlenül a HTML szerkezetbe hardcode-olni.
- Minden dinamikus tartalom a `data.js` (és `dist/data.js`) fájlban definiált `SITE_DATA` objektumból származik.
- Az `index.html` egy szemantikus váz moduláris konténerekkel (`#kalkulator`, `#calc-package-cards`, `#faq-mount`, stb.).

### B. Zéró Runtime CDN Sérülékenység
- Nincs runtime Tailwind CDN (`cdn.tailwindcss.com`).
- A stílusokat a helyi Tailwind fordító generálja:
  ```bash
  npm run build
  ```
  Ez a `src/input.css`-ből állítja elő az `output.css`-t és bemásolja a `dist/` mappába.

### C. Cloudflare Workers & `dist/` Szinkronizáció
- A Cloudflare Workers a `./dist` könyvtárból szolgálja ki az oldalt.
- Bármilyen módosítás történik a gyökér `index.html`-ben vagy `data.js`-ben, az azonnal szinkronizálandó a `dist/` mappával is, és a `npm run build` futtatása kötelező commit előtt!

---

## 2. Termékportfólió és Árstruktúra (Invariánsok)

| Csomag Kód | Megnevezés | Ár | Típus / Fókusz |
| :--- | :--- | :--- | :--- |
| `ai-1day` | **1v1 Vibe Coding & AI Ágens Alapok** | **59.000 Ft** | 1 napos intenzív (4 óra). Specifikáció-alapú kódolás Antigravity-vel, `.md` memóriák, autonóm ágensek. |
| `ai-2day` | **1v1 Vibe Coding & AI Deep Dive** | **99.000 Ft** | 2 napos mesterkurzus (2x4 óra). Komplex szoftverek és ágens workflow-k építése manuális kódolás nélkül. |
| `mentorship` | **Senior QA & Karrier Mentoring (1v1)** | **500.000 Ft** | Egyéni VIP karrierugrás: Manuális + Automatizálás (Java/Selenide) + AI munkafolyamatok. |
| `corporate` | **Vállalati AI & Agens Workshop (Astron)** | **Egyedi árajánlat** | Csapatoknak (Astron enterprise agenda): Spec-driven dev, POM, autonóm QA subagensek, CI/CD, trace debugging, hackathon. |
| `consulting` | **1-on-1 Személyes Tanácsadás** | **15.000 Ft / óra** | Technikai blokkerek feloldása, architektúra tervezés, kód review. |

---

## 3. Szigorú Tartalmi és Dizájn Tiltások

1. 🚫 **Tilos az emoji használat a weboldalon!**
   - Emojik helyett kizárólag professzionális, tiszta inline SVG ikonokat használunk.
   - Az SVG-k méretét mindig explicit módon rögzíteni kell (`width="14" height="14"`, illetve méretvédelem: `min-width`, `max-width`, `flex-shrink: 0`), hogy dinamikus HTML injektáláskor se torzuljanak el.
2. 🚫 **Tilos a "laza" szó használata!**
   - B2B és lakossági workshopoknál sem használunk "laza" kifejezést. Helyette: *intenzív*, *fókuszált*, *gyakorlatorientált*, *átfogó*.
3. 🚫 **Tilos a kurzusok és a kalkulátor szétbontása külön szekciókra!**
   - A kurzuskínálat és az interaktív kalkulátor egyetlen közös, interaktív modulban él (`#kalkulator`, ahogy a Borbás Webdesign Kalkulátor komponensében).
4. 🚫 **Tilos általános "ChatGPT promptolgatásként" pozicionálni a Vibe Codingot!**
   - A hiteles érték a valódi agentic workflow: **Google Antigravity**, `.md` specifikációk (`specs/`, `AGENTS.md`), autonóm subágensek és szoftverfejlesztés kézi kódírás nélkül.

---

## 4. Védett DOM Szelektorok (QA & Teszt Invariánsok)

A Maven/Selenide tesztcsomag (`qa-automation/`) és a belső logikai tesztek a következő ID-kat figyelik, ezeket **tilos átnevezni vagy törölni**:

- **Nyelvváltás:** `#btn-hu`, `#btn-en`
- **Hero & Címek:** `#hero-title`
- **Navigáció / Gombok:** `#enroll-manual-btn`, `#join`
- **Kalkulátor & Csomagválasztó:**
  - `#kalkulator` (fő konténer)
  - `#calc-package-cards` (dinamikusan renderelt csomagok)
  - `#calc-addon-options` (dinamikus kiegészítők)
  - `#calc-total-display` (asztali összesítő árkijelző)
  - `#calc-sticky-price` (mobil lebegő árkijelző)
  - `#calc-summary-items` (kiválasztott tételek listája)
  - `#calc-installments-text` (részletfizetési tájékoztató)
- **Kapcsolat / Jelentkezési Űrlap:**
  - `#contact-form`
  - `#form-name`
  - `#form-email`
  - `#form-phone`
  - `#form-course`
  - `#form-message`
  - `#submit-btn`

---

## 5. Ellenőrzési és Tesztelési Rutin

Mielőtt bármilyen feladatot késznek jelentesz:
1. `npm run build` lefut sikeresen.
2. `npx htmlhint "index.html" "dist/index.html"` nem jelez szintaktikai hibát.
3. Logikai teszt lefut:
   ```powershell
   node test-app-logic.js
   ```
4. UI tesztek futtatása (ha módosult a HTML szerkezet):
   ```powershell
   & "qa-automation/maven/apache-maven-3.9.6/bin/mvn.cmd" test -Dtest=*UiTest -f qa-automation/pom.xml
   ```
5. `git status` tiszta, `main` branch szinkronban a remote-tal.
