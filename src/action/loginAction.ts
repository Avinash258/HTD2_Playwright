import { Locator, Page } from "@playwright/test";
import { LoginPage } from "../page/loginPage";

export class LoginAction {
  readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }

  async login(username: string, password: string) {
    await this.loginPage.usernameInput.fill(username);
    await this.loginPage.passwordInput.fill(password);
    await this.loginPage.loginButton.click();
  }
  async loginWithClear(username: string, password: string) {
    await this.loginPage.usernameInput.fill(username);
    await this.loginPage.usernameInput.clear();
    await this.loginPage.usernameInput.fill(username);
    await this.loginPage.passwordInput.fill(password);
    await this.loginPage.loginButton.click();
    console.log("Login attempted with cleared username input.");
  }

  getErrorMessage(): Locator {
    return this.loginPage.errorMessage;
  }
}
