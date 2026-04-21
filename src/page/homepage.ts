import{Locator,Page} from "@playwright/test";
export class HomePage{//register
    readonly page:Page
    readonly AutomationImage :Locator;
    readonly  SignUp :Locator
    constructor(page:Page){
        this.page=page;
        this.AutomationImage=page.getByAltText("Website for automation practice")
        this.SignUp=page.locator("//a[text()=' Signup / Login']")
        
    }
}