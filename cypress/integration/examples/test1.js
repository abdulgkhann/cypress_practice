describe('MY FIRST TEST SUITE',()=>{

    it('My first test case',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(500)
        
        //parent child chaining
        cy.get('.products').find('.product').each(($e1,index, $list) => {
            if($e1.find('.product-name').text().includes('Cashew')){
                cy.wrap($e1).find("button").click()
                cy.log('product selected successfully')
            }
        })
        cy.get('.cart-icon img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        cy.contains('Choose Country').should('be.visible')
    })
    
    it('My second test case',()=>{
        
    })

})

// 