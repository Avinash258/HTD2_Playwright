import { Locator, Page } from "playwright";

export class Registration {
    readonly page: Page;
    readonly FirstName: Locator
    readonly LastName: Locator
    readonly Address: Locator
    readonly City: Locator
    readonly State: Locator
    readonly ZipCode: Locator
    readonly Phone: Locator
    readonly SSN: Locator
    readonly Username: Locator
    readonly Password: Locator
    readonly Confirm: Locator
    readonly Register: Locator
    constructor(page: Page) {

        this.page = page
        this.FirstName = page.locator('//input[@id="customer.firstName"]');
        this.LastName = page.locator('//input[@id="customer.lastName"]');
        this.Address = page.locator('//input[@id="customer.address.street"]');
        this.City = page.locator('//input[@id="customer.address.city"]');
        this.State = page.locator('//input[@id="customer.address.state"]');
        this.ZipCode = page.locator('//input[@id="customer.address.zipCode"]');
        this.Phone = page.locator('//input[@id="customer.phoneNumber"]');
        this.SSN = page.locator('//input[@id="customer.ssn"]');
        this.Username = page.locator('//input[@id="customer.username"]');
        this.Password = page.locator('//input[@id="customer.password"]');
        this.Confirm = page.locator('//input[@id="repeatedPassword"]');
        this.Register = page.getByRole("button", { name: "Register" });
    }


}