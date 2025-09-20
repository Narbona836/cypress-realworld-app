describe('Criar conta bancaria', () => {

const seletores = {
    botaoContasBancarias: "[tabindex='0']",
    botaoCriarContaBancaria: "[data-test='bankaccount-new']",
    nomeBanco: "#bankaccount-bankName-input",
    rotiamentoConta: "[name='routingNumber']",
    numeroConta: "#bankaccount-accountNumber-input[name='accountNumber']",
    botaoSalvarContaBancaria: ".BankAccountForm-submit",
}


  it('Deve criar uma nova conta no banco', () => {
   // Preencher os detalhes da conta bancária
    cy.get(seletores.botaoCriarContaBancaria).click();
    cy.url().should('include', '/bankaccounts/new');
    cy.get(seletores.nomeBanco).type('Banco do Brasil');
    cy.get(seletores.rotiamentoConta).click();
    cy.get(seletores.rotiamentoConta).type('123456789');
    cy.get(seletores.numeroConta).click();
    cy.get(seletores.numeroConta).clear();
    cy.get(seletores.numeroConta).type('987654321');

    });
});
