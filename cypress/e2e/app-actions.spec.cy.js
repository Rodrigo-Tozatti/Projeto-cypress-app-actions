
const dados= require ('../fixtures/dados.json')
const {painelAdmin} = require ('../support/pages/painelAdmin.page')

describe('Acessar painel administrador', () => {

  beforeEach(() => {
    cy.login(dados.usuario, dados.senha)
  });

  it('Deve fazer login com sucesso', () => {
    painelAdmin.ebacShop.should("be.visible") // confirmar se o ebac shop está visivel na página
  })

})