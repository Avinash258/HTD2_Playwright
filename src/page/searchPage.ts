import { Locator, Page } from '@playwright/test';

export class SearchPage {
    readonly page: Page;
    readonly sortDropdown: Locator;
    readonly productNames: Locator;
    readonly productPrices: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sortDropdown = page.locator('.product_sort_container');
        this.productNames = page.locator('.inventory_item_name');
        this.productPrices = page.locator('.inventory_item_price');
    }
}
