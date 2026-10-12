import { loginPage } from '../pages/LoginPage';
import { cartPage } from '../pages/CartPage';

describe('Cart Tests', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            loginPage.visit();
            loginPage.fillUsername(users.validUser.username);
            loginPage.fillPassword(users.validUser.password);
            loginPage.submit();
        });
    });

    it('CT05 - Complete checkout with valid data', () => {
        cartPage.openCart();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('John');
        cy.get('[data-test="lastName"]').type('Doe');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
    });
});
