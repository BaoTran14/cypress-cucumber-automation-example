import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import RegistrationPage from "../../../support/pages_object/skyde/registration_page.spec";
// const registrationPage = new RegistrationPage();
// import Generate from "../../../support/modal/generate.spec";
const context = "kplus registration page";

When("the user registers new account with following information in " + context, (datatable) =>{
    // using cypress custom command
    cy.registerNewSkyAccount(datatable);

    // using page object
    /**
    var accountInformation = datatable.rowsHash();
    var email = Generate.randomStringWithLength(6) + accountInformation.emailAtHost;
    registrationPage.registerNewAccount()
        .havingFirstName(accountInformation.firstName)
        .andLastName(accountInformation.lastName)
        .withDateOfBirth(accountInformation.dob)
        .andEmail(email)
        .withPinCodeAs(accountInformation.pin)
        .andMarketingNewsIs(accountInformation.marketingNews)
        .perform()
     */
})