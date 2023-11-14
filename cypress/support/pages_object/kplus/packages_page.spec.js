import BasePage from "..//base_page.spec";
import HomePage from "../kplus/home_page.spec";
const homePage = new HomePage();

// declare css locator
const entertainment_select_button = ":nth-child(1) > [data-testid=card] > .u-text-center > [data-testid=checkbox] > .c-btn";
const entertainment_plus_select_button = ":nth-child(2) > [data-testid=card] > .u-text-center > [data-testid=checkbox] > .c-btn";
const cinema_select_button = ":nth-child(3) > [data-testid=card] > .u-text-center > [data-testid=checkbox] > .c-btn";
const contiune_to_receiver_button = "button[data-test-id='ShoppingCartButton'][type='button']";

class PackagesPage extends BasePage{
    selectPackages(packages){
        // access package page
        homePage.accessPackagePage();
        // select expected packages
        if (packages.includes(",")) {
            var desiredPackage = packages.split(",");
            cy.log("user wants to choose these packages " + desiredPackage);
            desiredPackage.forEach(element => {
                this.selectSinglePackage(element);
            });
        }else{
            this.selectSinglePackage(packages);
        }

    }

    selectSinglePackage(servicePackage){
        switch (servicePackage) {
            case "Entertainment":
                this.clickElement(entertainment_select_button, "entertainment_select_button");
                break;
            case "Entertainment Plus":
                this.clickElement(entertainment_plus_select_button, "entertainment_plus_select_button");
                break;
            case "Cinema":
                this.clickElement(cinema_select_button, "cinema_select_button");
                break;
            default:
                break;
        }
        cy.log("user selects package as " + servicePackage);
    }

    clickContinueToReceiverButton(){
        this.clickElement(contiune_to_receiver_button, "contiune_to_receiver_button");
    }
}
export default PackagesPage