import { CartPage } from "../page/cartPage";

export class CartAction {

constructor (private readonly cartPage: CartPage) {}


getCartItemsCount() {
    return this.cartPage.cartItem.count();
}

async openCart() {
    await this.cartPage.cartLink.click();
}

async addBackpackToCart() {
    await this.cartPage.addBackpackButton.click();
}

async removeBackpackFromCart() {
    await this.cartPage.removeBackpackButton.click();
}

async getCartBadgeCount() {
    if (await this.cartPage.cartBadge.count() === 0) {
        return 0;
    }

    const badgeText = await this.cartPage.cartBadge.innerText();
    return Number(badgeText.trim());
}

isBackpackVisibleInCart() {
    return this.cartPage.backpackItemInCart.isVisible();
}


}
