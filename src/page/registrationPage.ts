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
<<<<<<< HEAD
    
    readonly createAccountButton: Locator;// Updated by Goury
    
 
    
    
// Arvind
    readonly city:Locator;
   // readonly newsletter: Locator;
//readonly SpecialoffersNewsletter: Locator;
=======
    readonly newsletter: Locator;
    readonly SpecialoffersNewsletter: Locator;
    
    readonly create_Account :Locator;
 


    readonly country: Locator; // updated by shubham
    readonly state: Locator; // updated by shubham

    readonly days: Locator;
    readonly months: Locator;
    readonly years: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
>>>>>>> develop
    readonly zipcode: Locator;

<<<<<<< HEAD
    readonly address: Locator;
    readonly create_Account :Locator;
 


    readonly country: Locator; // updated by shubham
    readonly state: Locator; // updated by shubham
    readonly mobilenumber: Locator; // Anil
=======
    readonly accountCreatedMessage: Locator;
    readonly continueButton: Locator;
    readonly loggedInAsText: Locator;    readonly newsletter: Locator;
    readonly SpecialoffersNewsletter: Locator;
    
 


>>>>>>> develop

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
<<<<<<< HEAD
        this.zipcode = page.locator('//input[@data-qa="zipcode"]');
        this.date = page.locator('#days');
        this.month = page.locator('//select[@data-qa="months"]');
        this.year = page.locator('[name="years"]');
        
        
          
        this.city=page.locator('input[name="city"]');
=======

        this.date = page.locator('#days');
        this.month = page.locator('//select[@data-qa="months"]');
        this.year = page.locator('[name="years"]');
        //Deepanshu changes
        
        this.create_Account=page.locator('//button[text()="Create Account"]')
        
        

        this.country = page.locator("//select[@id='country']");  // updated by shubham
        this.state = page.locator("//input[@id='state']"); // updated by shubham
        


}

        this.signupLoginLink = page.getByRole("link", { name: "Signup / Login" });
        this.signupName = page.locator('[data-qa="signup-name"]');
        this.signupEmail = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.locator('[data-qa="signup-button"]');
        this.signupLoginLink = page.getByRole('link', { name: 'Sign Up / Login' });
        this.signupName = page.getByRole('textbox', { name: 'Name' });
        this.signupEmail = page.locator('//*[@data-qa="signup-email"]');
        this.signupButton = page.getByRole('button', { name: 'Sign Up' });
        this.titleMr =    page.getByRole('radio', { name: 'Mr' });
        this.password = page.getByLabel('password');

        this.days = page.locator('#days');
        this.months = page.locator('//select[@data-qa="months"]');
        this.years = page.locator('[name="years"]');
        this.newsletter = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
        this.SpecialoffersNewsletter = page.getByRole('checkbox', { name: 'Receive special offers from our partners!' });
        
        

>>>>>>> develop





        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });

        this.newsletter = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
        this.SpecialoffersNewsletter = page.getByRole('checkbox', { name: 'Receive special offers from our partners!' });
        //Deepanshu changes
        
        this.create_Account=page.locator('//button[text()="Create Account"]')
        
        

        this.country = page.locator("//select[@id='country']");  // updated by shubham Nigam
        this.state = page.locator("//input[@id='state']"); // updated by shubham Nigam
        
        this.mobilenumber = page.locator("//input[@id='mobile_number']"); // Anil

}

}

