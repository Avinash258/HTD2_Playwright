import { test } from '../../src/fixture/signup-login-fixture';
import SignupLoginData from '../../src/testdata/signupLogin.json';

test.describe('Signup / Login Test Cases', () => {

  test('TC006 - Verify login page opens from navbar', async ({ appAction }) => {
    await appAction.signupLogin.navigateToLogin();
    await appAction.signupLogin.verifyLoginPageLoaded();
  });

  test('TC007 - Verify login with valid credentials', async ({ appAction }) => {
    await appAction.signupLogin.navigateToLogin();

    await appAction.signupLogin.login(
      SignupLoginData.validUser.email,
      SignupLoginData.validUser.password
    );

    await appAction.signupLogin.verifyLoginSuccess();
  });

  test('TC008 - Verify login with invalid credentials', async ({ appAction }) => {
    await appAction.signupLogin.navigateToLogin();

    await appAction.signupLogin.login(
      SignupLoginData.invalidUser.email,
      SignupLoginData.invalidUser.password
    );

    await appAction.signupLogin.verifyInvalidLoginError();
  });

  test('TC009 - Verify new user signup with valid details', async ({ appAction }) => {
    await appAction.signupLogin.navigateToLogin();

    const email = appAction.signupLogin.generateEmail();

    await appAction.signupLogin.signup(
      SignupLoginData.signupUser.name,
      email
    );

    await appAction.signupLogin.verifySignupPageLoaded();
  });

  test('TC010 - Verify signup with already registered email', async ({ appAction }) => {
    await appAction.signupLogin.navigateToLogin();

    await appAction.signupLogin.signup(
      SignupLoginData.signupUser.name,
      SignupLoginData.validUser.email
    );

    await appAction.signupLogin.verifySignupError();
  });

});