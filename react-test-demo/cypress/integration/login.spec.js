describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('login', () => {
    const username = 'eve.holt@reqres.in';
    const password = 'cityslicka';
    cy.get('#username-input')
      .type(username)
      .get('#password-input')
      .type(password)
      .type('{enter}')
      .get('#home-text')
      .should('have.text', 'You are home');
  });
});
