/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />


context('Connections end', () => {
    it('GET - Obter total de conexões realizadas ', () => {
        // cy.api -> retorna a api em tela para facilitar a visualização
        cy.api({
            method: 'GET',
            url: `${Cypress.config().apiUrl}`,

        }).then((res) => {
            expect(res.status).to.eq(200)

            expect(res.duration).lessThan(20) //.lt(20)

            expect(res.body)
                .to.have.property('total')
                .to.be.a('number')
                .greaterThan(5)

            expect(res.body.total)
                .an('number')
                .satisfy((totalValue) => { return totalValue >= 5 }) // função que retorna um boolean

            expect(res.headers)
            .to.have.property('content-type')
            .an('string')
            .equal('application/json; charset=utf-8')

        })

    

    })
    /*cy.request({
        method: 'GET',
        url: `${Cypress.config().apiUrl}`,

    }).then((res) => {
        expect(res.status).to.be.eq(200)
    })*/

});