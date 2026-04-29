import { test as base } from "@playwright/test";
import { ContactActions } from "../action/contactactions";
import { ContactPage } from "../page/contactpage";
import contactData from "../testdata/contactdata.json";

type ContactData = {
  contact: ContactActions;
};
type Fixtures = {
  gotoBaseUrl: void;    
  appAction: ContactData;
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
    const appAction: ContactData = {
      contact: new ContactActions(contactPage),
    };
    await use(appAction);
  },  
});

export { expect } from "@playwright/test";