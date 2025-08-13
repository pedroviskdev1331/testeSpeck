Cypress.Commands.add('tarefaDeveExistir', (nomeTarefa) => {
  cy.get('p').contains(nomeTarefa).should('exist');
});

Cypress.Commands.add('tarefaNaoDeveExistir', (nomeTarefa) => {
  cy.get('p').should('not.contain', nomeTarefa);
});