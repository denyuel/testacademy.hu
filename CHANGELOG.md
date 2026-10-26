# 📋 TestAcademy — Változásnapló & Hibajavítási Memória (CHANGELOG.md)

Ez a dokumentum a TestAcademy projekt hivatalos változásnaplója és hibajavítási memóriája. Minden elvégzett módosítás, UX/UI finomhangolás, tartalmi javítás és hibaelhárítás kötelezően itt kerül dokumentálásra egységes struktúrában, hogy a jövőbeli ágensek és fejlesztők azonnal átlássák az előzményeket.

---

## 📅 2026-10-26 — Teljes Rendszer Hardening: Kétnyelvűség (EN), Konverzió (Web3Forms + WhatsApp) és SEO

### 1. Kétnyelvű (HU/EN) Kalkulátor Teljes Szinkronizáció
- **Felhasználói kérés / Igény:**
  - *"mindegyiken végig mehetsz , ha jól tudom a forspree már be van kötve"*
  - Angol nyelvváltás esetén a teljes interaktív modul (mind az 5 kurzuskártya címestül, leírásostul, pipástul, a 3 kiegészítő modul és az élő curriculum) váltson át tiszta, professzionális angolra.
- **Gyökérok & Hiányosság:**
  - Korábban a kalkulátorkártyák belsejében csak magyar nyelvű szövegek voltak, így a felső „EN” gomb megnyomásakor a kártyák és pipák magyarul maradtak.
- **Alkalmazott megoldás:**
  - `index.html`: Minden kategória-jelvény, kurzuscím, leírás, pipa és kiegészítő modul megkapta a szabványos `<span class="lang-hu">` és `<span class="lang-en lang-hidden">` címkéket.
  - `data.js`: Minden kurzushoz hozzáadásra került a `curriculumEn` mező, így angol nézetben az összesítő dobozban is angolul jelennek meg az egyes tematikai pontok.

### 2. Konverzió és Kapcsolatfelvétel Megerősítése (Web3Forms & WhatsApp)
- **Implementáció:**
  - Ellenőriztük a meglévő űrlapot: a Web3Forms API-n (`https://api.web3forms.com/submit`, kulcs: `87c4fa66-64b6-4431-9c4e-d20da0ff1cef`) keresztül küldi be a nevet, emailt, telefonszámot, választott kurzust és a részletes kalkulációs összeállítást, majd átirányít a kétnyelvű `thanks.html` oldalra.
  - A Borbás Webdesign konverziós szabályzat (Rule 4) szerint a meglévő telefonos hívógomb mellé bekerült egy azonnali, 1-kattintásos WhatsApp közvetlen chat gomb (`https://wa.me/36303093302?text=...`) a mobilos gyors konverzió támogatására.

### 3. SEO, Közösségi Megosztás (OG Tags), Favicon & Keresőmotorok
- **Implementáció:**
  - Létrehoztunk egy tiszta, modern vektorgrafikus `favicon.svg` ikont, ezzel megszüntetve a hiányzó `favicon.ico` miatti 404-es konzolhibákat.
  - Bekötésre került a Canonical tag (`https://testacademy.hu/`), az alternate `hreflang` címkék (hu, en, x-default) és a Twitter Card meta adatok.
  - Létrehoztuk a keresőrobotok számára elengedhetetlen `robots.txt` és `sitemap.xml` fájlokat, és beállítottuk azok automatikus szinkronizációját a `package.json` build parancsában.

### 4. Minőségbiztosítási Eredmények:
- `npx htmlhint "index.html" "dist/index.html" "thanks.html" "dist/thanks.html"`: 0 hiba.
- Új Selenide UI tesztek megírva és zölden lefutva (`verifyCalculatorEnglishLanguageSwitch`, `verifyContactFormEndpointAndFields`): **összesen 18/18 teszt sikeres!**

---

## 📅 2026-10-26 — Felesleges GitHub Actions CI Pipeline Eltávolítása

