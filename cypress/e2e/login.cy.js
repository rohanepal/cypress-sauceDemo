import loginPage from '../pages/login';

describe('Valid User Login Test', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('logs in successfully with valid credentials', () =>{
    cy.fixture('validUser').then((user) => {
      loginPage.getUsername().type(user.username);
      loginPage.getPassword().type(user.password);
      loginPage.getSubmitBtn().click();
    })
  })
});
