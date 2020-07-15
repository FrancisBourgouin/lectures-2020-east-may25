// Search on google for Einstein-Rosen Bridges
// See if first result is from wikipedia


describe('Search for sciency stuff', () => {
  it('will search and look in the search result', () => {
    cy.visit('https://google.com')

    cy.get('.gLFyf').type('Einstein-Rosen Bridges{enter}')

    cy.get(':nth-child(3) > .rc > .r > [href="https://en.wikipedia.org/wiki/Wormhole"] > .LC20lb')
  })

})