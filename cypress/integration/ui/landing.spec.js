/// <reference types="cypress" />

const larguras = [1200, 1090]

larguras.forEach(largura => {
    context('Lading Page', () => {
        beforeEach(() => {
            cy.visit('/')
            //viewport para visualizar o tamanho da tela
            cy.viewport(largura, 900)
                       //'width', 'height'
            
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
})


