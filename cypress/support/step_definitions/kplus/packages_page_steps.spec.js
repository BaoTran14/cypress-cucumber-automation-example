import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import PackagesPage from "../../../support/pages_object/kplus/packages_page.spec";
const packagesPage = new PackagesPage();
const context = "kplus product page";

And("the user completes packages selection with {string} in " + context, (packages) =>{
    packagesPage.selectPackages(packages);
    packagesPage.clickContinueToReceiverButton();
})

And("the user selects package {string} in " + context, (servicePackage) =>{
    packagesPage.selectSinglePackage(servicePackage);
})

And("the user goes to kplus hardware page from " + context, () =>{
    packagesPage.clickContinueToReceiverButton();
})
