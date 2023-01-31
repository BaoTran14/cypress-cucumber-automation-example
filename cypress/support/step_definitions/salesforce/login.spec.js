import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import SfLoginPage from "../../pages_object/salesforce/login_page.spec";
const sfLoginPage = new SfLoginPage();
const context = "salesforce login page";


When("the user tries to login account with username {string} and password {string} in " + context, (username, password) =>{
    cy.get("@testData").then((data) =>{
        sfLoginPage.login()
            .withUsername(data[username])
            .andPassword(data[password]);
    })
})