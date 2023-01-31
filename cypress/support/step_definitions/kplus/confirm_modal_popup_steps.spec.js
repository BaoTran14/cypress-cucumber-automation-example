import {Given, And, Whem, Then} from "cypress-cucumber-preprocessor/steps";
import ConfirmModalPopup from "../../../support/pages_object/skyde/confirm_modal_popup.spec";
const confirmModalPopup = new ConfirmModalPopup();
const context = "confim modal popup";

And("the user clicks {string} in " + context, (button) =>{
    confirmModalPopup.clickButton(button)
})