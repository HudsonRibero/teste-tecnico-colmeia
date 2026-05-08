Cypress.Commands.add('login', () => {

  cy.visit('/')

  cy.get('input[type="email"]')
    .type('qa@test.com')

  cy.get('input[type="password"]')
    .type('123456')

  cy.contains('button', 'Entrar')
    .click()

  cy.get('.fixed > .flex-col > .flex')
    .contains(/continuar/i)
    .click()

  cy.contains(/colmeia/i, { timeout: 10000 })
    .should('be.visible')
})