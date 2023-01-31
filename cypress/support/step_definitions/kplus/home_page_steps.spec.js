import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pages_object/skyde/home_page.spec";
const homePage = new HomePage();

And('the user accesses kplus product page', () =>{
    homePage.accessPackagePage();
})