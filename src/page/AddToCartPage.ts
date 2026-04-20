import { th } from "@faker-js/faker/.";
import  { Page,Locator, expect} from "@playwright/test";        
import { link } from "node:fs";

export class AddToCartPage {
    readonly page: Page;
    readonly AddToproductButton: Locator;
    //readonly ClickWomenCategory: Locator;
    //readonly ClickDressesCategory: Locator;
    readonly ClickAddtoCart: Locator; 
    readonly ClickOnCountinueShopping: Locator;
    readonly ClickOnViewCart: Locator;
    readonly deleteProduct: Locator;
    readonly verifyEmptyCartMessage: Locator;
    readonly clickOnBlueTop: Locator;
    readonly changeQuantityBox: Locator;
    readonly AgianClickOnAddToCart: Locator;
    readonly productCard: Locator;
  //  readonly againAddtoCart: Locator;


    constructor(page: Page) {
        this.page = page;
        this.AddToproductButton = page.locator('//a[@href="/products"]');
        //this.ClickWomenCategory = page.locator('//a[@href="#Women"]');
        //this.ClickDressesCategory = page.locator('//a[@href="/category_products/1"]');
      //  this.ClickAddtoCart = page.locator("//a[@data-product-id='1']/ancestor::div[@class='product-image-wrapper']//a[@class='add-to-cart']");
        this.ClickOnCountinueShopping = page.locator("//button[.='Continue Shopping']");
        this.ClickOnViewCart = page.locator("//li[.=' Cart']");
        this.deleteProduct = page.locator("//a[@class='cart_quantity_delete']");
        this.verifyEmptyCartMessage = page.getByText("")
        this.verifyEmptyCartMessage = page.getByText("Cart is empty!");
        this.clickOnBlueTop = page.locator("//a[.='Blue Top']");   
        this.changeQuantityBox = page.locator("//input[@type='number']");   
      //  this.AgianClickOnAddToCart = page.locator("//img[@src='/static/images/product-details/rating.png' and @alt='ecommerce website products']/parent::div/descendant::button");
        this.productCard = page.locator(".product-image-wrapper");
this.ClickAddtoCart = page.locator('//img[@src="/get_product_picture/1" and @alt="ecommerce website products"]/parent::div/descendant::a');
 this.AgianClickOnAddToCart = page.getByRole('button', { name: /add to cart/i });


    }     }


