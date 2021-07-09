describe('Add to basket', () => {
  it('should increment basket item count', () => {
    cy.visit('//localhost:9000')
    cy.contains('Add to cart').click()
    cy.contains('Add to cart').click()
    cy.get('#cart-item-count').invoke('text').should('eq', '2')
  })
})