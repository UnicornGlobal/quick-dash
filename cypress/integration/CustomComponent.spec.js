describe('Custom Component', function() {
  before(function () {
    cy.server()
    let url = Cypress.env('apiUrl')
    cy.route(url + '/api/me').as('getUserMe')
    cy.loginXhr('admin', 'admin')
    cy.location('href').then((address) => {
      if (address !== `${Cypress.config().baseUrl}/custom`) {
        cy.visit('/custom')
      }
    })
  })

  beforeEach(function () {
    cy.loginXhr('admin', 'admin')
  })

  it('Has the correct header', function () {
    cy.get('h1').contains('Custom Component!')
  })

  it('Has the click button', function () {
    cy.get('button').contains('clicked 0 times').should('exist')
    cy.get('button').contains('clicked 0 times').click()
    cy.get('button').contains('clicked 1 times').should('exist')
  })
})

