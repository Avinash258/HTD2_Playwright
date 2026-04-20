import { test as base } from "@playwright/test";
import { LoginAction } from "../action/loginAction";
import homeData from "../testdata/home.json";
import { CartAction } from "../action/cartaction";
import { CartPage } from "../page/cartPage";
import { SearchAction } from "../action/searchAction";
import { SearchPage } from "../page/searchPage";
import { RegistrationAction } from "../action/registrationAction";
import { HomeAction } from "../action/homeAction";
import { HomePage } from "../page/homePage";
import registrationData from "../testdata/registration.json";

type AppActions = {
  login: LoginAction;
  cart: CartAction;
  search: SearchAction;
  registration: RegistrationAction;
};

type Fixtures = {
  baseURL: string;
  appAction: AppActions;
};

export const test = base.extend<Fixtures>({
  baseURL: async ({}, use) => {
    await use(registrationData.baseUrl);
  },

  appAction: async ({ page, baseURL }, use) => {

    await page.goto(baseURL); 

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