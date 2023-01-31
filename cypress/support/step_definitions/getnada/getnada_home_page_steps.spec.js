import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps";
import GetnadaHomePage from "../../pages_object/getnada/getnada_home_page.spec";
const getnadaHomePage = new GetnadaHomePage();
const context = "getnada mail home page";

And("the user open the latest confirmation mail sent from {string} to registered email in " + context, (sender) =>{
    var registeredEmail = Cypress.env("registeredEmail");
    cy.log(registeredEmail);
    getnadaHomePage.openUnreadLatestMail()
        .sentFrom(sender)
        .to(registeredEmail);
})