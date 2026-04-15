import loginData from "../../src/testdata/login.json";
import { test , expect } from "../../src/fixture/fixture";

test.beforeAll(async ({ page,  }) => {
    await page.goto(loginData.baseUrl);
await console.log("Before Each Hook");
}
);
test.afterAll  (async ({ page }) => {
    
await console.log("After Each Hook");
});

test("TC01 - Valid user should login successfully", async ({ page, appAction }) => {
await appAction.login.loginWithClear(loginData.validUser.username,loginData.validUser.password);
//await appAction.login.login(loginData.validUser.username, loginData.validUser.password);
//await expect(page).toHaveTitle(loginData.PageTile);
await expect.soft(page).toHaveTitle("Avi");
//await expect(page).toHaveURL(new RegExp(loginData.inventoryUrlPattern));
await appAction.search.sortBy("Name (A to Z)");
});

test("TC02 - Locked out user should not login", async ({ appAction }) => {
await appAction.login.login(loginData.lockedUser.username, loginData.lockedUser.password);
const errorMessage = await appAction.login.getErrorMessage();
await expect(errorMessage).toHaveText(loginData.lockedUser.errorMessage);
});

test("TC03 - Invalid user should not login", async ({ appAction }) => {
await appAction.login.login(loginData.invalidUser.username, loginData.invalidUser.password);
const errorMessage = await appAction.login.getErrorMessage();
await expect(errorMessage).toHaveText(loginData.invalidUser.errorMessages);
});