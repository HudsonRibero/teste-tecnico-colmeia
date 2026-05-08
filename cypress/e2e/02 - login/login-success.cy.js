describe('Successful Login', () => {

  it('Should login successfully after clicking continue on authentication warning', () => {

    cy.visit('/')

    cy.get('input[type="email"]')
      .type('qa@test.com')

    cy.get('input[type="password"]')
      .type('123456')

    cy.contains('button', 'Entrar')
      .click()

    cy.contains(/Seu login está incorreto, quer continuar?/i)
      .should('be.visible')

    cy.get('.fixed > .flex-col > .flex')
      .contains(/continuar/i)
      .click()

    cy.contains(/colmeia/i, { timeout: 10000 })
      .should('be.visible')
  })
})