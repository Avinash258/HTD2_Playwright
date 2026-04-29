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
        this.logo = page.locator('a[href="/"] img');
        this.navbar = page.locator('ul.nav.navbar-nav');
        this.navLinks = this.navbar.getByRole('link');
        this.featuredSection = page.locator('.features_items');
        this.categorySidebar = page.locator('.left-sidebar');
        this.productCards = page.locator('.product-image-wrapper');
        this.productImages = this.productCards.locator('img');
        this.productNames = this.productCards.locator('.productinfo p');
        this.productPrices = this.productCards.locator('.productinfo h2');
        this.addToCartButtons = this.productCards.locator('a.add-to-cart:visible');
        this.womenCategory = this.categorySidebar.getByText('Women', { exact: true }); 
        this.menCategory = this.categorySidebar.getByText('Men', { exact: true }); 
        this.kidsCategory = this.categorySidebar.getByText('Kids', { exact: true });
    }

    async clickLogo() {
        await this.logo.click();
    }
import { Locator, Page } from "@playwright/test";

export class HomePage {
   readonly page: Page;
   readonly scrollUpButton: Locator;
   readonly subscriptionHeading: Locator;
   readonly subscriptionEmailInput: Locator;
   readonly subscriptionButton: Locator;
   readonly subscriptionSuccessMessage:Locator;
   readonly productsLink:Locator;
   readonly brandsSection:Locator;
   readonly brandNames:Locator;

   constructor(page: Page) {
      this.page = page;
      this.scrollUpButton = page.locator('#scrollUp');
      this.subscriptionHeading = page.locator("//h2[text()='Subscription']");
      this.subscriptionEmailInput = page.locator('#susbscribe_email');
      this.subscriptionButton = page.locator('#subscribe');
      this.subscriptionSuccessMessage=page.locator("//div[text()='You have been successfully subscribed!']");
      this.productsLink=page.locator("a[href='/products']");
      this.brandsSection=page.locator('.brands_products');
      this.brandNames=page.locator('.brands-name a');
   }
}