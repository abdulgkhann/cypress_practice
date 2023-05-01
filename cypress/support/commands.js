// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('selectShopProduct', (productName) =>{

    cy.get('app-card-list').find('app-card h4 a').each(($el,index,$list)=>{
        if($el.text().includes(productName)){
            cy.get('button.btn.btn-info').eq(index).click()
        }

    })
})

Cypress.Commands.add('loginAPI',()=>{
    cy.request('POST','https://rahulshettyacademy.com/api/ecom/auth/login',{"userEmail":"abdul@abc.com","userPassword":"Abcd@123"})
    .then((response)=>{
        expect(response.status).to.eq(200)
        //cy.log(response.body.token)
        Cypress.env('token',response.body.token)
    })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })