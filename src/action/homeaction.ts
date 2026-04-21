import { HomePage } from "../page/homepage";//register
import {Locator,Page} from "@playwright/test";
export class HomeAction{
   
    
    constructor (private readonly homePage: HomePage) {
        
    }
    async clickOnSign(){
        return  this.homePage.SignUp.click()
        
    }
    
}