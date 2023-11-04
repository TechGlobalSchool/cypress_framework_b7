/// <reference types="cypress" />

describe("Keyboard & Mouse Actions", () => {

  it("Keyboard Actions", () => {
    cy.visit("https://techglobal-training.com/frontend");
    cy.clickCard("Html Elements");


    // cy.get('#dropdown-button').trigger('mouseover')
    // cy.get('#dropdown-button').realHover()


    cy.get('#text_input1')
    .realClick()
    .realPress('A')
    .realPress('Tab')
    .realPress('KeyB')
    .realPress('ArrowLeft')
    .realPress('R')
    .realPress('ArrowRight')
    .realPress('Backspace')

  });
});
