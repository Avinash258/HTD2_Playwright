import { Page } from "@playwright/test";
import { ProductPage } from "../page/productPage";

export class Productaction {
  readonly productPage: ProductPage;

  constructor(page: Page) {
    this.productPage = new ProductPage(page);

  }
  async ViewProduct(){
    await this.productPage.viewProduct.click();
  }
  getProductName(){
    return this.productPage.productName;
  }
  getProductPrice(){
    return this.productPage.productPrice;
  }
  async setQuantity(quantity: string) {
    await this.productPage.quantityInput.fill(quantity); 
  }
  async AddProductToCart() {
    await this.productPage.addToCartButton.click();
  }

  async viewCart() {
    await this.productPage.viewCartButton.click();
  }
  Getquanitycount() {
    return this.productPage.addedcartquantity;
  }
  async submitReview(name: string, email: string, reviewText: string) {
    await this.productPage.reviewNameInput.fill(name);
    await this.productPage.reviewEmailInput.fill(email);
    await this.productPage.reviewTextInput.fill(reviewText);
    await this.productPage.submitReviewButton.click();
  }
  getReviewSuccessMessage() {
    return this.productPage.reviewSuccessMsg;
  }
  get productcategory() {
    return this.productPage.productCategory;
  }

  get productavailability() {
    return this.productPage.productAvailability;
  }

}

  

