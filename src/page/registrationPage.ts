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
  readonly loggedInAsText: Locator;
    readonly page: Page;
    readonly signupLoginLink: Locator;
    readonly signupName: Locator;
    readonly signupEmail: Locator;
    readonly signupButton: Locator;
 
    readonly titleMr: Locator;
    readonly password: Locator;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    readonly date: Locator;
    readonly month: Locator;
    readonly year: Locator;
<<<<<<<<< Temporary merge branch 1
    readonly newsletter: Locator;
    readonly SpecialoffersNewsletter: Locator;
=========
   // readonly newsletter: Locator;
//readonly SpecialoffersNewsletter: Locator;
>>>>>>>>> Temporary merge branch 2
    readonly zipcode: Locator;

    
 
=======
=======
    readonly date: Locator;
    readonly month: Locator;
    readonly year: Locator;
    readonly newsletter: Locator;
    readonly SpecialoffersNewsletter: Locator;
    
    readonly create_Account :Locator;
 


    readonly country: Locator; // updated by shubham
    readonly state: Locator; // updated by shubham

>>>>>>> cd5c3ceedfc5ae1802e5509a842d3121f8fd1de3
=======
>>>>>>> abfa091a8f54146ccfd4205147842c6b444089bd
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
<<<<<<< HEAD
>>>>>>> 939251932b8bb3e7fd8466be253544e21126253e

=======
 
>>>>>>> abfa091a8f54146ccfd4205147842c6b444089bd
    readonly accountCreatedMessage: Locator;
    readonly continueButton: Locator;
    readonly loggedInAsText: Locator;    readonly newsletter: Locator;
    readonly SpecialoffersNewsletter: Locator;
    
 


 
    constructor(page: Page) {
        this.page = page;
        this.signupLoginLink = page.getByRole("link", { name: "Signup / Login" });
        this.signupName = page.locator('[data-qa="signup-name"]');
        this.signupEmail = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.locator('[data-qa="signup-button"]');

    this.titleMr = page.locator("#id_gender1");
    this.password = page.locator('[data-qa="password"]');
    readonly accountCreatedMessage: Locator;
    readonly continueButton: Locator;
    readonly loggedInAsText: Locator;  
    readonly newsletter: Locator;
    readonly SpecialoffersNewsletter: Locator;


    constructor(page: Page) {
        this.page = page;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cd5c3ceedfc5ae1802e5509a842d3121f8fd1de3
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
        this.zipcode = page.locator('//input[@data-qa="zipcode"]');
        this.date = page.locator('#days');
        this.month = page.locator('//select[@data-qa="months"]');
        this.year = page.locator('[name="years"]');
        
        
          
        this.city=page.locator('input[name="city"]');
=======
=======

        this.date = page.locator('#days');
        this.month = page.locator('//select[@data-qa="months"]');
        this.year = page.locator('[name="years"]');
        //Deepanshu changes
        
        this.create_Account=page.locator('//button[text()="Create Account"]')
        
        

        this.country = page.locator("//select[@id='country']");  // updated by shubham
        this.state = page.locator("//input[@id='state']"); // updated by shubham
        


}

>>>>>>> cd5c3ceedfc5ae1802e5509a842d3121f8fd1de3
=======
>>>>>>> abfa091a8f54146ccfd4205147842c6b444089bd
        this.signupLoginLink = page.getByRole("link", { name: "Signup / Login" });
        this.signupName = page.locator('[data-qa="signup-name"]');
        this.signupEmail = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.locator('[data-qa="signup-button"]');
<<<<<<< HEAD
>>>>>>> 939251932b8bb3e7fd8466be253544e21126253e
=======
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
<<<<<<< HEAD
        
        

>>>>>>> cd5c3ceedfc5ae1802e5509a842d3121f8fd1de3

=======
>>>>>>> abfa091a8f54146ccfd4205147842c6b444089bd
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
 
        this.accountCreatedMessage = page.getByText("Account Created!");
        this.continueButton = page.locator('[data-qa="continue-button"]');
        this.loggedInAsText = page.getByText("Logged in as");
    }
}

