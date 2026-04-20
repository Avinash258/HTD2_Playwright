import { Page, Locator } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly logo: Locator;
    readonly navbar: Locator;
    readonly navLinks: Locator;
    readonly featuredSection: Locator;
    readonly categorySidebar: Locator;
    readonly productCards: Locator;
    readonly productImages: Locator;
    readonly productNames: Locator;
    readonly productPrices: Locator;
    readonly addToCartButtons: Locator;
    readonly womenCategory: Locator;
    readonly menCategory: Locator;
    readonly kidsCategory: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('img[alt="Website for automation practice"]');
        this.navbar = page.locator('ul.nav.navbar-nav');
        this.navLinks = this.navbar.locator('li');
        this.featuredSection = page.locator('.features_items');
        this.categorySidebar = page.locator('.left-sidebar');
        this.productCards = page.locator('.product-image-wrapper');
        this.productImages = this.productCards.locator('img');
        this.productNames = this.productCards.locator('.productinfo p');
        this.productPrices = this.productCards.locator('.productinfo h2');
        this.addToCartButtons = this.productCards.locator('.add-to-cart');
        this.womenCategory = this.categorySidebar.getByText('Women', { exact: true });
        this.menCategory = this.categorySidebar.getByText('Men', { exact: true });
        this.kidsCategory = this.categorySidebar.getByText('Kids', { exact: true });
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async clickLogo() {
        await this.logo.click();
    }
}