import { Page, Locator } from '@playwright/test';

export class SignupLoginPage {
  readonly page: Page;

  // Navigation
  readonly signupLoginLink: Locator;

  // Login
  readonly loginEmail: Locator;
  readonly loginPassword: Locator;
  readonly loginBtn: Locator;
  readonly loginHeader: Locator;
  readonly loginErrorMessage: Locator;

  // Signup
  readonly signupName: Locator;
  readonly signupEmail: Locator;
  readonly signupBtn: Locator;
  readonly signupHeader: Locator;
  readonly signupErrorMessage: Locator;

  // Post login/signup
  readonly loggedInText: Locator;
  readonly accountInfoHeader: Locator;

  constructor(page: Page) {
    this.page = page;

    // Navigation
    this.signupLoginLink = page.locator('a[href="/login"]');

    // Login
    this.loginEmail = page.locator('[data-qa="login-email"]');
    this.loginPassword = page.locator('[data-qa="login-password"]');
    this.loginBtn = page.locator('[data-qa="login-button"]');
    this.loginHeader = page.getByText('Login to your account');
    this.loginErrorMessage = page.getByText(/incorrect/i);

    // Signup
    this.signupName = page.locator('input[name="name"]');
    this.signupEmail = page.locator('[data-qa="signup-email"]');
    this.signupBtn = page.locator('[data-qa="signup-button"]');
    this.signupHeader = page.getByText('New User Signup!');
    this.signupErrorMessage = page.getByText(/already exist/i);

    // After login/signup
    this.loggedInText = page.getByText(/Logged in as/i);
    this.accountInfoHeader = page.getByText('Enter Account Information');
  }
}