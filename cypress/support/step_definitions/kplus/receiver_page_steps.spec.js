import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import ReceiverPage from "../../../support/pages_object/skyde/receiver_page.spec";
const receiverPage = new ReceiverPage();
const context = "kplus hardware page";

And("the user completes hardware selection as {string} with addon {string} in " + context, (hardware, addon) =>{
    receiverPage.selectHardware(hardware);
    receiverPage.selectAddon(addon);
    receiverPage.clickContinueToShoppingCartButton();
})