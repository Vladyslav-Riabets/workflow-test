describe('Basic test', () => {

  it('check page title', () => {
    cy.visit('/');
    cy.title()
        .should('include', 'Example Domain');
  });
});