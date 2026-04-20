import { Page } from "@playwright/test";
import { HomePage} from "../page/HomePage";
import testData from '../testdata/registration.json';

export class HomePageActions {
    readonly homePage:HomePage;

    constructor(page:Page){
        this.homePage=new HomePage(page);
    }
//Open URL from JSON
    async openHomePage(){
        await this.homePage.page.goto(testData.baseUrl);
    }
//scroll to bottom 
async scrollToBottom(){
    await this.homePage.page.keyboard.press('End');
    }

  //verify scrollup button is visible
  async verifyScrollUpVisible(){
    return await this.homePage.scrollUpButton.isVisible();
  }  

  async clickScrollUpButton() {
    await this.homePage.scrollUpButton.click();
  }

  async verifyPageAtTop(){
    const scrollPosition = await this.homePage.page.evaluate(() => window.scrollY);
    return scrollPosition === 0;
  }
}
