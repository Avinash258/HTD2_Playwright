import {Page , Locator} from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly fullname: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole("textbox", { name: "Username" });

    this.fullname = page.getByLabel("Full Name");

    this.loginButton = page.getByText("Log");
    this.loginButton = page.getByText("Login", { exact: true });
    this.usernameInput = page.getByPlaceholder("Username");

    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorMessage = page.locator('//div[@class="error-message-container error"]/h3', );
  }
}