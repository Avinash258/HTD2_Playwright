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


const Mexicocell:Locator =page.locator("//td[text()='Mexico']/self::td");
expect(Mexicocell).toHaveText('Mexico');
console.log(await  Mexicocell.textContent())

//child axes-->I want to get the td element of the second tr

const secondtrcell =page.locator("//table[@id='customers']//tr[2]/child::td");
await expect(secondtrcell).toHaveCount(3);
//console.log(await secondtrcell.allTextContents())

//Parent axes--> get ancestor table of the germany cell

//td[text()='Germany']/parent::tr/parent::tbody/parent::table

const ancestortable:Locator=page.locator("//td[text()='Germany']/ancestor::table");
expect(ancestortable).toHaveAttribute('id', 'customers');
console.log(await ancestortable.textContent())


//descendant axes--> get all the td elements of the table


const desendanttable:Locator=page.locator("//table[@id='customers']/descendant::td");
expect ( desendanttable).toHaveCount(18);
console.log(await desendanttable.allTextContents())


const followingtd =page.locator("//td[normalize-space()='Germany']/following::td[1]");
expect(followingtd).toHaveText('Centro comercial Moctezuma');
console.log(await followingtd.allTextContents())


const preceding:Locator=page.locator("//td[text()='Germany']/preceding::td[1]");
expect(preceding).toHaveText('Alfreds Futterkiste');
console.log(preceding.allTextContents())
});