import { test as base, expect } from "@playwright/test";
import testcase from "../testdata/testcase.json";
import { TestCasesActions } from "../action/testcaseaction";

type AppActions = {
  testCases: TestCasesActions;
};
type Fixtures = {
  gotoBaseUrl: void;
  appAction: AppActions;
};
export const test = base.extend<Fixtures>({
  gotoBaseUrl: async ({ page }, use) => {
    await page.goto(testcase.baseUrl);
    await use();
  },
  appAction: async ({ page }, use) => {
    const appAction: AppActions = {
      testCases: new TestCasesActions(page),
    };
    await use(appAction);
  },
});
export { expect };