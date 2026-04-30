import { expect, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import * as fs from "fs/promises";
import * as path from "path";
import { RegistrationPage } from "../page/registration_page";
import

export type GeneratedRegistrationUser = {
  name: string;
  email: string;
  password: string;
};
 
type RegistrationData = {
  baseUrl: string;
  accountInfo: {
    password: string;
    day: string;
    month: string;
    year: string;
  };
  addressInfo: {
    firstName: string;
    lastName: string;
    address: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
  };
  //we are storing data to json jo user create honge 
  generatedUser: GeneratedRegistrationUser;
};
 
export class RegistrationAction {
  readonly registrationPage: RegistrationPage;
  private readonly registrationDataPath: string;
 
  constructor(page: Page) {
    this.registrationPage = new RegistrationPage(page);
    this.registrationDataPath = path.resolve(process.cwd(), "src/testdata/registration.json");
  }
 
  async readRegistrationData(): Promise<RegistrationData> {
    const raw = await fs.readFile(this.registrationDataPath, "utf-8");
    return JSON.parse(raw) as RegistrationData;
  }
 
  async storeGeneratedUser(user: GeneratedRegistrationUser): Promise<void> {
    const data = await this.readRegistrationData();
    data.generatedUser = user;
    await fs.writeFile(this.registrationDataPath, JSON.stringify(data, null, 2) + "\n", "utf-8");
  }
 
  createRandomUser(data: RegistrationData): GeneratedRegistrationUser {
    const name = faker.person.firstName();
    const email = faker.internet.email({
      firstName: name,
      provider: "examplemail.com",
    }).toLowerCase();
 
    return {
      name,
      email,
      password: data.accountInfo.password,
    };
  }
 
  async openSignupPage(baseUrl: string): Promise<void> {
    await this.registrationPage.page.goto(baseUrl);
    await this.registrationPage.signupLoginLink.click();
  }
 
  async submitSignupForm(name: string, email: string): Promise<void> {
    await this.registrationPage.signupName.fill(name);
    await this.registrationPage.signupEmail.fill(email);
    await this.registrationPage.signupButton.click();
  }
 
  async completeAccountCreation(data: RegistrationData): Promise<void> {
    await this.registrationPage.titleMr.check();
    await this.registrationPage.password.fill(data.accountInfo.password);
    await this.registrationPage.days.selectOption(data.accountInfo.day);
    await this.registrationPage.months.selectOption(data.accountInfo.month);
    await this.registrationPage.years.selectOption(data.accountInfo.year);
 
    await this.registrationPage.firstName.fill(data.addressInfo.firstName);
    await this.registrationPage.lastName.fill(data.addressInfo.lastName);
    await this.registrationPage.address.fill(data.addressInfo.address);
    await this.registrationPage.country.selectOption({ label: data.addressInfo.country });
    await this.registrationPage.state.fill(data.addressInfo.state);
    await this.registrationPage.city.fill(data.addressInfo.city);
    await this.registrationPage.zipcode.fill(data.addressInfo.zipcode);
    await this.registrationPage.mobileNumber.fill(data.addressInfo.mobileNumber);
 
    await this.registrationPage.createAccountButton.click();
    await expect(this.registrationPage.accountCreatedMessage).toBeVisible();
    await this.registrationPage.continueButton.click();
  }
 
  async registerNewRandomUserAndPersist(): Promise<GeneratedRegistrationUser> {
    const data = await this.readRegistrationData();
    const user = this.createRandomUser(data);
 
    await this.openSignupPage(data.baseUrl);
    await this.submitSignupForm(user.name, user.email);
    await this.completeAccountCreation(data);
 
    await this.storeGeneratedUser(user);
    return user;
  }
 
  async loginWithStoredUser(): Promise<void> {
    const data = await this.readRegistrationData();
    await this.registrationPage.page.goto(data.baseUrl);
    await this.registrationPage.signupLoginLink.click();
 
    await this.registrationPage.page.locator('[data-qa="login-email"]').fill(data.generatedUser.email);
    await this.registrationPage.page.locator('[data-qa="login-password"]').fill(data.generatedUser.password);
    await this.registrationPage.page.locator('[data-qa="login-button"]').click();
  }
}