/// <reference types="cypress" />

import React from 'react'
import PageHeader from '../../src/components/PageHeader'

import { mount } from 'cypress/react'

import { BrowserRouter as Router } from 'react-router-dom'

context('PageHeader component', () => {

    const baseCss = '/__root/src/assets/styles/global.css'

    const indexCss = '/__root/src/components/pageHeader/style.css'

    it('deve ser renderizado com sucesso', () => {
        let title = "Que incrível que você quer dar aulas."
        let descp = "O primeiro passo é preencher esse formulário de inscrição."
        mount(
            <Router>
                <PageHeader
                    title={title}
                    description={descp}
                />
            </Router>,
            {
                stylesheets: [baseCss, indexCss]
            }
        )

        
        cy.get('.page-header').as('header');
        cy.get('@header').find('strong').as('title');
        cy.get('@header').children('p').as('description');

        cy.get('@title').should('have.text', title)
        cy.get('@description').should('have.text', descp)

        cy.get('@header').then(($elemento) => {
            cy.log($elemento.css('background-color'))
            expect($elemento.css('background-color')).to.be.equal('rgb(130, 87, 229')
        })
    })
})