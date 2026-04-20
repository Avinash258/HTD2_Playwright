import{test ,expect} from '../../src/fixture/fixture';

test('TC_46 Verify scroll up button visible after scrolling down ',async ({appAction}) =>{
    await appAction.home.openHomePage();
    await appAction.home.scrollToBottom();
    await expect(appAction.home.homePage.scrollUpButton).toBeVisible();

});

    test('TC_47 Verify scroll up scrolls page to top ',async ({appAction}) =>{
    await appAction.home.openHomePage();
    await appAction.home.scrollToBottom();   
    await appAction.home.clickScrollUpButton();
    const isAtTop =await appAction.home.verifyPageAtTop();
    await expect(isAtTop).toBeTruthy();
});