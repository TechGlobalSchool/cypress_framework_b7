import LoginPage from "../../pages/LoginPage";

describe('Login page test', () => {


    // it('Login without POM', () => {

    //     cy.visit("https://techglobal-training.com/frontend");
    //     cy.clickCard("Project - Login Function");

    //     cy.get('#username').type('TechGlobal')

    //     cy.get('#password').type('Test1234')

    //     cy.get('#login_btn').click()

    //     cy.get('#success_lgn').should('be.visible')

    // })

    const loginPage = new LoginPage()

    it('Login with POM', () => {

        cy.visit("https://techglobal-training.com/frontend");
        cy.clickCard("Project - Login Function");

        loginPage.userLogin('TechGlobal', 'Test1234')
        loginPage.getSuccessMessage().should('be.visible')
    })
})