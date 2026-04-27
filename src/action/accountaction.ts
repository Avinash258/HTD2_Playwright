
import { AccountPage } from "../../src/page/accountpage";
export class AccountAction{
    constructor(private readonly accountpage: AccountPage){}
    

    
    async fillForm(Password:string,firstName:string,lastName:string,address:string,state:string,city:string,zipcode:string,mobilenumber:string){
         await this.accountpage.password.fill(Password)
         await this.accountpage.FirstName.fill(firstName)
         await this.accountpage.LastName.fill(lastName)
         await this.accountpage.Address.fill(address)
         await this.accountpage.State.fill(state)
         await this.accountpage.City.fill(city)
         await this.accountpage.Zipcode.fill(zipcode)
         await this.accountpage.Mobile.fill(mobilenumber)
         

          console.log("Account is Created")
     }
     async submitForm() {

   return this.accountpage.CreateAccount.click();
     }
   async continueRegistration(){
    return this.accountpage.continue.click()
   }
   async logoutButton(){
     return this.accountpage.logoutButton.click();
   }
   async randomsingin(username:string,password:string){
   await this.accountpage.Login_id.fill(username)
  await this.accountpage.Login_password.fill(password)
  await this.accountpage.LoginButton.click()
   }
   async clickOnSign(){
        return  this.accountpage.SignUp.click()
        
    }
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