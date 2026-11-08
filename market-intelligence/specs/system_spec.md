# 🛰️ Market Intelligence & Competitor Hunter Engine (MICHE)
## Rendszerspecifikáció és Adatmodell v1.0

Ez a dokumentum a TestAcademy és a Borbás Webdesign automatizált heti versenytárs-figyelő, árelemző és piaci pozicionáló motorjának specifikációja.

---

## 1. Célkitűzés & Üzleti Célok

1. **TestAcademy (EdTech & Mentoring):**
   - Piaci árak és tanmenetek heti monitorozása (Vibe Coding, QA automatizálás, AI ágens kurzusok).
   - Pozicionálás a tömegképzések (bootcampek, rögzített videós kurzusok) és az 1v1 prémium senior mentoring között.
   - Pontos ársávok: 59k / 99k / 500k csomagok összevetése a piaccal.

2. **Borbás Webdesign (KKV & Prémium Webfejlesztés):**
   - KKV weboldal készítés árak, csomagok és ajánlatok felderítése.
   - **Lost-Lead Audit:** Miért pártolt el 4 korábbi érdeklődő a versenytársakhoz? (Árazási átláthatóság, CMS választás, portfólió bizalom, garanciák).
   - Weboldal fejlesztési teendők: mit kell módosítani a honlapon, hogy a leadek azonnal konvertáljanak.

---

## 2. Megfigyelt Célpontok & Kulcsszó Készlet

### A. TestAcademy Piac (QA & Vibe Coding / AI)
* **Keresési kulcsszavak:**
  - `vibe coding képzés`, `ai fejlesztő tanfolyam`, `ai ágensek képzés budapest`
  - `szoftvertesztelő képzés árak`, `qa mentorálás 1v1`, `istqb felkészítő tanfolyam`
  - `automata tesztelő képzés ár`, `playwright tanfolyam`
* **Kiemelt monitorozott versenytársak:**
  - Codecool, Green Fox / PROGmasters, Matritell, Braining Hub, PROGmatic, Masterfield, egyéni mentorok és Udemy magyar oktatók.

### B. Borbás Webdesign Piac (KKV & Egyedi Weboldalak)
* **Keresési kulcsszavak:**
  - `weboldal készítés árak budapest`, `egyedi céges honlap árak`
  - `prémium webdesign kkv`, `modern weboldal készítés kisvállalkozás`
  - `webfejlesztő óradíj`, `honlapkészítés garanciával`
* **Kiemelt monitorozott versenytárs kategóriák:**
  - WordPress/Elementor szabadúszók (árharcosok: 80k - 150k Ft).
  - Középkategóriás digitális ügynökségek (300k - 800k Ft).
  - Egyedi / Webflow fejlesztők (500k+ Ft).

---

## 3. Strukturált Adatmodell (JSON Schema)

Minden felderített versenytársról az alábbi struktúrát mentjük el az adatbázisba:

```json
{
  "timestamp": "2026-11-07T16:55:00Z",
  "vertical": "education" | "webdesign",
  "competitor": {
    "name": "string",
    "domain": "string",
    "url": "string"
  },
  "offer": {
    "headline": "string",
    "subheadline": "string",
    "format": "1v1" | "group" | "recorded_video" | "custom_service",
    "deliverables": ["string"],
    "tech_stack_mentioned": ["string"],
    "duration_or_turnaround": "string"
  },
  "pricing": {
    "model": "fixed_package" | "hourly_rate" | "custom_quote" | "subscription",
    "displayed_price_huf": number | null,
    "hourly_rate_huf": number | null,
    "hidden_costs_found": ["string"],
    "financing_options": ["részletfizetés", "diákhitel", "0% THM"]
  },
  "conversion_mechanisms": {
    "primary_cta": "string",
    "has_direct_phone": boolean,
    "has_calendar_booking": boolean,
    "has_calculator": boolean,
    "guarantees": ["string"],
    "social_proof_type": ["google_reviews", "video_testimonials", "case_studies", "none"]
  },
  "positioning_analysis": {
    "market_quadrant": "budget_mass" | "mid_standard" | "premium_boutique",
    "claimed_usp": "string",
    "glaring_weaknesses": ["string"]
  }
}
```

---

## 4. Elemző Motor & Döntési Mátrix (Gap Analysis)

A motor összeveti a bejövő adatokat a mi belső specifikációnkkal:
1. **Árpozicionálási Eltérés:**
   - TestAcademy 59k / 99k / 500k vs piaci átlag.
   - Borbás Webdesign óradíj / projektár vs piaci átlag.
2. **Értékajánlat Rés (Value Gap):**
   - Mit kínálnak ők, amit mi nem hangsúlyozunk ki (pl. garancia, gyors átadás, ajándék domain/tárhely)?
   - Milyen előnyünk van nekünk, amit ők nem tudnak megadni (1v1 figyelem, 12+ év enterprise háttér, valódi AI ágens kódírás)?
3. **Lost-Lead Diagnosztika:**
   - Hol veszítünk ügyfelet? (Kevés esettanulmány? Nem azonnal látható fix ár? Túl technikai szövegezés?)

---

## 5. Heti Kimeneti Riport (`reports/weekly_intelligence_*.md`)

Minden heti futás egy azonnal olvasható, akcióközpontú jelentést tesz le:
* **Vezetői összefoglaló:** Mi történt a héten a piacon? (Áremelések, új belépők, akciók).
* **Ármátrix táblázat:** Ki mit ad mennyiért.
* **TestAcademy Fejlesztési Lista:** Szöveg, ár vagy tematika finomhangolás.
* **Borbás Webdesign Konverziós Teendők:** Mit rakjunk ki a honlapra a következő héten, hogy megfogjuk a leadeket.
