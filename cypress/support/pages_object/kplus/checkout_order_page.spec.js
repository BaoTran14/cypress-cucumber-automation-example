
import BasePage from "../base_page.spec";

// declare css selector in checkout order page
const street_field = "#billing-street_name";
const no_field = "#billing-house_number";
const additional_address_field = "#billing-addit_address";
const post_code_field = "#billing-postal_code";
const place_field = "#billing-city";
const save_billing_shipping_info_button = "button[type='button'][data-test-id='submit-button']";
const shipping_first_name_field = "#shipping-first_name";
const shipping_last_name_field = "#shipping-last_name";
const shipping_street_field = "#shipping-street_name";
const shipping_no_field = "#shipping-house_number";
const shipping_additional_address_field = "#shipping-addit_address";
const shipping_post_code_field = "#shipping-postal_code";
const shipping_place_field = "#shipping-city";
const direct_debit_method = "img[alt='Bankeinzug']";
const account_holder_field = "#bank-account-holder-name";
const iban_field = "#iban";
const submit_payment_method_button = "button[type='button'][data-test-id='toolkit-button']";
const order_submit_button = "button[type='button'][data-test-id='order-submit-button']";

class CheckoutOrderPage extends BasePage{
    updateBillingAddress(){
        return new UpdateBillingAddressBuilder();
    }

    updateDeliveryAddress(){
        return new UpdateDeliveryAddressBuilder()
    }

    updatePaymentMethod(){
        return new UpdatePaymentMethodBuilder();
    }

    confirmOrder(){
        this.clickElement(order_submit_button, "order_submit_button");
    }
}

class UpdateBillingAddressBuilder extends BasePage{
    atStreet(street){
        this.inputTextToField(street_field, street, "street_field");
        return this;
    }
    havingNo(no){
        this.inputTextToField(no_field, no, "no_field");
        return this;
    }
    withAdditionalAddress(additionalAddress){
        if (!(additionalAddress.toLowerCase() == "none")) {
            this.inputTextToField(additional_address_field, additionalAddress, "additional_address_field");
        }
        return this;
    }
    andPostCode(postCode){
        this.inputTextToField(post_code_field, postCode, "post_code_field");
        return this;
    }
    atPlace(place){
        this.inputTextToField(place_field, place, "place_field");
    }
}

class UpdateDeliveryAddressBuilder extends BasePage{
    at(deliveryAddress, shippingAddress){
        switch (deliveryAddress) {
            case "sameBillingAddress":
                this.checkBoxOrRadioWithValue("address-same", "use_billing_address_radio");
                break;
            case "anoherAddress":
                this.checkBoxOrRadioWithValue("address-different", "use_another_address_radio");
                (new UpdateAnotherDeliveryAddress())
                    .withReceiver()
                    .havingFirstname(shippingAddress.firstName)
                    .andLastname(shippingAddress.lastName)
                    .atStreet(shippingAddress.street)
                    .havingNo(shippingAddress.no)
                    .withAdditionalAddress(shippingAddress.additionalAddress)
                    .andPostCode(shippingAddress.postCode)
                    .atPlace(shippingAddress.place)
                break;
            case "dhlPackstationAddress":
                this.checkBoxOrRadioWithValue("address-dhl", "use_dhl_packstation_address_radio");
                break;
            default:
                break;
        }
        return this;
    }

    perform(){
        this.clickElement(save_billing_shipping_info_button, "save_billing_shipping_info_button");
    }
}

class UpdateAnotherDeliveryAddress extends BasePage{
    withReceiver(){
        return this;
    }
    havingFirstname(firstName){
        this.inputTextToField(shipping_first_name_field, firstName, "shipping_first_name_field");
        return this;
    }
    andLastname(lastName){
        this.inputTextToField(shipping_last_name_field, lastName, "shipping_last_name_field");
        return this;
    }
    atStreet(street){
        this.inputTextToField(shipping_street_field, street, "shipping_street_field");
        return this;
    }
    havingNo(no){
        this.inputTextToField(shipping_no_field, no, "shipping_no_field");
        return this;
    }
    withAdditionalAddress(additionalAddress){
        if (!(additionalAddress.toLowerCase() == "none")) {
            this.inputTextToField(shipping_additional_address_field, additionalAddress, "shipping_additional_address_field");
        }
        return this;
    }
    andPostCode(postCode){
        this.inputTextToField(shipping_post_code_field, postCode, "shipping_post_code_field");
        return this;
    }
    atPlace(place){
        this.inputTextToField(shipping_place_field, place, "shipping_place_field");
    }
}

class UpdatePaymentMethodBuilder extends BasePage{
    as(paymentMethod){
        this.payment = paymentMethod;
        return this;
    }

    withInformation(information){
        switch (this.payment) {
            case "Direct debit":
                this.updateDirectDebitPayment(information);
                break;
            default:
                break;
        }
        this.clickElement(submit_payment_method_button, "submit_payment_method_button");
    }

    updateDirectDebitPayment(information){
        this.clickElement(direct_debit_method, "direct_debit_method");
        this.inputTextToField(account_holder_field, information.accountHolder, "account_holder_field");
        this.inputTextToField(iban_field, information.iban, "iban_field");
    }
}
export default CheckoutOrderPage