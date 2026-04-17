import { Page, Locator } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly logo: Locator;
    readonly navbar: Locator;
    readonly featuredSection: Locator;
    readonly categorySidebar: Locator;

    constructor(page: Page) {
        this.page = page;

        this.logo = page.locator('img[alt="Website for automation practice"]');
        this.navbar = page.locator('.navbar-nav');
        this.featuredSection = page.locator('.features_items');
        this.categorySidebar = page.locator('.left-sidebar');
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async clickLogo() {
        await this.logo.click();
    }
}