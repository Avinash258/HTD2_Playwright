import { test as base } from "@playwright/test";
import { LoginAction } from "../action/loginAction";
import { CartAction } from "../action/cartaction";
import { CartPage } from "../page/cartPage";
import { SearchAction } from "../action/searchAction";
import { SearchPage } from "../page/searchPage";
import { RegistrationAction } from "../action/registrationAction";

import { HomePageActions } from "../action/HomePageAction";


import { Productaction } from "../action/productaction";
import { getBaseUrl } from "../Utils/env";


type AppActions = {
  login: LoginAction;
  cart: CartAction;
  search: SearchAction;
  registration: RegistrationAction;
  home:HomePageActions;
  product: Productaction;
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

  appAction: async ({ page }, use) => {
    const appAction: AppActions = {
      login: new LoginAction(page),
      cart: new CartAction(new CartPage(page)),
      search: new SearchAction(new SearchPage(page)),
      registration: new RegistrationAction(page),
      home:new HomePageActions(page),
      product: new Productaction(page),
    };
    await use(appAction);
  },

  

});

export { expect } from "@playwright/test";
