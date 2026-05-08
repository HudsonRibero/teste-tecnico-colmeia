describe('Invalid Authentication Flow', () => {

  it('Should not display authentication warning for valid credentials', () => {

    cy.visit('/')

    cy.get('input[type="email"]')
      .should('be.visible')
      .type('qa@test.com')

    cy.get('input[type="password"]')
      .should('be.visible')
      .type('123456')

    cy.contains('button', 'Entrar')
      .should('be.visible')
      .click()

    // BUG:
    // The system incorrectly displays
    // an authentication warning for valid credentials

    cy.contains(/Seu login está incorreto, quer continuar?/i)
      .should('not.exist')
  })
})