import {Locator,Page} from "@playwright/test";
import { LoginPage } from "../page/loginPage"
import { CheckoutCartPage } from "../page/checkoutCartPage";

export class CheckoutCartAction {
  readonly page: Page;
  readonly checkoutCartPage: CheckoutCartPage;

  constructor(page: Page) {
    this.page = page;
    this.checkoutCartPage = new CheckoutCartPage(page);
  }

  async LoginUP(emailId:string, Password:string )
  {
    await this.checkoutCartPage.signup.click();
    await this.checkoutCartPage.emailAddress.fill(emailId);
    await this.checkoutCartPage.password.fill(Password);
   await this.checkoutCartPage.loginButton.click();
  }
async openLogin() {
  await this.checkoutCartPage.loginButton.click();
}

  async navigateToProducts() {

    await this.checkoutCartPage.productLink.click();
  }

   async addToCartLink() {
    await this.checkoutCartPage.addToCartLink.first().click();
  }

  async addProductToCart() {
    await this.checkoutCartPage.addToCartLink.first().click();
  }
async addToCart(){
  await this.checkoutCartPage.addToCart.click();
}
  async clickContinueShopping() {
    await this.checkoutCartPage.continueButton.click();
  }


  async openCart() {
    await this.checkoutCartPage.cartLink.click();
  }

  async proceedToCheckout() {
    await this.checkoutCartPage.proceedCheckout.click();
  }

  async continue2()
  {
    await this.checkoutCartPage.continue2.click();
  }

  async PayConfirmButton()
  {
    await this.checkoutCartPage.payConfirmButton.click();
  }
  async placOrderbutton()
  {
    await this.checkoutCartPage.placOrderbutton.click();
  }

  async textMessages()
  {
    await this.checkoutCartPage.textMessage.fill("This Is My first Order");
  }

  async cardDetails()
  {
    await this.checkoutCartPage.nameOnCard.fill("snnn");
    await this.checkoutCartPage.cardNumber.fill("4435345")
    await this.checkoutCartPage.cvc.fill("345");
    await this.checkoutCartPage.expiryMonth.fill("04");
    await this.checkoutCartPage.expireYear.fill("1999");
  
  }

  async payButton()
  {
    
    await this.checkoutCartPage.payButton.click();
  }

  async OrderPlacedButton()
  {
    
    await this.checkoutCartPage.placedContinueButton.click();
  }

  async RegisterLoginlink()
  {
    
    await this.checkoutCartPage.registerLoginlink.click();
  }


  async completeCheckoutCartPageFlow() {
    await this.navigateToProducts();
    await this.addProductToCart();
    await this.clickContinueShopping();
    await this.openCart();
    await this.proceedToCheckout();
    await this.addProductToCart();
    await this.addToCartLink();
    //await this.cartwithoutlogging();
    await this.continue2();
    await this.proceedToCheckout();

  }
}