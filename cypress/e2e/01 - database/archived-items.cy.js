describe('Archived Items', () => {

  it('Should access archived items screen', () => {

    cy.login()

    cy.get('.flex-col > .flex')
      .click()

    cy.get('menu > .flex > :nth-child(1) > a')
      .click()

    cy.get('.py-1 > :nth-child(1) > .justify-center')
      .click()

    cy.contains(/arquivados/i, {
      timeout: 10000
    })
      .should('be.visible')
  })
})