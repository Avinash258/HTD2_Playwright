import {test, expect, Locator} from '@playwright/test'

test('xpath axes', async({page}) => {

await page.goto('https://www.w3schools.com/html/html_tables.asp');

//element i want to locate by itself,select td element that contains the germany text

 const germanycell:Locator =page.locator("//td[text()='Germany']/self::td");  //capturing the element and storing in the variable
   await expect(germanycell).toHaveText('Germany');//germany is visible or not for that using assertion


   const parent:Locator =page.locator("//td[text()='UK']/parent::tr");
   await expect(parent).toContainText('Island Trading');
//   await expect(parent).toContainText('Island Trading Helen Bennett UK');
   console.log(await parent.textContent())


const ParentCandacell:Locator =page.locator("//td[text()='Canada']/parent::tr");
await expect(ParentCandacell).toContainText('Canada');
console.log(await ParentCandacell.textContent())




const italycell:Locator=page.locator("//td[text()='Italy']/parent::tr");
await expect(italycell).toContainText('Italy');
console.log(await italycell.textContent())






})