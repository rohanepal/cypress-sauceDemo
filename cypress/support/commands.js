import loginPage from '../pages/login';

Cypress.Commands.add('login', () => {
  cy.visit('https://www.saucedemo.com/');
  cy.fixture('validUser').then((user) => {
       loginPage.getUsername().type(user.username);
       loginPage.getPassword().type(user.password);
       loginPage.getSubmitBtn().click();
       //very login
       cy.url().should('include', '/inventory.html');
       cy.get('.title').should('have.text', 'Products');
     })
})
