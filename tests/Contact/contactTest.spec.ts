// import { test, expect } from '@playwright/test';
// import { ContactPage } from '../../src/page/contactPage';
// import { ContactAction } from '../../src/action/contactAction';

// test('Contact Us form automation', async ({ page }) => {

//   const contactPage = new ContactPage(page);
//   const contactAction = new ContactAction(contactPage);

//   await page.goto('https://automationexercise.com/contact_us');

//   await contactAction.fillForm(
//     'John Doe',
//     'john@example.com',
//     'Test Subject',
//     'This is a test message'
//   );

//   await contactAction.uploadFile('tests/testdata/sample.txt');

//   await contactAction.submitForm();

//   await expect(contactPage.successMsg).toBeVisible();
// });