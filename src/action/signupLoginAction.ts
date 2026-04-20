import { SignupLoginPage } from '../page/signupLoginPage';
import SignupLogin from '../../src/testdata/signupLogin.json';
import { expect } from '@playwright/test';
import SignupLoginData from '../../src/testdata/signupLogin.json';

export class SignupLoginAction {
  readonly signupLoginPage: SignupLoginPage;

  constructor(signupLoginPage: SignupLoginPage) {
    this.signupLoginPage = signupLoginPage;
  }

  async navigateToLogin() {
    await this.signupLoginPage.page.goto(SignupLoginData.baseUrl);
    await this.signupLoginPage.signupLoginLink.click();
    await this.signupLoginPage.loginEmail.waitFor();
  }

  async verifyLoginPageLoaded() {
    await expect(this.signupLoginPage.loginHeader).toBeVisible();
    await expect(this.signupLoginPage.signupHeader).toBeVisible();
  }
 
  async login(email: string, password: string) {
    await this.signupLoginPage.loginEmail.fill(email);
    await this.signupLoginPage.loginPassword.fill(password);
    await this.signupLoginPage.loginBtn.click();
  }
  async verifyInvalidLoginError() {
  await expect(this.signupLoginPage.loginErrorMessage).toBeVisible();
}
 async verifyLoginSuccess() {
  await expect(this.signupLoginPage.loggedInText).toBeVisible();
}
async verifySignupPageLoaded() {
  await expect(this.signupLoginPage.accountInfoHeader).toBeVisible();
}

async verifySignupError() {
  await expect(this.signupLoginPage.signupErrorMessage).toBeVisible();
}

  async signup(name: string, email: string) {
    await this.signupLoginPage.signupName.fill(name);
    await this.signupLoginPage.signupEmail.fill(email);
    await this.signupLoginPage.signupBtn.click();
  }

 
}