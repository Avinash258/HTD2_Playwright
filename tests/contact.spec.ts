import contactData from '../src/testdata/contactdata.json';
import { test, expect } from '../src/fixture/contactfixture';

test.describe("Contact Us Test Cases", () => {
  test("TC01 - Verify Contact Us page opens", async ({ appAction }) => {

    await appAction.contact.navigateToContact();
    await expect(appAction.contact.contactPage.nameInput).toBeVisible();
    await expect(appAction.contact.contactPage.emailInput).toBeVisible();
    await expect(appAction.contact.contactPage.subjectInput).toBeVisible();
    await expect(appAction.contact.contactPage.messageInput).toBeVisible();
  });

  test("TC02 - Verify form submission with valid data", async ({ appAction }) => {
    await appAction.contact.navigateToContact();
    await appAction.contact.fillForm(contactData.valid);
    await appAction.contact.submitForm();
  });

  test("TC03 - Verify form submission with blank fields", async ({ appAction }) => {
    await appAction.contact.navigateToContact();
    await appAction.contact.submitForm();
    await expect(appAction.contact.contactPage.nameInput).toBeVisible();
  });

  test("TC04 - Verify Home button navigation", async ({ appAction, page }) => {
    await appAction.contact.navigateToContact();
    await appAction.contact.fillForm(contactData.valid);
    await appAction.contact.submitForm();
    await appAction.contact.clickHome();
    await expect(page).toHaveURL(contactData.baseUrl);
  });

});