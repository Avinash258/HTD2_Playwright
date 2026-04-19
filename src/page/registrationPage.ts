import { Locator, Page } from "@playwright/test";

export class RegistrationPage {
    readonly page: Page;
    readonly signupLoginLink: Locator;
    readonly signupName: Locator;
    readonly signupEmail: Locator;
    readonly signupButton: Locator;

    readonly titleMr: Locator;
    readonly password: Locator;
    readonly days: Locator;
    readonly months: Locator;
    readonly years: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccountButton: Locator;

    readonly accountCreatedMessage: Locator;
    readonly continueButton: Locator;
    readonly loggedInAsText: Locator;    readonly mobilenumber: Locator; // Anil

    constructor(page: Page) {
        this.page = page;
        this.signupLoginLink = page.getByRole('link', { name: 'Sign Up / Login' });
        this.signupName = page.getByRole('textbox', { name: 'Name' });
        this.signupEmail = page.locator('//*[@data-qa="signup-email"]');
        this.signupButton = page.getByRole('button', { name: 'Sign Up' });
        this.title =    page.getByRole('radio', { name: 'Mr' });
        this.title2 =    page.getByRole('radio', { name: 'Mrs' });
        this.username = page.getByLabel('name');
        this.useremail = page.getByLabel('email');
        this.password = page.getByLabel('password');
        this.zipcode = page.locator('//input[@data-qa="zipcode"]');
        this.date = page.locator('#days');
        this.month = page.locator('//select[@data-qa="months"]');
        this.year = page.locator('[name="years"]');
        //Deepanshu changes
        
        this.create_Account=page.locator('//button[text()="Create Account"]')
        
        

        this.country = page.locator("//select[@id='country']");  // updated by shubham
        this.state = page.locator("//input[@id='state']"); // updated by shubham
        











        this.mobilenumber = page.locator("//input[@id='mobile_number']"); // Anil

}

}

