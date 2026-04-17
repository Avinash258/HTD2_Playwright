import { test } from '../../src/fixture/fixture';
import homeData from '../../src/testdata/home.json';

test.describe('Home Page Test Cases', () => {

    test('TC001 - Verify home page loads', async ({ appAction }) => {
        await appAction.home.verifyHomePageLoaded(homeData.baseUrl);
    });

    test('TC002 - Verify navbar links', async ({ appAction }) => {
        await appAction.home.verifyHomePageLoaded(homeData.baseUrl);
        await appAction.home.verifyNavbarLinks();
    });

    test('TC003 - Verify logo redirect', async ({ appAction }) => {
        await appAction.home.verifyLogoRedirect(homeData.baseUrl);
    });

    test('TC004 - Verify featured products', async ({ appAction }) => {
        await appAction.home.verifyHomePageLoaded(homeData.baseUrl);
        await appAction.home.verifyFeaturedProducts();
    });

    test('TC005 - Verify category sidebar', async ({ appAction }) => {
        await appAction.home.verifyHomePageLoaded(homeData.baseUrl);
        await appAction.home.verifyCategorySidebar();
    });

});