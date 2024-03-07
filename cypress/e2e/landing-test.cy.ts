describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/cards')
    cy.get('[data-testid="cypress-card-test"]').should('exist')
    .should('have.text' , 'Available Balance')
  })

  it('renders all cards', () => {
    cy.visit('http://localhost:3000/cards')
    for(let i = 0 ; i<4 ; i++) {
      cy.get(`[data-testid="card-item-${i}"]`).should('exist')
    }
  })
})