# TestAcademy Enterprise QA Automation Framework

Welcome to the `qa-automation` module. This directory serves as a reference architecture and a portfolio showcase for a modern, full-stack Quality Assurance framework covering API, UI, Database, and CI/CD integrations.

## 🏗 Architecture & Tech Stack

This framework is built upon the following industry-standard pillars:
- **Language:** Java 17
- **Build Tool:** Maven
- **Runner:** JUnit 5 (Jupiter)
- **API Testing:** REST Assured (with Jackson POJO data mapping)
- **UI Testing:** Selenide (Page Object Model design, Headless execution)
- **Database/Backend:** JDBC with H2 In-Memory SQL Database
- **CI/CD:** GitHub Actions

---

## 📖 Study Guide & Implementation Details (Interview Cheat Sheet)

### 1. API Testing (`hu.testacademy.api`)
**The Goal:** Validating the data transit layers without needing a slow graphical interface.
- **REST Assured:** We use this library to simulate frontend HTTP requests (GET, POST, PUT, DELETE).
- **POJOs (Plain Old Java Objects):** Instead of writing messy, raw JSON strings, we created Java classes (`AccountPojo.java`). The Jackson library automatically serializes these classes into clean JSON payloads. This ensures type safety and scalability when the API grows.

### 2. UI Automation (`hu.testacademy.ui`)
**The Goal:** Simulating real end-user interaction on the DOM level.
- **Selenide:** A brilliant wrapper for Selenium WebDriver that handles timeouts, scrolling, and browser lifecycles automatically.
- **Page Object Model (POM):** We strictly separated the physical web elements (`HomePage.java`) from the actual test assertions (`MainWebUiTest.java`). If the frontend developers change an ID, we only need to update the locator in the POM file once, rather than fixing 50 broken tests.
- **JavaScript Click:** We implemented `ClickOptions.usingJavaScript()` to bypass "sticky" navigation bars and overlapping DOM elements that typically cause `ElementClickInterceptedException`.

### 3. Database E2E Integration (`hu.testacademy.db`)
**The Goal:** Verifying that data actually persists on the deepest level.
- **H2 In-Memory DB:** We spin up a volatile SQL database directly in RAM during test execution to prevent reliance on external, flaky testing environments.
- **JDBC (`DatabaseManager.java`):** By opening a native connection, we fire direct SQL statements (`SELECT`, `UPDATE`) to assert that our API requests *actually* altered the balances natively in the database rows.

### 4. CI/CD Pipeline (`.github/workflows/qa-tests.yml`)
**The Goal:** Automating the execution of the entire matrix in the cloud.
- **GitHub Actions:** Configured to trigger on every push to the repository.
- **Background Processes:** The pipeline boots up a fresh Linux runner, installs Java 17 and Node.js, launches a background Mock API server (`npx json-server &`) so the terminal doesn't freeze, and then executes the full Maven test suite automatically. Any failures prevent code from being merged.

---
## 🚀 How to Run Locally

If you clone this repository, you can execute the test matrix via the terminal:

1. Open the terminal inside the `qa-automation` directory.
2. (Optional) Run the local mock server for the API tests: 
   `npx json-server --watch bank-db.json --port 3000`
3. Execute the Maven lifecycle:
   ```bash
   mvn clean test
   ```
