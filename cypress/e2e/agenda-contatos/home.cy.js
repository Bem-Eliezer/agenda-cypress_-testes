/// <reference types="cypress" />

describe(' Testes para home', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve renderizar 3 contatos ', () => {
    
    cy.get('.sc-dmqHEX').should('have.length', 3)
  })  
})