import { test as base } from "@playwright/test";
import { SignupLoginAction } from "../action/signupLoginAction";

type AppActions = {
  signupLogin: SignupLoginAction;
};

type Fixtures = {
  appAction: AppActions;
};

export const test = base.extend<Fixtures>({
  appAction: async ({ page }, use) => {
    await use({
      signupLogin: new SignupLoginAction(page),
    });
  },
});

export { expect } from "@playwright/test";