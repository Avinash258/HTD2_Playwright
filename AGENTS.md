# HTDPlaywright2 AI Agent Instructions

This repository is a Playwright Test + TypeScript automation framework for web UI testing.
Use this file to understand the framework structure, common conventions, and the primary commands to run.

## What this project is
- Playwright Test framework with layered design: `src/page` → `src/action` → `tests`.
- Shared fixture setup in `src/fixture/fixture.ts`.
- Test data stored in JSON under `src/testdata`.
- `playwright.config.ts` uses `dotenv` and `BASE_URL` for environment-based base URL configuration.
- Existing review-focused agents are defined in `.github/agents/playwright-review.agent.md` and `.github/agents/code-review.agent.md`.

## Primary files and directories
- `package.json` — scripts and dependencies.
- `playwright.config.ts` — test directory, reporter, parallel execution, `baseURL`, trace/video/screenshot policies.
- `README.md` — project overview and execution commands.
- `src/page` — page object locators and page-level methods.
- `src/action` — reusable business actions built on top of page objects.
- `src/fixture` — Playwright fixtures and shared test setup.
- `tests` — feature-level spec files under categories like `Login`, `Search`, `Cart`.
- `src/testdata` — JSON fixtures and input data.

## Recommended agent behavior
- Prefer existing patterns over introducing new architecture.
- Keep page selectors in `src/page`, business flow in `src/action`, and assertions in `tests/**`.
- Preserve test isolation and fixture lifecycle (`beforeEach`, `afterEach`) in `tests`.
- Use `BASE_URL` via `.env` when making URLs configurable.
- Prefer `npx playwright install` if browser dependencies are missing before running tests.

## Run and validate
- Install dependencies: `npm install`
- Install Playwright browsers: `npx playwright install`
- Run all tests: `npm test`
- Run headed tests: `npm run test:headed`
- Open UI mode: `npm run test:ui`
- Run debug mode: `npm run test:debug`
- View reports: `npm run report`

## Notes for code changes
- Avoid leaving `test.only` in test files.
- Maintain the existing feature-folder organization under `tests`.
- When adding or refining locators, prefer accessible selectors such as `getByRole` and the project's enhanced `getByText` convention used in this repo.
- Keep test data in `src/testdata` and avoid hardcoding credentials or page details in spec files.
- When changing config, respect the `BASE_URL` override from environment variables.

## References
- Project docs: `README.md`
- Review agents: `.github/agents/playwright-review.agent.md`, `.github/agents/code-review.agent.md`
