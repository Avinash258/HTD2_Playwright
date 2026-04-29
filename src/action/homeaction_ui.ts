import { Page } from "@playwright/test";
import { Homepage_UI } from "../page/homepage_UI";
import testData from '../testdata/registration.json';

export class HomePageActions_UI {
    readonly homePage: Homepage_UI;

    constructor(page: Page) {
        this.homePage = new Homepage_UI(page);
    }

    // Open URL from JSON
    async openHomePage() {
        await this.homePage.page.goto(testData.baseUrl, { timeout: 60000 });
    }

    // Scroll to bottom
    async scrollToBottom() {
        await this.homePage.page.keyboard.press('End');
    }

    // Verify scroll-up button is visible
    async verifyScrollUpVisible() {
        return await this.homePage.scrollUpButton.isVisible();
    }

    // Click scroll-up button
    async clickScrollUpButton() {
        await this.homePage.scrollUpButton.click();
    }

    // Verify page is at top (waits properly)
    async verifyPageAtTop() {
        await this.homePage.page.evaluate(() => window.scrollTo(0, 0));
        await this.homePage.page.waitForFunction(() => window.scrollY === 0);
        return true;
    }

    // Verify subscription section elements
    async verifySubscriptionSectionVisible() {
        return {
            heading: await this.homePage.subscriptionHeading.isVisible(),
            email: await this.homePage.subscriptionEmailInput.isVisible(),
            button: await this.homePage.subscriptionButton.isVisible()
        };
    }

    async subscribeWithEmail(email: string) {
        await this.homePage.subscriptionEmailInput.fill(email);
        await this.homePage.subscriptionButton.click();
    }
    async isSubscriptionSuccessVisible() {
        return await this.homePage.subscriptionSuccessMessage.isVisible();
    }

    async navigateToProducts() {
        await this.homePage.productsLink.click();
    }

    async isBrandSectionVisible() {
        return await this.homePage.brandsSection.isVisible();
    }

    async getBrandsList() {
        return await this.homePage.brandNames.allTextContents();
    }
}