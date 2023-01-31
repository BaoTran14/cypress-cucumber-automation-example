class Environment{
    constructor(){
        this.testEnv = Cypress.env("testEnv");
    }
}
export default Environment;