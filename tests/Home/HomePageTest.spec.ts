import{test ,expect} from '../../src/fixture/fixture';

test('TC_46 Verify scroll up button visible after scrolling down ',async ({appAction}) =>{
    await appAction.home.openHomePage();
    await appAction.home.scrollToBottom();
    await expect(appAction.home.homePage.scrollUpButton).toBeVisible();
});