describe('Login incorreto', () => {

const seletores = {
  username: "[name='username']",
  password: "[name='password']",
  botaoSubmit: "[type='submit']",
  nomeUsuario: "[data-test='sidenav-user-full-name']",
  alertaFalha: "[role='alert']"
}



  it('Deve apresentar falha ao Login', () => {
    cy.visit('/signin');
    cy.get(seletores.username).type('will');
    cy.get(seletores.password).type('123456');
    cy.get(seletores.botaoSubmit).click();
    cy.get(seletores.alertaFalha).contains('Username or password is invalid');
  });
});