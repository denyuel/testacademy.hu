/**
 * Markdown & Interactive HTML Dashboard Reporter
 * Generates executive briefing for TestAcademy & Borbás Webdesign
 */

const fs = require("fs");
const path = require("path");

function generateMarkdownReport(educationAnalysis, webdesignAnalysis, timestamp) {
  const dateStr = new Date(timestamp).toLocaleDateString("hu-HU", {
    year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit"
  });

  return `# 🛰️ Heti Piaci Elemzés & Versenytárs Hírszerzési Jelentés
*Készült: ${dateStr} | Motor: Market Intelligence & Competitor Hunter Engine (MICHE)*

---

## 🧭 Vezetői Összefoglaló (Executive Summary)

Ez a heti automatizált riport a **TestAcademy** (QA & Vibe Coding mentoring) és a **Borbás Webdesign** (KKV egyedi webfejlesztés) releváns versenytársainak adatait, árait, csomagjait és konverziós taktikáit elemzi.

---

# 🎓 I. RÉSZ: TESTACADEMY PIACI POZICIONÁLÁS
*Célcsoport: Szoftvertesztelés, Vibe Coding, AI Ágensek & 1v1 Karrierugrás*

### 📊 Piaci Ármátrix vs. TestAcademy
* **Feltárt Piaci Ársáv:** ${educationAnalysis.marketPricing.formattedMin} – ${educationAnalysis.marketPricing.formattedMax}
* **Piaci Medián Ár:** ${educationAnalysis.marketPricing.formattedMedian}
* **TestAcademy Pozíció:**
  - **1v1 Vibe Coding (4 óra):** 59.000 Ft *(Piacon egyedülálló belépő kategória)*
  - **1v1 Vibe Coding Deep Dive (2x4 óra):** 99.000 Ft *(Prémium gyakorlati képzés)*
  - **Senior QA & Karrier Mentoring (Átfogó 1v1):** 500.000 Ft *(A milliós tömeg-bootcampek 1v1 alternatívája)*
  - **1v1 Eseti Konzultáció:** 15.000 Ft / óra

### 🔍 Főbb Stratégiai Megállapítások:
${educationAnalysis.strategicFindings.map(f => `- ${f}`).join("\n")}

### 🛠️ Azonnali Teendők a TestAcademy Honlapon:
${educationAnalysis.websiteActionItems.map(item => `- [ ] ${item}`).join("\n")}

### 📢 Tesztelendő Heti Marketing Hookok (Ads & Social):
${educationAnalysis.marketingHooks.map((h, i) => `${i + 1}. ${h}`).join("\n\n")}

---

# 💻 II. RÉSZ: BORBÁS WEBDESIGN & LOST-LEAD DIAGNOSZTIKA
*Fókusz: Miért ment el 4 lead a versenytársakhoz, és hogyan fordítsuk meg?*

### 📊 Piaci Ármátrix vs. Borbás Webdesign
* **Feltárt Piaci Webdesign Ársáv:** ${webdesignAnalysis.marketPricing.formattedMin} – ${webdesignAnalysis.marketPricing.formattedMax}
* **Piaci Medián:** ${webdesignAnalysis.marketPricing.formattedMedian}
* **Borbás Webdesign Célcsomagok:** 180.000 Ft (Landing Page) | 250.000 Ft (Komplett Céges Weboldal)

${webdesignAnalysis.lostLeadDiagnosis ? `
### 🚨 A 4 Elvesztett Lead Diagnózisa (Root Cause Analysis):
${webdesignAnalysis.lostLeadDiagnosis.reasons.map(r => `
#### ${r.cause}
- **A valódi probléma:** ${r.explanation}
- **Azonnali orvosság (Fix):** **${r.fix}**
`).join("")}
` : ""}

### 🛠️ Teendők a Borbás Webdesign Honlapon a Konverzió Növelésére:
${webdesignAnalysis.websiteActionItems.map(item => `- [ ] ${item}`).join("\n")}

### 📢 Heti Marketing & Hirdetési Hookok (Borbás Webdesign):
${webdesignAnalysis.marketingHooks.map((h, i) => `${i + 1}. ${h}`).join("\n\n")}

---

## 📋 Vizsgált Versenytársak Listája (${educationAnalysis.competitors.length + webdesignAnalysis.competitors.length} aktív oldal)
${[...educationAnalysis.competitors, ...webdesignAnalysis.competitors].map(c => `
- **${c.name}** (\`${c.domain}\` | ${c.vertical})
  - Fő cím: *${c.title || "N/A"}*
  - Detektált árak: ${c.prices.length > 0 ? c.prices.map(p => p.raw).join(", ") : "Egyedi árajánlat / nincs kiírva"}
  - Csatornák: ${c.conversionChannels.hasPhone ? "📞 Telefon" : ""} ${c.conversionChannels.hasCalendar ? "📅 Naptár" : ""} ${c.conversionChannels.hasCalculator ? "🧮 Kalkulátor" : ""}
`).join("\n")}
`;
}

function generateHtmlDashboard(educationAnalysis, webdesignAnalysis, timestamp) {
  const dateStr = new Date(timestamp).toLocaleDateString("hu-HU", {
    year: "numeric", month: "long", day: "numeric"
  });

  return `<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Market Intelligence Dashboard — TestAcademy & Borbás Webdesign</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #faf9f6;
      --card-bg: #ffffff;
      --border: #e2e8f0;
      --text-main: #0f172a;
      --text-muted: #64748b;
      --gold: #d4af37;
      --gold-dark: #b89628;
      --blue: #2563eb;
      --green: #10b981;
      --red: #ef4444;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: var(--bg);
      color: var(--text-main);
      line-height: 1.6;
      padding: 40px 20px;
    }
    .container { max-width: 1200px; margin: 0 auto; }
    header {
      background: #0f172a;
      color: white;
      padding: 40px;
      border-radius: 24px;
      margin-bottom: 40px;
      position: relative;
      overflow: hidden;
    }
    header h1 {
      font-family: 'Playfair Display', serif;
      font-size: 2.4rem;
      margin-bottom: 8px;
      color: #ffffff;
    }
    header p { color: #94a3b8; font-size: 1.05rem; }
    .badge {
      display: inline-block;
      background: rgba(212, 175, 55, 0.2);
      color: #fce79a;
      padding: 6px 14px;
      border-radius: 50px;
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 16px;
      border: 1px solid rgba(212, 175, 55, 0.4);
    }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 24px; margin-bottom: 40px; }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
    }
    .card h2 {
      font-size: 1.4rem;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .metric-row {
      display: flex;
      justify-content: space-between;
      padding: 12px 0;
      border-bottom: 1px solid var(--border);
    }
    .metric-row:last-child { border-bottom: none; }
    .metric-label { color: var(--text-muted); font-size: 0.95rem; }
    .metric-value { font-weight: 700; }
    .tag {
      background: #f1f5f9;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 600;
    }
    .tag-gold { background: #fef9c3; color: #854d0e; }
    .alert-box {
      background: #fef2f2;
      border: 1px solid #fecaca;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
    }
    .alert-box h3 { color: #991b1b; font-size: 1.15rem; margin-bottom: 8px; }
    .alert-box p { color: #7f1d1d; font-size: 0.95rem; margin-bottom: 12px; }
    .solution-box {
      background: #ecfdf5;
      border-left: 4px solid var(--green);
      padding: 12px 16px;
      border-radius: 8px;
      color: #065f46;
      font-size: 0.9rem;
      font-weight: 600;
    }
    ul.check-list { list-style: none; }
    ul.check-list li {
      position: relative;
      padding-left: 28px;
      margin-bottom: 12px;
      font-size: 0.95rem;
    }
    ul.check-list li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--green);
      font-weight: 800;
    }
    .hook-card {
      background: #f8fafc;
      border-left: 4px solid var(--blue);
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 14px;
      font-style: italic;
      color: #334155;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="badge">Heti Piaci Elemzés • ${dateStr}</div>
      <h1>Competitor Hunter & Positioning Engine</h1>
      <p>TestAcademy (Vibe Coding & QA) + Borbás Webdesign (KKV Egyedi Weboldal) stratégiai dashboard</p>
    </header>

    <div class="grid">
      <!-- TestAcademy Kártya -->
      <div class="card">
        <h2>🎓 TestAcademy Pozíció</h2>
        <div class="metric-row">
          <span class="metric-label">1v1 Vibe Coding (4h):</span>
          <span class="metric-value tag tag-gold">59.000 Ft (Fix)</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">1v1 Deep Dive (8h):</span>
          <span class="metric-value tag tag-gold">99.000 Ft (Fix)</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Senior VIP Mentoring:</span>
          <span class="metric-value tag">500.000 Ft (1v1)</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Bootcamp Piac (Csoportos):</span>
          <span class="metric-value" style="color: var(--red);">900k – 1.8M Ft</span>
        </div>
        <h3 style="margin-top: 24px; font-size: 1.05rem; margin-bottom: 12px;">Weboldal Teendők:</h3>
        <ul class="check-list">
          ${educationAnalysis.websiteActionItems.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <!-- Borbás Webdesign Kártya -->
      <div class="card">
        <h2>💻 Borbás Webdesign Pozíció</h2>
        <div class="metric-row">
          <span class="metric-label">Ajánlott Landing Page Csomag:</span>
          <span class="metric-value tag tag-gold">149.000 – 180.000 Ft</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Ajánlott Komplett Céges Web:</span>
          <span class="metric-value tag tag-gold">249.000 Ft (Fix)</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Szabadúszó WordPress Sablonok:</span>
          <span class="metric-value">120.000 – 180.000 Ft</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Ügynökségi Árak:</span>
          <span class="metric-value">500.000 – 1.500.000 Ft</span>
        </div>
        <h3 style="margin-top: 24px; font-size: 1.05rem; margin-bottom: 12px;">Weboldal Teendők:</h3>
        <ul class="check-list">
          ${webdesignAnalysis.websiteActionItems.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </div>

    <!-- Lost Lead Szekció -->
    ${webdesignAnalysis.lostLeadDiagnosis ? `
    <h2 style="font-family: 'Playfair Display', serif; font-size: 1.8rem; margin-bottom: 20px;">
      🚨 A 4 Elvesztett Lead Diagnózisa (Borbás Webdesign)
    </h2>
    <div class="grid">
      ${webdesignAnalysis.lostLeadDiagnosis.reasons.map(r => `
      <div class="alert-box">
        <h3>${r.cause}</h3>
        <p>${r.explanation}</p>
        <div class="solution-box">
          Megoldás: ${r.fix}
        </div>
      </div>
      `).join("")}
    </div>
    ` : ""}

    <!-- Marketing Hookok Szekció -->
    <h2 style="font-family: 'Playfair Display', serif; font-size: 1.8rem; margin: 30px 0 20px;">
      📢 Heti Marketing & Hirdetési Hookok (Azonnal tesztelhető)
    </h2>
    <div class="grid">
      <div class="card">
        <h3 style="margin-bottom: 14px; color: var(--blue);">TestAcademy Hirdetés Szövegek:</h3>
        ${educationAnalysis.marketingHooks.map(h => `<div class="hook-card">"${h}"</div>`).join("")}
      </div>
      <div class="card">
        <h3 style="margin-bottom: 14px; color: var(--gold-dark);">Borbás Webdesign Hirdetés Szövegek:</h3>
        ${webdesignAnalysis.marketingHooks.map(h => `<div class="hook-card">"${h}"</div>`).join("")}
      </div>
    </div>
  </div>
</body>
</html>
`;
}

module.exports = {
  generateMarkdownReport,
  generateHtmlDashboard
};
