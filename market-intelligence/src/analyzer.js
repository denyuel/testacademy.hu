/**
 * Strategic Market Gap & Lost-Lead Diagnostic Engine
 * Analyzes market data against TestAcademy and Borbás Webdesign baselines
 */

const { ourBaselines } = require("./targets");

function formatHuf(val) {
  if (!val) return "N/A";
  return new Intl.NumberFormat("hu-HU").format(val) + " Ft";
}

/**
 * Runs deep comparative analysis for a given vertical
 */
function analyzeVertical(verticalKey, competitorResults) {
  const baseline = ourBaselines[verticalKey];
  const activeCompetitors = competitorResults.filter(c => c.status === "active");

  // Összegyűjtött piaci árak
  const allExtractedPrices = [];
  for (const c of activeCompetitors) {
    for (const p of c.prices) {
      allExtractedPrices.push(p.value);
    }
  }

  allExtractedPrices.sort((a, b) => a - b);

  const marketMin = allExtractedPrices.length > 0 ? allExtractedPrices[0] : 0;
  const marketMax = allExtractedPrices.length > 0 ? allExtractedPrices[allExtractedPrices.length - 1] : 0;
  const marketMedian = allExtractedPrices.length > 0 
    ? allExtractedPrices[Math.floor(allExtractedPrices.length / 2)] 
    : 0;

  // Technológiai elterjedtség a versenytársaknál
  const techFrequency = {};
  for (const c of activeCompetitors) {
    for (const t of c.techStack) {
      techFrequency[t] = (techFrequency[t] || 0) + 1;
    }
  }

  // Konverziós eszközök jelenléte
  const conversionStats = {
    phoneCount: activeCompetitors.filter(c => c.conversionChannels.hasPhone).length,
    calendarCount: activeCompetitors.filter(c => c.conversionChannels.hasCalendar).length,
    calculatorCount: activeCompetitors.filter(c => c.conversionChannels.hasCalculator).length,
    guaranteeCount: activeCompetitors.filter(c => c.guarantees.length > 0).length
  };

  // Specifikus diagnosztika az adott üzletágra
  let strategicFindings = [];
  let websiteActionItems = [];
  let marketingHooks = [];
  let lostLeadDiagnosis = null;

  if (verticalKey === "education") {
    // --- TESTACADEMY STRATÉGIA ---
    strategicFindings = [
      `A bootcamp versenytársak (Codecool, PROGmasters) 900.000 Ft és 1.800.000 Ft közötti árakon dolgoznak, de 15-25 fős csoportokban, kötött menetrenddel.`,
      `A te 59.000 Ft-os és 99.000 Ft-os Vibe Coding csomagod radikális ár-érték arányú belépési pont a piacon. A piac nem tud 1-on-1 privát képzést adni ennyiért.`,
      `A Masterfield és a hagyományos cégek az ISTQB tanfolyamokat 300.000–500.000 Ft-ért adják 3-4 napos unalmas diasorokkal. A te 500.000 Ft-os átfogó mentoring csomagod ennek a közvetlen prémium alternatívája modern Java/Selenide/Playwright és AI kiegészítéssel.`,
      `A 15.000 Ft / órás egyéni konzultációs díjad az alsó sávban mozog a piacon (a minőségi IT mentorok 20.000–35.000 Ft/óra között számláznak).`
    ];

    websiteActionItems = [
      `Hangsúlyozd a „Privát 1v1 vs. 20 fős Tömeg-Bootcamp” kontraszttáblázatot a weboldalon! (A diákok 80%-a elveszik a bootcampeken).`,
      `Írd ki a 0 Ft rejtett költséget és a rugalmas időpont-egyeztetést (szemben a bootcampek merev 9-17 órás vagy hétvégi kötelezettségével).`,
      `Az 59k és 99k Ft-os csomagnál emeld ki az elkészülő „Saját Működő Mini-App”-ot, mint kézzelfogható kimenetet.`
    ];

    marketingHooks = [
      `„Eleged van a milliós bootcampekből, ahol 25 fős csoportokban nézel unalmas diasorokat? Tanulj 1v1-ben egy 12+ éves senior mérnöktől, saját tempóban.”`,
      `„Vibe Coding: Hogyan építs saját szoftvert kódolás nélkül, autonóm ágensekkel és Antigravity-vel 1 nap alatt?”`,
      `„Miért dobnál ki 1.5 milliót szoftvertesztelő képzésre, ha privát mentorral feleannyi idő alatt jutsz el a junior szintről a valódi állásinterjúig?”`
    ];

  } else if (verticalKey === "webdesign") {
    // --- BORBÁS WEBDESIGN & LOST-LEAD DIAGNÓZIS ---
    strategicFindings = [
      `A piac két végletre szakad: az olcsó, sablonos WordPress/Elementor szabadúszók (120k - 180k Ft) és a digitális ügynökségek (500k - 1.5M Ft) közé.`,
      `A te 180k - 250k Ft-os árszinted a tökéletes „Arany Középút”: prémium egyedi kód, professzionális Nordic Light design, ügynökségi minőség, de elérhető KKV áron.`
    ];

    lostLeadDiagnosis = {
      title: "Miért vesztettél el 4 leadet a versenytársakhoz?",
      reasons: [
        {
          cause: "1. A „WordPress-Félelem” & Szerkeszthetőség Hiánya",
          explanation: "Az átlagos KKV ügyfél nem ért a programozáshoz, de azt tudja, hogy a barátja unokaöccse WordPress-t csinált neki. Ha azt hallja, hogy „egyedi kódolt weboldal”, megijed, hogy: „Hogyan fogom átírni a telefonszámomat vagy az árakat? Mindig fizetnem kell a fejlesztőnek?”",
          fix: "A weboldalon és az ajánlatban kötelezően ki kell emelni: „Könnyen frissíthető adat-struktúra (data.js / headless admin): a szövegek és árak módosítása 1 perc, vagy vállaljuk az azonnali díjmentes átírást!”"
        },
        {
          cause: "2. Átláthatatlan / Homályos Induló Ár vs. Fix Csomagár",
          explanation: "A versenytársak kiraknak egy nagy táblát: „Alap weboldal: 149.000 Ft”. Az ügyfél azonnal tudja, belefér-e a zsebébe. Ha nálad nem lát azonnal fix, érthető csomagot, inkább elmegy ahhoz, aki kiírta az árat.",
          fix: "Kirakni 3 darab kristálytiszta csomagkártyát fix forintösszeggel (pl. 149.000 Ft Landing Page / 249.000 Ft Vállalkozói Weboldal / Egyedi Ajánlat)."
        },
        {
          cause: "3. Bizalom & Esettanulmányok (Social Proof rés)",
          explanation: "A versenytársak kitesznek 10-15 logót, referenciát, vagy ügyfélvéleményt. Egy induló vállalkozás fél elbukni 200.000 Ft-ot egyetlen emberre, ha nem lát legalább 3-4 konkrét, működő referenciát.",
          fix: "Azonnal ki kell tenni a már meglévő sikeres munkákat (pl. djroxtaz, TestAcademy, korábbi projektek) élő linkkel, képernyőképpel és rövid ügyfél-sztorival."
        },
        {
          cause: "4. Reakcióidő és „Azonnali Hívás” hiánya",
          explanation: "Ha az érdeklődő ajánlatot kér 3 helyről, az nyeri a munkát, aki 2 órán belül felhívja telefonon. Ha a lead emailben vár 1-2 napot, közben egy másik webes már lebeszélt vele egy Zoomot.",
          fix: "Bevezetni a „2 órán belüli visszahívási garanciát” és a közvetlen 1-kattintásos WhatsApp / Telefon gombot a mobil nézetben."
        }
      ]
    };

    websiteActionItems = [
      `Tegyél ki egy 3-oszlopos fix csomagárazási táblázatot (149k / 249k / Egyedi), 0 Ft rejtett költséggel.`,
      `Helyezz el egy „Mit tartalmaz a csomag?” pipálós listát: Reszponzív mobil nézet, Google Térkép, Kapcsolati űrlap, Alap SEO, SSL tanúsítvány, Szupergyors betöltés.`,
      `Adj hozzá egy 100%-os Elégedettségi Garanciát: „Ha a tervek bemutatása után nem vagy elégedett az iránnyal, 0 Ft-ot fizetsz!” (A versenytársak nem mernek ilyet vállalni).`,
      `Helyezd el a meglévő referenciák (pl. djroxtaz.hu, korábbi portfólió) nagy felbontású vizuális mockupjait.`
    ];

    marketingHooks = [
      `„Weboldalt szeretnél a vállalkozásodnak, de eleged van a hetekig húzódó, lassú ügynökségekből és a gagyi, széteső WordPress sablonokból? Kérj prémium, egyedi tervezésű weboldalt 14 napos átadással!”`,
      `„Mennyibe kerül egy modern céges honlap 2026-ban? Nem kell hetekig árajánlatra várnod: nézd meg a fix, rejtett költségektől mentes csomagjainkat!”`,
      `„Miért lassú a WordPress weboldalad? Mert 30 felesleges bővítmény fut a háttérben. Egyedi kóddal a honlapod 0.3 másodperc alatt tölt be, ami azonnal növeli a Google helyezésedet!”`
    ];
  }

  return {
    verticalKey,
    baseline,
    competitorCount: activeCompetitors.length,
    competitors: activeCompetitors,
    marketPricing: {
      min: marketMin,
      max: marketMax,
      median: marketMedian,
      formattedMin: formatHuf(marketMin),
      formattedMax: formatHuf(marketMax),
      formattedMedian: formatHuf(marketMedian)
    },
    conversionStats,
    strategicFindings,
    lostLeadDiagnosis,
    websiteActionItems,
    marketingHooks
  };
}

module.exports = {
  analyzeVertical
};
