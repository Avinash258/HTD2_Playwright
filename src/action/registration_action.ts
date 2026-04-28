import { RegistrationPage } from "../page/registration_page"
import loginData from  "../testdata/registration.json"
import{expect, Locator,Page} from "@playwright/test"
export class RegistrationAction{
    constructor(private readonly registrationpage: RegistrationPage){}
    

    
    async fillForm(Password:string,firstName:string,lastName:string,address:string,state:string,city:string,zipcode:string,mobilenumber:string){
         await this.registrationpage.password.fill(Password)
         await this.registrationpage.FirstName.fill(firstName)
         await this.registrationpage.LastName.fill(lastName)
         await this.registrationpage.Address.fill(address)
         await this.registrationpage.State.fill(state)
         await this.registrationpage.City.fill(city)
         await this.registrationpage.Zipcode.fill(zipcode)
         await this.registrationpage.Mobile.fill(mobilenumber)
         

          console.log("Account is Created")
     }
async submitForm() {
  //await this.registrationpage.CreateAccount.scrollIntoViewIfNeeded();
   return this.registrationpage.CreateAccount.click();
  
}  
}
    