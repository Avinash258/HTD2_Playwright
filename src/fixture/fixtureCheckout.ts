import { test as base, expect } from "@playwright/test";
import { LoginAction } from "../action/loginAction";
import { CheckoutCartAction } from "../action/checkoutCartAction";
import loginData from "../testdata/loginCheckout.json";
import { LoginPage } from "../page/loginPage";

type AppActions = {
  login: LoginAction;
  checkoutToCart: CheckoutCartAction;
};

type Fixtures = {
  appAction: AppActions;
};

export const test = base.extend<Fixtures>(
  {
  appAction: async ({ page }, use) => {
    const appactions: AppActions = {
      login: new LoginAction(page), 
                
      checkoutToCart: new CheckoutCartAction(page),  
    };

    await use(appactions);
  },

});

export { expect };