import { test, expect } from "../../src/fixture/fixture";

test.describe.configure({ mode: "serial" });

test.describe("Registration flow", () => {
  test("TC11 - Register user with Faker email and store in JSON", async ({ page, appAction }) => {
    const user = await appAction.registration.registerNewRandomUserAndPersist();
    await expect(appAction.registration.registrationPage.loggedInAsText).toBeVisible();

    const savedData = await appAction.registration.readRegistrationData();
    expect(savedData.generatedUser.email).toBe(user.email);
    expect(savedData.generatedUser.name).toBe(user.name);
  });

  test("TC12 - Login using stored generated user", async ({ page, appAction }) => {
    const data = await appAction.registration.readRegistrationData();
    await test.skip(!data.generatedUser.email, "No generated user found in registration.json");

    await appAction.registration.loginWithStoredUser();
    await expect(appAction.registration.registrationPage.loggedInAsText).toBeVisible();
  });
});
