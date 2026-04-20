import { expect } from '@playwright/test';
import { HomePage } from '../page/homePage';

export class HomeAction {

    readonly homePage: HomePage;
    page: any;

    constructor(homePage: HomePage) {
        this.homePage = homePage;
        this.page = homePage.page;
    }

    async verifyHomePageLoaded() {
        await expect(this.homePage.page).toHaveURL("https://automationexercise.com/");
        await expect(this.homePage.logo).toBeVisible();
        await expect(this.homePage.navbar).toBeVisible();
        await expect(this.homePage.featuredSection).toBeVisible();  ``
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

        for (const link of links) {
            await expect(
                this.homePage.navbar.getByText(link, { exact: true })
            ).toBeVisible();
        }
    }

    async verifyLogoRedirect(baseUrl: string) {
        await this.homePage.page.goto(baseUrl + 'products');
        await this.homePage.clickLogo();
        await expect(this.homePage.page).toHaveURL("https://automationexercise.com/");
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