describe('Login com sucesso', () => {

const seletores = {
  username: "[name='username']",
  password: "[name='password']",
  remenberMe: "[type='checkbox']",
  botaoSubmit: "[type='submit']", 
}


  it('Deve fazer login com sucesso', () => {
    cy.visit('/signin');
    cy.get(seletores.username).type('Wember');
    cy.get(seletores.password).type('123456789');
    cy.get(seletores.remenberMe).click();
    cy.get(seletores.botaoSubmit).click();
    cy.url().should('include', '/')
    

    
  });
});



