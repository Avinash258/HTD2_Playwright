import { test as base, expect } from "@playwright/test";
import { LoginAction } from "../action/loginAction";
import { CheckoutCartAction } from "../action/checkoutCartAction";
import loginData from "../testdata/loginCheckout.json";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../page/loginPage";


type AppActions = {
  login: LoginAction;
  checkoutToCart: CheckoutCartAction;
};

type RandomUser = {
  signupName: string;
  signupEmail: string;
  password: string;
};

type Fixtures = {
  appAction: AppActions;
  randomUser: RandomUser;
};

// Extend Playwright test
export const test = base.extend<Fixtures>({

  // App Actions injection
  appAction: async ({ page }, use) => {
    const appactions: AppActions = {
      login: new LoginAction(page), 
                
      checkoutToCart: new CheckoutCartAction(page),  
    };

    await use(appactions);
  },

  randomUser: async ({}, use) => {
    const user: RandomUser = {
      signupName: faker.person.firstName(),
      signupEmail: faker.internet.email(),
      password: faker.internet.password(),
    };

    await use(user);
  },

});

export { expect };