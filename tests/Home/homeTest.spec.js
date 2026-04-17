import { test } from '../../src/fixture/fixture';
import homeData from '../../src/testdata/home.json';

test.describe('Home Page Test Cases', () => {

    test('TC001 - Verify home page loads', async ({ homeAction }) => {
        await homeAction.verifyHomePageLoaded(homeData.baseUrl);
    });

    test('TC002 - Verify navbar links', async ({ homeAction }) => {
        await homeAction.verifyHomePageLoaded(homeData.baseUrl);
        await homeAction.verifyNavbarLinks();
    });

    test('TC003 - Verify logo redirect', async ({ homeAction }) => {
        await homeAction.verifyLogoRedirect(homeData.baseUrl);
    });

    test('TC004 - Verify featured products', async ({ homeAction }) => {
        await homeAction.verifyHomePageLoaded(homeData.baseUrl);
        await homeAction.verifyFeaturedProducts();
    });

    test('TC005 - Verify category sidebar', async ({ homeAction }) => {
        await homeAction.verifyHomePageLoaded(homeData.baseUrl);
        await homeAction.verifyCategorySidebar();
    });

});