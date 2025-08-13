describe('Testes de Interface - Quadro Kanban', () => {
    let dadosTeste;

    beforeEach(() => {
        cy.fixture('testData').then((dados) => {
            dadosTeste = dados;
        });

        cy.visit('/');
    });

 
    it('Deve validar as colunas padrão do Kanban', () => {
        // Verificar se as três colunas padrão estão presentes
        cy.get('h1:contains("📝  To Do")').should('exist');
        cy.get('h1:contains("💻  In Progress")').should('exist');
        cy.get('h1:contains("🚀  Done")').should('exist');  

        // Verificar se cada coluna tem seu botão de adicionar tarefa
        cy.get('[id="📝  To DoCreateTask"]').should('exist');
        cy.get('[id="💻  In ProgressCreateTask"]').should('exist');
        cy.get('[id="🚀  DoneCreateTask"]').should('exist');
    });

    it('Deve validar o switch de tema', () => {
        cy.get('input[role="switch"]').should('be.checked');
        cy.get('input[role="switch"]').parent().click();
        cy.get('input[role="switch"]').should('not.be.checked');
       });

    it('Deve validar a responsividade da interface', () => {
        cy.viewport(1280, 720);
        cy.get('h1:contains("📝  To Do")').should('be.visible');
        
        cy.viewport(768, 1024);
        cy.get('h1:contains("📝  To Do")').should('be.visible');
        
        cy.viewport(375, 667);
        cy.get('h1:contains("📝  To Do")').should('be.visible');
    });

});
