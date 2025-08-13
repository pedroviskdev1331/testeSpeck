Cypress.Commands.add('adicionarTarefa', (coluna, nomeTarefa) => {
  const seletoresAdicionarTarefa = {
    'todo': '[id="📝  To DoCreateTask"]',
    'in-progress': '[id="💻  In ProgressCreateTask"]',
    'done': '[id="🚀  DoneCreateTask"]'
  };
  const seletor = seletoresAdicionarTarefa[coluna];
  if (!seletor) {
    throw new Error(`Coluna inválida: ${coluna}. Use: todo, in-progress, done`);
  }
  cy.get(seletor).click();
  cy.get('input[placeholder*="tarefa"], .custom-input input').type(nomeTarefa);
  cy.get('input[placeholder*="tarefa"], .custom-input input').type('{enter}');
  cy.get('p').contains(nomeTarefa).should('exist');
});

Cypress.Commands.add('excluirTarefa', (nomeTarefa) => {
  cy.contains(nomeTarefa)
    .parent()
    .realHover()
    .find('svg[viewBox="0 0 24 24"].trash')
    .click();
  cy.get('p').should('not.contain', nomeTarefa);
});

Cypress.Commands.add('tarefaDeveEstarNaColuna', (nomeTarefa, coluna) => {
  const seletoresColunas = {
    'todo': 'h1:contains("📝  To Do")',
    'in-progress': 'h1:contains("💻  In Progress")',
    'done': 'h1:contains("🚀  Done")'
  };
  
  const seletor = seletoresColunas[coluna];
  if (!seletor) {
    throw new Error(`Coluna inválida: ${coluna}. Use: todo, in-progress, done`);
  }
  
  cy.get(seletor)
    .parent()
    .parent()
    .find('p')
    .should('contain', nomeTarefa);
});