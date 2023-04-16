/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage";
import ShopPage from "../pageObjects/ShopPage";

before(function(){
    cy.fixture('example').then(function(data){
        this.data = data
    })
})

describe('TestFramework TestSuite',function(){

    it('hHomepage TestCase',function(){
        const homePage = new HomePage()
        const shopPage = new ShopPage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePage.getEditBox().type(this.data.name)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getEnterprenuer().should('be.disabled')

        homePage.getShopTab().click()
       // this.data.products.forEach(element => {
        cy.selectShopProduct('Blackberry')    
       // });
        
        
        shopPage.getCheckout().click()

        cy.get('button.btn.btn-success').click()
        cy.get('#country').type('Ind')

       Cypress.config('defaultCommandTimeout',8000)
       cy.get('div[class="suggestions"] >ul>li').eq(0).click()

       cy.get('label[for="checkbox2"]').click()
       cy.get('input[type="submit"]').click()
       cy.get('.alert').then(function(el){
        expect(el.text()).to.contain('Success')
       });


        
        
    })

})
