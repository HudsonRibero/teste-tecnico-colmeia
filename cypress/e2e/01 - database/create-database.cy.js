describe('Create Database', () => {

  it('Should create database successfully', () => {

    cy.login()

    const databaseName = `Database-${Date.now()}`

    cy.get('.flex-col > .flex')
      .click()

    cy.get('menu > .flex > :nth-child(1) > a')
      .click()

    cy.get('.py-1 > :nth-child(2) > .gap-2')
      .click()

    cy.get('.flex-col > div.w-full > .w-full')
      .type(databaseName)

    cy.get('.fixed > .flex-col > .flex')
      .click()

    cy.contains(databaseName, {
      timeout: 10000
    })
      .should('be.visible')
  })
})