/// <reference types="cypress" />


describe('Testing Azure SQL Server DB Connection',()=>{
    
    it('myPractiseDB',()=>{

        cy.sqlServer("select * from Persons").then((result)=>{
            cy.log(result)
        })
    })


})