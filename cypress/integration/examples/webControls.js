describe('CypressWebControls TestSuite',()=>{

    it('CypressWebControls TestCase',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //checkbox
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')

        //select dropdown
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1')
        
        //dynamic dropdown
        cy.get('#autocomplete').type('Can')
        cy.get('.ui-menu-item').find('.ui-menu-item-wrapper').contains('Canada').click()
        cy.get('#autocomplete').should('have.value','Canada')

        //radiobutton
        cy.get('[value="radio3"]').check().should('be.checked')

        //visible check and using alias using 'as' (its a replacement to variable declarations)

        cy.get('#displayed-text').as('visitext').should('be.visible')
        cy.get('#hide-textbox').click()
        //cy.get('#hide-textbox').selectFile
        cy.get('@visitext').should('not.be.visible')
    


    })
})