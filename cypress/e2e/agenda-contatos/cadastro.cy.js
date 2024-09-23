/// <reference types="cypress" />

describe(' Testes para pagina de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
      })

 
      it('Deve levar o usuario ate o cadastro', () => { 
        cy.get('.sc-gLDzan').first()
        cy.get('input').should('have.length', 3)
      })

      it('Deve preencher o formulario de inscrição', () => {
        cy.get('.sc-gLDzan').first()
          cy.get('[type="text"]').type('ben eliezer')
          cy.get('[type="email"]').type('ben@teste.com')
          cy.get('[type="tel"]').type('11 123456789')
          cy.get('.adicionar').click()
      
      })
  })