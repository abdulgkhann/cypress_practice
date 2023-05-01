/// <reference types="Cypress" />
const { Given, When, Then, attach, DataTable } = require("@badeball/cypress-cucumber-preprocessor");
import HomePage from "../pageObjects/HomePage";
import ShopPage from "../pageObjects/ShopPage";

const homePage = new HomePage();
const shopPage = new ShopPage();
let data
beforeEach(()=>
{
    cy.fixture('example').then(function(fData)
    {
    data=fData
    })
});



Given('I visit ecommerce site', ()=>{
    cy.visit(Cypress.env('url')+'angularpractice/')
    attach("foobar")
})

When('I add items to cart',()=>{
    
    homePage.getShopTab().click()
    data.products.forEach(element => {
        cy.selectShopProduct(element)
    });
    
    
})

When('I checkout the items',()=>{
    shopPage.getCheckout().click()

    cy.get('button.btn.btn-success').click()
    cy.get('#country').type('Ind')
    Cypress.config('defaultCommandTimeout',8000)
    cy.get('div[class="suggestions"] >ul>li').eq(0).click()
    cy.get('label[for="checkbox2"]').click({force: true})
    cy.get('input[type="submit"]').click()
})

Then('I ordered product sucessfully',()=>{
    cy.get('.alert').then(function(el){
        expect(el.text()).to.contain('Success')
    })
})

When('I fill the form details',(dataTable)=>{
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
    //homePage.getEditBox().type(data.name)
    //homePage.getGender().select(data.gender)
})

Then('I validate form details',()=>{
    homePage.getTwoWayDataBinding().should('have.value',data.name)
    homePage.getEnterprenuer().should('be.disabled')
})

Then('I select Shop page',()=>{
    homePage.getShopTab().click()
})