### 1. Felesleges Értesítési Emailek Megszüntetése
- **Felhasználói kérés / Probléma leírása:**
  - *"a github actions failel kell ez nekem, emrt folyamat kapok róla failed emailt?"* (`media_1793020407142_e038c4d2.png`)
  - A felhasználó minden commit/push után piros hibaüzenetes email értesítést kapott a GitHubtól a korábban felvett *TestAcademy QA Integration Pipeline* leállása miatt.
- **Gyökérok (Root Cause):**
  - A `.github/workflows/qa-tests.yml` fájl automatikusan lefutott minden egyes `main` branch-re történő push alkalmával (`on: push: branches: [ "main" ]`).
  - A pipeline nem a Cloudflare Pages/Workers-en futó weboldal élesítését végezte, hanem a repóban lévő mintaprojekt (`qa-automation`) Java és API tesztjeit próbálta futtatni egy Ubuntu runneren.
  - Mivel a felhős runneren a mock API szerver (`json-server`) nem indult el megbízhatóan, a CI futások sorozatosan elhasaltak, és a GitHub riasztási emaileket küldött.
- **Alkalmazott megoldás:**
  - A `.github/workflows/qa-tests.yml` fájl és a `.github/` mappa teljes eltávolítása a repóból.
  - A weboldal változatlanul és zavartalanul működik a Cloudflare-en.
- **Minőségbiztosítási eredmények:**
  - GitHub Actions nem fut tovább automatikusan, a felesleges értesítő levelek azonnal és véglegesen megszűntek.

---

## 📅 2026-10-26 — Szóhasználat Finomhangolás: „Ülés” cseréje Természetes 1v1 Mentoring & Konzultációra

### 1. Eseti Tanácsadás Csomag Pipás Pont Pontosítása
- **Felhasználói kérés / Észrevétel:**
  - *"ez mit jelent? ülés? ,entoringra gondoltál?"* (`media_1793019818814_59057ce0.png`)
  - A felhasználó jelezte, hogy az 5. kurzuskártyán (Eseti 1:1 Konzultáció / Blokk-elhárítás) az *„1 órás közvetlen online ülés Borbás Dániellel”* megfogalmazás idegenül és furcsán hangzik.
- **Gyökérok (Root Cause):**
  - Az angol „session” (1-on-1 session) kifejezés tükörfordításaként került be a szövegbe az „ülés” szó, ami a magyar szakmai nyelvben nem természetes egyéni technikai mentoringra.
- **Alkalmazott megoldás:**
  - `index.html` (855. sor):
    - Előtte: `<span class="text-teal-900 font-semibold">1 órás közvetlen online ülés Borbás Dániellel</span>`
    - Utána: `<span class="text-teal-900 font-semibold">1 órás közvetlen online 1v1 mentoring & konzultáció Borbás Dániellel</span>`
  - `data.js` (258. sor):
    - Előtte: `"1 órás dedikált online ülés Borbás Dániellel"`
    - Utána: `"1 órás dedikált online 1v1 mentoring & konzultáció Borbás Dániellel"`
  - `npm run build` lefutott, `dist/index.html` és `dist/data.js` szinkronizálva.
- **Minőségbiztosítási eredmények:**
  - `npx htmlhint "index.html" "dist/index.html"` hibátlan (0 hiba).
  - Selenide UI tesztcsomag (`CandidateEnrollmentFlowUiTest`, `MainWebUiTest`, `MobileResponsiveUiTest`): 16 teszt futott le, 0 hiba.

## 📅 2026-10-26 — Kalkulátor Floating / Sticky Rögzítés (Csomagok Tetejétől az Aljáig)

