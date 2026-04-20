import { test } from '../../src/fixture/fixture';
import homeData from '../../src/testdata/home.json';

test.describe('Home Page Test Cases', () => {

    test.beforeEach(async ({ page, baseURL }) => {
        await page.goto(baseURL);
    });

    test('TC001 - Verify home page loads successfully', async ({ appAction }) => {
        await appAction.home.verifyHomePageLoaded();
    });

    test('TC002 - Verify navbar links are visible', async ({ appAction }) => {
        await appAction.home.verifyNavbarLinks();
    });

    test('TC003 - Verify logo click redirects to home', async ({ appAction }) => {
        await appAction.home.verifyLogoRedirect(homeData.baseUrl);
    });

    test('TC004 - Verify featured products section is displayed', async ({ appAction }) => {
        await appAction.home.verifyFeaturedProducts();
    });

    test('TC005 - Verify category sidebar', async ({ appAction }) => {
        await appAction.home.verifyCategorySidebar();
    });

});