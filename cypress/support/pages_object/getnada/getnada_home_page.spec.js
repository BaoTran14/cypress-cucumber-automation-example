import BasePage from "../base_page.spec";

// declare css select in getnada home page

class GetnadaHomePage extends BasePage{
    openUnreadLatestMail(){
        this.accessHomePage();
        return new OpenUnreadLatestMailBuilder();
    }

    accessHomePage(){
        cy.fixture("all_env_data.json").then(data =>{
            cy.visit(data.getnadaUrl);
        })
    }

}

class OpenUnreadLatestMailBuilder extends BasePage{
    sentFrom(sender){
        this.sender = sender;
        return this;
    }
    to(receiver){

    }
}
export default GetnadaHomePage