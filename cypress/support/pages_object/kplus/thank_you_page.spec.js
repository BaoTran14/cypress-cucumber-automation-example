import BasePage from "../base_page.spec";

// declare css selector in thank you page
const all_bought_packages = "div:nth-child(1)  > [data-testid='shadow-box'] li";
const all_bought_hardware = "div:nth-child(2)  > [data-testid='shadow-box'] li";
const all_bought_addons = "div:nth-child(3)  > [data-testid='shadow-box'] li";

class ThankYouPage extends BasePage{
    verifyPackages(packages){
        if (packages.includes(",")) {
            var boughtPackages = packages.split(",");
            cy.log(boughtPackages);
            boughtPackages.forEach(pkg => {
                this.verifyElementHasText(all_bought_packages, pkg);
            });
        }else{
            this.verifyElementHasText(all_bought_packages, packages);
        }

    }

    verifyHardware(hardware){
        this.verifyElementHasText(all_bought_hardware, hardware);
    }

    verifyAddons(addons){
        if (addons.includes(",")) {
            var boughtAddons = addons.split(",");
            boughtAddons.forEach(addon => {
                this.verifyElementHasText(all_bought_addons, addon);
            });
        }else{
            this.verifyElementHasText(all_bought_addons, addons);
        }

    }

}
export default ThankYouPage