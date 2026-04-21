import {Page, Locator} from "@playwright/test";
 export class CheckoutCartPage
 {
    readonly page : Page;
    readonly signup : Locator;
    readonly loginButton : Locator;
    readonly emailAddress : Locator;
    readonly password: Locator;
    readonly productLink: Locator;
    readonly addToCartLink: Locator;
    readonly continueButton: Locator;
    readonly cartLink: Locator;
    readonly proceedCheckout: Locator;
    readonly visibleProduct: Locator;
    readonly addToCart: Locator;
    //readonly cartwithoutlogging : Locator;
    readonly continue2: Locator
    readonly placOrderbutton: Locator;
    readonly nameOnCard: Locator;
    readonly cardNumber : Locator;
    readonly cvc : Locator;
    readonly expiryMonth : Locator;
    readonly expireYear : Locator;
    readonly payButton : Locator;
    readonly placedContinueButton : Locator;
    readonly registerLoginlink : Locator;
    readonly textMessage : Locator;
    readonly payConfirmButton : Locator;
      

    constructor(page: Page) {

      this.page = page;

      this.signup = page.locator('//a[normalize-space()="Signup / Login"]');
      this.emailAddress = page.locator('//input[@data-qa="login-email"]');
      this.password = page.locator('//input[@placeholder="Password"]');
      this.loginButton = page.locator('//button[text() = "Login"]');
      //this.productLink = page.locator('//a[@href="/products"]');
      this.productLink = page.getByText(/ Products/)
  
      this.visibleProduct = page.locator('//h2[text()="Features Items"]');
      this.addToCartLink = page.locator('//div[@class="overlay-content"]//a[@class="btn btn-default add-to-cart"][normalize-space()="Add to cart"]')
      this.addToCart = page.locator('//div[@class="productinfo text-center"]//a[@data-product-id="1"]')
      //this.productLink = page.locator('a[@class="btn btn-default add-to-cart"]"]');
      
      this.continueButton = page.locator('//button[@class="btn btn-success close-modal btn-block"]');
      this.cartLink = page.locator('//a[normalize-space()="Cart"]');
      
      //this.cartwithoutlogging = page.locator('//u[normalize-space()="Register / Login"]');
      this.continue2 = page.locator('//button[@class="btn btn-success close-checkout-modal btn-block"]');
      this.proceedCheckout = page.locator('//a[@class="btn btn-default check_out"]');
      this.placOrderbutton = page.locator('//a[@class="btn btn-default check_out"]');
      this.payConfirmButton = page.locator('//button[text()="Pay and Confirm Order"]');
      this.registerLoginlink = page.locator('//u[text()="Register / Login"]');

      this.nameOnCard = page.locator('//input[@data-qa="name-on-card"]');
      this.cardNumber = page.locator('//input[@data-qa="card-number"]');
      this.cvc = page.locator('//input[@data-qa="cvc"]');
      this.expiryMonth = page.locator('//input[@data-qa="expiry-month"]');
      this.expireYear = page.locator('//input[@data-qa="expiry-year"]');

      this.payButton = page.locator('//button[@id="submit"]');
      this.placedContinueButton = page.locator('//a[@data-qa="continue-button"]');

      this.textMessage = page.locator('//textarea[@name="message"]');
    }

 }