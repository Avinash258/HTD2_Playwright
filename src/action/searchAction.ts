import { SearchPage } from "../page/searchPage";

export class SearchAction {

    constructor(private readonly searchPage: SearchPage) {}

    async sortBy(option: string) { await this.searchPage.sortDropdown.selectOption(option); }

    async getFirstProductName() {
        await this.searchPage.productNames.first().waitFor({ state: 'visible', timeout: 5000 });
         return this.searchPage.productNames.first().innerText(); 
        }

    async getFirstProductPrice() { return this.searchPage.productPrices.first().innerText(); }
}
