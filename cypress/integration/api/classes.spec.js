/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes endpoint', () => {
    it('POST - Cadastrar um novo professor', () => {


        cy.api({
            method: 'POST',
            url: 'http://localhost:3333/classes',
            body: {
                "name": "joao",
                "avatar": "https://www.kindpng.com/imgv/ixJxxh_transparent-avatar-png-male-avatar-icon-transparent-png/",
                "whatsapp": "1198226708",
                "bio": "muio loko",
                "subject": "Física",
                "cost": 10,
                "schedule": [
                    {
                        "week_day": 0, 
                        "from": "03:00", 
                        "to": "10:00"
                    }
                ]
            }
        }).then((res) => {
            
        })
    });
});