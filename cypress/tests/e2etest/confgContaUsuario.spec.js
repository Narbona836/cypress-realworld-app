
describe('Enviar dinheiro com saldo suficiente', () => {
  const seletores = {
    username: "[name='username']",
    password: "[name='password']",
    botaoSubmit: "[type='submit']",
    botaoMinhaConta: "[tabindex='0']",
    email: "[name='email']",
    telefone: "[name='phoneNumber']",
    botaoSalvar:"[type='submit']",
    botaoContasBancarias: "[tabindex='0']",
    botaoSalvarContaBancaria: ".BankAccountForm-submit",
    
    
    nextConta: "[data-test='user-onboarding-next']",
    //nomeBanco: "[data-test='bank-name']",
   // rotiamentoConta: "[data-test='bank-routing-number']",
    //numeroConta: "[data-test='bank-account-number']",
    //botaoSalvarConta: "[data-test='submit-bank']",
    botaoFinalizar: "[data-test='user-onboarding-next']",
  };

  beforeEach(() => {
    cy.visit('/signin');
    cy.get(seletores.username).type('Wember');
    cy.get(seletores.password).type('123456789');
    cy.get(seletores.botaoSubmit).click();
    cy.url().should('include', '/'); // Confere que saiu da tela de login
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
    
    
    
    cy.get(seletores.botaoSalvarContaBancaria).click();
    cy.url().should('include', '/bankaccounts');


  })
})
