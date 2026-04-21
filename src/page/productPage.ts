import {Page , Locator} from "playwright/test";


export class ProductPage{
    readonly page: Page;
    readonly Productlink : Locator;
    readonly viewProduct: Locator;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly quantityInput: Locator;
    readonly addToCartButton: Locator;
    readonly viewCartButton: Locator;
    readonly addedcartquantity: Locator;
    readonly reviewNameInput: Locator;
    readonly reviewEmailInput: Locator;
    readonly reviewTextInput: Locator;
    readonly submitReviewButton: Locator;
    readonly reviewSuccessMsg: Locator;
    readonly productCategory: Locator;
    readonly productAvailability: Locator;

constructor(page: Page) {
    this.page = page;
    this.Productlink = page.getByRole("link", { name: "Products" });
    this.viewProduct = page.locator("//p[contains(text(),'Men Tshirt')]/ancestor::div[contains(@class,'product-image-wrapper')]/descendant::a[normalize-space()='View Product']");
    this.productName = page.locator(".product-information h2");
    this.productPrice = page.locator('//*[contains(@class,"product-information")]//span[contains(text(), "Rs. 400")]'); 
    this.quantityInput = page.locator('#quantity');
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    this.viewCartButton = page.locator('//u[contains(text(), "View Cart")]');
    this.addedcartquantity = page.locator('//button[@class = "disabled"]');
    this.reviewEmailInput = page.locator('[placeholder = "Email Address"]');
    this.reviewNameInput = page.locator('[placeholder = "Your Name"]');
    this.reviewTextInput = page.locator('[placeholder = "Add Review Here!"]');
    this.submitReviewButton = page.getByRole('button', { name: 'Submit' });
    this.reviewSuccessMsg = page.getByText('Thank you for your review.');
    this.productCategory = page.locator('//p[contains(text(), "Category")]');
    this.productAvailability = page.locator('//p[contains(text(), " In Stock")]');

}
}