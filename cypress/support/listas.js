Cypress.Commands.add('adicionarNovaLista', (nomeLista) => {
  cy.get('p').contains('Adicionar outra lista').parent().click();
  cy.get('input[placeholder*="lista"], .custom-input input').type(nomeLista);
  cy.get('input[placeholder*="lista"], .custom-input input').type('{enter}');
  cy.get('h1').should('contain', nomeLista);
});

Cypress.Commands.add('excluirListaPorNome', (nomeLista) => {
  cy.get('h1')
    .contains(nomeLista)
    .parent()
    .parent()
    .trigger('mouseover')
    .find('svg[viewBox="0 0 24 24"]')
    .click();
  cy.get('h1').should('not.contain', nomeLista);
}); 