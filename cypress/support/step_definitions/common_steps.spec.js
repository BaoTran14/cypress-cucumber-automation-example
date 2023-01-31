import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import Environment from "../environment";
const environment = new Environment();
const envData = environment.testEnv + "_env_data.json";

Given("the user opens salesforce login page", () =>{
    cy.fixture(envData).then((data) =>{
        cy.visit(data.salesforceUrl);  
    })
})

Given("the user opens kplus home page", ()=>{
    cy.fixture(envData).then((data)=>{
        cy.visit(data.kplusUrl);
    })
})

Given("the user opens {string}", (url) =>{
    /* If url not start with @TD: =>Open url directly
       Else read url value from test data (saved in json file in fixtures folder)
     */
    cy.get("@testData").then((data) =>{
        if (url.startsWith("@TD:")) {
            cy.visit(data[url.substring(4)]);
        } else {
            cy.visit(url);
        }
    })
})