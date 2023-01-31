import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps";
import CheckoutOrderPage from "../../../support/pages_object/skyde/checkout_order_page.spec";
const checkoutOrderPage = new CheckoutOrderPage();
const context = "kplus checkout order page";

And("the user updates the billing and shipping address wiht following information in " + context, (datatable) =>{
    // using cypress command
    cy.updateBillingAndShippingAddress(datatable);
    // using page object builder
    // var billingAddressInformation = datatable.rowsHash();
    // var shippingAddress = {};
    // if (billingAddressInformation.deliveryAddress =="anoherAddress") {
    //     shippingAddress = {
    //         "firstName" : billingAddressInformation.shippingFirstName,
    //         "lastName" : billingAddressInformation.shippingLastName,
    //         "street" : billingAddressInformation.shippingStreet,
    //         "no" : billingAddressInformation.shippingNo,
    //         "additionalAddress" : billingAddressInformation.shippingAdditionalAddress,
    //         "postCode" : billingAddressInformation.shippingPostCode,
    //         "place" : billingAddressInformation.shippingPlace
    //     }
    // }
    // checkoutOrderPage.updateBillingAddress()
    //     .atStreet(billingAddressInformation.street)
    //     .havingNo(billingAddressInformation.no)
    //     .withAdditionalAddress(billingAddressInformation.additionalAddress)
    //     .andPostCode(billingAddressInformation.postCode)
    //     .atPlace(billingAddressInformation.place);
    // checkoutOrderPage.updateDeliveryAddress()
    //     .at(billingAddressInformation.deliveryAddress, shippingAddress)
    //     .perform();
})

And("the user updates payment method as {string} with following information in " + context, (paymentMethod, datatable) =>{
    var paymentInfo = datatable.rowsHash();
    checkoutOrderPage.updatePaymentMethod()
        .as(paymentMethod)
        .withInformation(paymentInfo);
})

And("the user confirms order in " + context, () =>{
    checkoutOrderPage.confirmOrder();
})