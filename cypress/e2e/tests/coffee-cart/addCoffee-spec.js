import addCoffeeProductPage from "../../../pages/addCoffeeProductPage";

var addCoffeeProductPageObj = new addCoffeeProductPage();

describe('Add coffee to cart', {testIsolation: false}, ()=>{

    it('Add Mocha to the cart by clicking on it', ()=>{
        addCoffeeProductPageObj.clickOnTheProduct("Mocha");
    })

    it('Add Americano to the cart by clicking on it', ()=>{
        addCoffeeProductPageObj.clickOnTheProduct("Americano");
    })

    it('Hover of the Total on the bottom right, add 1 more Mocha', ()=>{
        addCoffeeProductPageObj.mouseHoverOnTotalButton();
        addCoffeeProductPageObj.addQuantityFromTotalButton();
    })

    it('Add Expresso to the cart by clicking on it - click on it 3 times', ()=>{
        addCoffeeProductPageObj.clickOnTheProduct("Espresso");
        addCoffeeProductPageObj.clickOnTheProduct("Espresso");
        addCoffeeProductPageObj.clickOnTheProduct("Espresso");
    })

    it('Verify that there are 6 items in cart', ()=>{
        addCoffeeProductPageObj.verifyCartCount(6);
    })

    it('You should see that Its your lucky day! Get an extra cup (Mocha) and grab this offer', ()=>{
        cy.contains("It's your lucky day! Get an extra cup of Mocha for $4.");
        addCoffeeProductPageObj.selectOffer();
    })

    it('Verify that there are 7 items in cart', ()=>{
        addCoffeeProductPageObj.verifyCartCount(7);
    })

    it('User click on Total button and verify the payment information modal pops up', ()=>{
        addCoffeeProductPageObj.clickOnTheTotalButton();
        addCoffeeProductPageObj.verifyPaymentPageIsDisplaying();
    })


})