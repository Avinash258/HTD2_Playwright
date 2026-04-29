import { test as base, expect } from "@playwright/test";
import testcase from "../testdata/testcase.json";
import { TestCasesActions } from "../action/testcaseaction";
import { ParaAction } from "../action/ParaRegAction";
import para from "../testdata/para.json";

type AppActions = {
  testCases: TestCasesActions;
  paraAction: ParaAction;
};
type Fixtures = {
  gotoBaseUrl: void;
  appAction: AppActions;
};
export const test = base.extend<Fixtures>({
  gotoBaseUrl: [async ({ page }, use) => {
    await page.goto(para.baseUrl);
    await use();
  }, { auto: true }],
  appAction: async ({ page }, use) => {
    const appAction: AppActions = {
      testCases: new TestCasesActions(page),
      paraAction: new ParaAction(page),
    };
    await use(appAction);
  },
});
export { expect };
