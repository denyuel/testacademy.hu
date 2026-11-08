/**
 * Target Competitors & Search Keywords Registry
 * Verticals: Education (TestAcademy) & Webdesign (Borbás Webdesign)
 */

module.exports = {
  // Saját belső referenciaértékek (Baseline)
  ourBaselines: {
    education: {
      brand: "TestAcademy",
      owner: "Borbás Dániel",
      packages: [
        { name: "1v1 Vibe Coding & AI Alapok", priceHuf: 59000, duration: "4 óra 1v1", format: "1-on-1 VIP" },
        { name: "1v1 Vibe Coding & Deep Dive", priceHuf: 99000, duration: "2x4 óra 1v1", format: "1-on-1 VIP" },
        { name: "Senior QA & Karrier Mentoring", priceHuf: 500000, duration: "Átfogó 1v1", format: "1-on-1 VIP karrierugrás" },
        { name: "Eseti Konzultáció / Blokk-elhárítás", priceHuf: 15000, duration: "1 óra", format: "1-on-1 óradíj" }
      ],
      strengths: [
        "12+ év nemzetközi nagyvállalati (EPAM, MedTech) senior háttér",
        "Kizárólag 1-on-1 mentorálás, nulla unalmas tömegképzés vagy rögzített videó",
        "Valódi Agentic workflow (Google Antigravity, AGENTS.md, subagensek)",
        "0 Ft rejtett költség, fix mindent tartalmazó csomagárak"
      ]
    },
    webdesign: {
      brand: "Borbás Webdesign",
      owner: "Borbás Dániel",
      style: "Nordic Light, prémium letisztult esztétika, zéró runtime CDN fragility",
      packages: [
        { name: "Prémium KKV Weboldal (Egyedi kód)", priceHuf: 250000, turnaround: "2-3 hét", format: "Teljes kivitelezés" },
        { name: "High-Ticket Szolgáltatói Landing Page", priceHuf: 180000, turnaround: "1-2 hét", format: "Konverzió-fókusz" },
        { name: "Webfejlesztői & Architektúra Konzultáció", priceHuf: 15000, duration: "1 óra", format: "Óradíjas tanácsadás" }
      ],
      strengths: [
        "Szigorú adat- és tartalomszétválasztás (data.js / headless struktúra)",
        "Ultra-gyors betöltés (0 külső lassító WordPress plugin vagy nehéz page builder)",
        "Közvetlen telefonos és WhatsApp elérhetőség",
        "Személyre szabott, egyedi design"
      ]
    }
  },

  // Monitorozott versenytárs célpontok
  competitors: [
    // --- 1. TESTACADEMY VERTICAL (QA & Vibe Coding / AI) ---
    {
      id: "codecool",
      name: "Codecool",
      vertical: "education",
      domain: "codecool.com",
      urls: [
        "https://codecool.com/hu/kurzusok/szoftvertesztelo/",
        "https://codecool.com/hu/arak-es-fizetes/"
      ],
      knownType: "Bootcamp / Tömegképzés",
      expectedPriceRange: "1.200.000 - 2.000.000 Ft"
    },
    {
      id: "progmasters",
      name: "PROGmasters",
      vertical: "education",
      domain: "progmasters.hu",
      urls: [
        "https://progmasters.hu/szoftvertesztelo-kepzes/",
        "https://progmasters.hu/arak/"
      ],
      knownType: "Bootcamp / Csoportos",
      expectedPriceRange: "900.000 - 1.500.000 Ft"
    },
    {
      id: "matritell",
      name: "Matritell",
      vertical: "education",
      domain: "matritell.hu",
      urls: [
        "https://matritell.hu/szoftvertesztelo-kepzes/",
        "https://matritell.hu/arak/"
      ],
      knownType: "Online tanfolyam",
      expectedPriceRange: "250.000 - 450.000 Ft"
    },
    {
      id: "masterfield",
      name: "Masterfield Oktatóközpont",
      vertical: "education",
      domain: "masterfield.hu",
      urls: [
        "https://www.masterfield.hu/hu/tanfolyamok/szoftverteszteles",
        "https://www.masterfield.hu/hu/tanfolyamok/istqb-alapszintu-szoftvertesztelo-tanfolyam"
      ],
      knownType: "Hagyományos tantermi / vállalati",
      expectedPriceRange: "300.000 - 600.000 Ft"
    },
    {
      id: "braininghub",
      name: "Braining Hub",
      vertical: "education",
      domain: "braininghub.hu",
      urls: [
        "https://braininghub.hu/junior-szoftvertesztelo-kepzes/"
      ],
      knownType: "Bootcamp",
      expectedPriceRange: "800.000 - 1.200.000 Ft"
    },

    // --- 2. BORBÁS WEBDESIGN VERTICAL (KKV Weboldal & Szabadúszó Webdesign) ---
    {
      id: "honlapszaki",
      name: "HonlapSzaki",
      vertical: "webdesign",
      domain: "honlapszaki.hu",
      urls: [
        "https://honlapszaki.hu/weboldal-keszites-arak/",
        "https://honlapszaki.hu/szolgaltatasok/"
      ],
      knownType: "Kisvállalati WordPress ügynökség",
      expectedPriceRange: "150.000 - 350.000 Ft"
    },
    {
      id: "webnode_partners",
      name: "Webrakéta / Céges Honlap Készítés",
      vertical: "webdesign",
      domain: "webraketa.hu",
      urls: [
        "https://webraketa.hu/arak/",
        "https://webraketa.hu/weboldal-keszites/"
      ],
      knownType: "Gyorsított weboldal sablon",
      expectedPriceRange: "120.000 - 280.000 Ft"
    },
    {
      id: "wunderweb",
      name: "WunderWeb Studio",
      vertical: "webdesign",
      domain: "wunderweb.hu",
      urls: [
        "https://wunderweb.hu/weboldal-keszites-arak/",
        "https://wunderweb.hu/portfolio/"
      ],
      knownType: "Egyedi & Sablon Webdesign",
      expectedPriceRange: "200.000 - 500.000 Ft"
    },
    {
      id: "kreativweb",
      name: "Kreatív Weboldal Készítés",
      vertical: "webdesign",
      domain: "kreativweb.hu",
      urls: [
        "https://kreativweb.hu/arak/",
        "https://kreativweb.hu/egyedi-weboldal-keszites/"
      ],
      knownType: "Szabadúszó / Kis stúdió",
      expectedPriceRange: "180.000 - 400.000 Ft"
    },
    {
      id: "webshark",
      name: "Webshark Digitális Ügynökség",
      vertical: "webdesign",
      domain: "webshark.hu",
      urls: [
        "https://webshark.hu/szolgaltatasok/weboldal-keszites/"
      ],
      knownType: "Klasszikus Ügynökség (Nagyobb költségvetés)",
      expectedPriceRange: "500.000 - 1.500.000 Ft"
    }
  ]
};
