import { test, expect } from '../../src/fixture/Nilesh.fixture';
import { TestCasesActions } from '../../src/action/testcaseaction';

test.describe('Test Cases Page', () => {
  test.beforeEach(async ({ page, appAction }) => {
    await page.goto('https://automationexercise.com');
    await appAction.testCases.navigateToTestCases();
  });
  test('Verify Test Cases page opens', async ({ appAction }) => {
await appAction.testCases.ClickLink();
  });
//tc01
  test('should display all test case items', async ({ appAction }) => {
    await appAction.testCases.verifyAllTestCasesPresent();
  });
  //tc02
 test('should expand and verify test case content', async ({ appAction }) => {
  const testCases = [
    { name: 'Test Case 1: Register User', expected: 'Register User' },
  ]
  for (const tc of testCases) {
    await appAction.testCases.expandTestCase(tc.name);
  }
});
  //tc03
test('Verify all test case items are listed', async ({ appAction }) => { 
      await appAction.testCases.scrollToBottom();
  });
//TC04
test('Verify page title is correct', async ({ appAction }) => {
  // Step 1: Navigate to Test Cases page
  await appAction.testCases.navigateToTestCases();
  // Step 2: Verify page title
  await appAction.testCases.verifyPageTitle();
});
  //tc05
  test('Verify no broken images on Test Cases page', async ({ appAction }) => {
    await appAction.testCases.verifyImagesNotBroken();
  });
});