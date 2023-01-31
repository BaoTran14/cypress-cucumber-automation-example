import BasePage from "../base_page.spec"

// declare css locator in home page
const buy_now_hyperlink = "a[href='/order/selection/products']"

class HomePage extends BasePage{
    accessPackagePage(){
        this.clickElement(buy_now_hyperlink,"buy_now_hyperlink");
    }
}
export default HomePage