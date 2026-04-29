import { expect, Page } from '@playwright/test';
import { HomePage } from '../../src/page/homepage';

export class HomeAction {

    readonly homePage: HomePage;
    readonly page: Page;

    constructor(homePage: HomePage) {
        this.homePage = homePage;
        this.page = homePage.page;
    }

    async verifyHomePageLoaded() {
        await expect(this.page).toHaveURL('/');
        await expect(this.homePage.logo).toBeVisible();
        await expect(this.homePage.navbar).toBeVisible();
        await expect(this.homePage.featuredSection).toBeVisible();
        await expect(this.homePage.categorySidebar).toBeVisible();
    }

    async verifyNavbarLinks() {
        const links = [
            'Home',
            'Products',
            'Cart',
            'Signup / Login',
            'Test Cases',
            'API Testing',
            'Video Tutorials',
            'Contact us'
        ];

        for (let i = 0; i < links.length; i++) {
            await expect(this.homePage.navLinks.nth(i)).toContainText(links[i]);
        }
    }

    async verifyLogoRedirect() {
        await this.page.goto('/products');
        await this.homePage.clickLogo();
        await expect(this.page).toHaveURL('/');
    }

    async verifyFeaturedProducts() {
        await this.homePage.featuredSection.scrollIntoViewIfNeeded();
        await expect(this.homePage.featuredSection).toBeVisible();

        const count = await this.homePage.productCards.count();
        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < Math.min(count, 3); i++) {
            await expect(this.homePage.productImages.nth(i)).toBeVisible();
            await expect(this.homePage.productNames.nth(i)).toBeVisible();
            await expect(this.homePage.productPrices.nth(i)).toBeVisible();
            await expect(this.homePage.addToCartButtons.nth(i)).toBeVisible();
        }
    }

    async verifyCategorySidebar() {
        await expect(this.homePage.categorySidebar).toBeVisible();
        await expect(this.homePage.womenCategory).toBeVisible();
        await expect(this.homePage.menCategory).toBeVisible();
        await expect(this.homePage.kidsCategory).toBeVisible();
    }
}