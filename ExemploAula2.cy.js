///<reference= cypress>
describe("Testes da criação, registro e login", ()=>{
  it("Teste criação de usuário com sucesso",()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("dudu")
    cy.get('#Text1').type("dudu")
    cy.get('#username').type("dudu")
    cy.get('#password').type("dudu")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text","Registration successful")

  })

  it("Teste criação de usuário com falha",()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("dudu")
    cy.get('#Text1').type("dudu")
    cy.get('#username').type("dudu")
    cy.get('.btn-primary').should("be.disabled")

  })  

  it("Teste criação de login com sucesso",()=>{
    let infos = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text",infos[0])
  })
})

function criarUser(){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let ID = hora + minuto + seg + "ID"
  let Senha = hora + minuto + seg + "Senha"
  let infos = [ID, Senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(ID)
  cy.get('#Text1').type(ID)
  cy.get('#username').type(ID)
  cy.get('#password').type(Senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should("contain.text","Registration successful")

  return infos
}