import { Locator, Page } from "@playwright/test";

export class HomePage_UI {
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