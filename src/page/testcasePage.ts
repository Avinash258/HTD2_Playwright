import { Page, Locator, expect } from '@playwright/test';
import { link } from 'node:fs';

export class TestCasesPage {
  readonly page: Page;
  readonly testCasesLink: Locator;
  readonly pageHeader: Locator;
  readonly testCaseItems: Locator;
  readonly accordionHeadings: Locator;
  readonly accordionContent: Locator;
  readonly images: Locator;

  constructor(page: Page) {
    this.page = page;
this.testCasesLink = this.page.locator('//a[@href="/test_cases"]').first();
    this.pageHeader = page.locator('h2');
    this.testCaseItems = page.locator('.panel');
    this.accordionHeadings = page.locator('.panel-heading a');
    this.accordionContent = page.locator('.panel-collapse');
    this.images = page.locator('img');
   
  }
  }


