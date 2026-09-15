# TestAcademy Design System & Specifikáció

## 1. Vizuális Identitás & Vibe (Borbás Webdesign ihletésű Nordic Light)
A TestAcademy a **Borbás Webdesign** prémium, letisztult, skandináv világos stílusvilágát követi: bizalomgerjesztő, magazin-szerű tipográfiával és modern kontrasztokkal.

## 2. Core Tokens & Színpaletta
- **Fő Háttér:** Lágy világosszürke / off-white (`bg-slate-50`, `#f8fafc`)
- **Kártya & Szekció Háttér:** Tiszta fehér (`#ffffff`) prémium szegéllyel (`border-slate-200/80`) és lágy árnyékokkal (`shadow-xl shadow-slate-100`)
- **Elsődleges Kiemelő Szín:** Sky Blue / Ocean Blue (`#0284c7`, `#0ea5e9`)
- **Másodlagos Kiemelő Szín:** Forest Teal (`#0f766e`, `#14b8a6`)
- **Szöveg:** Főcímek mély pala (`#0f172a`), törzsszöveg közép pala (`#334155` / `#475569`)

## 3. Tipográfia
- **Főcímek & Fejlécek:** `'Playfair Display', serif` és emelt súlyú modern sans
- **Törzsszöveg & Felületek:** `'Plus Jakarta Sans'`, `'Inter', sans-serif`
- **Gombok & Kapszulák:** `rounded-full`, finom betűköz (`tracking-wider`), félkövér/fekete súly

## 4. Új Belépő Szintű AI Kurzus
- **Megnevezés:** *Gyakorlati AI Alapok & Produktivitás: Kódolás nélkül a mindennapi munkában és életben*
- **Ár:** `59.000 Ft` (Early Bird / Kedvezményes ár, 79.000 Ft listaár)
- **Célcsoport:** Nem-programozók, irodai munkatársak, vállalkozók, akik napi több órát szeretnének megspórolni ChatGPT, Claude és AI eszközökkel (promptolás, e-mailek, táblázatok, PDF összefoglalók, rutin feladatok).

## 5. Interaktív Árkalkulátor & Mobil Sticky Bar
- **Asztali nézet:** Lépésről lépésre konfigurálható felület (1. Alapcsomag választás, 2. Kiegészítő modulok, 3. Részletfizetési infó), mellette fixált (sticky) összesítő kártya dinamikus árszámlálóval és CTA gombbal.
- **Mobil nézet:** Lebegő alsó sáv (`.calc-sticky-bar`), amely `IntersectionObserver`-rel aktiválódik, amint a kalkulátor a képernyőre ér. Mutatja a kalkulált összeget és az azonnali "Jelentkezés →" gombot.
- **Automatikus Űrlap-szinkronizáció:** A kalkulátorból indított jelentkezés automatikusan beállítja a jelentkezési űrlap kurzusválasztóját és odagörgeti a látogatót.

## 6. Kétnyelvűség (Bilingual HU/EN)
- Minden felirat, gomb, tematika és szerződéses tájékoztató támogatja a magyar és angol nyelvet egyetlen kattintással (`HU / EN` kapcsoló).

