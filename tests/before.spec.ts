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

test ('TC01 - Valid user should login successfully', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
}); 

test('TC02 - Locked out user should not login', async ({ page }) => {
  // ...
});

test('TC03 - Invalid user should not login', async ({ page }) => {
  // ...
}); 
