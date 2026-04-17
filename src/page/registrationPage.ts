import { Locator, Page} from '@playwright/test';

export class RegistrationPage {
    readonly page: Page;
    readonly signupLoginLink: Locator;
    readonly signupName: Locator;
    readonly signupEmail: Locator;
    readonly signupButton: Locator;
    readonly title :Locator;
    readonly title2 :Locator;
    readonly username: Locator;
    readonly useremail: Locator;
    readonly password: Locator;
    readonly date: Locator;
    readonly month: Locator;
    readonly year: Locator;
    readonly newsletter: Locator;
    readonly SpecialoffersNewsletter: Locator;
    readonly zipcode: Locator;

    
 


    readonly country: Locator; // updated by shubham
    readonly state: Locator; // updated by shubham
    readonly mobilenumber: Locator; // Anil

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
        this.zipcode = page.locator('//input[@data-qa="zipcode"]');
        this.date = page.locator('#days');
        this.month = page.locator('//select[@data-qa="months"]');
        this.year = page.locator('[name="years"]');
        
        
          
        this.city=page.locator('input[name="city"]');





        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });

        this.newsletter = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
        this.SpecialoffersNewsletter = page.getByRole('checkbox', { name: 'Receive special offers from our partners!' });
        //Deepanshu changes
        
         this.country = page.locator('#country');

        this.city=page.locator('input[name="city"]');
        this.create_Account=page.locator('//button[text()="Create Account"]')
        
        

        this.country = page.locator("//select[@id='country']");  // updated by shubham Nigam
        this.state = page.locator("//input[@id='state']"); // updated by shubham Nigam
        
        this.mobilenumber = page.locator("//input[@id='mobile_number']"); // Anil

}

}

