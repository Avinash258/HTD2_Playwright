import{test ,expect} from '../../src/fixture/home_UI_fixture';

test('TC_46 Verify scroll up button visible after scrolling down ',async ({appAction}) =>{
    await appAction.home.openHomePage();
    await appAction.home.scrollToBottom();
    await expect(appAction.home.homePage.scrollUpButton).toBeVisible();

});

    test('TC_47 Verify scroll up scrolls page to top ',async ({appAction}) =>{
    await appAction.home.openHomePage();
    await appAction.home.scrollToBottom();   
    await appAction.home.clickScrollUpButton();
    //await appAction.home.homePage.page.waitForTimeout(2000);
    const isAtTop =await appAction.home.verifyPageAtTop();
    await expect(isAtTop).toBeTruthy();
});

 test('TC_48 Verify subscription form in footer ',async ({appAction}) =>{
    await appAction.home.openHomePage();
    await appAction.home.scrollToBottom();   
    const result =await appAction.home.verifySubscriptionSectionVisible();
    await expect(result.heading).toBeTruthy();
     await expect(result.email).toBeTruthy();
      await expect(result.button).toBeTruthy();
 });

test('TC_49 Verify subscription with valid email ',async ({appAction}) =>{
 await appAction.home.openHomePage();
    await appAction.home.scrollToBottom(); 
    await appAction.home.subscribeWithEmail('gona.vaishnavi@newvision-software.com');
    const isSuccess = await appAction.home.isSubscriptionSuccessVisible();
    await expect(isSuccess).toBeTruthy();
});

test('TC_50 Verify brands on products page ',async ({appAction}) =>{
await appAction.home.openHomePage();
await appAction.home.navigateToProducts();
const isVisible =await appAction.home.isBrandSectionVisible();
await expect(isVisible).toBeTruthy();
const brands =await appAction.home.getBrandsList();
await expect(brands.length).toBeGreaterThan(0);
});
