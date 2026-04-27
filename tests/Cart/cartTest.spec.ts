import loginData from "../../src/testdata/login.json";
import { getBaseUrl } from "../../src/Utils/env";
import { test, expect } from "../../src/fixture/fixture";
import { expectCartState } from "../../src/Utils/helper";

test.describe("Cart Page Test Cases", () => {
  test.beforeEach(async ({ page, appAction }) => {
    await page.goto(getBaseUrl());
    await appAction.login.login(loginData.validUser.username, loginData.validUser.password);
    await expect(page).toHaveURL(new RegExp(loginData.inventoryUrlPattern));
  });

  test("TC04 - User can add backpack and see it in cart", async ({ appAction }) => {
    await appAction.cart.addBackpackToCart();
    await expectCartState(appAction.cart, 1, 1);
    expect(await appAction.cart.isBackpackVisibleInCart()).toBeTruthy();
  });

  test("TC05 - User can remove backpack from cart", async ({ appAction }) => {
    await appAction.cart.addBackpackToCart();
    expect(await appAction.cart.getCartBadgeCount()).toBe(1);
    await appAction.cart.removeBackpackFromCart();
    await expectCartState(appAction.cart, 0, 0);
  });

  test("TC06 - New login starts with empty cart", async ({ appAction }) => {
    await expectCartState(appAction.cart, 0, 0);
  });
});
