import BasePage from "../base_page.spec";
import DateTimeUtils from "../../modal/date_time_utils.spec";

// declare css selector in registration page
const firstname_field = "#first-name";
const lastname_field = "#last-name";
const day_of_birth = "#day";
const month_of_birth = "#month";
const year_of_birth = "#year";
const email_field = "#email";
const confirm_email_field = "#confirmEmail";
const pin_field = "[name='pin-0'][type='password']";
const marketing_news_box = "#marketing-permission";
const submit_button = "div.user-formular__actions button[type='button']";

class RegistrationPage extends BasePage{
    registerNewAccount(){
        // cy.registerNewSkyAccount(accountInfo);
        return new RegisterNewAccountBuilder();
    }
}

class RegisterNewAccountBuilder extends BasePage{
    havingFirstName(firstName){
        this.inputTextToField(firstname_field, firstName, "firstname_field");
        return this;
    }
    andLastName(lastName){
        this.inputTextToField(lastname_field, lastName, "lastname_field");
        return this;
    }
    withDateOfBirth(dob){
        if (!DateTimeUtils.dateFormatIsddMMyyyy(dob)) {
            throw new Error("inputted date is wrong format. The correct format is dd/MM/yyyy");
        }else{
            var [day, month, year] = dob.split("/");
            day = DateTimeUtils.formatDayMonth(day);
            month = DateTimeUtils.formatDayMonth(month);
            this.selectValue(day).ofDropDown(day_of_birth, "day_of_birth");
            this.selectValue(month).ofDropDown(month_of_birth, "month_of_birth");
            this.selectValue(year).ofDropDown(year_of_birth, "year_of_birth");
        }
        return this;
    }
    andEmail(email){
        this.inputTextToField(email_field, email, "email_field");
        this.inputTextToField(confirm_email_field, email, "confirm_email_field");
        return this;
    }
    withPinCodeAs(pin){
        this.inputTextToField(pin_field, pin, "pin_field");
        return this;
    }
    andMarketingNewsIs(marketingNews){
        if (marketingNews == "yes") {
            this.checkBoxOrRadio(marketing_news_box, "marketing_news_box")
        }
        return this;
    }
    perform(){
        this.clickElement(submit_button, "submit_button");
    }
}
export default RegistrationPage