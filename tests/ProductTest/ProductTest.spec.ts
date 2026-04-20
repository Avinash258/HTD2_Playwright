import { test, expect } from "../../src/fixture/Product.fixture";
import productData from "../../src/testdata/productData.json"

test.describe("Products Module", () => {

  test("TC1 - verify all products page opens", async ({ appAction }: any) => {
    await appAction.product.openProductsPage();
  });

  test("TC2 - verify product search functionality", async ({ appAction }: any) => {
    await appAction.product.openProductsPage();
    await appAction.product.searchProduct(productData.searchTerm);
  });

  test("TC3 - verify product detail page opens", async ({ appAction }: any) => {
    await appAction.product.openProductsPage();
    await appAction.product.viewProductDetails();
  });

  test("TC4 - verify category filter women dress", async ({ page, appAction }: any) => {
    await page.goto("https://automationexercise.com");
    await appAction.product.filterWomenDressCategory();
  });

  test("TC5 - verify brand filter polo", async ({ appAction }: any) => {
    await appAction.product.openProductsPage();
    await appAction.product.filterBrandPolo();
  });

});