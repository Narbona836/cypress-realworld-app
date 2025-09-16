describe('Novo usuario incompleto', () => {

const seletores = {
    cadastro: "[href='/signup']",
    tituloCadastro: "[data-test='signup-title']",
    lastName: "[name='lastName']",
    username: "[name='username']",
    password: "[name='password']",
    confirmPassword: "[name='confirmPassword']",
    alertaFirstName: ".Mui-error.MuiFormHelperText-root",
    alertaLastName: ".Mui-error.MuiFormHelperText-root",
    alertaPassword: "#password-helper-text",
    alertaConfirmPassword: "#confirmPassword-helper-text",
    
}


  it('Não deve conseguir se cadastrar', () => {
    cy.visit('/signin');
    cy.get(seletores.cadastro).click();
    cy.get(seletores.tituloCadastro).contains('Sign Up');
    cy.get(seletores.lastName).click();
    cy.get(seletores.alertaFirstName).contains('First Name is required');
    cy.get(seletores.lastName).click();
    cy.get(seletores.username).click();
    cy.get(seletores.alertaLastName).contains('Last Name is required');
    cy.get(seletores.password).click();
    cy.get(seletores.confirmPassword).click();
    cy.get(seletores.alertaPassword).contains('Enter your password');
    cy.get(seletores.confirmPassword).click();
    cy.get(seletores.password).click();
    cy.get(seletores.alertaConfirmPassword).contains('Confirm your password');
  })
})