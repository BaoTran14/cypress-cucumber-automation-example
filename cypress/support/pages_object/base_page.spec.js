// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// declare common css selector
const spinner = "p[data-test-id='loading-aria']";
const spinnerHardware = "span[data-test-id='toolkit-clickable-spinner']";

class BasePage{
    inputTextToField(textField, text, textFieldName){
        cy.get(textField).clear().type(text);
        cy.log("user inputs value " + text + " into field " + textFieldName);
    }

    clickElement(element, elementName){
        cy.get(element)
            .should("be.visible")
            .scrollIntoView()
            .click();
        cy.log("user clicks " + elementName);
        this.waitForSpinner();
    }

    clickElementHasText(element, text){
        cy.get(element)
            .contains(text)
            .should("be.visible")
            .scrollIntoView()
            .click();
        cy.log("user clicks " + element + "has text " + text);
    }

    clickElementWithDelay(element, delay){
        cy.get(element)
            .scrollIntoView()
            .click({timeout:delay});
    }

    checkBoxOrRadio(boxOrRadio, boxOrRadioName){
        cy.get(boxOrRadio)
            .should("be.visible")
            .check({force: true})
        cy.log("user selects " + boxOrRadioName);
    }

    checkBoxOrRadioWithValue(value, boxOrRadioName){
        cy.get(":is([type='radio'], [type='checkbox'])")
            .should("be.visible")
            .check(value, {force: true})
        cy.log("user selects " + boxOrRadioName);
    }

    selectValue(value){
        return new SelectDropDownValueBuilder(value);
    }

    verifyElementHasText(element, text){
        cy.get(element)
            .should("be.visible")
            .and("contain.text", text);
    }

    waitForSpinner(){
        cy.get(spinner, {timeout: 30000}).should("not.exist");
        cy.get(spinnerHardware, {timeout: 30000}).should("not.exist");
        cy.log("user waits for laoding spinner finishes within max duration of 10000 ms")
    }
}

class SelectDropDownValueBuilder{
    constructor(value){
        this.value = value;
    }
    ofDropDown(element, elementName){
        cy.get(element).select(this.value);
        cy.log("user selects value " + this.value + " from dropdown " + elementName)
    }
}
// module.exports = BasePage;
export default BasePage;