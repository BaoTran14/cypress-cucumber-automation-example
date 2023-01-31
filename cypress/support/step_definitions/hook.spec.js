import { Before} from "cypress-cucumber-preprocessor/steps";
import Environment from "../environment";
const environment = new Environment();
const envData = environment.testEnv + "_env_data.json";

Before(() =>{
    // load test data and asign as alias for next test run
    cy.fixture(envData).as("testData");
})