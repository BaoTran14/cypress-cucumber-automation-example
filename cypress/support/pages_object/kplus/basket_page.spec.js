import BasePage from "../base_page.spec";

// declare css selector in basket page
const proceed_to_checkout_button = "button[data-test-id='ShoppingCartButton'][type='button']";

class BasketPage extends BasePage{
    clickProceedToCheckoutButton(){
        this.clickElement(proceed_to_checkout_button, "proceed_to_checkout_button");
    }
}
export default BasketPage