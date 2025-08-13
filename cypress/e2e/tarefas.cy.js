describe('Testes de Tarefas - Quadro Kanban', () => {
    let dadosTeste;

    beforeEach(() => {
        cy.fixture('testData').then((dados) => {
            dadosTeste = dados;
        });

        cy.visit('/');
    });

    it('Deve adicionar uma tarefa na coluna TO-DO com sucesso', () => {
        const nomeTarefa = dadosTeste.tarefas.validas[0];

        cy.adicionarTarefa(dadosTeste.colunas.todo, nomeTarefa);
        cy.tarefaDeveEstarNaColuna(nomeTarefa, dadosTeste.colunas.todo);
    });

    it('Deve excluir uma tarefa na coluna TO-DO com sucesso', () => {
        const nomeTarefa = dadosTeste.tarefas.validas[1];

        cy.adicionarTarefa(dadosTeste.colunas.todo, nomeTarefa);
        cy.tarefaDeveExistir(nomeTarefa);
        cy.excluirTarefa(nomeTarefa);
        cy.tarefaNaoDeveExistir(nomeTarefa);
    });

    it('Deve adicionar uma tarefa na coluna In Progress', () => {
        const nomeTarefa = dadosTeste.tarefas.validas[2];

        cy.adicionarTarefa(dadosTeste.colunas.emProgresso, nomeTarefa);
        cy.tarefaDeveEstarNaColuna(nomeTarefa, dadosTeste.colunas.emProgresso);
    });

    it('Deve excluir uma tarefa da coluna In Progress', () => {
        const nomeTarefa = dadosTeste.tarefas.validas[3];

        cy.adicionarTarefa(dadosTeste.colunas.emProgresso, nomeTarefa);
        cy.tarefaDeveExistir(nomeTarefa);
        cy.excluirTarefa(nomeTarefa);
        cy.tarefaNaoDeveExistir(nomeTarefa);
    });

    it('Deve adicionar uma tarefa na coluna Done', () => {
        const nomeTarefa = dadosTeste.tarefas.validas[4];

        cy.adicionarTarefa(dadosTeste.colunas.concluido, nomeTarefa);
        cy.tarefaDeveEstarNaColuna(nomeTarefa, dadosTeste.colunas.concluido);
    });

    it('Deve excluir uma tarefa da coluna Done', () => {
        const nomeTarefa = dadosTeste.tarefas.validas[5];

        cy.adicionarTarefa(dadosTeste.colunas.concluido, nomeTarefa);
        cy.tarefaDeveExistir(nomeTarefa);
        cy.excluirTarefa(nomeTarefa);
        cy.tarefaNaoDeveExistir(nomeTarefa);
    });

});