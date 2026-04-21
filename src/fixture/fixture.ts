<<<<<<< HEAD
import { test as base, expect } from "@playwright/test";
import SignupLoginData from "../testdata/signupLogin.json";
import { SignupLoginPage } from "../page/signupLoginPage";
import { SignupLoginAction } from "../action/signupLoginAction";

type AppActions = {
  signupLogin: SignupLoginAction;
=======
import { test as base } from "@playwright/test";
import { LoginAction } from "../action/loginAction";
import loginData from "../testdata/login.json";
import registrationData from "../testdata/registration.json";

import { CartAction } from "../action/cartaction";import { ProductPage } from "../page/productPage";
import { CartPage } from "../page/cartPage";
import { SearchAction } from "../action/searchAction";
import { SearchPage } from "../page/searchPage";
import { RegistrationAction } from "../action/registrationAction";
import { Productaction } from "../action/productAction";

type AppActions = {
  login: LoginAction;
  cart: CartAction;
  search: SearchAction;
  registration: RegistrationAction;
  product: Productaction;
>>>>>>> develop
};

type Fixtures = {
  gotoBaseUrl: void;
  appAction: AppActions;
};

export const test = base.extend<Fixtures>({

  gotoBaseUrl: [
    async ({ page }, use) => {
<<<<<<< HEAD
      await page.goto(SignupLoginData.baseUrl);
=======
      await page.goto(registrationData.baseUrl);
>>>>>>> develop
      await use();
    },
    { auto: true },
  ],

  appAction: async ({ page }, use) => {
    const signupLoginPage = new SignupLoginPage(page);

    const appAction: AppActions = {
<<<<<<< HEAD
      signupLogin: new SignupLoginAction(signupLoginPage),
=======
      login: new LoginAction(page),
      cart: new CartAction(new CartPage(page)),
      search: new SearchAction(new SearchPage(page)),
      registration: new RegistrationAction(page),
      product: new Productaction(page),
>>>>>>> develop
    };

    await use(appAction);
  },

});

export { expect } from "@playwright/test";