import { test as base } from "@playwright/test";
import { HomePageActions_UI } from "../action/homeaction_ui";
import registrationData from "../testdata/registration.json";

type AppActions = {
    home: HomePageActions_UI;
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

    appAction: async ({ page }, use) => {
        const appAction: AppActions = {

            home: new HomePageActions_UI(page)


        };

        await use(appAction);
    },



});

export { expect } from "@playwright/test";