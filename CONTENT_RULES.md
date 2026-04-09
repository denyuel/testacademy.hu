# AI Assistant Rules and Protected Content (TestAcademy)

**IMPORTANT:** This document contains the stable, fixed content and structure of the `TestAcademy` website. As an AI assistant, it is **STRICTLY FORBIDDEN** to modify, delete, or accidentally rewrite the text, prices, contact information, and fundamental business logic in it without the EXPLICIT and CLEAR request of the user (Daniel).

Ensure that if coding or design modifications are requested, these content elements remain completely untouched!

---

## 1. Core Business Data and Contact Info (PROTECTED)
- **Name:** TestAcademy | Senior QA Mentoring & AI Automation
- **Email:** testacademyhungary@gmail.com
- **Phone:** +36 30 309 3302
- **Form Action (Application):** `https://formspree.io/f/mreygyry`
- **Copyright:** &copy; 2026 TestAcademy

---

## 2. Main Headlines and Slogans (PROTECTED)
- **HU:** 10 év Lead tapasztalat • AI-támogatott tananyag
- **EN:** 10 Years Lead Experience • AI-Powered Syllabus
- **Main Headline HU:** Valódi funkcionális tudás.
- **Main Headline EN:** Real functional skills.
- **Subheadline HU:** Hétvégi képzések Playwright és TypeScript alapokon. Tanulj a szakma sűrűjéből.
- **Subheadline EN:** Weekend courses with Playwright & TypeScript. Learn from the professionals.

---

## 3. Courses and Pricing (PROTECTED)

These courses and their prices are fixed:

### Courses (Weekend Training)
1. **Junior Manual**
   - **Price:** 149.000 Ft
   - **Duration:** 4 Weekends
   - **Description:** Testing fundamentals, Jira, SQL, and real projects. Not just theory: you gain routine here.

2. **Playwright Pro**
   - **Price:** 299.000 Ft
   - **Duration:** 8 Weekends
   - **Description:** Modern automation with Playwright + TypeScript. Complex architecture building and CI/CD.

3. **Zero to Hero QA Masterclass (Combined)**
   - **Price:** 399.000 Ft
   - **Duration:** 12 Weekends
   - **Description:** The complete material of Junior Manual and Playwright Pro at a discounted price. Full transformation from manual basics to senior-level automation.

### Personal Growth / Mentoring
1. **Consulting & Coaching**
   - **Price:** 15.000 Ft / hr
   - **Type:** 1-on-1 sessions, specific technical blockers, career path planning.

2. **Interview Ready Package (Most Popular)**
   - **Price:** 99.000 Ft
   - **Includes:** CV & LinkedIn Audit, Mock Interviews (HU/EN), Soft Skill Boost, Interviewing Techniques.

### Corporate Training / B2B
1. **AI Expert Deep Dive**
   - **Price:** 199.000 Ft / day
   - **Duration:** 1 Day
   - **Target Audience:** Experienced teams.

2. **QA Bridge Workshop (Bestseller)**
   - **Price:** 199.000 Ft / day
   - **Duration:** 2 Days
   - **Target Audience:** Transitioning manual testers into automation.

3. **Enterprise / Custom**
   - **Price:** Custom Quote
   - **Type:** Multi-day extended curriculum, tailored to unique needs.

---

## 4. Technical and Structural Principles (STATIC)

1. **Script-Based Bilingualism:**
   - Bilingual support (HU/EN) is resolved using client-side JavaScript via CSS classes (`.lang-hu`, `.lang-en`, `.lang-hidden`).
   - When adding any new text, it is mandatory to create both the `lang-hu` and its corresponding `lang-en` (`lang-hidden`) spans.
   - Do not replace this system with complex packages (e.g., i18n) without an explicit request!

2. **Styling / UI Framework:**
   - The project uses **Tailwind CSS** via CDN (`<script src="https://cdn.tailwindcss.com"></script>`). Do not use external, complex build tools (e.g., webpack, vite) unless strictly instructed.

3. **Form and Select Options:**
   - The form dropdown (select) lists are populated from a global JavaScript object named `translations` based on the selected language!
   - If a product price/name changes, it **MUST** be updated in the `translations` data array within the `<script>` block.

4. **Location and Remote Strategy:**
   - The courses are primarily **Remote (Online)** focused due to better scalability, lower overhead, and screen-sharing efficiency.
   - In-person location can be **Budapest** upon request (if minimum capacity is met), Szeged only in special, unique cases. Thus, always emphasize the Remote option on the web.

---

## 5. Coding Standards (STATIC)
1. **ONLY ENGLISH CODE RULE:**
   - All source code (Java classes, YAML configurations, HTML attributes apart from text content, Pom.xml, etc.), including names, methods, commit messages, logging, and **ALL IN-CODE COMMENTS AND MARKDOWN DOCUMENTATION**, must be written EXCLUSIVELY in English. Programming is international. The only exception is the Hungarian textual content displayed on the website targeted at the Hungarian audience.

---
**SUMMARY:** Before modifying the contents of any file, read this `.md` file first to refresh your memory. Ensure that the business contents above remain consistent!
