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
    supportBoxTextHu: "Nem hagylak magadra a kérdésekkel. A konzultációkon gyakorlati tanácsokkal, valós szakmai példákkal és a legmodernebb eszközökkel (AI eszközök, automatizálási stratégiák) segítem a közvetlen fejlődésedet.",
    supportBoxTextEn: "You won't be left alone with blockers. In our sessions, we focus on practical guidance, real industry scenarios, and modern QA tools to accelerate your progress.",
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
      badgeHu: "Új Flagship Termék • Kódolás Nélkül!",
      badgeEn: "New Flagship • Zero Coding!",
      titleHu: "Gyakorlati AI Képzés Hétköznapi Embereknek",
      titleEn: "Practical AI Training for Everyday Professionals",
      subtitleHu: "ChatGPT, Claude & No-Code AI eszközök a mindennapi munkában és életben",
      subtitleEn: "ChatGPT, Claude & No-Code AI tools in everyday work and life",
      descHu: "Nem kell programozónak lenned! Ez a kurzus azoknak szól, akik még sosem vagy csak alapszinten használtak AI-t, de szeretnének azonnal heti 5-10 órát megspórolni szövegírásban, e-mailekben, táblázatkezelésben és rutin feladatokban.",
      descEn: "No coding skills required! Designed for beginners who want to leverage ChatGPT, Claude, and practical AI tools to save 5-10 hours weekly on writing, emails, spreadsheets, and repetitive tasks.",
      options: [
        {
          id: "ai-1day",
          nameHu: "1 Napos Laza Workshop (4 óra 1v1)",
          nameEn: "1-Day Casual Workshop (4 hours 1v1)",
          price: 59000,
          formVal: "AI-1Day",
          highlightHu: "4 órás intenzív személyes gyakorlat másolható prompt sablonokkal",
          highlightEn: "4-hour intensive personal workshop with plug-and-play templates"
        },
        {
          id: "ai-2day",
          nameHu: "2 Napos Bővített Képzés (2 × 3-4 óra 1v1)",
          nameEn: "2-Day Extended Training (2 × 3-4 hours 1v1)",
          price: 99000,
          formVal: "AI-2Day",
          highlightHu: "Mélyebb gyakorlat + saját munkafolyamatok és táblázatok átültetése AI-ba",
          highlightEn: "In-depth practice + integrating your actual workflows and sheets"
        }
      ],
      modules: [
        {
          titleHu: "1. Modul: A hatékony kérdezés művészete",
          titleEn: "Module 1: The art of effective prompting",
          detailHu: "Promptolás laikusoknak, azonnal használható másolható sablonokkal",
          detailEn: "Prompt engineering for beginners with plug-and-play templates"
        },
        {
          titleHu: "2. Modul: Szövegírás & Üzleti kommunikáció",
          titleEn: "Module 2: Writing & Business communication",
          detailHu: "Hivatalos levelek, e-mailek, marketing posztok és összefoglalók 2 perc alatt",
          detailEn: "Emails, letters, marketing copy and executive summaries in 2 mins"
        },
        {
          titleHu: "3. Modul: Dokumentumok és Excel egyszerűen",
          titleEn: "Module 3: Documents & Spreadsheets made easy",
          detailHu: "Több tízoldalas PDF-ek áttekintése, Excel formulák írása kódolás nélkül",
          detailEn: "Summarizing huge PDFs, formula generation without manual struggle"
        },
        {
          titleHu: "4. Modul: Kreatív vizualitás & Prezentációk",
          titleEn: "Module 4: Visuals & Presentations",
          detailHu: "AI képek, grafikai elemek és gyors prezentáció-vázlatok készítése",
          detailEn: "Generating stunning images, graphics, and slide outlines fast"
        },
        {
          titleHu: "5. Modul: Időspórolási szokások & Napi rutin",
          titleEn: "Module 5: Daily time-saving habits",
          detailHu: "Hogyan építsd be az AI-t a telefonodba és a napi munkafolyamataidba",
          detailEn: "Integrating AI into your mobile and daily desktop routine"
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
      titleHu: "Vállalati QA & AI Műhelymunkák (B2B)",
      titleEn: "Corporate QA & AI Engineering Workshops (B2B)",
      subtitleHu: "Személyre szabott, intenzív gyakorlati képzés mérnökcsapatoknak",
      subtitleEn: "Customized, intensive hands-on workshops for engineering teams",
      priceLabelHu: "Egyedi árajánlat",
      priceLabelEn: "Custom Quote",
      descHu: "Valós vállalati igényekre szabott intenzív workshopok (pl. 2 napos felkészülés + 2–4 napos gyakorlati oktatás mérnökcsapatoknak: manuálisból automatizálásba léptetés, AI integráció, CI/CD pipeline).",
      descEn: "Custom enterprise workshops tailored to your team's stack (e.g. 2-day prep + 2-4 day hands-on workshops: transition from manual to automation, AI tools, CI/CD).",
      tracks: [
        {
          nameHu: "QA Bridge Workshop",
          nameEn: "QA Bridge Workshop",
          badgeHu: "Bestseller",
          descHu: "Manuális tesztelők átvezetése az automatizálásba (Java/Playwright) és AI asszisztencia."
        },
        {
          nameHu: "AI Expert Deep Dive",
          nameEn: "AI Expert Deep Dive",
          badgeHu: "Haladóknak",
          descHu: "Tapasztalt csapatoknak: prompt engineering tesztelésre, automatizált tesztgenerálás."
        },
        {
          nameHu: "Enterprise Custom",
          nameEn: "Enterprise Custom",
          badgeHu: "Egyedi",
          descHu: "Cégspecifikus infrastruktúra audit, tesztautomatizációs stratégia és architektúra."
        }
      ]
    }
  ],

  calculatorCourses: [
    {
      id: "ai-1day",
      price: 59000,
      nameHu: "Gyakorlati AI Képzés (1 Napos Laza Workshop - 4 óra)",
      nameEn: "Practical AI Training (1-Day Casual Workshop - 4 hrs)",
      descHu: "ChatGPT, Claude, táblázatok, e-mailek és rutin feladatok 1v1",
      descEn: "ChatGPT, Claude, spreadsheets, emails & daily routine 1-on-1",
      badgeHu: "Új Flagship!",
      formVal: "AI-1Day"
    },
    {
      id: "ai-2day",
      price: 99000,
      nameHu: "Gyakorlati AI Képzés (2 Napos Bővített Képzés - 8 óra)",
      nameEn: "Practical AI Training (2-Day Extended - 8 hrs)",
      descHu: "Mélyebb gyakorlat, saját munkafolyamatok és sablonok átültetése 1v1",
      descEn: "In-depth practice, integrating your actual sheets and workflows 1-on-1",
      badgeHu: "Mély Gyakorlat",
      formVal: "AI-2Day"
    },
    {
      id: "mentorship-500k",
      price: 500000,
      nameHu: "Prémium 1v1 Mentorship (Manual + Automation + AI)",
      nameEn: "Premium 1-on-1 Mentorship (Manual + Automation + AI)",
      descHu: "Teljes körű karrier-átképzés: manuális alapok, Playwright/Java, AI és interjúfelkészítés",
      descEn: "Comprehensive career transition: manual core, Playwright/Java, AI and interview prep",
      badgeHu: "Minden Egyben",
      formVal: "Mentorship-500k"
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
