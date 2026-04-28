import ProductData from "../../src/testdata/product.json";
import { test , expect } from "../../src/fixture/fixture";


test("TC-041 Verify product name displayed on detail page", async ({appAction})=> {
    await appAction.product.ViewProduct();
    await expect(appAction.product.getProductName()).toHaveText(ProductData.productInfo.name);

});

test("TC-042 Verify product price displayed on detail page", async ({appAction})=> {
    await appAction.product.ViewProduct();
    await expect(appAction.product.getProductPrice()).toHaveText(ProductData.productInfo.productPrice);

});

test("TC-043 Verify quantity selector on product detail page", async ({appAction})=>{
    await appAction.product.ViewProduct();
    await appAction.product.setQuantity(ProductData.productInfo.quantity);
    await appAction.product.AddProductToCart();
    await appAction.product.viewCart();
    await expect(appAction.product.Getquanitycount()).toHaveText(ProductData.productInfo.quantity);

});

test("TC-044 Verify review form submission on product page", async ({appAction})=>{
    await appAction.product.ViewProduct();
    await appAction.product.submitReview(ProductData.reviewInfo.name, ProductData.reviewInfo.email, ProductData.reviewInfo.reviewText);
    await expect(appAction.product.getReviewSuccessMessage()).toBeVisible();
});

test("TC-045 Verify category breadcrumb on product detail page", async ({appAction})=>{
    await appAction.product.ViewProduct();
    
    await expect(appAction.product.productcategory).toHaveText(ProductData.breadcrumb.category);
    await expect(appAction.product.productavailability).toHaveText(ProductData.breadcrumb.availability);

});