import { test as base } from "@playwright/test";
import { LoginAction } from "../action/loginAction";
import loginData from "../testdata/login.json";
import { getBaseUrl } from "../Utils/env";

import { CartAction } from "../action/cartaction";
import { CartPage } from "../page/cartPage";
import { SearchAction } from "../action/searchAction";
import { SearchPage } from "../page/searchPage";
import { RegistrationAction } from "../action/registrationAction";

type AppActions = {
  login: LoginAction;
  cart: CartAction;
  search: SearchAction;
  registration: RegistrationAction;
};
type Fixtures = {
  gotoBaseUrl: void;
  appAction: AppActions;
};

export const test = base.extend<Fixtures>({
  gotoBaseUrl: [
    async ({ page }, use) => {
      await page.goto(getBaseUrl());
      await use();
      },
    { auto: true },
  ],


 appAction: async ({ page }, use: (value: AppActions) => Promise<void>) => {
    const appAction: AppActions = {
      login: new LoginAction(page),
      cart: new CartAction(new CartPage(page)),
      search: new SearchAction(new SearchPage(page)),
      registration: new RegistrationAction(page),
    };
    await use(appAction);
  },

  
});

export { expect } from "@playwright/test";
