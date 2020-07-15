// Pick either axe or moai or tree
// see if the computer wins or not
// see a restart button
// once clicked on the button
// redo initial step

describe('Player wants to play multiple rounds, without reloading', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('button.login').click()
  })

  afterEach(() => {
    cy.get('button.logout').click()
  })



  it("should be able to run a first round without issue", () => {
    // Always visit the website first!
    // cy.visit('/')

    cy
      .get('.choices button')
      .first()
      .click()

    cy
      .get('button.rematch')
      .should('have.text', 'that\'s fucking cool. Play again! Rematch')

    cy
      .get('button.rematch')
      .click()

    cy
      .get('.choices h2')
      .should('have.text', 'Choose your destiny!')
  })

  it("should be able to run two rounds without issue", () => {
    // Always visit the website first!
    // cy.visit('/')

    cy
      .get('.choices button')
      .first()
      .click()

    cy
      .get('button.rematch')
      .should('have.text', 'that\'s fucking cool. Play again! Rematch')

    cy
      .get('button.rematch')
      .click()

    cy
      .get('.choices h2')
      .should('have.text', 'Choose your destiny!')

    cy
      .get('.choices button')
      .eq(1)
      .click()

    cy
      .get('button.rematch')
      .should('have.text', 'that\'s fucking cool. Play again! Rematch')

    cy
      .get('button.rematch')
      .click()

    cy
      .get('.choices h2')
      .should('have.text', 'Choose your destiny!')
  })
})