import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps";
import ThankYouPage from "../../pages_object/skyde/thank_you_page.spec";
const thankYouPage = new ThankYouPage();
const context = "kplus  thank you page";


Then("the user sees the order information in " + context, (datatable) =>{
    var orderInfo = datatable.hashes();
    orderInfo.forEach(row => {
        thankYouPage.verifyPackages(row.package);
        thankYouPage.verifyHardware(row.hardware);
        thankYouPage.verifyAddons(row.addons);
    });
})