### 1. Lebegő Összesítő Kártya (Desktop Sticky Fix)
- **Felhasználói kérés / Igény:**
  - *"a kalkulátor legyen floating a csomag box tetejétől az aljáig"* (`media_1793019123949_d06813ae.png`).
  - Amikor a felhasználó asztali vagy nagyobb nézetben görgeti a bal oldali képzési listát (1. csomagtól az 5.-ig, kiegészítők, fizetési módok), a jobb oldali kalkulátor kártya folyamatosan lebegve kísérje a felhasználót a csomag doboz tetejétől az aljáig.
- **Gyökérok (Root Cause):**
  - A body alatt lévő fő wrapper `div` rendelkezett egy `overflow-x-hidden` szabállyal.
  - A CSS szabvány szerint a `position: sticky` hatástalanná válik (nem tapad le), ha bármelyik szülő/ős konténer `overflow: hidden`, `overflow-x: hidden` vagy nem-visible értékkel bír, mert a böngésző nem a görgetett `window`-hoz köti a tapadási koordinátákat.
  - Ennek következtében a `.lg:sticky` elem görgetéskor azonnal kicsúszott a képernyőről, ahelyett, hogy lebegett volna.
- **Megoldás & Implementáció:**
  - Eltávolítottuk az `overflow-x-hidden` osztályt a belső wrapper divről (`index.html`).
  - Helyette a modern, `position: sticky`-t nem blokkoló `overflow-x: clip;` szabályt állítottuk be az `html, body` gyökéren (`index.html`, `input.css`).
  - A jobb oldali oszlop (`#calc-summary-box`) `lg:sticky lg:top-24 self-start` beállítást kapott finom `transition-all` átmenettel, a kártya belső elrendezése pedig kisebb laptop magasságokon is kompakt marad (`p-6 sm:p-7 md:p-8`).
- **Minőségbiztosítási eredmények:**
  - `MobileResponsiveUiTest#verifyDesktopCalculatorSummarySticks` teszt megírva és zölden lefutva: görgetéskor a kártya stabilan 96px távolságban tapad a fejléc alá a csomagbox teljes magasságában.


### 1. Jelenlegi Munkáltató (Carl Zeiss) Eltávolítása a Nyilvános Marketingből
- **Felhasználói kérés / Igény:**
  - *"nem akarom a HR-t a nyakamon legyen bulletproof"*
  - Teljes körű jogi és HR védelem megteremtése: ne lehessen a jelenlegi cég (Carl Zeiss) márkanevét jogosulatlan marketing/kereskedelmi használatnak minősíteni a weboldalon.
- **Gyökérok:**
  - Bár a szakmai háttér tényként való említése személyes CV-ben elfogadott, egy kereskedelmi termék weboldalának fejlécében vagy promóciós jelvényében (badge) való szerepeltetés céges belső szabályzatba (Code of Conduct / Trademark policy) ütközhet.
- **Megoldás & Implementáció:**
  - A „Carl Zeiss” név teljes eltávolítása az `index.html`-ből, `data.js`-ből és az angol verzióból.
  - Helyette iparági standardnak megfelelő, nem védjegysértő megnevezések:
    - Top banner: *„12+ év Senior mérnöki tapasztalat nemzetközi projektekről”*
    - Hero badge: *„12+ Év Nagyvállalati Tapasztalat • Globális Mérnöki Háttér”*
    - Mentor badge: *„12+ év QA • Senior Lead”*
    - Mentor bio: *„...vezető nemzetközi tech és globális orvostechnológiai projekteken (EPAM, nemzetközi nagyvállalatok)...”*
    - Értékajánlat kártya: *„Globális nagyvállalati háttér”*
  - A konkrét munkahely és karriertörténet kizárólag Dániel személyes LinkedIn profilján látható (amelyre közvetlen link mutat), így a weboldal 100%-ban golyóálló.
- **Szabályzat frissítve:**
  - `AGENTS.md` 3. pontja és `CONTENT_RULES.md` 3. pontja kiegészítve a védjegy- és munkáltatói védelem kötelező betartásával.


