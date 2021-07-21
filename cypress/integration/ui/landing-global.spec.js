/// <reference types="cypress" />

context('Lading Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Navegar para o cadastro de aulas', () => {
        cy.get('div a.give-classes').click()
        cy.url().should('contain', 'give-classes')
    });

    it('Navegar para pesquisa de professores', () => {
        cy.get('div a.study').click()
        cy.url().should('contain', 'study')
    });
});

// npx cypress open --config viewportWidth=1090
// indica que todas as aplicações vão abrir neste tamanho de tela


