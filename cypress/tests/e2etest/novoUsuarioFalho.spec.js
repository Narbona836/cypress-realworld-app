describe('Novo usuario incompleto', () => {

const seletores = {
    cadastro: "[href='/signup']",
    tituloCadastro: "[data-test='signup-title']",
    firstName: "[name='firstName']",
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
    cy.get(seletores.firstName).click();
    cy.get(seletores.firstName).type('t');
    cy.get(seletores.lastName).click();
    //cy.get(seletores.alertaFirstName).contains('First Name is required');(Caso firtName em branco)
    cy.get(seletores.lastName).type('e');
    cy.get(seletores.username).click();
    cy.get(seletores.username).type('s');
    //cy.get(seletores.alertaLastName).contains('Last Name is required');(caso lastName em branco)
    cy.get(seletores.password).click();
    cy.get(seletores.password).type('t');
    cy.get(seletores.confirmPassword).click();
    cy.get(seletores.alertaPassword).contains('Password must contain at least 4 characters');
    cy.get(seletores.confirmPassword).click();
    cy.get(seletores.confirmPassword).type('e');
    cy.get(seletores.password).click();
    cy.get(seletores.alertaConfirmPassword).contains('Password does not match');
  })
})