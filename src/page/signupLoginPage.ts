import { Page, Locator } from '@playwright/test';

export class SignupLoginPage {

  readonly page: Page;
  readonly loginEmail: Locator;
  readonly loginPassword: Locator;
  readonly loginBtn: Locator;
  readonly signupName: Locator;
  readonly signupEmail: Locator;
  readonly signupBtn: Locator;
  readonly signupLoginLink: Locator;
  readonly loginHeader: Locator;
  readonly signupHeader: Locator;
  readonly loggedInText :Locator;
  readonly loginErrorMessage: Locator;
  readonly accountInfoHeader: Locator;
  readonly signupErrorMessage: Locator;

  constructor(page: Page) {

    this.page = page;
    this.signupLoginLink = page.locator('a[href="/login"]');
    this.loginEmail = page.locator('[data-qa="login-email"]');
    this.loginPassword = page.locator('[data-qa="login-password"]');
    this.loginBtn = page.locator('[data-qa="login-button"]');
    this.signupName = page.locator('input[name="name"]');
    this.signupEmail = page.locator('[data-qa="signup-email"]');
    this.signupBtn = page.locator('[data-qa="signup-button"]');
    this.loginHeader = page.locator('text=Login to your account');
    this.signupHeader = page.locator('text=New User Signup!');
    this.loggedInText = page.locator('//a[contains(text(),"Logged in as")]/ancestor-or-self::a');
    this.loginErrorMessage =page.locator('text=Your email or password is incorrect!');
    this.accountInfoHeader = page.getByText('Enter Account Information');
    this.signupErrorMessage = this.page.getByText('Email Address already exist!');
  }
}