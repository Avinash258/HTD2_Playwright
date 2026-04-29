import { test as base } from "@playwright/test";
import { LoginAction } from "../action/loginAction";
<<<<<<< HEAD
import loginData from "../testdata/login.json";
<<<<<<< HEAD
import registrationData from "../testdata/registration.json";
=======
import { getBaseUrl } from "../Utils/env";
>>>>>>> b84573f12c3aa64a87b6473efaa7bd6c7e6eb096

import { CartAction } from "../action/cartaction";import { ProductPage } from "../page/productPage";
=======
import homeData from "../testdata/home.json";
import registrationData from "../testdata/registration.json";
import { CartAction } from "../action/cartaction";
import { ProductPage } from "../page/productPage";
>>>>>>> abfa091a8f54146ccfd4205147842c6b444089bd
import { CartPage } from "../page/cartPage";
import { SearchAction } from "../action/searchAction";
import { SearchPage } from "../page/searchPage";
import { RegistrationAction } from "../action/registrationAction";
import { Productaction } from "../action/productaction";
import {getBaseUrl} from "../Utils/env"

type AppActions = {
  login: LoginAction;
  cart: CartAction;
  search: SearchAction;
  registration: RegistrationAction;
  product: Productaction;
};

type Fixtures = {
  gotoBaseUrl: void;
  appAction: AppActions;
 
};

export const test = base.extend<Fixtures>({
  gotoBaseUrl: [
    async ({ page }, use) => {
<<<<<<< HEAD
<<<<<<< HEAD
      await page.goto(registrationData.baseUrl);
=======
      await page.goto(getBaseUrl());
>>>>>>> b84573f12c3aa64a87b6473efaa7bd6c7e6eb096
=======
      await page.goto(getBaseUrl());
>>>>>>> abfa091a8f54146ccfd4205147842c6b444089bd
      await use();
    },
    { auto: true },
  ],

<<<<<<< HEAD
  appAction: async ({ page }, use: (value: AppActions) => Promise<void>) => {
=======
  appAction: async ({ page }, use) => {
>>>>>>> abfa091a8f54146ccfd4205147842c6b444089bd
    const appAction: AppActions = {
      login: new LoginAction(page),
      cart: new CartAction(new CartPage(page)),
      search: new SearchAction(new SearchPage(page)),
      registration: new RegistrationAction(page),
      product: new Productaction(page),
    };

    await use(appAction);
  },
<<<<<<< HEAD
=======

  

>>>>>>> abfa091a8f54146ccfd4205147842c6b444089bd
});

export { expect } from "@playwright/test";