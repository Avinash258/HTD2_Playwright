
import {test,expect} from  "../../src/fixture/fixtureR";
import { faker } from '@faker-js/faker';
import loginDate from "../../src/testdata/account.json"

test.only("Verify Account Registration Field", async ({ page, appaction, randomUser }) => {

  await page.goto(loginDate.BaseUrl);

  await appaction.home.clickOnSign();

  await appaction.account.singin(
    randomUser.username,
    randomUser.email
  );

  await expect(page).toHaveTitle(loginDate.Fill_up["My Page Title"]);
});
test.only
("Acccount is successful created ",async({page,appaction,randomUser})=>{
   await page.goto(loginDate.BaseUrl);

  await appaction.home.clickOnSign();

  await appaction.account.singin(
    randomUser.username,
    randomUser.email
  

  )
 
  await appaction.register.fillForm(loginDate.Fill_details.password,loginDate.Fill_details.firstName,loginDate.Fill_details.lastName,loginDate.Fill_details.address,loginDate.Fill_details.state,loginDate.Fill_details.city,loginDate.Fill_details.zipcode,loginDate.Fill_details.mobilenumber)
  //await page.waitForTimeout(3000);
  await appaction.register.submitForm()
  await expect(page).toHaveURL(/account_created|success/i);
});
test.only("Verified logging user displayed in nav-bar",async({page,appaction})=>{
 await page.goto(loginDate.BaseUrl);
  await appaction.home.clickOnSign();
  await appaction.account.loginin(loginDate.LoginDetails.loginID,loginDate.LoginDetails.password);
   await expect(page).toHaveTitle(loginDate.Title)
   await expect(page.locator('[class="fa fa-user"]')).toBeEnabled()
   
});
test.only("Delete the acccount",async({page,appaction})=>{
await page.goto(loginDate.BaseUrl);
  await appaction.home.clickOnSign()
    await appaction.account.loginin(loginDate.Account_datails.loginID,loginDate.Account_datails.password);
  await expect(page.locator('[class="fa fa-trash-o"]')).toBeVisible();
  await page.locator("//i[@class='fa fa-trash-o']").click()
  console.log("Deleted Account")
});
test.only("Verified logging out  displayed in nav-bar",async({page,appaction,})=>{
 await page.goto(loginDate.BaseUrl);
  await appaction.home.clickOnSign();
  await appaction.account.loginin(loginDate.LoginDetails.loginID,loginDate.LoginDetails.password);
   //await expect(page).toHaveTitle(loginData.Title)
   await expect(page.locator('[class="fa fa-user"]')).toBeEnabled()
   await expect(page.locator("[class='fa fa-lock']")).toBeVisible()//logout link
   await page.locator("[class='fa fa-lock']").click()
    await expect(page).toHaveTitle(loginDate.Fill_up["My Page LogoutTitle"])

});