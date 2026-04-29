import { Locator, Page } from "playwright";
import {Registration } from "../page/ParaRegepage";

export class ParaAction{
    readonly regist: Registration;

    constructor(page: Page){
        this.regist = new Registration(page);
    }
    async filldata(
        FirstName: string,
        LastName: string,
        Address: string,
        city: string,
        state: string,
        ZipCode: string,
        phone: string,
        SSN: string,
        Username: string,
        password: string,
        confirm: string
    ){

        await this.regist.FirstName.fill(FirstName)
        await this.regist.LastName.fill(LastName)
        await this.regist.Address.fill(Address)
        await this.regist.City.fill(city)
        await this.regist.State.fill(state)
        await this.regist.ZipCode.fill(ZipCode)
        await this.regist.Phone.fill(phone)
        await this.regist.SSN.fill(SSN)
        await this.regist.Username.fill(Username)
        await this.regist.Password.fill(password)
        await this.regist.Confirm.fill(confirm)
        
    }
    async Register(){
        return this.regist.Register.click();
    }
}