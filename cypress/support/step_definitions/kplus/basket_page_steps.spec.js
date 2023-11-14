import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import BasketPage from "../../../support/pages_object/kplus/basket_page.spec";
const basketPage = new BasketPage();
const context = "kplus basket page";

And("the user confirms order in " + context, () =>{
    basketPage.clickProceedToCheckoutButton();
})