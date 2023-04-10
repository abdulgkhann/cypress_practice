describe('BitAdvance TestSuite',()=>{
    it('WindowHandling',()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#openwindow').invoke('removeAttr','onclick').click()
    })
})