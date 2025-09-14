describe('Cadastro de novo Usuario', () => {
  it('Deve Cadastrar novo Usuario com Sucesso', () => {
    cy.visit('http://localhost:3000/signin');
    cy.get("[href='/signup']").click()
    cy.get("[data-test='signup-title']").contains('Sign Up');
    cy.get("[name='firstName']").click();
    cy.get("[name='firstName']").type('Mateus');
    cy.get("[name='lastName']").click();
    cy.get("[name='lastName']").type('Narbona');
    cy.get("[name='username']").click();
    cy.get("[name='username']").type('Wember');
    cy.get("[name='password']").click();
    cy.get("[name='password']").type('888888888');
    cy.get("[name='confirmPassword']").click();
    cy.get("[name='confirmPassword']").type('888888888');
    cy.get("[type='submit']").click();
    cy.contains('Sign in').should('be.visible')
;
  });
});
