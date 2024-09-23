/// <reference types="cypress" />

describe(' Testes para pagina de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
      })

      it('Deve deletar o contato', () => {
        cy.get('.sc-iAEyYk > :nth-child(2)').first()
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
      
      })
  })