describe('Forgot Password', () => {

  it('Should redirect user to password recovery flow', () => {

    cy.visit('/')

    cy.contains(/senha/i, {
      timeout: 10000
    })
      .should('be.visible')
      .click()

    cy.url()
      .should(
        'not.eq',
        'https://teste-colmeia-qa.colmeia-corp.com/'
      )
  })
})