import { test as base, expect } from "@playwright/test";
import SignupLoginData from "../testdata/signupLogin.json";
import { SignupLoginPage } from "../page/signupLoginPage";
import { SignupLoginAction } from "../action/signupLoginAction";

type AppActions = {
  signupLogin: SignupLoginAction;
};

type Fixtures = {
  gotoBaseUrl: void;
  appAction: AppActions;
};

export const test = base.extend<Fixtures>({

  gotoBaseUrl: [
    async ({ page }, use) => {
      await page.goto(SignupLoginData.baseUrl);
      await use();
    },
    { auto: true },
  ],

  appAction: async ({ page }, use) => {
    const signupLoginPage = new SignupLoginPage(page);

    const appAction: AppActions = {
      signupLogin: new SignupLoginAction(signupLoginPage),
    };

    await use(appAction);
  },

});

export { expect } from "@playwright/test";