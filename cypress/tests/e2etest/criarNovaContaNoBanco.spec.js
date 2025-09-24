describe('Criar conta bancaria', () => {

const seletores = {
    //Seletores de login
    username: "[name='username']",
    password: "[name='password']",
    botaoSubmit: "[type='submit']",
    //Seletores de criar conta bancaria
    botaoContasBancarias: "[tabindex='0']",
    botaoCriarContaBancaria: "[data-test='bankaccount-new']",
    nomeBanco: "#bankaccount-bankName-input",
    rotiamentoConta: "[name='routingNumber']",
    numeroConta: "#bankaccount-accountNumber-input[name='accountNumber']",
    botaoSalvarContaBancaria: ".BankAccountForm-submit",
    botaoNextConta: "[data-test='user-onboarding-next']",
    botaoFinalizarConta: "[data-test='user-onboarding-next']"

}
  //Faz login antes de cada teste
  beforeEach(() => { 
    cy.visit('/signin');
    cy.get(seletores.username).type('Wember');
    cy.get(seletores.password).type('123456789');
    cy.get(seletores.botaoSubmit).click();
    cy.url().should('include', '/'); 
  });


  it('Deve criar uma nova conta no banco', () => {
   // Preencher os detalhes da conta bancária
    //cy.get(seletores.botaoNextConta).click(); (Usado Somente na primeira vez que cria a conta bancaria)
    cy.get(seletores.botaoContasBancarias).eq(6).click();
    cy.get(seletores.botaoCriarContaBancaria).click();
    cy.get(seletores.nomeBanco).type('Banco do Brasil');
    cy.get(seletores.rotiamentoConta).click();
    cy.get(seletores.rotiamentoConta).type('123456789');
    cy.get(seletores.numeroConta).click();
    cy.get(seletores.numeroConta).clear();
    cy.get(seletores.numeroConta).type('987654321');
    cy.get(seletores.botaoSalvarContaBancaria).click();
    //cy.get(seletores.botaoFinalizarConta).click(); (Usado Somente na primeira vez que cria a conta bancaria)
    cy.url().should('include', '/bankaccounts');
    

    });
});
