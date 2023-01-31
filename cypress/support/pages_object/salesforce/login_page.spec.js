import BasePage from "../base_page.spec";
// const BasePage = require("../base_page.spec");

// declare locator
const username_field = "#username";
const password_field = "#password";
const login_button = "#Login"
class SfLoginPage extends BasePage{
    // constructor(){
    //     // this.loginBuilder = new LoginBuilder();
    // }

    login(){
        return new LoginBuilder();
    }

    // loginWithUsernameAndPassword(username, password){
    //     this.inputTextToField(username_field, username);
    //     this.inputTextToField(password_field, password);
        
    // }
}

class LoginBuilder extends BasePage{

    withUsername(username){
        this.inputTextToField(username_field, username, "username_field");
        return this;
    }

    andPassword(password){
        this.inputTextToField(password_field, password, "username_field");
        this.clickElement(login_button, "login_button");
    }
}
export default SfLoginPage;