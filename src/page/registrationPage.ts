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
    readonly loggedInAsText: Locator;    readonly newsletter: Locator;
    readonly SpecialoffersNewsletter: Locator;
<<<<<<< HEAD
=======
    
 

>>>>>>> a46aba6 (Merge branch 'develop' into develop_zayd)


    constructor(page: Page) {
        this.page = page;
<<<<<<< HEAD
        this.signupLoginLink = page.getByRole("link", { name: "Signup / Login" });
        this.signupName = page.locator('[data-qa="signup-name"]');
        this.signupEmail = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.locator('[data-qa="signup-button"]');
=======
        this.signupLoginLink = page.getByRole('link', { name: 'Sign Up / Login' });
        this.signupName = page.getByRole('textbox', { name: 'Name' });
        this.signupEmail = page.locator('//*[@data-qa="signup-email"]');
        this.signupButton = page.getByRole('button', { name: 'Sign Up' });
        this.title =    page.getByRole('radio', { name: 'Mr' });
        this.username = page.getByLabel('name');
        this.useremail = page.getByLabel('email');
        this.password = page.getByLabel('password');

        this.date = page.locator('#days');
        this.month = page.locator('//select[@data-qa="months"]');
        this.year = page.locator('[name="years"]');
        this.newsletter = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
        this.SpecialoffersNewsletter = page.getByRole('checkbox', { name: 'Receive special offers from our partners!' });
        
        

>>>>>>> a46aba6 (Merge branch 'develop' into develop_zayd)

        this.titleMr = page.locator("#id_gender1");
        this.password = page.locator('[data-qa="password"]');
        this.days = page.locator('[data-qa="days"]');
        this.months = page.locator('[data-qa="months"]');
        this.years = page.locator('[data-qa="years"]');
        this.firstName = page.locator('[data-qa="first_name"]');
        this.lastName = page.locator('[data-qa="last_name"]');
        this.address = page.locator('[data-qa="address"]');
        this.country = page.locator('[data-qa="country"]');
        this.state = page.locator('[data-qa="state"]');
        this.city = page.locator('[data-qa="city"]');
        this.zipcode = page.locator('[data-qa="zipcode"]');
        this.mobileNumber = page.locator('[data-qa="mobile_number"]');
        this.createAccountButton = page.locator('[data-qa="create-account"]');

        this.accountCreatedMessage = page.getByText("Account Created!");
        this.continueButton = page.locator('[data-qa="continue-button"]');
        this.loggedInAsText = page.getByText("Logged in as");
    }
}

