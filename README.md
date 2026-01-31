# Swift Translator — Test Suite

Comprehensive Playwright-based end-to-end (E2E) automated test suite for the **Swift Translator** web application.
This repository validates core translation workflows, error handling, and UI stability across multiple browsers while producing rich debugging artifacts and human-readable reports.

---

## 📌 Project Status

**Status:** Active

* Automated Playwright tests implemented
* HTML reports generated under `playwright-report/`
* Raw execution artifacts stored under `test-results/`

---

## 📖 Table of Contents

* Project Overview
* Key Objectives
* Technology Stack
* Quick Start
* Project Structure
* Running Tests
* Test Reporting & Debugging
* Configuration & Environment Variables
* CI/CD Integration
* Best Practices & Conventions
* Troubleshooting
* Future Enhancements
* Maintainers & Contact
* License

---

## 📘 Project Overview

This repository contains an **end-to-end automated test harness** for the Swift Translator web application, implemented using **Playwright**.
The test suite focuses on validating:

* Translation accuracy
* Core user interactions via the UI
* Error handling and negative scenarios
* Cross-browser compatibility (Chromium, Firefox, WebKit)

The suite is designed to be **reproducible**, **scalable**, and **CI-ready**, producing both high-level HTML reports and low-level artifacts such as screenshots, videos, and traces.

---

## 🎯 Key Objectives

* Validate critical user flows exposed through the web interface
* Test both **positive** and **negative** translation scenarios
* Detect UI regressions across supported browsers
* Provide detailed debugging artifacts for failed test cases
* Enable seamless local and CI-based execution

---

## 🛠 Technology Stack

* **Node.js** (16+ recommended)
* **Playwright** (E2E browser automation)
* **JavaScript**
* **npm** (dependency management)

---

## 🚀 Quick Start

### Prerequisites

* Node.js (LTS recommended)
* npm (comes with Node.js)

### Install dependencies and browsers

```bash
npm ci
npx playwright install
```

### Run all tests

```bash
npx playwright test
```

### Open HTML report

```bash
npx playwright show-report
```

---

## 📁 Project Structure

```
.
├── package.json                # Project scripts and dependencies
├── playwright.config.js        # Global Playwright configuration
├── tests/
│   ├── swift-translator.spec.js   # Main test specification
│   ├── data/
│   │   ├── positiveData.js        # Valid input datasets
│   │   └── negativeData.js        # Invalid/edge case datasets
│   └── models/
│       └── TranslatorPage.js      # Page Object Model (POM)
├── playwright-report/          # Generated HTML reports
└── test-results/               # Screenshots, videos, traces
```

---

## ▶️ Running Tests (Detailed)

### Run a specific test file

```bash
npx playwright test tests/swift-translator.spec.js
```

### Run tests in headed mode (UI visible)

```bash
npx playwright test --headed --project=chromium
```

### Capture traces and videos for failures

```bash
npx playwright test --trace on --video retain-on-failure
```

### Filter tests by keyword

```bash
npx playwright test -g "positive"
```

---

## 📊 Test Reporting & Debugging

* **HTML Report**

  ```bash
  npx playwright show-report
  ```

  Opens `playwright-report/index.html`

* **Traces**
  Enable using `--trace on` and inspect via Playwright Trace Viewer

* **Screenshots & Videos**
  Stored under `test-results/` and linked directly from the HTML report

These artifacts allow step-by-step replay of failed tests for efficient debugging.

---

## ⚙️ Configuration & Environment Variables

All Playwright settings (timeouts, retries, reporters, browsers) are centralized in:

```
playwright.config.js
```

### Recommended environment variables

| Variable   | Description                                  |
| ---------- | -------------------------------------------- |
| `BASE_URL` | Base URL of the Swift Translator application |
| `API_KEY`  | Optional auth or API token                   |

Example (Windows):

```bash
set BASE_URL=http://localhost:3000
npx playwright test
```

---

## 🔁 CI/CD Integration

This test suite is fully compatible with CI pipelines.

### Recommended CI steps

* Install dependencies
* Install Playwright browsers
* Run tests in headless mode
* Upload reports as build artifacts

### Example: GitHub Actions

```yaml
- name: Run Playwright Tests
  run: |
    npm ci
    npx playwright install --with-deps
    npx playwright test --reporter=html
```

Persist the following directories as CI artifacts:

* `playwright-report/`
* `test-results/`

---

## ✅ Best Practices & Conventions

* Tests are **data-driven** using fixtures in `tests/data/`
* Page Object Model (POM) is used to improve maintainability
* One primary assertion per test where possible
* Descriptive test titles for easy filtering and reporting

---

## 🧯 Troubleshooting

* **Browser launch failures (Windows):**
  Ensure `npx playwright install` completed successfully

* **Flaky tests:**
  Enable retries or capture traces:

  ```bash
  npx playwright test --retries 1 --trace on
  ```

* **CI resource limits:**
  Reduce workers:

  ```bash
  npx playwright test --workers=2
  ```

---

## 🔮 Future Enhancements

* Add `CONTRIBUTING.md` with coding standards
* Introduce GitHub Actions workflow file
* Add custom npm scripts (`test:ci`, `install:browsers`)
* Integrate test coverage or accessibility testing

---

## 👥 Maintainers & Contact

**Project Owner / Test Author:**

* Name: *Update with student name*
* Email: *Update with institutional email*

For issues or enhancements, please open a GitHub issue.

---

## 📄 License

This project is licensed under the **MIT License** (or update as required).
See the `LICENSE` file for more details.

---

If you want, I can also:

* Tailor this **exactly to your SLIIT assignment rubric**
* Add a **marks-oriented “Academic Justification” section**
* Create a **GitHub Actions YAML file**
* Shorten it if your lecturer wants a **2–3 page README**

