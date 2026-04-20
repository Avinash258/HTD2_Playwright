// import { Page, Locator } from "@playwright/test";

// export class ContactPage {

//   readonly page: Page;

//   readonly name: Locator;
//   readonly email: Locator;
//   readonly subject: Locator;
//   readonly message: Locator;
//   readonly fileUpload: Locator;
//   readonly submitBtn: Locator;
//   readonly successMsg: Locator;

//   constructor(page: Page) {
//     this.page = page;

//     this.name = page.locator('input[name="name"]');
//     this.email = page.locator('input[name="email"]');
//     this.subject = page.locator('input[name="subject"]');
//     this.message = page.locator('textarea[name="message"]');
//     this.fileUpload = page.locator('input[type="file"]');
//     this.submitBtn = page.locator('input[type="submit"]');
//     this.successMsg = page.locator('.status.alert-success'); 
//   }
// }