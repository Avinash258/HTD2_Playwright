import { test as base,expect } from "@playwright/test";
import { AccountAction } from "../action/accountAction";
import { AccountPage } from "../page/accountpage"
import { faker } from "@faker-js/faker";





type AppApplication = {
  
  
  account: AccountAction;
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
    
      account: new AccountAction(new AccountPage(page)),
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