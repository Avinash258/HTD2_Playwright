import { test } from '../../src/fixture/signup-login-fixture';
import SignupLoginData from '../../src/testdata/signupLogin.json';

test.describe('Signup / Login Test Cases', () => {

  test('TC006 - Verify login page opens from navbar', async ({ appsignupLoginAction }) => {
    await appsignupLoginAction.signupLogin.navigateToLogin();
    await appsignupLoginAction.signupLogin.verifyLoginPageLoaded();
  });

  test('TC007 - Verify login with valid credentials', async ({ appsignupLoginAction }) => {
    await appsignupLoginAction.signupLogin.navigateToLogin();

    await appsignupLoginAction.signupLogin.login(
      SignupLoginData.validUser.email,
      SignupLoginData.validUser.password
    );

    await appsignupLoginAction.signupLogin.verifyLoginSuccess();
  });

  test('TC008 - Verify login with invalid credentials', async ({ appsignupLoginAction }) => {
    await appsignupLoginAction.signupLogin.navigateToLogin();

    await appsignupLoginAction.signupLogin.login(
      SignupLoginData.invalidUser.email,
      SignupLoginData.invalidUser.password
    );

    await appsignupLoginAction.signupLogin.verifyInvalidLoginError();
  });

  test('TC009 - Verify new user signup with valid details', async ({ appsignupLoginAction }) => {
    await appsignupLoginAction.signupLogin.navigateToLogin();

    const email = appsignupLoginAction.signupLogin.generateEmail();

    await appsignupLoginAction.signupLogin.signup(
      SignupLoginData.signupUser.name,
      email
    );

    await appsignupLoginAction.signupLogin.verifySignupPageLoaded();
  });

  test('TC010 - Verify signup with already registered email', async ({ appsignupLoginAction }) => {
    await appsignupLoginAction.signupLogin.navigateToLogin();

    await appsignupLoginAction.signupLogin.signup(
      SignupLoginData.signupUser.name,
      SignupLoginData.validUser.email
    );

    await appsignupLoginAction.signupLogin.verifySignupError();
  });

});