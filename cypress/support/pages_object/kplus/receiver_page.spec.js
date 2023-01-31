import BasePage from "../base_page.spec";

// declare css selector in receiver page
const netflix_premium_select_button = ":nth-child(1) > [data-testid=shadow-box] > [data-testid=product-tile] > .sc-gsBrbv > .sc-kmASHI > .sc-iWFSnp > [data-testid=button] > [data-testid=product-tile-button]";
const sky_go_plus_select_button = ":nth-child(2) > [data-testid=shadow-box] > [data-testid=product-tile] > .sc-gsBrbv > .sc-kmASHI > .sc-iWFSnp > [data-testid=button] > [data-testid=product-tile-button]";
const trendsport_select_button = ":nth-child(3) > [data-testid=shadow-box] > [data-testid=product-tile] > .sc-gsBrbv > .sc-kmASHI > .sc-iWFSnp > [data-testid=button] > [data-testid=product-tile-button]";
const uhd_select_button = ":nth-child(4) > [data-testid=shadow-box] > [data-testid=product-tile] > .sc-gsBrbv > .sc-kmASHI > .sc-iWFSnp > [data-testid=button] > [data-testid=product-tile-button]";
const multiscreen_select_button = ":nth-child(5) > [data-testid=shadow-box] > [data-testid=product-tile] > .sc-gsBrbv > .sc-kmASHI > .sc-iWFSnp > [data-testid=button] > [data-testid=product-tile-button]";
const continue_to_shopping_cart_button = "button[data-test-id='ShoppingCartButton'][type='button']";

class ReceiverPage extends BasePage{
    selectHardware(hardware){
        var hardwareRadio = "#" + hardware + "~span";
        this.clickElement(hardwareRadio, hardware);
    }

    selectAddon(addons){
        if (addons.includes(",")) {
            var desiredAddons = addons.split(",");
            cy.log("user wants to choose these addons: " + desiredAddons);
            desiredAddons.array.forEach(addon => {
                this.selectSignleAddon(addon);
            });
        }else {
            this.selectSignleAddon(addons);
        }

    }

    selectSignleAddon(addon){
        switch (addon) {
            case "Netflix Premium":
                this.clickElement(netflix_premium_select_button, "netflix_premium_select_button");
                break;
            case "Sky Go Plus":
                this.clickElement(sky_go_plus_select_button, "sky_go_plus_select_button");
                break;
            case "Trendsports":
                this.clickElement(trendsport_select_button, "trendsport_select_button");
                break;
            case "UHD":
                this.clickElement(uhd_select_button, "uhd_select_button");
                break;
            case "Multiscreen":
                this.clickElement(multiscreen_select_button, "multiscreen_select_button");
                break;
            default:
                break;
        }
    }

    clickContinueToShoppingCartButton(){
        this.clickElement(continue_to_shopping_cart_button, "continue_to_shopping_cart_button");
    }
}
export default ReceiverPage