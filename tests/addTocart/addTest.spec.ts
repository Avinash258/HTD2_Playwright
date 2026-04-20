
import registration from "../../src/testdata/registration.json";
import{ test, expect } from "../../src/fixture/Ankitfixture";

// Runs before each test
test.beforeEach(async ({ page }) => {
  await page.goto(registration.baseUrl);
});

test.describe("Add to cart flow", () => {

  test("TC1 -Verify product added to cart from home page", async ({  appAction }) => {
    await appAction.addToCart.addToCartPage.AddToproductButton.click();
   // await appAction.addToCart.addToCartPage.productCard.hover();
    await appAction.addToCart.addToCartPage.ClickAddtoCart.click();

    // await expect(appAction.addToCart.addToCartPage.ClickOnCountinueShopping)
    // .toBeVisible();

    await appAction.addToCart.addToCartPage.ClickOnCountinueShopping.click();
  });

  test("TC2 - Verify cart page opens", async ({  appAction }) => {
    await appAction.addToCart.addToCartPage.AddToproductButton.click();
    await appAction.addToCart.addToCartPage.productCard.first().hover();
    await appAction.addToCart.addToCartPage.ClickAddtoCart.click();

    await expect(appAction.addToCart.addToCartPage.ClickOnCountinueShopping)
    .toBeVisible();
    await appAction.addToCart.addToCartPage.ClickOnCountinueShopping.click();
    await appAction.addToCart.addToCartPage.ClickOnViewCart.click();
  });



  test("TC3 - Verify product quantity update in cart ", async ({ appAction }) => {
   await appAction.addToCart.addToCartPage.AddToproductButton.click();
   await appAction.addToCart.addToCartPage.productCard.first().hover();
   await appAction.addToCart.addToCartPage.ClickAddtoCart.click();
   await appAction.addToCart.addToCartPage.ClickOnCountinueShopping.click();
   await appAction.addToCart.addToCartPage.ClickOnViewCart.click();
   await expect(appAction.addToCart.addToCartPage.clickOnBlueTop).toBeVisible();
   await appAction.addToCart.addToCartPage.clickOnBlueTop.click();
   await appAction.addToCart.addToCartPage.changeQuantityBox.fill("3");
   await appAction.addToCart.addToCartPage.AgianClickOnAddToCart.click();
   await expect(appAction.addToCart.addToCartPage.ClickOnCountinueShopping)
    .toBeVisible();
    
 });




  test("TC4 - Verify product removal from cart", async ({  appAction }) => {
    await appAction.addToCart.addToCartPage.AddToproductButton.click();
    await appAction.addToCart.addToCartPage.ClickAddtoCart.click();

    // await expect(appAction.addToCart.addToCartPage.ClickOnCountinueShopping)
    // .toBeVisible();
    await appAction.addToCart.addToCartPage.ClickOnCountinueShopping.click();
    await appAction.addToCart.addToCartPage.ClickOnViewCart.click();

    await appAction.addToCart.addToCartPage.deleteProduct.first().click();

    await expect(appAction.addToCart.addToCartPage.verifyEmptyCartMessage)
    .toBeVisible({ timeout: 30000 });
  });

  test("TC5 - Verify empty cart message", async ({ appAction }) => {
    await appAction.addToCart.addToCartPage.AddToproductButton.click();
    await appAction.addToCart.addToCartPage.ClickAddtoCart.click();

    await expect(appAction.addToCart.addToCartPage.ClickOnCountinueShopping)
    .toBeVisible();

    await appAction.addToCart.addToCartPage.ClickOnCountinueShopping.click();
    await appAction.addToCart.addToCartPage.ClickOnViewCart.click();

    await appAction.addToCart.addToCartPage.deleteProduct.first().click();

    await expect(appAction.addToCart.addToCartPage.verifyEmptyCartMessage)
    .toBeVisible({ timeout: 30000 });

    await expect(appAction.addToCart.addToCartPage.verifyEmptyCartMessage)
    .toHaveText(/cart is empty!/i);
  });

});