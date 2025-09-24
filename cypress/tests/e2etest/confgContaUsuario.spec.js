
describe('Deve atualizar a conta do usuario', () => {
  const seletores = {
    //Seletores de elementos da pagina
    username: "[name='username']",
    password: "[name='password']",
    botaoSubmit: "[type='submit']",
    //Seletores da pagina de conta do usuario
    botaoMinhaConta: "[tabindex='0']",
    email: "[name='email']",
    telefone: "[name='phoneNumber']",
    botaoSalvar:"[type='submit']",
    botaoContasBancarias: "[tabindex='0']",
  };

  beforeEach(() => { //Faz login antes de cada teste
    cy.visit('/signin');
    cy.get(seletores.username).type('Wember');
    cy.get(seletores.password).type('123456789');
    cy.get(seletores.botaoSubmit).click();
    cy.url().should('include', '/'); 
  });

  it('Deve atualizar minha conta ', () => {
    cy.get(seletores.botaoMinhaConta).eq(5).click();
    // Preencher os detalhes da conta bancária
    cy.url().should('include', '/');
    cy.get(seletores.email).click()
    cy.get(seletores.email).clear()
    cy.get(seletores.email).type('narbona836@gmail.com');
    cy.get(seletores.telefone).click();
    cy.get(seletores.telefone).clear()
    cy.get(seletores.telefone).type('18997445600');
    cy.get(seletores.botaoSalvar).click();
    cy.url().should('include', '/');
    cy.get(seletores.botaoContasBancarias).eq(5).click();
    cy.url().should('include', '/');


  })
})
