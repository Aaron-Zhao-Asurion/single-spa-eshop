describe('Add to basket', () => {
  it('should increment basket item count', () => {
    cy.visit('http://localhost:9000')
    cy.wait(5000);
    cy.contains('I\'m Done').click();
    cy.wait(1000);
    cy.contains('Add to cart').click()
    cy.contains('Add to cart').click()
    cy.get('#cart-item-count').invoke('text').should('eq', '2')
  })
})