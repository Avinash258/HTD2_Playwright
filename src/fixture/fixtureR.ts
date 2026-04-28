import { test as base, expect } from "@playwright/test";
import { HomeAction } from "../action/homeaction";
import { HomePage } from "../page/homepage";
import { AccountPage } from "../page/Accountpage";
import { AccountAction } from "../action/accountaction";
import { RegistrationAction } from "../action/registration_action";
import { RegistrationPage } from "../page/registration_page"
import loginData from "../testdata/registration.json";
import { faker } from "@faker-js/faker";



type AppApplication = {
  home: HomeAction;
  account: AccountAction;
  register: RegistrationAction;
};

type RandomUser = {
  username: string;
  email: string;
  password: string;
};

type Fixture = {
  appaction: AppApplication;
  randomUser: RandomUser;
};


export const test = base.extend<Fixture>({

  // APP ACTION FIXTURE
  appaction: async ({ page }, use) => {
    const appAction: AppApplication = {
      home: new HomeAction(new HomePage(page)),
      account: new AccountAction(new AccountPage(page)),
      register: new RegistrationAction(new RegistrationPage(page)),
    };

    await use(appAction);
  },

  // RANDOM DATA FIXTURE
  randomUser: async ({}, use) => {
    await use({
      username: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password({ length: 10 }),
    });
  },

});
export { expect } from "@playwright/test";