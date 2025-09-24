describe('Cadastro de novo Usuario', () => {

const seletores = {
  // Seletores da página de cadastro
  cadastro: "[href='/signup']",
  tituloCadastro: "[data-test='signup-title']",
  firstName: "[name='firstName']",
  lastName: "[name='lastName']",
  username: "[name='username']",
  password: "[name='password']",
  confirmPassword: "[name='confirmPassword']",
  botaoSubmit: "[type='submit']",
  nomeUsuario: "[data-test='sidenav-user-full-name']",
  paginaLogin: 'Sign in',
  paginaPrincipal: "[data-test='sidenav-home']",
}

  it('Deve Cadastrar novo Usuario com Sucesso', () => {
    cy.visit('/signin');
    cy.get(seletores.cadastro).click()
    cy.get(seletores.tituloCadastro).contains('Sign Up');
    cy.get(seletores.firstName).click();
    cy.get(seletores.firstName).type('Mateus');
    cy.get(seletores.lastName).click();
    cy.get(seletores.lastName).type('Narbona');
    cy.get(seletores.username).click();
    cy.get(seletores.username).type('Wember');
    cy.get(seletores.password).click();
    cy.get(seletores.password).type('123456789');
    cy.get(seletores.confirmPassword).click();
    cy.get(seletores.confirmPassword).type('123456789');
    cy.get(seletores.botaoSubmit).click();
    cy.contains(seletores.paginaLogin).should('be.visible');
    cy.get(seletores.username).type('Wember');
    cy.get(seletores.password).type('123456789');
    cy.get(seletores.botaoSubmit).click();
    cy.get(seletores.paginaPrincipal).should('be.visible');
    cy.url().should('include', '/');
  });
});
