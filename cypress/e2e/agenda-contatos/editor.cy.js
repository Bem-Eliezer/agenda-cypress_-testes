/// <reference types="cypress" />

describe(' Testes para pagina de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
      })

      it('Deve editar o formulario ', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit')
         
        cy.get('.sc-gLDzan > div').click()
      
      })
  })