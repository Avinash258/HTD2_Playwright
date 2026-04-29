import { Page, expect } from '@playwright/test';
import { ContactPage } from '../page/contactpage'

type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export class ContactActions {
  readonly page: Page;
  readonly contactPage: ContactPage;

  constructor(contactPage: ContactPage) {
    this.contactPage = contactPage;
    this.page = contactPage.page;
  }

  async navigateToContact() {
    await this.contactPage.contactLink.click();
    await expect(this.page).toHaveURL(/contact_us/);
    await expect(this.contactPage.nameInput).toBeVisible();
  }
  async fillForm(data: ContactData) {
    await this.contactPage.nameInput.fill(data.name);
    await this.contactPage.emailInput.fill(data.email);
    await this.contactPage.subjectInput.fill(data.subject);
    await this.contactPage.messageInput.fill(data.message);
  }
  async submitForm() {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
    await this.contactPage.submitBtn.click();
  }
  async clickHome() {
    await this.contactPage.homeBtn.click();
    await expect(this.page).toHaveURL(/automationexercise.com/);
  }
}