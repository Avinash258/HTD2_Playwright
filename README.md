# HTD Playwright Framework

A scalable UI automation framework built with Playwright Test and TypeScript, organized with Page Object Model plus action and fixture layers.

## Tech Stack

- Playwright Test
- TypeScript
- Node.js

## Framework Design

This project follows a layered design to keep tests readable and maintainable:

- tests: Test specs grouped by feature (Login, Search, Cart)
- src/page: Page objects containing locators and page-level methods
- src/action: Reusable business actions built on top of page objects
- src/fixture: Shared fixtures and test setup logic
- src/testdata: JSON test inputs
- src/Utils: Utility helpers

## Project Structure

```text
.
|-- playwright.config.ts
|-- package.json
|-- src
|   |-- action
|   |-- fixture
|   |-- page
|   |-- testdata
|   `-- Utils
`-- tests
    |-- Login
    |-- Search
    `-- Cart
```

## Prerequisites

- Node.js 18 or later
- npm

## Installation

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers:

```bash
npx playwright install
```

## Run Tests

Run all tests:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

Open Playwright UI mode:

```bash
npm run test:ui
```

Run in debug mode:

```bash
npm run test:debug
```

## Reports

Generate and open HTML report:

```bash
npm run report
```

Playwright stores report and artifacts in:

- playwright-report
- test-results

## Configuration

Main config file: playwright.config.ts

Current highlights:

- test directory: tests
- execution: fully parallel enabled
- reporter: html
- browser project: chromium
- trace collection: on-first-retry

## Test Data

Place and maintain test inputs in src/testdata (for example login.json and search.json).

## Best Practices Used

- Feature-wise test organization
- Separation of page locators and business flows
- Reusable action methods
- Centralized fixtures for setup and teardown
- Data-driven approach with JSON test data

## Useful Commands

```bash
npx playwright test tests/Login/loginTest.spec.ts
npx playwright test tests/Search/searchTest.spec.ts
npx playwright test tests/Cart/cartTest.spec.ts
```

## Future Enhancements

- Enable cross-browser projects (Firefox, WebKit)
- Add CI pipeline integration
- Add environment-based execution and secrets handling
- Add API mock and network stubbing strategy

## Environment Configuration

This repository now supports environment-based test configuration via a `.env` file.

- Create or update `.env` in the project root
- Use `BASE_URL` to override the default application URL
- Example file: `.env.example`

```bash
BASE_URL=https://www.saucedemo.com/
```
