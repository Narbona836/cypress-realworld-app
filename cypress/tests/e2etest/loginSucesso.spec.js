describe('Login com sucesso', () => {

const seletores = {
  username: "[name='username']",
  password: "[name='password']",
  botaoSubmit: "[type='submit']",
  nomeUsuario: "[data-test='sidenav-user-full-name']"
}


  it('Deve fazer login com sucesso', () => {
    cy.visit('/signin');
    cy.get(seletores.username).type('willian');
    cy.get(seletores.password).type('123456');
    cy.get(seletores.botaoSubmit).click();
    cy.get(seletores.nomeUsuario).should('be.visible');
    
  });
});
