describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  it('basic', () => {
    cy.log("test case1")
  })
})

///<reference types="Cypress" />

describe('Login feature test', () => {
  //hook 
  //before run 1 time
  // before(() => {
  //   cy.log("Run the server locally")
  // })
  //beforeEach will run 10 times 
  // beforeEach(() => {
  //   cy.log("should navigate the login page ")
  // })
  //after
  // after(() => {
  //   cy.log("kill the server ")
  // })

  ["macbook-15", "iphone-x"].forEach(size => {
     //afterEach 
  it('should visit the login page correctly on size ' + size, () => {
    // cy.log("Run the server locally")
    // cy.log("Navigate to login page")
    // cy.visit("https://example.cypress.io")
    // cy.visit("https://localhost:3000")
    cy.viewport(size)
    cy.visit("/")
    cy.log("size", size)

    cy.get('css selector')
    

    cy.log("website have a correct url")
    cy.log("kill the server ")

  })
  it('should login correctly', () => {
    // cy.log("Run the server locally")
    // cy.log("Navigate to login page")
    cy.log("fill the username and password then login")
    cy.log("should navigate the login page ")

  })
  })
 
})