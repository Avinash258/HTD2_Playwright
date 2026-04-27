import { Locator,Page } from "@playwright/test";
export class AccountPage{
    
    
    readonly page:Page;
    readonly Mr:Locator
    readonly Name:Locator
    readonly Email:Locator
    readonly password :Locator
    readonly Day:Locator
    readonly Month:Locator
    readonly Year:Locator
    readonly newletter:Locator
    readonly Recive:Locator
    readonly FirstName:Locator
    readonly LastName:Locator
    readonly Company:Locator
    readonly Address:Locator
    readonly Addrees2:Locator
    //readonly Country:Locator
    readonly State :Locator
    readonly City:Locator
    readonly Zipcode:Locator
    readonly Mobile:Locator
    readonly CreateAccount:Locator
    readonly text:Locator
    readonly continue:Locator
    //signup login up 
    readonly logoutButton:Locator
     readonly Login_id :Locator
    readonly Login_password:Locator
    readonly LoginButton:Locator
    //Home page locator
     readonly AutomationImage :Locator;
    readonly  SignUp :Locator
     readonly SignupButton:Locator
    constructor(page:Page){

        //Locators each form page

        this.page=page
        
        this.Mr=page.locator("[id='id_gender1']")
        this.Name=page.getByLabel("name")
        this.Email=page.getByLabel("email")
        this.password=page.locator('[id="password"]')
        this.Day=page.locator('[id="days"]')
        this.Month=page.locator('[id="months"]')
        this.Year=page.locator('[id="years"]')
        this.newletter=page.locator("//label[text()='Sign up for our newsletter!']");
        this.Recive=page.locator("//label[text()='Receive special offers from our partners!']")
        this.FirstName=page.locator('[id="first_name"]')
        this.LastName=page.locator('[id="last_name"]');
        this.Company=page.getByLabel("company");
        this.Address=page.locator(" [id='address1']");
        this.Addrees2=page.locator(" [id='address2']");
        this.State=page.getByLabel("state");
        this.City=page.getByLabel("city")
        this.Zipcode=page.locator(" [id='zipcode']")
        this.Mobile=page.locator(" [id='mobile_number']");
        this.CreateAccount=page.locator("//button[text()='Create Account']")
        this.text=page.locator("//b[text()='Enter Account Information']")
        this.continue=page.locator('//a[text()="Continue"]')
        this.logoutButton=page.locator("//a[text()=' Logout']")
         //login-up
          this.Name=page.locator("//input[@placeholder='Name']")
        this.Email=page.locator("//input[@data-qa='signup-email' and@name='email']");
        this.SignupButton=page.locator("//button[text()='Signup']")
        //
        //signin
        
        this.Login_id=page.locator("[data-qa='login-email']")
        this.Login_password=page.locator("[data-qa='login-password']")
        this.LoginButton=page.locator("[data-qa='login-button']")
        //home page
        this.AutomationImage=page.getByAltText("Website for automation practice")
        this.SignUp=page.locator("//a[text()=' Signup / Login']")
    }
        
    }

