describe('Testes de Listas - Quadro Kanban', () => {
    let dadosTeste;

    beforeEach(() => {
        cy.fixture('testData').then((dados) => {
            dadosTeste = dados;
        });

        cy.visit('/');
    });

    it('Adicionar uma lista com sucesso', () => {
        const nomeNovaLista = dadosTeste.listas.validas[0];

        cy.adicionarNovaLista(nomeNovaLista);
        cy.get('h1').should('contain', nomeNovaLista);
    });

    it('Excluir uma lista com sucesso', () => {
        const listaParaExcluir = dadosTeste.listas.validas[1];

        cy.adicionarNovaLista(listaParaExcluir);
        cy.get('h1').should('contain', listaParaExcluir);
        cy.excluirListaPorNome(listaParaExcluir);
        cy.get('h1').should('not.contain', listaParaExcluir);
    });
}); 