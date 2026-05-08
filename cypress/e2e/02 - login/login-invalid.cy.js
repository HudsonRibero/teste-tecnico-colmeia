describe('Invalid Login', () => {

  it('Should display error message with invalid credentials', () => {

    cy.visit('/')

    cy.get('input[type="email"]')
      .should('be.visible')
      .type('emailinvalido@test.com')

    cy.get('input[type="password"]')
      .should('be.visible')
      .type('senhaerrada')

    cy.contains('button', 'Entrar')
      .should('be.visible')
      .click()

    cy.contains(/login incorreto|senha incorreta|erro|inválido/i, {
      timeout: 10000
    })
      .should('be.visible')

    cy.url()
      .should('eq', 'https://teste-colmeia-qa.colmeia-corp.com/')
  })
})