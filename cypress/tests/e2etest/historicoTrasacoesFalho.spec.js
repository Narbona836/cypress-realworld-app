describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    const seletores = {
    username: "[name='username']",
    password: "[name='password']",
    remenberMe: "[type='checkbox']",
    botaoSubmit: "[type='submit']",
    meuHistorico: "[data-test='nav-personal-tab']",
    historicoTransacoes: "[data-test='transaction-sender-J5Fd3dlBEBu']",
    botaoDatas:"[data-test='transaction-list-filter-date-range-button']",
    dataInicio: "[aria-label='1 de setembro de 2025']",
    dataFinal:"[aria-label='5 de setembro de 2025']",
    mensagemSemTransacoes: "[data-test='empty-list-header']"
}

  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    cy.visit('/signin');
    cy.get(seletores.username).type('Wember');
    cy.get(seletores.password).type('123456789');
    cy.get(seletores.remenberMe).click();
    cy.get(seletores.botaoSubmit).click();
    cy.url().should('include', '/')
    cy.get(seletores.meuHistorico).should('be.visible');
    cy.get(seletores.meuHistorico).click();
    cy.get(seletores.botaoDatas).click();
    cy.get(seletores.dataInicio).click();
    cy.get(seletores.dataFinal).click();
    cy.get(seletores.mensagemSemTransacoes).should('be.visible');
  });
});