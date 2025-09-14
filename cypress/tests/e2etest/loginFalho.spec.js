describe('Login incorreto', () => {
  it('Deve apresentar falha ao Login', () => {
    cy.visit('http://localhost:3000/signin');
    cy.get("[name='username']").type('will');
    cy.get("[name='password']").type('123456');
    cy.get("[type='submit']").click();
    cy.get("[role='alert']").contains('Username or password is invalid');
  });
});