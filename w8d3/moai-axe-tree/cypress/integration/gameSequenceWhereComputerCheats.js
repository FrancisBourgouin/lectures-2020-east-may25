// visit /
// click on robot
// click on moai or axe or tree
// experience sadness because we lost
// try a rematch even if we're hopeless against Skynet


describe('Make sure that the computer always win on all picks', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.game span').first().click()
    cy.get('.game span').first().should('have.class', 'cheating')
  })

  it('wins when we select the moai', () => {
    cy.get('.choices button').last().click()

    cy.get('.result h2').should('have.text', 'Computer won, Skynet FOREVER')
  })
  it('wins when we select the axe', () => {
    cy.get('.choices button').eq(1).click()

    cy.get('.result h2').should('have.text', 'Computer won, Skynet FOREVER')
  })
  it('wins when we select the tree', () => {
    cy.get('.choices button').first().click()

    cy.get('.result h2').should('have.text', 'Computer won, Skynet FOREVER')
  })
})