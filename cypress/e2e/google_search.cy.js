describe('Google Search', () => {
  it('should find and access the Wikipedia page from search', () => {
    let search = 'Quality assurance'
    cy.searchAndClickWikipedia(search)

    cy.origin('https://pt.wikipedia.org', () => {
      cy.get('.mw-page-title-main').should('contain.text', 'Garantia da qualidade');
      cy.url().should('include', 'pt.wikipedia.org/wiki/Garantia_da_qualidade');
    });
  });
});