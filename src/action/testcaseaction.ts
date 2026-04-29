import { Page, expect } from '@playwright/test';
import { TestCasesPage } from '../page/testcasePage';

export class TestCasesActions {
  readonly page: Page;
  readonly testCasePage: TestCasesPage;
  constructor(page: Page) {
    this.page = page;
    this.testCasePage = new TestCasesPage(page);
  }
  async ClickLink() {
    await this.testCasePage.testCasesLink.click();
  }
  async navigateToTestCases() {
    await this.testCasePage.testCasesLink.click();
  }
  async verifyTestCasesPageOpened() {
    await expect(this.page).toHaveURL(/test_cases/);
    await expect(this.testCasePage.pageHeader).toContainText('Test Cases');
  }
  async expandTestCase(testCaseName: string) {
    await this.page.getByRole('link', { name: testCaseName }).click();
  }
  async verifyTestCaseExpanded(expectedText: string) {
    const expandedPanel = this.page.locator("//u[.='Test Case 1: Register User']");

    await expect(expandedPanel).toContainText(expectedText);
  }
  async scrollToBottom() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }
  async verifyAllTestCasesPresent() {
    const count = await this.testCasePage.testCaseItems.count();
    expect(count).toBeGreaterThanOrEqual(26);
  }
  async verifyPageTitle() {
    await expect(this.page).toHaveTitle(
      'Automation Practice Website for UI Testing - Test Cases'
    );
  }
  async verifyImagesNotBroken() {
    const images = this.testCasePage.images;
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const src = await images.nth(i).getAttribute('src');

      if (!src) continue;
      if (src.startsWith('data:')) continue;

      const url = new URL(src, this.page.url()).toString();
      const response = await this.page.request.get(url);

      expect(
        response.status(),
        ` Broken image found: ${url}`
      ).toBe(200);
    }
  }
}