import { test as base } from "@playwright/test";
import { ProductAction } from "../action/productAction";
import { ProductPage } from "../page/productPage";
import productData from "../testdata/productData.json"

import loginData from "../testdata/login.json";

type AppActions = {
  product: ProductAction;
};

type ProductFixtures = {
  gotoBaseUrl: void;
  appAction: AppActions;
};

export const test = base.extend<ProductFixtures>({
  // base URL navigation
  gotoBaseUrl: [
    async ({ page }, use) => {
      await page.goto(productData.baseUrl);
      await use();
    },
    { auto: true },
  ],

  // ONLY product inside appAction (clean isolation)
  appAction: async ({ page }, use) => {
    const appAction: AppActions = {
      product: new ProductAction(page),
    };

    await use(appAction);
  },
});

export { expect } from "@playwright/test";