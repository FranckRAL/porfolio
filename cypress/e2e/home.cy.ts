describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('/')
    cy.contains('Services').click()
    cy.url().should('include', '#services')

    cy.contains('Projects').click()
    cy.url().should('include', '#projects')

    cy.contains('Services').click()
    cy.url().should('include', '#services')

    cy.contains('Contact').click()
    cy.url().should('include', '#contact')

    cy.get('form input[name="name"]').type('John')
    cy.get('form input[name="name"]').should('have.value', 'John')

    cy.get('form input[name="email"]').type('email@example.com')
    cy.get('form input[name="email"]').should('have.value', 'email@example.com')

    cy.get('form input[name="subject"]').type('Test project')
    cy.get('form input[name="subject"]').should('have.value', 'Test project')
  })
})