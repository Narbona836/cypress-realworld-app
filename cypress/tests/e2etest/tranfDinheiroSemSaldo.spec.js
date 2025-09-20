
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
    botaoNovatransferencia: "[data-test='nav-top-new-transaction']",
    selecionarContato: "[data-test='user-list-item-uBmeaz5pX']",
    inserirValor: "[name='amount']",
    inserirDescricao: "[placeholder='Add a note']",
    botaoPagar:"[type='submit']",
    
    
    
    nextConta: "[data-test='user-onboarding-next']",
    //nomeBanco: "[data-test='bank-name']",
   // rotiamentoConta: "[data-test='bank-routing-number']",
    //numeroConta: "[data-test='bank-account-number']",
    //botaoSalvarConta: "[data-test='submit-bank']",
    botaoFinalizar: "[data-test='user-onboarding-next']",
  };

  it('Deve atualizar minha conta ', () => {
    cy.visit('/signin');
    cy.get(seletores.username).type('Wember');
    cy.get(seletores.password).type('123456789');
    cy.get(seletores.botaoSubmit).click();
    cy.url().should('include', '/'); // Confere que saiu da tela de login
    cy.get(seletores.botaoNovatransferencia).click();
    cy.get(seletores.selecionarContato).click({ force: true });
    cy.get(seletores.inserirValor).click();
    cy.get(seletores.inserirValor).type('5');
    cy.get(seletores.inserirDescricao).click();
    cy.get(seletores.inserirDescricao).type('Teste');
    cy.get(seletores.botaoPagar).eq(1).click();
    cy.contains('Transaction Submitted!').should('be.visible');
    //cy.get(seletores.botaoFinalizar).click();
    //cy.contains('You do not have sufficient funds in this account to make this transfer.').should('be.visible');

    //cy.get(seletores.selecionarConta).type('5');
    //cy.get(seletores.selecionarConta).type('{enter}');
    //cy.get(seletores.botaoFinalizar).click();
    //cy.contains('You do not have sufficient funds in this account to make this transfer.').should('be.visible');

  })


})

