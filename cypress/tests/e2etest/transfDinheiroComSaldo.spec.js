// "Duvida: O teste está passando, mas meu saldo da conta não altera. Preciso de ajuda para corrigir isso."
describe('Enviar dinheiro sem saldo suficiente', () => {
  const seletores = {
    // Seletores da página de login
    username: "[name='username']",
    password: "[name='password']",
    botaoSubmit: "[type='submit']",

    // Seletores para transferência
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
  };

  it('Não deve transferir dinheiro ', () => {
    cy.visit('/signin');
    cy.get(seletores.username).type('Wember');
    cy.get(seletores.password).type('123456789');
    cy.get(seletores.botaoSubmit).click();
    // 
    cy.url().should('include', '/'); 
    cy.get(seletores.botaoNovatransferencia).click();
    cy.get(seletores.selecionarContato).click({ force: true });
    cy.get(seletores.inserirValor).click();
    cy.get(seletores.inserirValor).type('5');
    cy.get(seletores.inserirDescricao).click({force: true});
    cy.get(seletores.inserirDescricao).type('Teste');
    cy.get(seletores.botaoPagar).eq(1).click();
    cy.contains('Transaction Submitted!').should('be.visible');
    })

})
