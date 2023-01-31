// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import RegistrationPage from "./pages_object/kplus/registration_page.spec";
const registrationPage = new RegistrationPage();
import Generate from "../support/modal/generate.spec";
import CheckoutOrderPage from "./pages_object/kplus/checkout_order_page.spec";
const checkoutOrderPage = new CheckoutOrderPage();

Cypress.Commands.add("registerNewSkyAccount", (accountInfo) =>{
    var accountInformation = accountInfo.rowsHash();
    var email = Generate.randomStringWithLength(6) + accountInformation.emailAtHost;
    Cypress.env("registeredEmail", email);
    registrationPage.registerNewAccount()
        .havingFirstName(accountInformation.firstName)
        .andLastName(accountInformation.lastName)
        .withDateOfBirth(accountInformation.dob)
        .andEmail(email)
        .withPinCodeAs(accountInformation.pin)
        .andMarketingNewsIs(accountInformation.marketingNews)
        .perform()
})

Cypress.Commands.add("updateBillingAndShippingAddress", (billingShiippingInfo) =>{
    var billingAddressInformation = billingShiippingInfo.rowsHash();
    var shippingAddress = {};
    if (billingAddressInformation.deliveryAddress =="anoherAddress") {
        shippingAddress = {
            "firstName" : billingAddressInformation.shippingFirstName,
            "lastName" : billingAddressInformation.shippingLastName,
            "street" : billingAddressInformation.shippingStreet,
            "no" : billingAddressInformation.shippingNo,
            "additionalAddress" : billingAddressInformation.shippingAdditionalAddress,
            "postCode" : billingAddressInformation.shippingPostCode,
            "place" : billingAddressInformation.shippingPlace
        }
    }
    checkoutOrderPage.updateBillingAddress()
        .atStreet(billingAddressInformation.street)
        .havingNo(billingAddressInformation.no)
        .withAdditionalAddress(billingAddressInformation.additionalAddress)
        .andPostCode(billingAddressInformation.postCode)
        .atPlace(billingAddressInformation.place);
    checkoutOrderPage.updateDeliveryAddress()
        .at(billingAddressInformation.deliveryAddress, shippingAddress)
        .perform();
})