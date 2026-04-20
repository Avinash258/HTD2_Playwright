import { Page, Locator } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly contactLink: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly submitBtn: Locator;
  readonly homeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactLink = page.locator('a[href="/contact_us"]');
    this.nameInput = page.locator('[data-qa="name"]');
    this.emailInput = page.locator('[data-qa="email"]');
    this.subjectInput = page.locator('[data-qa="subject"]');
    this.messageInput = page.locator('[data-qa="message"]');
    this.submitBtn = page.locator('[data-qa="submit-button"]');
    this.homeBtn = page.locator('a:has-text("Home")');
  }
}