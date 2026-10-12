import { loginPage } from '../pages/LoginPage';
import { inventoryPage } from '../pages/InventoryPage';

describe('Inventory Tests', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            loginPage.visit();
            loginPage.fillUsername(users.validUser.username);
            loginPage.fillPassword(users.validUser.password);
            loginPage.submit();
        });
    });

    it('CT03 - Add a product to the cart', () => {
        inventoryPage.addItemToCart('Sauce Labs Backpack');
        cy.get('.shopping_cart_badge').should('have.text', '1');
    });

    it('CT04 - Remove a product from the cart', () => {
        inventoryPage.addItemToCart('Sauce Labs Backpack');
        inventoryPage.removeItemFromCart('Sauce Labs Backpack');
        cy.get('.shopping_cart_badge').should('not.exist');
    });
});
