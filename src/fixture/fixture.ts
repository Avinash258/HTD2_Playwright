import { test as base } from "@playwright/test";
import { LoginAction } from "../action/loginAction";
import homeData from "../testdata/home.json";
import registrationData from "../testdata/registration.json";
import { CartAction } from "../action/cartaction";
import { ProductPage } from "../page/productPage";
import { CartPage } from "../page/cartPage";
import { SearchAction } from "../action/searchAction";
import { SearchPage } from "../page/searchPage";
import { RegistrationAction } from "../action/registrationAction";
import { Productaction } from "../action/productaction";

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
      await page.goto(registrationData.baseUrl);
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
      product: new Productaction(page),
    };

    await use(appAction);
  },
});

export { expect } from "@playwright/test";