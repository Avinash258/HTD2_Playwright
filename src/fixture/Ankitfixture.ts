
import { test as base } from "@playwright/test";
import { LoginAction } from "../action/loginAction";
import loginData from "../testdata/login.json";

import { CartAction } from "../action/cartaction";
import { CartPage } from "../page/cartPage";
import { SearchAction } from "../action/searchAction";
import { SearchPage } from "../page/searchPage";
import { RegistrationAction } from "../action/registrationAction";
import { AddToCartAction } from "../action/AddToCartAction";

import registration from "../testdata/registration.json";
type AppActions = {
   registration: RegistrationAction;
  addToCart: AddToCartAction;
};
type Fixtures = {
  gotoBaseUrl: void;
  appAction: AppActions;
};

export const test = base.extend<Fixtures>({
  gotoBaseUrl: [
    async ({ page }, use) => {
      await page.goto(registration.baseUrl);
      await use();
      },
    { auto: true },
  ],


 appAction: async ({ page }, use: (value: AppActions) => Promise<void>) => {
    const appAction: AppActions = {
    
      addToCart: new AddToCartAction(page), 
    };
    await use(appAction);
  },

  
});

export { expect } from "@playwright/test";
