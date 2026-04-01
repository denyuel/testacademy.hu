# AI Asszisztens Szabályok és Védett Tartalmak (TestAcademy)

**FONTOS:** Ez a dokumentum a `TestAcademy` webolal stabil, rögzített tartalmait és struktúráját tartalmazza. AI asszisztensként **SZIGORÚAN TILOS** a benne foglalt szövegeket, árakat, elérhetőségeket és alapvető üzleti logikákat a felhasználó (Daniel) KIFEJEZETT és EGYÉRTELMŰ kérése nélkül módosítani, törölni vagy véletlenül átírni.

Biztosítsd, hogy ha kódolási vagy dizájn módosításokat kérnek, ezek a tartalmi elemek érintetlenek maradjanak!

---

## 1. Alapvető Üzleti Adatok és Elérhetőségek (VÉDETT)
- **Név:** TestAcademy | Senior QA Mentoring & AI Automation
- **Email:** testacademyhungary@gmail.com
- **Telefonszám:** +36 30 309 3302
- **Form Action (Jelentkezés):** `https://formspree.io/f/mreygyry`
- **Szerzői jog:** &copy; 2026 TestAcademy

---

## 2. Fő Címsorok és Szlogenek (VÉDETT)
- **HU:** 10 év Lead tapasztalat • AI-támogatott tananyag
- **EN:** 10 Years Lead Experience • AI-Powered Syllabus
- **Főcím HU:** Valódi funkcionális tudás.
- **Főcím EN:** Real functional skills.
- **Alcím HU:** Hétvégi képzések Playwright és TypeScript alapokon. Tanulj a szakma sűrűjéből.
- **Alcím EN:** Weekend courses with Playwright & TypeScript. Learn from the professionals.

---

## 3. Képzések és Árazások (VÉDETT)

Ezek a kurzusok és az áruk fixek:

### Kurzusok (Hétvégi Képzések)
1. **Junior Manual**
   - **Ár:** 149.000 Ft
   - **Időtartam:** 4 Hétvége
   - **Leírás:** A tesztelés alapjai, Jira, SQL és valódi projektek. Nem csak elmélet: nálunk rutint szerzel.

2. **Playwright Pro**
   - **Ár:** 299.000 Ft
   - **Időtartam:** 8 Hétvége
   - **Leírás:** Modern automatizálás Playwright + TypeScript alapon. Komplex architektúra építés és CI/CD.

3. **Zero to Hero QA Masterclass (Kombinált)**
   - **Ár:** 399.000 Ft
   - **Időtartam:** 12 Hétvége
   - **Leírás:** A Junior Manual és a Playwright Pro teljes anyaga egyben kedvezményes áron. Teljes transzformáció a manuális alapoktól a senior szintű automatizálásig.

### Egyéni Fejlődés / Mentoring
1. **Tanácsadás & Coaching**
   - **Ár:** 15.000 Ft / hr (óra)
   - **Típus:** 1-on-1 alkalmak, specifikus technikai elakadások, karrierút-tervezés.

2. **Interview Ready Csomag (Legnépszerűbb)**
   - **Ár:** 99.000 Ft
   - **Tartalma:** CV & LinkedIn Audit, Mock Interviews (HU/EN), Soft Skill Boost, Kérdezéstechnika.

### Vállalati Tréningek / B2B
1. **AI Expert Deep Dive**
   - **Ár:** 199.000 Ft / nap
   - **Időtartam:** 1 Day
   - **Célcsoport:** Tapasztalt csapatoknak.

2. **QA Bridge Workshop (Bestseller)**
   - **Ár:** 199.000 Ft / nap
   - **Időtartam:** 2 Days
   - **Célcsoport:** Manuális tesztelők átvezetése az automatizálásba.

3. **Enterprise / Custom**
   - **Ár:** Egyedi ajánlat / Custom Quote
   - **Típus:** Több napos bővített tematika, egyedi igényekre.

---

## 4. Technikai és Strukturális Alapelvek (NEM VÁLTOZTATHATÓ)

1. **Kétnyelvűség Script Alapon:**
   - A kétnyelvűség (HU/EN) kliensoldali JavaScripttel van megoldva, CSS classok (`.lang-hu`, `.lang-en`, `.lang-hidden`) segítségével.
   - Bármilyen új szöveg hozzáadásakor kötelező elkészíteni a `lang-hu` és a rá vonatkozó `lang-en` (`lang-hidden`) spaneket.
   - Ne cseréld le a rendszert komplexebb (pl. i18n) csomagokra kifejezett kérés nélkül!

2. **Styling / UI Framework:**
   - A projekt **Tailwind CSS**-t használ CDN-en keresztül (`<script src="https://cdn.tailwindcss.com"></script>`). Nem hasznosítunk külső, bonyolult build toolokat (pl. webpack, vite) amíg arra határozott utasítás nem érkezik.

3. **Űrlap és Select opciók:**
   - Az űrlap legördülő (select) listái `translations` nevű globális JavaScript objektumból töltődnek be a választott nyelvnek megfelelően! 
   - Ha egy termék ára/neve változik, azt **kötelező** a `<script>` blokkban szereplő `translations` adattömbben is frissíteni.

4. **Helyszín és Remote Stratégia:**
   - A képzések elsődlegesen **Remote (Online)** fókuszúak a jobb skálázhatóság, az alacsonyabb overhead és a képernyőmegosztásos hatékonyság miatt.
   - Igény esetén **Budapest** lehet az in-person helyszín (ha összejön a minimális létszám), Szeged esetében csak speciális, egyedi esetekben. Emiatt az oldalon mindig a weben fókuszáljunk a Remote opció kiemelésére.

---
**ÖSSZEGZÉS:** Mielőtt bármely fájl tartalmát megváltoztatod, először olvasd el ezt a `.md` fájlt az emlékezet frissítése érdekében. Biztosítsd, hogy a fenti üzleti tartalmak konzisztensek maradnak!
