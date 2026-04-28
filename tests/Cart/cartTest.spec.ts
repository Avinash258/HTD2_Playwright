import loginData from "../../src/testdata/login.json";
import { getBaseUrl } from "../../src/Utils/env";
import { test, expect } from "../../src/fixture/fixture";
import { expectCartState } from "../../src/Utils/helper";

test.describe("Cart Page Test Cases", () => {
  test.beforeEach(async ({ page, appAction }) => {
    console.log("[Setup] Navigating to base URL...");
    await page.goto(getBaseUrl());
    
    // Auto-wait: Wait for page to be ready
    await page.waitForLoadState('networkidle');
    console.log("[Setup] Page is stable");

    console.log("[Setup] Logging in with valid credentials...");
    await appAction.login.login(
      loginData.validUser.username,
      loginData.validUser.password
    );
    console.log("[Setup] Login successful");

    // Verify login - auto-wait for URL to match
    await expect(page).toHaveURL(new RegExp(loginData.inventoryUrlPattern));
    console.log("[Setup] Setup complete");
  });

  /**
   * TC04 - User can add backpack and see it in cart
   * Auto-waiting + waitForSelector at method level
   * Retries managed by playwright.config.ts
   */
  test("TC04 - User can add backpack and see it in cart", async ({ appAction, page }) => {
    console.log("[TC04] Adding backpack to cart...");
    await appAction.cart.addBackpackToCart();

    console.log("[TC04] Verifying cart state...");
    await expectCartState(appAction.cart, 1, 1);

    console.log("[TC04] Checking if backpack is visible in cart...");
    const isVisible = await appAction.cart.isBackpackVisibleInCart();
    expect(isVisible).toBeTruthy();
  });

  /**
   * TC05 - User can remove backpack from cart
   * Auto-waiting + waitForSelector at method level
   * Retries managed by playwright.config.ts
   */
  test("TC05 - User can remove backpack from cart", async ({ appAction, page }) => {
    console.log("[TC05] Adding backpack to cart...");
    await appAction.cart.addBackpackToCart();

    console.log("[TC05] Getting cart badge count...");
    const badgeCount = await appAction.cart.getCartBadgeCount();
    expect(badgeCount).toBe(1);

    console.log("[TC05] Removing backpack from cart...");
    await appAction.cart.removeBackpackFromCart();

    console.log("[TC05] Verifying cart is empty...");
    await expectCartState(appAction.cart, 0, 0);
  });

  /**
   * TC06 - New login starts with empty cart
   * Auto-waiting after login
   * Retries managed by playwright.config.ts
   */
  test("TC06 - New login starts with empty cart", async ({ appAction, page }) => {
    console.log("[TC06] Verifying empty cart state...");
    await expectCartState(appAction.cart, 0, 0);
  });
});
