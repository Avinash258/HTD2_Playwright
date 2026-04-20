import { Page, Locator } from "@playwright/test";

export class ProductPage {
  readonly page: Page;

  readonly productlinkNav: Locator;
  readonly allproductTitle: Locator;
  readonly allproductList: Locator;

  readonly searchinputClick: Locator;
  readonly searchedProducts: Locator;
  readonly searchButton: Locator;

  readonly viewproductButton: Locator;
  readonly productInformation: Locator;

  readonly homecategoryHeading: Locator;
  readonly womenCategory: Locator;
  readonly dressSubCategory: Locator;
  readonly dressproductHeading: Locator;

  readonly brandTitle: Locator;
  readonly brandpoloclick: Locator;
  readonly brandpoloDetails: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productlinkNav = page.getByRole("link", { name: /products/i });

    this.allproductTitle = page.getByRole("heading", { name: /all products/i });
    this.allproductList = page.locator(".features_items");

    this.searchinputClick = page.getByPlaceholder("Search Product");
    this.searchedProducts = page.getByText("Searched Products");
    this.searchButton = page.locator("#submit_search");

    this.viewproductButton = page.getByRole("link", { name: /view product/i }).first();
    this.productInformation = page.locator(".product-information");

    this.homecategoryHeading = page.getByRole("heading", { name: /category/i });
    this.womenCategory = page.getByRole("link", { name: "Women" });
    this.dressSubCategory = page.getByRole("link", { name: "Dress" });
    this.dressproductHeading = page.getByRole("heading", {
      name: /women - dress products/i,
    });

    this.brandTitle = page.getByRole("heading", { name: /brands/i });
    this.brandpoloclick = page.getByRole("link", { name: /polo/i });
    this.brandpoloDetails = page.getByRole("heading", {
      name: /brand - polo products/i,
    });
  }
}