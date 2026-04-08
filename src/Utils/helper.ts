import { Page, expect } from "@playwright/test";

/**
 * Navigate to the base URL and wait for the page to load.
 */
export async function navigateTo(page: Page, url: string) {
    await page.goto(url);
}

/**
 * Login helper — navigates to base URL and performs login.
 */
export async function loginAs(
    page: Page,
    appAction: { login: (u: string, p: string) => Promise<void> },
    username: string,
    password: string,
    baseUrl: string
) {
    await page.goto(baseUrl);
    await appAction.login(username, password);
}

/**
 * Asserts cart badge count matches expected value.
 */
export async function expectBadgeCount(
    appAction: { getCartBadgeCount: () => Promise<number> },
    expected: number
) {
    expect(await appAction.getCartBadgeCount()).toBe(expected);
}

/**
 * Opens cart and asserts item count matches expected value.
 */
export async function expectCartState(
    appAction: {
        getCartBadgeCount: () => Promise<number>;
        openCart: () => Promise<void>;
        getCartItemsCount: () => Promise<number>;
    },
    expectedBadgeCount: number,
    expectedItemCount: number
) {
    expect(await appAction.getCartBadgeCount()).toBe(expectedBadgeCount);
    await appAction.openCart();
    expect(await appAction.getCartItemsCount()).toBe(expectedItemCount);
}

/**
 * Parses a price string like "$7.99" and returns a float.
 */
export function parsePrice(priceText: string): number {
    return parseFloat(priceText.replace("$", "").trim());
}

/**
 * Asserts the current page URL contains the given pattern.
 */
export async function expectUrlContains(page: Page, pattern: string) {
    await expect(page).toHaveURL(new RegExp(pattern));
}
