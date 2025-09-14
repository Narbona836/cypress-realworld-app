describe('Login com sucesso', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('http://localhost:3000/signin');
    cy.get("[name='username']").type('willian');
    cy.get("[name='password']").type('123456');
    cy.get("[type='submit']").click();
    cy.get("[data-test='user-onboarding-next']").click();
    
  });
});
