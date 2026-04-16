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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    readonly State: Locator;
>>>>>>> 1a46da3c5dfdfd95f4834b4aba9595e72d8bcce3
    
 
    
    
// Arvind
    readonly city:Locator;
=======
    readonly State: Locator;
>>>>>>> 462529e (done)
=======
    readonly newsletter: Locator;
    readonly SpecialoffersNewsletter: Locator;
    
    readonly create_Account :Locator;
 


    readonly country: Locator; // updated by shubham
    readonly state: Locator; // updated by shubham
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

        this.date = page.locator('#days');
        this.month = page.locator('//select[@data-qa="months"]');
        this.year = page.locator('[name="years"]');
        //Deepanshu changes
        
        this.create_Account=page.locator('//button[text()="Create Account"]')
        
        

<<<<<<< HEAD
<<<<<<< HEAD
        
        this.State = page.locator("//input[@id='state']");

=======
        this.country = page.locator("//select[@id='country']");  // updated by shubham
        this.state = page.locator("//input[@id='state']"); // updated by shubham
        
>>>>>>> develop
=======
        
        this.State = page.locator("//input[@id='state']");

>>>>>>> 1a46da3c5dfdfd95f4834b4aba9595e72d8bcce3


}

}