### 1. Kurzuskártyák Egységes Ellenőrzőlistája (Checkmarks)
- **Felhasználói kérés / Igény:**
  - A 3., 4. és 5. kártyákon (Mentorship 500k, Corporate B2B, Consulting) hiányoztak az 1. és 2. kurzusnál látott pipás pontok.
  - A pipás pontok szépen egymás alatt helyezkedjenek el (`flex flex-col`), ne törjenek meg szavakat, és garantáltan elférjenek minden képernyőszélességen.
- **Megoldás & Implementáció:**
  - Minden kurzuskártya kapott egy tiszta, elválasztó vonallal ellátott vertikális listát (`flex flex-col gap-1.5`).
  - Emojik helyett szabványos, professzionális, flex-shrink védelemmel ellátott inline SVG ikonokat alkalmaztunk (`<polyline points="20 6 9 17 4 12"/>`, `w-3.5 h-3.5`).
  - **Kurzus tartalmi bontások:**
    - **1v1 Flagship (59k):** 4 óra 1v1 gyakorlat, strukturált promptolás, .md specifikációk & 1. működő mini-app.
    - **1v1 Deep Dive (99k):** 2 × 4 óra (8 óra 1v1), autonóm subagensek (AGENTS.md), saját üzleti app építése, runtime trace hibakeresés.
    - **Senior QA Mentorship (500k):** 100% egyéni VIP figyelem, manuális + ISTQB szemlélet, Playwright / Java keretrendszer, AI tesztelés & éles próbainterjúk, kamatmentes részletfizetés.
    - **Corporate B2B (Enterprise):** 2 nap felkészülés + 2–4 nap workshop, POM + Bitbucket Git, vállalati .md kontextus & subagensek, belső hackathon.
    - **Eseti 1:1 Konzultáció (15k):** 1 órás közvetlen képernyőmegosztás, elakadó tesztek és kódblokkok azonnali debuggolása, meglévő tesztkód audit.

### 2. Térközök & Mobilos Rátapadások Megszüntetése (Luxury Spacing)
- **Probléma:** A 2. lépés (Kiegészítő modulok) elemei és a rádiógombos/checkboxos dobozok mobilon túl szűkösek voltak, a szövegek rátapadtak a keretek tetejére és széleire (`media_1793017488216_9c7d81e4.png`).
- **Megoldás:**
  - A szülő fehér konténerek paddingje mobilon `p-5 sm:p-6 md:p-8`-ra bővült.
  - A `.calc-addon-row` belső margója `p-4 sm:p-5`-re nőtt, a checkbox `mt-0.5` és ár `pt-0.5` igazítást kapott, a cím és alcím között pedig dedikált térköz (`mb-1`) biztosítja a tiszta olvashatóságot.
  - Kártyák közötti vertikális távolság `gap-4 sm:gap-5`-re emelve.

---

## 📅 2026-10-26 — Mobilos Szélesség-túlnyúlás és Kontraszt Javítás

### 1. Horizontális Doboztúlnyúlás Javítása
- **Hibajelenség:** Mobilon (iPhone SE, Android 360px–390px) a kék kiválasztott kártya jobb széle kilógott a fehér dobozból (`media_1793016657861_ae27c64d.png`).
- **Gyökérok:**
  - Egymásba ágyazott rögzített paddingek: `<main>` `px-6` (48px) + szülő `p-6` (48px) + kártya `p-5` (40px) = 136px margó, ami 375px-es képernyőn csak ~239px helyet hagyott.
  - A flex elrendezésben a `min-w-0` hiánya miatt a cím és az ár (`59.000 Ft`) egymás mellett szétfeszítette a kártyát, így a kártya jobb széle kilógott.
- **Megoldás:**
  - `<main>` `px-4 sm:px-6` mobil margó.
  - Szülő konténerek `overflow-hidden` és `p-5 sm:p-6 md:p-8` védelemmel.
  - `.calc-card` elemekben `box-sizing: border-box`, `max-width: 100%`, `items-start justify-between gap-3 sm:gap-4` és `min-w-0 flex-1`.

