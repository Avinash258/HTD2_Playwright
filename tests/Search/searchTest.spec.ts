import loginData from "../../src/testdata/login.json";
import searchData from "../../src/testdata/search.json";
import { getBaseUrl } from "../../src/Utils/env";
import { test, expect } from "../../src/fixture/fixture";
import { LoginAction } from "../../src/action/loginAction";

test.describe("Search / Sort Test Cases", () => {
  test.beforeEach(async ({ page, appAction }) => {
  
    await page.goto(getBaseUrl());
    await appAction.login.login(loginData.validUser.username, loginData.validUser.password);
    await expect(page).toHaveURL(new RegExp(loginData.inventoryUrlPattern));
  });

  test("TC07 - Sort products by Name A to Z", async ({ page, appAction }) => {
    await appAction.search.sortBy(searchData.sortOptions.nameAZ);
    expect(await appAction.search.getFirstProductName()).toBe(searchData.expectedFirstItem.nameAZ);
    await expect(page).toHaveScreenshot('sort-name-AZ.png');
  });

  test("TC08 - Sort products by Name Z to A", async ({ page, appAction }) => {
    await appAction.search.sortBy(searchData.sortOptions.nameZA);
    expect(await appAction.search.getFirstProductName()).toBe(searchData.expectedFirstItem.nameZA);
    await expect(page).toHaveScreenshot('sort-name-ZA.png');
  });

  test("TC09 - Sort products by Price Low to High", async ({ page, appAction }) => {
    await appAction.search.sortBy(searchData.sortOptions.priceLowHigh);
    expect(await appAction.search.getFirstProductName()).toBe(searchData.expectedFirstItem.priceLowHigh);
    expect(await appAction.search.getFirstProductPrice()).toBe(searchData.expectedFirstPrice.priceLowHigh);
    await expect(page).toHaveScreenshot('sort-price-low-high.png');
  });
  test("TC10 - Sort products by Price High to Low", async ({ page, appAction }) => {
    await appAction.search.sortBy(searchData.sortOptions.priceHighLow);
    expect(await appAction.search.getFirstProductName()).toBe(searchData.expectedFirstItem.priceHighLow);
    expect(await appAction.search.getFirstProductPrice()).toBe(searchData.expectedFirstPrice.priceHighLow);
    await expect(page).toHaveScreenshot('sort-price-high-low.png');
  });
});
