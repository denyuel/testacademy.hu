# TestAcademy Enterprise QA Automation Framework

This directory contains the reference architecture for the TestAcademy Quality Assurance framework, providing End-to-End coverage across API, UI, Database, and CI/CD layers.

## 🏗 Architecture & Tech Stack

- **Language:** Java 17
- **Build Tool:** Maven
- **Runner:** JUnit 5 (Jupiter)
- **API Testing:** REST Assured (coupled with Jackson POJO data mapping)
- **UI Testing:** Selenide (Page Object Model design, Headless execution)
- **Database/Backend:** JDBC with H2 In-Memory SQL Database
- **CI/CD:** GitHub Actions
- **Reporting:** Allure Framework via AspectJ Weaver

---

## 📖 Implementation Details

### 1. API Testing (`hu.testacademy.api`)
- **REST Assured:** Utilized to strictly validate network and transit layers via HTTP interactions.
- **POJO Serialization:** Direct JSON strings are deprecated in favor of `AccountPojo.java` structures. Jackson seamlessly maps these objects to JSON payloads, guaranteeing type safety and contract integrity.
- **Data-Driven & Boundary Testing:** Leverages JUnit 5 Parameterized tests (`@CsvSource`) to aggressively evaluate Edge Constraints (BVA) and negative API behaviors.
- **Contract Testing (JSON Schema):** Enforces strict dependency adherence by validating API responses against pre-defined JSON Schemas, guaranteeing immediate failure if upstream contracts are breached.

### 2. UI Automation (`hu.testacademy.ui`)
- **Selenide:** A lightweight wrapper over Selenium WebDriver managing automated wait states and browser lifecycles.
- **Page Object Model (POM):** Physical DOM locators (`HomePage.java`) are segregated from behavioral assertions (`MainWebUiTest.java`), ensuring robust maintainability.
- **Soft Assertions:** Leverages AssertJ `SoftAssertions` to execute cross-domain validation sweeps, aggregating multiple UI discrepancies without halting the execution loop.
- **Action Overrides:** `ClickOptions.usingJavaScript()` is actively leveraged to bypass sticky `z-index` overlays that trigger `ElementClickInterceptedException`.

### 3. Database E2E Integration (`hu.testacademy.db`)
- **H2 In-Memory DB:** A volatile SQLite-equivalent database invoked in RAM specifically for isolated test execution.
- **JDBC Implementation (`DatabaseManager.java`):** Direct SQL commands (`SELECT`, `UPDATE`) validate that frontend manipulation natively mutates logical storage rows.

### 4. CI/CD Pipeline (`.github/workflows/qa-tests.yml`)
- **GitHub Actions:** Cloud pipeline triggering on all modifications to branch structures.
- **Background Forking:** The pipeline provisions an Ubuntu node, instantiates the Mock API layer (`npx json-server` & custom `middleware.js`) asynchronously, and triggers the matrix before capturing exit codes.

---
## 🚀 Execution

To trigger the matrix locally:

1. Navigate into the `qa-automation` module.
2. Spin up the test environment mock server:
   `npx json-server --watch bank-db.json --port 3000`
3. Trigger the build and test lifecycle:
   ```bash
   mvn clean test
   ```
4. Generate analytics dashboard (requires valid Allure installation):
   ```bash
   mvn allure:serve
   ```
