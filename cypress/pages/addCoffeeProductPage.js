/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


class addCoffeeProductPage{

    constructor(){
        this.mochaCoffee = "[aria-label='Mocha']";
        this.AmericanoCoffee = "[aria-label='Americano']";
        this.espresso = "[aria-label='Espresso']";
        this.increaseProduct = "[class='cart-preview show']>li:nth-child(1) button:nth-child(1)";
        this.cartCount = "[aria-label='Cart page']";
        this.totalButton = "[data-test='checkout']";
        this.paymentDetailsHeading = "[class='modal-content size'] h1";
        this.yesButton = "[class='yes']";
    }

    clickOnTheProduct(productName){
        if (productName == "Mocha"){
            cy.get(this.mochaCoffee).should('be.visible').click();
        }
        else if(productName == "Americano"){
            cy.get(this.AmericanoCoffee).should('be.visible').click();
        }
        else if(productName == "Espresso"){
            cy.get(this.espresso).should('be.visible').click();
        }
        else{
            Cypress.log("Product input is not correct. Not selecting any product.");
        }
    }

    mouseHoverOnTotalButton(){
        cy.get(this.totalButton).trigger('mouseover');
    }

    addQuantityFromTotalButton(){
        cy.get(this.increaseProduct).should('be.visible').click();
    }


    clickOnTheTotalButton(){
        cy.get(this.totalButton).should('be.visible').click();
    }

    verifyPaymentPageIsDisplaying(){
        cy.get(this.paymentDetailsHeading).should('be.visible');
    }

    selectOffer(){
        cy.get(this.yesButton).should('be.visible').click();
    }

    verifyCartCount(count){
        cy.get(this.cartCount).contains("cart ("+count+")");
    }
}

export default addCoffeeProductPage;