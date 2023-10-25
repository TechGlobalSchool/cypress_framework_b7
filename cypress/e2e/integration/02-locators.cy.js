describe('CSS Locators', () => {

    it('Understanding CSS Syntax - Locating using Tags', () => {

        cy.visit('https://techglobal-training.com/frontend/html-elements')

        cy.get('button')

        cy.get('h3')

        cy.get('li')

        cy.get('input')
    })


    it('Understanding CSS Syntax - Locating using class and id', () => {

        cy.visit('https://techglobal-training.com/frontend/html-elements')

        cy.get('#hello_paragraph')
        cy.get('#testing_paragraph')

        cy.get('#microsoft_check')
    })

    it('Understanding CSS Syntax - Locating web elements with its multiple attributes', () => {

        cy.visit('https://techglobal-training.com/frontend/html-elements')

        cy.get('button.is-inline')
        cy.get('label.is-inline')

        cy.get('div#checkbox-button-group')
    })


    it('Understanding CSS Syntax - Locating child, descendant, adjacent web elements', () => {

        cy.visit('https://techglobal-training.com/frontend/html-elements')

        /**
         * Child Selector (>) *
         * Description: Targets direct children of a specified parent element.
         */

        cy.get('div > #hello_paragraph')
        cy.get('div > #testing_paragraph')

        cy.get('.is-flex > h3')

        cy.get('#radio-button-group > h3')

        cy.get('#radio-button-group > div > label > #radio_1_option_1')


        /**
         * Descendant Selector (>) *
         * Description: Targets elements nested anywhere within a specific parent.
         */

        cy.get('#checkbox-button-group #microsoft_check')

        cy.get('#root #ordered_list_item1')

        

        // Locates immediate sibling of h3
        cy.get('#checkbox-button-group > h3 ~ div')

        // Locates all immediate siblings of h3
        cy.get('#checkbox-button-group > h3 + div')



        cy.get('button, input')
        cy.get('li, p')

        cy.get('#apple_check, #java_radio')

        cy.get('#checkbox-button-group > div #checkbox_1, label')
    })

    it('Understanding CSS Syntax - Attribute locators', () => {

        cy.visit('https://techglobal-training.com/frontend/html-elements')

        cy.get('[class="radio"] > input')
    })
})