const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I visit ecommerce site', ()=>{
    cy.visit(Cypress.env('url')+'angularpractice/')
})

When('I add items to cart',()=>{
    homePage.getShopTab().click()
    cy.selectShopProduct('Blackberry')    
    
})

And('I checkout the items',()=>{
    shopPage.getCheckout().click()

    cy.get('button.btn.btn-success').click()
    cy.get('#country').type('Ind')
    Cypress.config('defaultCommandTimeout',8000)
    cy.get('div[class="suggestions"] >ul>li').eq(0).click()
    cy.get('label[for="checkbox2"]').click()
    cy.get('input[type="submit"]').click()
})

Then('I ordered product sucessfully',()=>{
    cy.get('.alert').then(function(el){
        expect(el.text()).to.contain('Success')
    })
})