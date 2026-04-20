import { AccountPage } from "../page/Accountpage";//registration
import { HomeAction } from "../action/homeaction";
import{expect, Locator,Page} from "@playwright/test"
export class AccountAction{
    constructor(private readonly accountpage : AccountPage){}

        
    
    async singin(username:string,Email:string){
     
      await   this.accountpage.Name.fill(username)
      await    this.accountpage.Email.fill(Email)
      await    this.accountpage.SignupButton.click();
      
    }
    async loginin(user_id:string,password:string){
      await this.accountpage.Login_id.fill(user_id)
      await this.accountpage.Login_password.fill(password)
      await this.accountpage.LoginButton.click();
    }
}