import { loginPage } from '../pages/LoginPage';

describe('Login Tests', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    it('CT01 - Login with valid credentials', () => {
        cy.fixture('users').then((users) => {
            loginPage.fillUsername(users.validUser.username);
            loginPage.fillPassword(users.validUser.password);
            loginPage.submit();
            cy.url().should('include', '/inventory.html');
        });
    });

    it('CT02 - Login with invalid credentials', () => {
        cy.fixture('users').then((users) => {
            loginPage.fillUsername(users.invalidUser.username);
            loginPage.fillPassword(users.invalidUser.password);
            loginPage.submit();
            loginPage.verifyErrorMessage('Username and password do not match any user in this service');
        });
    });
});
