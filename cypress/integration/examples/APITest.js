/// <reference types="cypress" />

const neatCsv = require("neat-csv")
let expectedProductName
let orderNumber
describe('API Testing in Cypress',()=>{
    
    it('LoginAPI',async()=>{
        //https://rahulshettyacademy.com/client
        //abdul@abc.com
        //Abcd@123
        cy.loginAPI().then(function()
        {
            cy.visit('https://rahulshettyacademy.com/client',{
                onBeforeLoad:function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })

        })


        ///fetchin product name to compare it later with csv productname value
        cy.get('.card-body b').eq(1).then((el)=>{
            expectedProductName = el.text()
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.wait(2000)
        cy.get('button[routerlink="/dashboard/cart"]').click()
        cy.wait(5000)
        cy.contains('Checkout').click()
        cy.wait(5000)

        //dynamic dropdown handling
        cy.get('input[placeholder="Select Country"]').type('Ind')
        cy.get('.ta-results button').each(($el,index,$list)=>{
            if($el.text().trim() === 'India'){
                //$el.trigger("click")
                cy.wrap($el).click()
            }
        })

        cy.get('.action__submit').click()
        cy.wait(2000)

        //fetching order number and comparing it with csv order number
        cy.get('label.ng-star-inserted').then((el)=>{
            orderNumber = el.text().split('|')[1].trim()
        })
        cy.get('.order-summary button').eq(0).click()

        //using cy.readfile to fetch file content
        //passing it to downloadfileContent
        //using neat-csv plugin reading this downloadfileContent and parsing the values and verify

        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_abdul.csv")
        .then(async(downloadfileContent)=>{
            const csv = await neatCsv(downloadfileContent)
            cy.log(csv)
            const actualProductName = csv[0] ["Product Name"]
            const actualOrderNum = csv[0] ["Invoice Number"]
            expect(expectedProductName).to.be.equal(actualProductName)
            expect(orderNumber).to.be.equal(actualOrderNum)
        })
        

    })

})