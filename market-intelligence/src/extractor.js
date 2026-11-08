/**
 * Competitor Data Extractor & Heuristic Analyzer
 * Parses prices, packages, contact types, guarantees, and tech stack from text
 */

function extractPrices(text) {
  if (!text) return [];

  // Magyar árazási minták (pl: 250.000 Ft, 15 000 Ft/óra, 1.200.000,- Ft, 59 000 HUF)
  const priceRegex = /(\d{1,3}(?:[.\s]\d{3})+)\s*(?:,-\s*)?(Ft|HUF|forint)(?:\s*\/\s*(óra|honap|hó|alkalom))?/gi;
  
  const matches = [...text.matchAll(priceRegex)];
  const foundPrices = [];

  for (const match of matches) {
    const rawNumber = match[1].replace(/[.\s]/g, "");
    const numericValue = parseInt(rawNumber, 10);
    const unit = match[3] ? match[3].toLowerCase() : "összesen";

    // Reális szűrés: 5.000 Ft és 5.000.000 Ft közötti értékek
    if (numericValue >= 5000 && numericValue <= 5000000) {
      foundPrices.push({
        raw: match[0].trim(),
        value: numericValue,
        unit: unit
      });
    }
  }

  // Duplikációk szűrése és rendezés ár szerint növekvő sorrendbe
  const unique = [];
  const seen = new Set();
  for (const p of foundPrices) {
    const key = `${p.value}_${p.unit}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(p);
    }
  }

  return unique.sort((a, b) => a.value - b.value);
}

function extractTechStack(text) {
  const keywords = [
    "WordPress", "Elementor", "WooCommerce", "Shopify", "Webflow", "Wix",
    "React", "Vue", "Next.js", "Tailwind", "Bootstrap",
    "Java", "Python", "Playwright", "Selenium", "Selenide", "Cypress",
    "ISTQB", "Postman", "Rest Assured", "Jira", "Git", "GitHub Actions",
    "AI", "ChatGPT", "Claude", "Antigravity", "Cursor", "Vibe Coding"
  ];

  const found = [];
  for (const kw of keywords) {
    const regex = new RegExp(`\\b${kw}\\b`, "i");
    if (regex.test(text)) {
      found.push(kw);
    }
  }
  return found;
}

function extractGuarantees(text) {
  const guaranteePatterns = [
    /pénzvisszafizetés[a-záéíóöőúüű\s]*/gi,
    /elégedettségi garancia/gi,
    /100%\s*(?:-os)?\s*garancia/gi,
    /garantált állás/gi,
    /garanciát vállalunk/gi,
    /ingyenes próba/gi,
    /kockázatmentes/gi
  ];

  const found = [];
  for (const pat of guaranteePatterns) {
    const m = text.match(pat);
    if (m) {
      found.push(...m.map(s => s.trim().toLowerCase()));
    }
  }
  return [...new Set(found)];
}

function extractConversionChannels(text) {
  return {
    hasPhone: /(\+36|06)[\s\-\/]?(?:20|30|70|1)[\s\-\/]?\d{3}[\s\-\/]?\d{4}/.test(text),
    hasCalendar: /(calendly|calendar\.app\.google|időpontfoglalás|naptár)/i.test(text),
    hasDirectWhatsApp: /(whatsapp)/i.test(text),
    hasCalculator: /(kalkulátor|árkalkulátor|kiszámolom)/i.test(text),
    hasFreeConsultation: /(ingyenes konzultáció|ingyenes ajánlat|díjmentes konzultáció|15 perces egyeztetés)/i.test(text)
  };
}

function extractPackageClues(text) {
  const clues = [];
  const lines = text.split("\n");

  for (const line of lines) {
    if (line.length > 5 && line.length < 90) {
      if (/(csomag|kurzus|tanfolyam|mentoring|csomagár|alap|prémium|pro|egyedi|kezdő|haladó)/i.test(line)) {
        if (/(\d{1,3}[.\s]\d{3}|ft|ár|díj)/i.test(line)) {
          clues.push(line.trim());
        }
      }
    }
  }
  return clues.slice(0, 8);
}

/**
 * Normalizes scraped data into unified intelligence structure
 */
function analyzeCompetitorPage(competitor, pageResult) {
  if (!pageResult || !pageResult.success) {
    return {
      competitorId: competitor.id,
      name: competitor.name,
      vertical: competitor.vertical,
      domain: competitor.domain,
      status: "unreachable",
      error: pageResult ? pageResult.error : "No data",
      prices: [],
      techStack: [],
      guarantees: [],
      conversionChannels: {},
      packageClues: []
    };
  }

  const text = pageResult.textContent;
  const prices = extractPrices(text);
  const techStack = extractTechStack(text);
  const guarantees = extractGuarantees(text);
  const conversionChannels = extractConversionChannels(text);
  const packageClues = extractPackageClues(text);

  return {
    competitorId: competitor.id,
    name: competitor.name,
    vertical: competitor.vertical,
    domain: competitor.domain,
    status: "active",
    title: pageResult.meta.title,
    metaDescription: pageResult.meta.metaDescription,
    h1s: pageResult.meta.h1s,
    prices,
    minPrice: prices.length > 0 ? prices[0].value : null,
    maxPrice: prices.length > 0 ? prices[prices.length - 1].value : null,
    techStack,
    guarantees,
    conversionChannels,
    packageClues
  };
}

module.exports = {
  extractPrices,
  extractTechStack,
  extractGuarantees,
  extractConversionChannels,
  extractPackageClues,
  analyzeCompetitorPage
};
