import{Locator,Page} from "@playwright/test";

export class AccountPage{//register
    readonly page:Page;
    readonly Name:Locator;
    readonly Email:Locator;
    readonly SignupButton:Locator
    readonly Login_id :Locator
    readonly Login_password:Locator
    readonly LoginButton:Locator
    constructor(page:Page){
        this.page=page;
        this.Name=page.locator("//input[@placeholder='Name']")
        this.Email=page.locator("//input[@data-qa='signup-email' and@name='email']");
        this.SignupButton=page.locator("//button[text()='Signup']")
        this.Login_id=page.locator("[data-qa='login-email']")
        this.Login_password=page.locator("[data-qa='login-password']")
        this.LoginButton=page.locator("[data-qa='login-button']")
    }
}
 