/// <reference types="cypress" />

let expectedProductName;
describe('Read Excel using converExcelToJson',()=>{
    
    it('TC_convertExcelToJson',()=>{

      
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

        //.contains works only on button elements
        cy.get('.order-summary button').contains('Excel').click()

        //browser (engine) - js code - cypress supports - frontend
        //node (engine) - js code - not supported by cypress directly - backend

        //to use functions written for node, we have to task in cypress (for eg fs,readFileSync)

        const excelFilePath = Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_abdul.xlsx"

        //below excelToJsonTask is created in cypress.config.js file
        cy.task('excelToJsonTask',excelFilePath).then((excelFileContent)=>{
            cy.log(excelFileContent)
            expect(expectedProductName).to.equal(excelFileContent.data[1].B)
        }) 
     
        
        //const excelFilePath = Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_abdul.xlsx"
        cy.readFile(excelFilePath).then((excelfileContent)=>{
            expect(excelfileContent).to.include(expectedProductName)
        })
    })


})