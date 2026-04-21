import { expect, Page } from "@playwright/test";
import { SignupLoginPage } from "../page/signupLoginPage";
import SignupLoginData from "../testdata/signupLogin.json";

export class SignupLoginAction {
  readonly page: SignupLoginPage;

  constructor(page: Page) {
    this.page = new SignupLoginPage(page);
  }

  async navigateToLogin() {
    await this.page.page.goto(SignupLoginData.baseUrl);

    await Promise.all([
      this.page.page.waitForURL("**/login"),
      this.page.signupLoginLink.click(),
    ]);

    await expect(this.page.loginEmail).toBeVisible();
  }

  async verifyLoginPageLoaded() {
    await expect(this.page.loginHeader).toBeVisible();
    await expect(this.page.signupHeader).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.page.loginEmail.fill(email);
    await this.page.loginPassword.fill(password);
    await this.page.loginBtn.click();
  }

  async verifyLoginSuccess() {
    await expect(this.page.loggedInText).toBeVisible();
  }

  async verifyInvalidLoginError() {
    await expect(this.page.loginErrorMessage).toBeVisible();
  }

  async signup(name: string, email: string) {
    await this.page.signupName.fill(name);
    await this.page.signupEmail.fill(email);
    await this.page.signupBtn.click();
  }

  async verifySignupPageLoaded() {
    await expect(this.page.accountInfoHeader).toBeVisible();
  }

  async verifySignupError() {
    await expect(this.page.signupErrorMessage).toBeVisible();
  }

  generateEmail() {
    return `test_${Date.now()}@gmail.com`;
  }
}