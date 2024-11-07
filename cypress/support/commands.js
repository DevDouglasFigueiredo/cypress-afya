import { elements } from "./elements";

Cypress.Commands.add('searchAndClickWikipedia', (search) => {
    cy.visit('/');
    cy.get(elements.searchField).type(`${search}{enter}`, { delay: 0 }).should('have.value', search);
    cy.get(elements.results).within(() => {
      cy.contains('Wikipedia').should('be.visible').click();
    });
})