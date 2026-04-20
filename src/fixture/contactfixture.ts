import { test as base } from "@playwright/test";
import { ContactActions } from "../action/contactactions";
import { ContactPage } from "../page/contactpage";
import contactData from "../testdata/contactdata.json";

type AppActions = {
  contact: ContactActions;
};
type Fixtures = {
  gotoBaseUrl: void;
  appAction: AppActions;
};
export const test = base.extend<Fixtures>({
  gotoBaseUrl: [
    async ({ page }, use) => {
      await page.goto(contactData.baseUrl);
      await use();
    },
    { auto: true },
  ],
  appAction: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    const appAction: AppActions = {
      contact: new ContactActions(contactPage),
    };
    await use(appAction);
  },
});

export { expect } from "@playwright/test";