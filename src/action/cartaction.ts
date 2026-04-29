import { CartPage } from "../page/cartPage";

export class CartAction {

    constructor(private readonly cartPage: CartPage) {}

    /**
     * Auto-waiting: Waits for page network to be idle before counting
     */
    async getCartItemsCount() {
        console.log('[CartAction] Getting cart items count...');
        // Auto-wait for page stability
        await this.cartPage.page.waitForLoadState('networkidle');
        const count = await this.cartPage.cartItem.count();
        console.log(`[CartAction] Found ${count} cart items`);
        return count;
    }

    /**
     * Auto-wait + waitForSelector: Waits for element to be visible before clicking
     */
    async openCart() {
        console.log('[CartAction] Opening cart...');
        // Wait for selector to be visible
        await this.cartPage.cartLink.waitFor({ state: 'visible', timeout: 5000 });
        await this.cartPage.cartLink.click();
        // Wait for page to stabilize after click
        await this.cartPage.page.waitForLoadState('networkidle');
        console.log('[CartAction] Cart opened successfully');
    }

    /**
     * Auto-waiting: Add item with network stability check
     */
    async addBackpackToCart() {
        console.log('[CartAction] Adding backpack to cart...');
        // Wait for button to be visible
        await this.cartPage.addBackpackButton.waitFor({ state: 'visible', timeout: 5000 });
        await this.cartPage.addBackpackButton.click();
        // Wait for page to update
        await this.cartPage.page.waitForLoadState('networkidle');
        console.log('[CartAction] Backpack added successfully');
    }

    /**
     * Auto-waiting: Remove item with explicit logging for debugging
     */
    async removeBackpackFromCart() {
        console.log('[CartAction] Removing backpack from cart...');
        // Wait for remove button to be visible
        await this.cartPage.removeBackpackButton.waitFor({ state: 'visible', timeout: 5000 });
        await this.cartPage.removeBackpackButton.click();
        // Wait for cart to update
        await this.cartPage.page.waitForLoadState('networkidle');
        console.log('[CartAction] Backpack removed successfully');
    }

    /**
     * Auto-waiting: Get badge count with dynamic content handling
     */
    async getCartBadgeCount(): Promise<number> {
        console.log('[CartAction] Getting cart badge count...');
        // Auto-wait for page stability
        await this.cartPage.page.waitForLoadState('networkidle');
        
        const badgeCount = await this.cartPage.cartBadge.count();
        if (badgeCount === 0) {
            console.log('[CartAction] No badge found, returning 0');
            return 0;
        }

        const badgeText = await this.cartPage.cartBadge.innerText();
        const count = Number(badgeText.trim());
        console.log(`[CartAction] Badge count: ${count}`);
        return count;
    }

    /**
     * Auto-waiting: Check visibility with network stability
     */
    async isBackpackVisibleInCart(): Promise<boolean> {
        console.log('[CartAction] Checking if backpack is visible in cart...');
        // Auto-wait for page stability
        await this.cartPage.page.waitForLoadState('networkidle');
        
        const isVisible = await this.cartPage.backpackItemInCart.isVisible();
        console.log(`[CartAction] Backpack visible: ${isVisible}`);
        return isVisible;
    }

}