### 2. Kártyák Kontrasztjának Javítása ("Halovány kártya" megszűntetése)
- **Hibajelenség:** A nem kiválasztott kártyák `border-slate-200` kerete fehér alapon fakónak, alig kivehetőnek hatott.
- **Megoldás:**
  - Nem kiválasztott kártyák kerete: `border-2 border-slate-300 bg-white hover:border-sky-400`.
  - Kiválasztott kártya: `border-2 border-sky-600 bg-sky-50 shadow-md` és kék árkiemelés (`calc-card-price`).

### 3. Címkék & Kategóriák Élénk Színezése
- **Hibajelenség:** Némely tag (pl. `badge-consulting`, `category-b2b`) semleges szürke volt.
- **Megoldás:**
  - `.badge-consulting`: türkiz/menta (`bg-teal-50 text-teal-800 border-teal-300`).
  - `.category-b2b`: meleg borostyán (`bg-amber-50 text-amber-800 border-amber-300`).
  - Minden címke megkapta a `white-space: nowrap !important; flex-shrink: 0 !important;` védelmet.

### 4. Reszponzív Fejléc és Mobil Hamburger Menü
- **Hibajelenség:** Mobilon a logó, a kapcsolat gomb, a nyelvváltó és a menü gomb egy sorban nem fért el, szétfeszítve az oldalszélességet.
- **Megoldás:**
  - A kapcsolat gomb mobilon rejtett (`hidden sm:inline-flex`), és a lenyíló mobil menüben kapott dedikált nagy gombot.
  - A fejléc mobilon kényelmesen csak a logót, a HU/EN váltót és a hamburgert jeleníti meg.

---

## 📅 2026-10-26 — Tartalmi és Üzleti Szabályok Szinkronizációja (Borbás Webdesign Szabályok)

### 1. NDA és Ügyfélvédelem
- **Szabály:** Tilos partnercégek nevét kiírni (pl. Astron).
- **Megoldás:** Minden előfordulás cserélve lett: *„Enterprise Tematika”*, *„Nagyvállalati referencia”*, *„Nagyvállalati csapatoknál bevált tematika”*.

### 2. Szóhasználati Tisztítás
- **Szabály:** Tilos a „laza” és a „sallang / sallangmentes” szavak használata.
- **Megoldás:** Cserélve a következő kifejezésekre: *intenzív*, *fókuszált*, *gyakorlatorientált*, *felesleges elmélet nélkül*.

### 3. Árstruktúra Egyértelműsítése
- **Szabály:** A csomagok fix díjasak (59k, 99k, 500k), a 15.000 Ft/óra díj kizárólag az eseti 1:1 hibaelhárításra és tanácsadásra vonatkozik.
- **Megoldás:** Dedikált 5. opcióként szerepel *„Eseti 1:1 Konzultáció / Blokk-elhárítás (1 óra)”* néven, 0 Ft rejtett költség biztosítással.

---

## 🛠️ Minőségbiztosítási Tesztleltár

Minden módosítás előtt és után a következő tesztek futnak le:
1. `npm run build` (Tailwind fordítás és `dist/` szinkronizáció).
2. `npx htmlhint "index.html" "dist/index.html"` (HTML5 szemantikai és szintaktikai ellenőrzés).
3. `mvn test -Dtest=*UiTest -f qa-automation/pom.xml`:
   - `CandidateEnrollmentFlowUiTest`: Teljes kiválasztási, nyelvváltási és jelentkezési folyamat.
   - `MainWebUiTest`: DOM ID invariánsok és árkalkuláció.
   - `MobileResponsiveUiTest`: Konténer túlnyúlás és törésmentesség tesztelése 360px, 375px, 390px, 412px, 768px és 1280px felbontásokon.
