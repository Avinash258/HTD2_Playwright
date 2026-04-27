
import loginData from  "../../src/testdata/account.json"
import {test,expect} from "../../src/fixture/fixtreAccount"

      
  test("TC-01 Verify Account Registration Field", async ({ page, appaction, randomUser }) => {
    await page.goto(loginData.BaseUrl);
    await appaction.account.clickOnSign();
    await appaction.account.singin(
      randomUser.username,
      randomUser.email
    );
    await expect(page).toHaveTitle(loginData.Fill_up["My Page Title"]);
});
test("TC_02 Acccount is successful created ",async({page,appaction,randomUser})=>{
  await page.goto(loginData.BaseUrl);
  await appaction.account.clickOnSign();
  await appaction.account.singin(
    randomUser.username,
    randomUser.email
    )
  await page.waitForTimeout(3000)
  await appaction.account.fillForm(loginData.Fill_password,loginData.firstName,loginData.lastName,loginData.address,loginData.state,loginData.city,loginData.zipcode,loginData.mobilenumber)
  //await page.waitForTimeout(3000);
  await appaction.account.submitForm()
  await expect(page).toHaveURL(/account_created|success/i);
});
test("TC-03 Verified logging user displayed in nav-bar",async({page,appaction})=>{
 await page.goto(loginData.BaseUrl);
  await appaction.account.clickOnSign();
  await appaction.account.loginin(loginData.LoginDetails.loginID,loginData.LoginDetails.password);
   await expect(page).toHaveTitle(loginData.Title)
   await expect(page.locator('[class="fa fa-user"]')).toBeEnabled()
   
});

test("TC_04 Verified logging out  displayed in nav-bar",async({page,appaction,})=>{
 await page.goto(loginData.BaseUrl);
  await appaction.account.clickOnSign();
  await appaction.account.loginin(loginData.LoginDetails.loginID,loginData.LoginDetails.password);
   //await expect(page).toHaveTitle(loginData.Title)
   await expect(page.locator('[class="fa fa-user"]')).toBeEnabled()
   await expect(page.locator("[class='fa fa-lock']")).toBeVisible()//logout link
   await page.locator("[class='fa fa-lock']").click()
    await expect(page).toHaveTitle(loginData.Fill_up["My Page LogoutTitle"])

});

test("TC_05 Delete the account", async ({ page, appaction, randomUser }) => {
  await page.goto(loginData.BaseUrl);
  await appaction.account.clickOnSign();
  await appaction.account.singin(
    randomUser.username,
    randomUser.email
  );
  console.log(randomUser)
  await expect(page).toHaveTitle(loginData.Fill_up["My Page Title"]);
  await appaction.account.fillForm(loginData.Fill_password,loginData.firstName,loginData.lastName,loginData.address,loginData.state,loginData.city,loginData.zipcode,loginData.mobilenumber)
  await appaction.account.submitForm();
  await expect(page).toHaveURL('https://automationexercise.com/account_created');
  //click continue in registration
  await appaction.account.continueRegistration();
  await appaction.account.logoutButton();
  await appaction.account.randomsingin(randomUser.email,loginData.Fill_password)
});