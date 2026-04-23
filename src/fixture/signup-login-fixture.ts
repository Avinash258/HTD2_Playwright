import { test as base } from "@playwright/test";
import { SignupLoginAction } from "../action/signupLoginAction";

type AppsignupLoginActions = {
  signupLogin: SignupLoginAction;
};

type Fixtures = {
  appsignupLoginAction: AppsignupLoginActions;
};

export const test = base.extend<Fixtures>({
  appsignupLoginAction: async ({ page }, use) => {
    await use({
      signupLogin: new SignupLoginAction(page),
    });
  },
});

export { expect } from "@playwright/test";