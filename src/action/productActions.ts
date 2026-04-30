import { Page, expect } from "@playwright/test";
import { ProductPage } from "../page/productPages";

export class ProductAction {
  readonly productPage: ProductPage;

  constructor(page: Page) {
    this.productPage = new ProductPage(page);
  }

  async openProductsPage() {
    await this.productPage.productlinkNav.click();

    await expect(this.productPage.allproductTitle).toBeVisible();
    await expect(this.productPage.allproductList).toBeVisible();
  }

  async searchProduct(product: string) {
    await this.productPage.searchinputClick.fill(product);
    await this.productPage.searchButton.click();

    await expect(this.productPage.searchedProducts).toBeVisible();
  }

  async viewProductDetails() {
    await this.productPage.viewproductButton.click();

    await expect(this.productPage.productInformation).toBeVisible();
  }

  async filterWomenDressCategory() {
    await expect(this.productPage.homecategoryHeading).toBeVisible();

    await this.productPage.womenCategory.click();
    await this.productPage.dressSubCategory.click();

    await expect(this.productPage.dressproductHeading).toBeVisible();
  }

  async filterBrandPolo() {
    await expect(this.productPage.brandTitle).toBeVisible();

    await this.productPage.brandpoloclick.click();

    await expect(this.productPage.brandpoloDetails).toBeVisible();
  }
}