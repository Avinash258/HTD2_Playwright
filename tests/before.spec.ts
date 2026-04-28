import { test, expect } from '@playwright/test';



test.beforeAll(async () => {
  console.log('Before tests');
});

test.afterAll(async () => {
  console.log('After tests');
});

test('my test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});

test('TC01 - Example domain has correct title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
}); 

test.skip('TC02 - Locked out user should not login', async () => {
  // Intentionally skipped until locked user flow assertions are implemented.
});

test.skip('TC03 - Invalid user should not login', async () => {
  // Intentionally skipped until invalid user flow assertions are implemented.
}); 
