import { test as base } from "@playwright/test";
import { HomeAction } from "../action/homeAction";
import { HomePage } from "../page/homePage";
import registrationData from "../testdata/registration.json";

type AppActions = {
  home: HomeAction;
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
      home: new HomeAction(new HomePage(page))
    };

    await use(appAction);
  },
});

export { expect } from "@playwright/test";