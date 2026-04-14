import { Locator, Page} from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartItem: Locator;
    readonly cartLink: Locator;
    readonly cartBadge: Locator;
    readonly addBackpackButton: Locator;
    readonly removeBackpackButton: Locator;
    readonly backpackItemInCart: Locator;
    constructor(page: Page) {
        this.page = page;
        this.cartItem = page.locator('.cart_item');
        this.cartLink = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.removeBackpackButton = page.locator('#remove-sauce-labs-backpack');
        this.backpackItemInCart = page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' });
    }
}       