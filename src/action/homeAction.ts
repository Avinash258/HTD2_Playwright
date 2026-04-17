import { expect } from '@playwright/test';
import { HomePage } from '../../src/page/homePage';

export class HomeAction {

    readonly homePage: HomePage;

    constructor(homePage: HomePage) {
        this.homePage = homePage;
    }

    async verifyHomePageLoaded(url: string) {
        await this.homePage.navigate(url);
        await expect(this.homePage.page).toHaveURL(/automationexercise/);
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

        for (const link of links) {
            await expect(this.homePage.page.locator(`text=${link}`)).toBeVisible();
        }
    }

    async verifyLogoRedirect(url: string) {
        await this.homePage.page.goto(url + 'products');
        await this.homePage.clickLogo();
        await expect(this.homePage.page).toHaveURL(/automationexercise/);
    }

    async verifyFeaturedProducts() {
        await expect(this.homePage.featuredSection).toBeVisible();
        await expect(this.homePage.page.locator('.product-image-wrapper').first()).toBeVisible();
    }

    async verifyCategorySidebar() {
        await expect(this.homePage.categorySidebar).toBeVisible();
        await expect(this.homePage.page.locator('text=Women')).toBeVisible();
        await expect(this.homePage.page.locator('text=Men')).toBeVisible();
        await expect(this.homePage.page.locator('text=Kids')).toBeVisible();
    }
}