/// <reference types="Cypress" />

describe('BitAdvance TestSuite',()=>{
    
    before(function(){
       
        cy.fixture('example').then(function(data) {
            this.data=data

        })

    })

    it('UsingFixture',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#name').type(this.data.name)
    })
})