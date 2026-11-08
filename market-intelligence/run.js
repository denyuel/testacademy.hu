/**
 * Master Runner for Market Intelligence & Competitor Hunter Engine (MICHE)
 * Executes competitor scraping, runs gap analysis, and generates reports.
 */

const fs = require("fs");
const path = require("path");
const { ourBaselines, competitors } = require("./src/targets");
const { fetchPage } = require("./src/fetcher");
const { analyzeCompetitorPage } = require("./src/extractor");
const { analyzeVertical } = require("./src/analyzer");
const { generateMarkdownReport, generateHtmlDashboard } = require("./src/reporter");

async function main() {
  const timestamp = new Date();
  const dateTag = timestamp.toISOString().split("T")[0];

  console.log("=================================================================");
  console.log(" 🛰️  MARKET INTELLIGENCE & COMPETITOR HUNTER ENGINE (MICHE)      ");
  console.log(`     Időpont: ${timestamp.toLocaleString("hu-HU")}`);
  console.log("=================================================================\n");

  const reportsDir = path.join(__dirname, "reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const scrapedData = {
    education: [],
    webdesign: []
  };

  console.log(`[1/3] 🎯 Versenytársak bejárása és valós adatok bányászata...`);
  console.log(`      Összesen ${competitors.length} versenytárs profil ütemezve.\n`);

  for (const comp of competitors) {
    process.stdout.write(`  ⏳ Lekérés: [${comp.vertical.toUpperCase()}] ${comp.name} (${comp.domain})... `);
    
    // Minden versenytársnál megpróbáljuk az első elérhető URL-t
    let pageResult = null;
    for (const url of comp.urls) {
      pageResult = await fetchPage(url, 8000);
      if (pageResult.success) break;
    }

    if (pageResult && pageResult.success) {
      console.log(`✅ OK (${pageResult.textLength} karakter)`);
    } else {
      console.log(`⚠️ Sikertelen (${pageResult ? pageResult.error : "Nincs válasz"})`);
    }

    const analyzed = analyzeCompetitorPage(comp, pageResult);
    scrapedData[comp.vertical].push(analyzed);

    // Kíméletes várakozás kérések között (Rate limiting / politeness)
    await new Promise(r => setTimeout(r, 600));
  }

  console.log(`\n[2/3] 🧠 Stratégiai Rés-Elemzés és Lost-Lead Diagnosztika futtatása...`);
  const eduAnalysis = analyzeVertical("education", scrapedData.education);
  const webAnalysis = analyzeVertical("webdesign", scrapedData.webdesign);

  console.log(`      ✓ TestAcademy ármátrix: ${eduAnalysis.marketPricing.formattedMin} - ${eduAnalysis.marketPricing.formattedMax}`);
  console.log(`      ✓ Borbás Webdesign ármátrix: ${webAnalysis.marketPricing.formattedMin} - ${webAnalysis.marketPricing.formattedMax}`);
  console.log(`      ✓ 4 Elvesztett Lead gyökérok-elemzés legenerálva.`);

  console.log(`\n[3/3] 📑 Jelentések és Vizuális Dashboard előállítása...`);
  const mdReport = generateMarkdownReport(eduAnalysis, webAnalysis, timestamp);
  const htmlDashboard = generateHtmlDashboard(eduAnalysis, webAnalysis, timestamp);

  const mdDatedPath = path.join(reportsDir, `weekly_intelligence_${dateTag}.md`);
  const mdLatestPath = path.join(reportsDir, `latest.md`);
  const htmlPath = path.join(reportsDir, `dashboard.html`);

  fs.writeFileSync(mdDatedPath, mdReport, "utf-8");
  fs.writeFileSync(mdLatestPath, mdReport, "utf-8");
  fs.writeFileSync(htmlPath, htmlDashboard, "utf-8");

  console.log(`\n=================================================================`);
  console.log(` 🎉 SIKERES FUTÁS! A heti elemzés elkészült:`);
  console.log(`    📄 Markdown riport: ${mdLatestPath}`);
  console.log(`    📊 Vizuális Dashboard: ${htmlPath}`);
  console.log(`=================================================================\n`);
}

main().catch(err => {
  console.error("❌ Kritikus hiba a futás során:", err);
  process.exit(1);
});
