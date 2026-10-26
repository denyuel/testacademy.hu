/**
 * TestAcademy - Global Site Data & Content Store
 * Architecture: Strict Data & Content Separation (Borbás Webdesign Standard)
 */
window.SITE_DATA = {
  brand: {
    name: "TestAcademy",
    taglineHu: "Senior QA Mentoring & Gyakorlati AI",
    taglineEn: "Senior QA Mentoring & Practical AI",
    missionHu: "Valódi funkcionális és tesztautomatizációs tudás a szakma sűrűjéből. 12+ év tapasztalat, egyéni 1v1 mentoring és modern AI képzések Borbás Dánieltől.",
    missionEn: "Real-world functional & test automation engineering skills. 12+ years of senior experience, 1-on-1 mentoring and modern practical AI courses by Dániel Borbás."
  },

  contact: {
    email: "daniel.borbas@testacademy.hu",
    phone: "+36 30 309 3302",
    calendarUrl: "https://calendar.app.google/ivGJS5PB8t5eTDdv6",
    hourlyRate: 15000,
    hourlyRateLabel: "15.000 Ft / óra",
    impressum: {
      provider: "Borbás Dániel e.v.",
      headquarters: "6787 Zákányszék, Tanya 424.",
      taxNumber: "52458655-1-26",
      regNumber: "57851211",
      hosting: "Cloudflare, Inc."
    }
  },

  mentor: {
    name: "Borbás Dániel",
    titleHu: "Senior QA Engineer & AI Mentor",
    titleEn: "Senior QA Engineer & AI Mentor",
    experienceYears: 12,
    badgeText: "12+ év QA • Carl Zeiss",
    leadHu: "Borbás Dániel vagyok. Több mint 12 év szoftvertesztelői és automatizálási tapasztalattal rendelkezem (EPAM, Envision Pharma Group, Carl Zeiss). A TestAcademy-nél nem unalmas diasorokat mutogatok: a célom, hogy azonnal használható, életszerű gyakorlatot adjak a kezedbe közvetlen, emberi 1v1 figyelemmel.",
    leadEn: "I'm Dániel Borbás with over 12 years of software testing and automation engineering experience (EPAM, Envision Pharma Group, Carl Zeiss). At TestAcademy, I skip outdated theoretical slides to give you hands-on, enterprise-grade skills through direct, personal 1-on-1 mentoring.",
    supportBoxTitleHu: "Gyakorlati fókusz & 1-on-1 segítség:",
    supportBoxTitleEn: "Practical focus & 1-on-1 support:",
    supportBoxTextHu: "Nem hagylak magadra a kérdésekkel. A konzultációkon a saját, élesben használt AI ágens és Vibe Coding munkafolyamatomat (Antigravity & autonóm ágensek) adom át a kezedbe, hogy te is azonnal működő szoftvereket és belső eszközöket tudj építeni.",
    supportBoxTextEn: "You won't be left alone with blockers. In our 1-on-1 sessions, I teach you my actual daily agentic Vibe Coding workflow (Antigravity & autonomous AI agents) so you can build functional tools and apps with confidence.",
    tags: [
      { hu: "12+ Év QA Tapasztalat", en: "12+ Years QA Experience" },
      { hu: "Fix 15.000 Ft / óra díj", en: "15k HUF / hr Hourly Rate" },
      { hu: "ISTQB Certified", en: "ISTQB Certified" },
      { hu: "Valódi Nagyvállalati Háttér", en: "Enterprise Background" }
    ]
  },

  packages: [
    {
      id: "ai-flagship",
      formVal: "AI-1Day",
      badgeHu: "1v1 Flagship • Vibe Coding",
      badgeEn: "1-on-1 Flagship • Vibe Coding",
      titleHu: "1v1 Vibe Coding & AI Ágens Építés",
      titleEn: "1-on-1 Vibe Coding & AI Agent Building",
      subtitleHu: "Építs szoftveres mini-appokat, .md specifikációkat és autonóm ágenseket kódolási előképzettség nélkül",
      subtitleEn: "Build mini-apps, .md specifications, and autonomous agents with zero coding experience",
      descHu: "Nem kell programozónak lenned, sem éveket töltened kódolással. A Vibe Coding lényege, hogy te vagy az ötletgazda és a 'karmester': megtanulsz precíz strukturált promptokat és .md specifikációkat írni, felépíted a saját autonóm AI ágenseidet, és működő webes mini-appokat hozol létre a saját vállalkozásodhoz vagy munkádhoz.",
      descEn: "No prior programming skills required! Vibe coding turns you into the architect and orchestrator: write precise .md specs, prompt like an engineer, build autonomous AI agents, and launch functional web mini-apps for your work or business.",
      options: [
        {
          id: "ai-1day",
          nameHu: "1 Napos Vibe Coding Alapok (4 óra 1v1)",
          nameEn: "1-Day Vibe Coding Fundamentals (4 hours 1v1)",
          price: 59000,
          formVal: "AI-1Day",
          highlightHu: "Karmester szerep, strukturált promptolás, .md specifikáció és az 1. működő mini-app",
          highlightEn: "Orchestration, structured prompting, .md specifications and your 1st functional mini-app"
        },
        {
          id: "ai-2day",
          nameHu: "2 Napos Vibe Coding & Ágens Mesterkurzus (2 × 4 óra 1v1)",
          nameEn: "2-Day Vibe Coding & Agent Masterclass (2 × 4 hours 1v1)",
          price: 99000,
          formVal: "AI-2Day",
          highlightHu: "Autonóm ágensek (AGENTS.md), subagentek és saját egyedi üzleti eszköz megépítése",
          highlightEn: "Autonomous agents (AGENTS.md), subagents and building your custom business tool"
        }
      ],
      modules: [
        {
          titleHu: "1. Modul: A Vibe Coding etosz & A karmester szerep",
          titleEn: "Module 1: The Vibe Coding ethos & Orchestrator role",
          detailHu: "Hogyan gondolkodj tervezőként ahelyett, hogy soronként kódolnál",
          detailEn: "Thinking like an architect and orchestrator instead of typing code"
        },
        {
          titleHu: "2. Modul: Strukturált Prompt Engineering & Szabályok",
          titleEn: "Module 2: Structured Prompt Engineering & Rules",
          detailHu: "Kontextus-adás, minőségi követelmények és a hallucinációk kizárása",
          detailEn: "Context control, quality constraints, and eliminating AI hallucinations"
        },
        {
          titleHu: "3. Modul: .md Architektúra & Specifikációk írása",
          titleEn: "Module 3: .md Architecture & Writing Specifications",
          detailHu: "Üzleti logika leírása specs/ és data dictionary fájlokkal",
          detailEn: "Defining business logic with modular specs/ and data dictionaries"
        },
        {
          titleHu: "4. Modul: Autonóm AI Ágensek (Subagents) létrehozása",
          titleEn: "Module 4: Building Autonomous AI Subagents",
          detailHu: "Szakosított ágensek építése (kutató, kódgeneráló, hiba-ellenőr)",
          detailEn: "Creating specialized roles (scout, coder, quality gatekeeper)"
        },
        {
          titleHu: "5. Modul: Működő saját eszköz élő megépítése",
          titleEn: "Module 5: Live building your functional tool",
          detailHu: "Egyedi kalkulátor, belső űrlap vagy mini-app felépítése és futtatása",
          detailEn: "Deploying and running your custom calculator, dashboard, or workflow app"
        }
      ]
    },

    {
      id: "mentorship-flagship",
      formVal: "Mentorship-500k",
      badgeHu: "Prémium 1v1 Mérnöki Program",
      badgeEn: "Premium 1-on-1 Engineering Program",
      titleHu: "1v1 Teljes QA Mentorship: Manual + Automation + AI",
      titleEn: "1-on-1 Full QA Mentorship: Manual + Automation + AI",
      subtitleHu: "Egyéni karrier-átképzés a nulláról a magabiztos, piacképes mérnöki tudásig",
      subtitleEn: "Individual career transformation from zero to a market-ready engineer",
      price: 500000,
      priceLabel: "500.000 Ft",
      installmentTextHu: "Kamatmentes részletfizetés kérhető (2 vagy 3 havi részletben)",
      installmentTextEn: "Interest-free installments available (2 or 3 months)",
      descHu: "Komplett, személyre szabott 1-on-1 mérnöki felkészítés Dániellel. Végigvesszük a teljes manuális tesztelési alapokat, felépítjük a modern automatizálást (Playwright és/vagy Java Selenide, POM, CI/CD), és beépítjük az AI-t a napi mérnöki munkádba.",
      descEn: "Complete tailored 1-on-1 engineering mentoring with Dániel. Covering manual testing foundations, modern test automation (Playwright and/or Java Selenide, POM, CI/CD), and integrating AI into your daily engineering routine.",
      highlights: [
        { hu: "100% egyéni 1v1 figyelem, a te tempódban", en: "100% personal 1-on-1 attention at your pace" },
        { hu: "Manuális alapok: Agilis SDLC, Jira, Test Design, SQL, Postman", en: "Manual core: Agile SDLC, Jira, Test Design, SQL, Postman" },
        { hu: "Modern automatizálás: Playwright / Java Selenide, CI/CD pipeline", en: "Automation core: Playwright / Java Selenide, CI/CD pipeline" },
        { hu: "AI eszközök a tesztelésben: hatékony promptolás, teszteset-generálás", en: "AI in QA: efficient prompting, test generation" },
        { hu: "Személyes CV & LinkedIn felkészítés és szimulált próbainterjúk", en: "Personal CV & LinkedIn audit + technical mock interviews" }
      ]
    },

    {
      id: "corporate-workshops",
      formVal: "Corporate",
      badgeHu: "Vállalati Tréningek & Műhelymunka",
      badgeEn: "Corporate Workshops & Consulting",
      titleHu: "Vállalati Playwright & AI Műhelymunkák (B2B)",
      titleEn: "Corporate Playwright & AI Engineering Workshops (B2B)",
      subtitleHu: "Gyakorlati műhelymunkák az Astron Kft.-nél bevált enterprise tematika alapján",
      subtitleEn: "Hands-on workshops based on our proven Astron enterprise agenda",
      priceLabelHu: "Egyedi árajánlat",
      priceLabelEn: "Custom Quote",
      descHu: "Céges csapatokra szabott, valós nagyvállalati (Astron) tematikán alapuló intenzív workshopok. 2 napos felkészülés + 2–4 napos gyakorlati műhelymunka: Playwright setup, Page Object Model, Git/Bitbucket folyamatok, .md specifikációk, autonóm QA subagentek és CI/CD integráció.",
      descEn: "Custom enterprise workshops based on the proven Astron curriculum. 2-day prep + 2-4 day hands-on training: Playwright setup, Page Object Model, Git/Bitbucket workflow, .md specs, autonomous QA subagents, and CI/CD pipelines.",
      tracks: [
        {
          nameHu: "1. Nap: Alapozás, POM & Git",
          nameEn: "Day 1: Foundations, POM & Git",
          badgeHu: "Környezet + Tesztlogika",
          descHu: "Playwright alapok, auto-wait, stabil szerepkör-lokátorok (getByRole), Page Object Model architektúra és Bitbucket feature ágak kezelése."
        },
        {
          nameHu: "2. Nap: AI Architektúra & CI/CD",
          nameEn: "Day 2: AI Architecture & CI/CD",
          badgeHu: "Módszertan + Pipeline",
          descHu: "Vállalati .md kontextus-kezelés (AGENTS.md, specs/), 4 autonóm QA subagent bevetése, Jenkins / Bitbucket CI futtatás és Trace Viewer hibakeresés."
        },
        {
          nameHu: "Vibe Coding Hackathon",
          nameEn: "Vibe Coding Hackathon",
          badgeHu: "Gyakorlati Eszközépítés",
          descHu: "Saját belső segédeszköz építése (HTML riportoló dashboard, tesztadat generátor, Jira bug report készítő script)."
        }
      ]
    }
  ],

  calculatorCourses: [
    {
      id: "ai-1day",
      price: 59000,
      nameHu: "1v1 Vibe Coding & Prompt Alapok (1 Nap / 4 óra)",
      nameEn: "1-on-1 Vibe Coding & Prompt Fundamentals (1 Day / 4h)",
      descHu: "Karmester szerep, strukturált prompt engineering, .md specifikációk és az 1. működő mini-app",
      descEn: "Orchestration, structured prompting, .md specs, and your 1st functional mini-app",
      badgeHu: "1v1 Flagship!",
      formVal: "AI-1Day",
      curriculum: [
        "1. A Vibe Coding etosza: a 'karmester' szerep és a prompt-vezérelt szoftverkészítés",
        "2. Strukturált Prompt Engineering: szerepkörök, korlátok és hallucináció-mentesítés",
        "3. .md Architektúra: üzleti követelmények leírása tiszta Markdown specifikációban",
        "4. Modern autonóm AI kódoló környezet beállítása (Antigravity & Agentic eszközök)",
        "5. Az első működő mini-alkalmazásod vagy belső eszközöd megépítése és futtatása"
      ]
    },
    {
      id: "ai-2day",
      price: 99000,
      nameHu: "1v1 Vibe Coding & Ágens Mesterkurzus (2 Nap / 8 óra)",
      nameEn: "1-on-1 Vibe Coding & Agent Masterclass (2 Days / 8h)",
      descHu: "Autonóm ágensek (AGENTS.md), subagent architektúra és saját üzleti mini-app megépítése 1v1",
      descEn: "Autonomous agents (AGENTS.md), subagent roles, and live building your custom business app 1-on-1",
      badgeHu: "Mély Gyakorlat",
      formVal: "AI-2Day",
      curriculum: [
        "Az 1. nap teljes Vibe Coding és .md specifikációs alapanyaga",
        "Autonóm AI Ágensek építése: AGENTS.md szabályrendszer és subagent feladatmegosztás",
        "A saját vállalkozásodra vagy munkádra szabott konkrét mini-app vagy belső eszköz lefejlesztése",
        "Hibakeresési reflexek: hogyan javíttasd ki az AI-val a runtime hibákat azonnal",
        "Kész, azonnal használható digitális eszköz vagy automatizmus átadása a kezedbe"
      ]
    },
    {
      id: "mentorship-500k",
      price: 500000,
      nameHu: "Prémium 1v1 Karrier Mentorship (Manual + Automation + AI)",
      nameEn: "Premium 1-on-1 Career Mentorship (Manual + Automation + AI)",
      descHu: "Teljes körű karrier-átképzés: manuális alapok, Playwright/Java, AI és interjúfelkészítés",
      descEn: "Comprehensive career transition: manual core, Playwright/Java, AI and interview prep",
      badgeHu: "Minden Egyben",
      formVal: "Mentorship-500k",
      curriculum: [
        "100% egyéni 1-on-1 figyelem Dániellel, saját tempódban haladva",
        "Manuális alapok: Agilis SDLC, Jira, Test Design, SQL lekérdezések, Postman",
        "Modern automatizálás: Playwright TypeScript / Java Selenide, POM struktúra",
        "AI eszközök a minőségbiztosításban: hatékony promptolás, teszteset-generálás",
        "Személyes CV & LinkedIn profilépítés + szimulált technikai interjúk",
        "Kamatmentes részletfizetés kérhető (2 vagy 3 részletben)"
      ]
    },
    {
      id: "corporate",
      price: 0,
      isCustomPrice: true,
      priceLabelHu: "Egyedi ajánlat",
      priceLabelEn: "Custom Quote",
      nameHu: "Vállalati Playwright & AI Műhelymunka (B2B Astron Tematika)",
      nameEn: "Corporate Playwright & AI Workshop (B2B Astron Agenda)",
      descHu: "Astron Informatikai Kft. referencia-tematika: 2 napos felkészülés + 2–4 napos gyakorlati oktatás",
      descEn: "Astron enterprise curriculum: 2-day prep + 2-4 day hands-on training for QA teams",
      badgeHu: "B2B Csapatoknak",
      formVal: "Corporate",
      curriculum: [
        "1. Nap: Környezet (Sandbox), Playwright alapok, getByRole lokátorok, Page Object Model (POM), Git & Bitbucket PR folyamat",
        "2. Nap: Vállalati .md kontextus-kezelés (AGENTS.md, specs/), 4 autonóm QA subagent, CI/CD Jenkins/Bitbucket pipeline futtatás",
        "Vibe Coding Hackathon: Saját belső segédeszköz építése (riport dashboard, bug-report generátor)",
        "Egyedi ütemezés a csapat mérete és a cég technológiai stacje szerint"
      ]
    },
    {
      id: "consulting",
      price: 15000,
      nameHu: "1:1 Személyes Konzultáció / Blokk-elhárítás (1 óra)",
      nameEn: "1-on-1 Personal Consultation / Blocker Solving (1 hr)",
      descHu: "Közvetlen képernyőmegosztásos hibakeresés, kód-audit és tanácsadás",
      descEn: "Direct screen-share debugging, code audit, and architecture guidance",
      badgeHu: "15.000 Ft / óra",
      formVal: "Consulting",
      curriculum: [
        "1 órás dedikált online ülés Borbás Dániellel",
        "Konkrét elakadások, elbukó tesztek, lokátor-problémák élő debuggolása",
        "Meglévő tesztautomatizációs kód audit és architektúra tanácsok",
        "Személyes karriertanácsadás és szintfelmérő"
      ]
    }
  ],

  calculatorAddons: [
    {
      id: "extra-consulting",
      price: 15000,
      nameHu: "+1 Óra Személyes 1-on-1 Konzultáció",
      nameEn: "+1 Hour Personal 1-on-1 Consultation",
      descHu: "Személyre szabott szakmai elakadások átbeszélése, karriertanácsadás",
      descEn: "Personal technical guidance, career advice, and roadblock solving"
    },
    {
      id: "cv-audit",
      price: 15000,
      nameHu: "Személyes CV & LinkedIn Audit",
      nameEn: "Personal CV & LinkedIn Audit",
      descHu: "1 órás közvetlen konzultáció: profil audit, célirányos tanácsok",
      descEn: "1-hour direct consultation: profile audit, career advice"
    },
    {
      id: "mock-interview",
      price: 15000,
      nameHu: "Szimulált Technikai Próbainterjú (HU / EN)",
      nameEn: "Simulated Technical Mock Interview (HU / EN)",
      descHu: "1 órás éles interjúhelyzet-szimuláció és közvetlen szakmai értékelés",
      descEn: "1-hour realistic mock interview and direct constructive feedback"
    }
  ],

  principles: [
    {
      number: "01",
      icon: "experience",
      titleHu: "12+ Év Nagyvállalati Rutin",
      titleEn: "12+ Years Enterprise QA",
      textHu: "Nem tankönyvekből tanítok: a Carl Zeiss-nél és multinacionális projekteken napi szinten használt, működő eszközöket adom át. Azt tanulod meg, amire a csapatoknak a valóságban szüksége van.",
      textEn: "I don't teach from theoretical textbooks: I share proven tools used daily at Carl Zeiss and enterprise environments. You learn what engineering teams actually need.",
      bullets: [
        { hu: "Carl Zeiss referencia", en: "Carl Zeiss experience" },
        { hu: "Nincs felesleges elmélet", en: "No fluff, 100% practical" },
        { hu: "Életszerű, azonnal használható tudás", en: "Realistic, actionable skills" }
      ]
    },
    {
      number: "02",
      icon: "pricing",
      titleHu: "Transzparens, Világos Árazás",
      titleEn: "Transparent, Clear Pricing",
      textHu: "Nincsenek rejtett költségek és apróbetűs trükkök. Az egyéni óradíjam fixen 15.000 Ft/óra, a csomagok pedig egyértelmű, kiszámítható áron érhetők el — kamatmentes részletfizetéssel.",
      textEn: "No hidden fees or fine-print gimmicks. Personal consulting is strictly 15k HUF / hr, with all packages offered at transparent, predictable rates and installment options.",
      bullets: [
        { hu: "Fix 15.000 Ft / óra konzultáció", en: "15k HUF / hour consultation" },
        { hu: "0 Ft rejtett költség", en: "0 hidden fees" },
        { hu: "Kamatmentes részletfizetési opció", en: "Interest-free installments" }
      ]
    },
    {
      number: "03",
      icon: "direct",
      titleHu: "Személyes Figyelem, Egyenes Beszéd",
      titleEn: "Personal Attention & Honesty",
      textHu: "Nem egy személytelen oktatóközponttal vagy értékesítőkkel tárgyalsz: közvetlenül velem egyeztetsz. A te céljaidra, kérdéseidre fókuszálunk, felesleges körök nélkül.",
      textEn: "You're not dealing with sales reps or an anonymous agency: you talk directly with me. We focus on your specific goals and questions with zero fluff.",
      bullets: [
        { hu: "Közvetlenül Dániellel beszélsz", en: "Direct communication with Dániel" },
        { hu: "Rugalmas 1-on-1 alkalmak", en: "Flexible 1-on-1 scheduling" },
        { hu: "Reális karrier- és produktivitási célok", en: "Realistic roadmap & goals" }
      ]
    }
  ],

  faq: [
    {
      qHu: "Kezdők is részt vehetnek az 1v1 képzéseken?",
      qEn: "Can absolute beginners join the 1-on-1 programs?",
      aHu: "Igen! Mind a Gyakorlati AI képzés, mind az 1v1 Mentorship az alapoktól építkezik. Nem szükséges előzetes IT vagy programozói háttér, mindent a saját tempódban, gyakorlati feladatokon keresztül tanulunk meg.",
      aEn: "Yes! Both the Practical AI training and the 1-on-1 Mentorship start from the foundations. No prior IT background is required; everything is learned at your own pace through hands-on practice."
    },
    {
      qHu: "Hogyan történik az 1v1 oktatás?",
      qEn: "How do 1-on-1 sessions work?",
      aHu: "Kényelmesen, online képernyőmegosztással (Google Meet). Minden alkalom interaktív, közvetlen és személyre szabott: nem előre felvett videókat nézel, hanem élesben beszéljük át és oldjuk meg a feladatokat.",
      aEn: "Conveniently online via screen share (Google Meet). Every session is interactive, live, and tailored: you don't watch pre-recorded videos, we work together on real tasks."
    },
    {
      qHu: "Van lehetőség kamatmentes részletfizetésre?",
      qEn: "Is there an option for interest-free installments?",
      aHu: "Igen, a prémium 500.000 Ft-os 1v1 Mentorship képzésre díjmentesen kérhető 2 vagy 3 havi kamatmentes részletfizetés. Ezt a jelentkezési űrlapon vagy az ingyenes konzultáción jelezheted.",
      aEn: "Yes, the premium 500k HUF Mentorship can be split into 2 or 3 monthly interest-free installments upon request. Simply indicate it in the form or on our free call."
    },
    {
      qHu: "Mikor és hogyan tudunk kezdeni?",
      qEn: "When and how do we start?",
      aHu: "Töltsd ki az űrlapot vagy foglalj egy ingyenes 15 perces konzultációt! 24 órán belül egyeztetünk, átbeszéljük a céljaidat és a számodra ideális időbeosztást.",
      aEn: "Fill out the form or book a free 15-minute introductory call! We'll connect within 24 hours to discuss your goals and coordinate a flexible schedule."
    }
  ]
};
