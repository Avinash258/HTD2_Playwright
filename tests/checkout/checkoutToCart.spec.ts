import { test, expect } from "../../src/fixture/fixtureCheckout";
import loginData from "../../src/testdata/loginCheckout.json";

test("TC_01 Verify checkout flow for logged-in user", async ({ page, appAction }) => {

  await page.goto(loginData.BaseUrl);
  //Login the user
  await appAction.checkoutToCart.LoginUP(loginData.SignupDetails.emailId, loginData.SignupDetails.Password);
  await expect(page).toHaveTitle("Automation Exercise");

  // navigate to product and add cart
  await page.waitForLoadState('networkidle');
  await appAction.checkoutToCart.navigateToProducts();
  await expect(page.getByText("All Products")).toBeVisible(); 
  await appAction.checkoutToCart.addToCart();
  await page.locator('//button[@class="btn btn-success close-modal btn-block"]').waitFor({ state: 'visible' });
  await appAction.checkoutToCart.clickContinueShopping();
  await appAction.checkoutToCart.openCart();
  
  //Verify Address and Delivery details
  await appAction.checkoutToCart.proceedToCheckout();
  await expect(page.getByText("Your delivery address")).toBeVisible();
  await expect(page.getByText("Your billing address")).toBeVisible();
  await expect(page.locator('//ul[@id="address_delivery"]//li[@class="address_firstname address_lastname"]')).toBeVisible();
  await expect(page.locator('//ul[@id="address_delivery"]//li[@class="address_address1 address_address2"]')).toBeVisible;
  await expect(page.locator('//ul[@id="address_delivery"]//li[@class="address_phone"]')).toBeVisible;
  await expect(page.locator('//ul[@id="address_invoice"]//li[@class="address_firstname address_lastname"]')).toBeVisible;
  await expect(page.locator('//ul[@id="address_invoice"]//li[@class="address_country_name"]')).toBeVisible;
});


test("TC_02 Verify checkout redirects guest user to login", async ({page, appAction }) => {

  await page.goto(loginData.BaseUrl);
  await appAction.checkoutToCart.navigateToProducts();
  await expect(page.getByText("All Products")).toBeVisible();

  // add a cart without login
  await appAction.checkoutToCart.addToCart();
  await appAction.checkoutToCart.clickContinueShopping();

  await appAction.checkoutToCart.openCart();    
  await appAction.checkoutToCart.proceedToCheckout();
  
  //User cannot log in, so they are redirected to the login page.
  await expect(page.getByText("Register / Login account to proceed on checkout.")).toBeVisible();
  await appAction.checkoutToCart.RegisterLoginlink();
  await expect(page).toHaveTitle("Automation Exercise - Signup / Login");
  await expect(page.getByText("Login to your account")).toBeVisible();

});

test("TC_03 Verify order comment can be entered ", async ({ page, appAction }) => {

  await page.goto(loginData.BaseUrl);
  //Login the user
  await appAction.checkoutToCart.LoginUP(loginData.SignupDetails.emailId, loginData.SignupDetails.Password);

  await appAction.checkoutToCart.navigateToProducts();
  await expect(page.getByText("All Products")).toBeVisible(); 
  await appAction.checkoutToCart.addToCart();
  await appAction.checkoutToCart.clickContinueShopping();
  await appAction.checkoutToCart.openCart();
  
  await appAction.checkoutToCart.proceedToCheckout();
  await expect(page.getByText("Your delivery address")).toBeVisible();
  await expect(page.getByText("Your billing address")).toBeVisible();

  // comment can be entered
  await appAction.checkoutToCart.textMessages(); 
  await appAction.checkoutToCart.placOrderbutton();

});

test("TC_04 Verify place order with valid card details ", async ({ page, appAction }) => {

  await page.goto(loginData.BaseUrl);
  await appAction.checkoutToCart.LoginUP(loginData.SignupDetails.emailId, loginData.SignupDetails.Password);

  await appAction.checkoutToCart.navigateToProducts();
  await expect(page.getByText("All Products")).toBeVisible(); 
  await appAction.checkoutToCart.addToCart();
  await appAction.checkoutToCart.clickContinueShopping();
  await appAction.checkoutToCart.openCart();
  
  await appAction.checkoutToCart.proceedToCheckout();
  await expect(page.getByText("Your delivery address")).toBeVisible();
  await expect(page.getByText("Your billing address")).toBeVisible();
  await appAction.checkoutToCart.textMessages(); 

  await appAction.checkoutToCart.placOrderbutton();

  //place order with valid card details
  await appAction.checkoutToCart.cardDetails();
  await appAction.checkoutToCart.payButton();

  await page.waitForTimeout(3000);
  await expect(page.locator('//h2[@data-qa="order-placed"]//b[text() = "Order Placed!"]')).toBeVisible();

});

test("TC_05 Verify order confirmation page is shown", async ({ page, appAction }) => {

  await page.goto(loginData.BaseUrl);
  await appAction.checkoutToCart.LoginUP(loginData.SignupDetails.emailId, loginData.SignupDetails.Password);

  await appAction.checkoutToCart.navigateToProducts();
  await expect(page.getByText("All Products")).toBeVisible(); 
  await appAction.checkoutToCart.addToCart();
  await appAction.checkoutToCart.clickContinueShopping();
  await appAction.checkoutToCart.openCart();
  
  await appAction.checkoutToCart.proceedToCheckout();
  await expect(page.getByText("Your delivery address")).toBeVisible();
  await expect(page.getByText("Your billing address")).toBeVisible();
  
  await appAction.checkoutToCart.textMessages(); 
  await appAction.checkoutToCart.placOrderbutton();
  await appAction.checkoutToCart.cardDetails();
  await appAction.checkoutToCart.payButton();
  await expect(page.getByText("Order Placed!")).toBeVisible();
  
  //order confirmation page is shown
  await expect(page.locator('//p[text() = "Congratulations! Your order has been confirmed!"]')).toBeVisible();
  await appAction.checkoutToCart.OrderPlacedButton();
});

