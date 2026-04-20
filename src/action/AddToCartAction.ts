import { Page, Locator, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { AddToCartPage } from "../page/AddToCartPage";
import { time } from "node:console";

export class AddToCartAction {

  readonly addToCartPage: AddToCartPage;
  readonly page: Page;

  constructor(page: Page) {
    console.log("NEW ACTION LOADED");
    this.page = page;
    this.addToCartPage = new AddToCartPage(page);
  }

  // ---------------- FAKER EXAMPLE METHOD ----------------

  

  // ---------------- TEST METHODS ----------------

  async Test1Method() {
    await this.addToCartPage.AddToproductButton.click();
    await this.addToCartPage.productCard.first().hover();
    await this.addToCartPage.ClickAddtoCart.first().click();
    await this.addToCartPage.ClickOnCountinueShopping.click();
  }

  async Test2Method() {
    await this.addToCartPage.AddToproductButton.click();
    await this.addToCartPage.ClickAddtoCart.first().click();
    await this.addToCartPage.ClickOnCountinueShopping.click();
    await this.addToCartPage.ClickOnViewCart.click();
  }

  async Test3Method() {
    await this.addToCartPage.AddToproductButton.click();
    await this.addToCartPage.ClickAddtoCart.first().click();
    await this.addToCartPage.ClickOnCountinueShopping.click();
    await this.addToCartPage.ClickOnViewCart.click();

    await expect(this.addToCartPage.clickOnBlueTop).toBeVisible();
    await this.addToCartPage.clickOnBlueTop.click();
    await this.addToCartPage.changeQuantityBox.fill("2");
    await this.addToCartPage.AgianClickOnAddToCart.click();
  }

  async Test4Method() {
    await this.addToCartPage.AddToproductButton.click();
    await this.addToCartPage.ClickAddtoCart.first().click();
    await this.addToCartPage.ClickOnCountinueShopping.click();
    await this.addToCartPage.ClickOnViewCart.click();
    await this.addToCartPage.deleteProduct.click();
  }

  async Test5Method() {
    await this.addToCartPage.AddToproductButton.click();
    await this.addToCartPage.ClickAddtoCart.first().click();
    await this.addToCartPage.ClickOnCountinueShopping.click();
    await this.addToCartPage.ClickOnViewCart.click();
    await this.addToCartPage.deleteProduct.click();

    await expect(this.addToCartPage.verifyEmptyCartMessage).toBeVisible();
  }

  // ---------------- ADD TO CART METHOD ----------------

  async addProductToCart() {

    const addToCartBtn: Locator =
      this.addToCartPage.ClickAddtoCart.first();

    await expect(addToCartBtn).toBeVisible();
    await addToCartBtn.click();

    const message: Locator = this.page.locator("text=Added to cart");

    await expect(message).toBeVisible({ timeout: 30000 });
    await expect(message).toHaveText(/added to cart/i);
  }

async againAddtoCart() {

  const addToCartBtn: Locator =
    this.addToCartPage.AgianClickOnAddToCart.first();

  await expect(addToCartBtn).toBeVisible();
  await addToCartBtn.click();

  const message: Locator = this.page.locator("text=Added to cart");

  await expect(message).toBeVisible({ timeout: 30000 });
  await expect(message).toHaveText(/added to cart/i);
} 
async deleteProdcut1(){



    const deleteItem : Locator= 
    this.addToCartPage.deleteProduct.first();
    await expect(deleteItem).toBeVisible();
    await deleteItem.click();

    const emptyCartMessage: Locator = this.addToCartPage.verifyEmptyCartMessage;
    await expect(emptyCartMessage).toBeVisible({timeout: 100000 });    
    await expect(emptyCartMessage).toHaveText(/cart is empty!/i);   
}



  // ---------------- ASSERTIONS ----------------

  async verifyHomePageUrl(page: Page) {
    await expect(page).toHaveURL("https://automationexercise.com/");
  }

  async verifyHomePageTitle(page: Page) {
    await expect(page).toHaveTitle(/Automation/);
  }

  async verifyLogoVisible(logo: Locator) {
    await expect(logo).toBeVisible();
  }

  async verifyLogoSrc(logo: Locator) {
    await expect(logo).toHaveAttribute("src", /logo/);
  }

  async verifyHomeText(page: Page) {
    await expect(page.locator("body")).toContainText("Home");
  }

  async verifyProductsUrl(page: Page) {
    await expect(page).toHaveURL(/products/);
  }

  async verifyProductsTitleContains(title: Locator) {
    await expect(title).toContainText("All Products");
  }

  async verifyProductsTitleExact(title: Locator) {
    await expect(title).toHaveText("All Products");
  }

  async verifyWomenCategoryTitle(title: Locator) {
    await expect(title).toHaveText("Women - Dress Products");
  }

  async verifyAddToCartMessageVisible(message: Locator) {
    await expect(message).toBeVisible();
  }

  async waitForContinueShoppingButton(message: Locator) {
    await expect(message).toBeVisible();
  }
}