import BasePage from "../base_page.spec";

// declare css selector
const button_selector = {
    "cancel_button":"button[data-test-id='btn-delete']",
    "select_all_button":"button[data-test-id='btn-select-all']"
}

class ConfirmModalPopup extends BasePage{
    clickButton(button){
        this.clickElement(button_selector[button], button);
    }

}
export default ConfirmModalPopup