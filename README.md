*********************
## INSTALL CYPRESS
*********************
1. install nodejs
2. create new workspace
3. initialize project and generate package.json: 
    - npm init
4. install cypress: 
    - npm install cypress --save-dev
5. open cypress by 1 among below ways:
    - npx cypress open
    - .\node_modules\.bin\cypress open
    *if cypress not open then update policy:
        - open powershell =>Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
        =>Yes || Yes to All

*********************
## CONVENTION
*********************
1. folder is named with lowercase and seperate by "-". Eg:<google>_<home>
2. folder contains step-definition has same name with feature file as format first uppercase. Eg: <GoogleSearch>
3. spec test file is named in lowercase, seperate by "_", ended with .spec.js. Eg: toolsqa_demo_test.spec.js
4. method name is followed by convention: lowercase followed by Uppercase
5. css selector variable and global variable is set as with lower case , separate by _
6. method, constructor parameter and local variable is set as first lowercase follow by 1st uppercase of each followed word
7. feature file name with first uppercase of each word. Eg: GoogleSearch.feature
8. 1st letter after comment must be separate by one space. Eg: // comments here
9. write log using cy.log("<content>"), <content> is lowercase

*********************
## TEST RUN CLI
*********************
###### 1. Run all test in intergration folder
    - .\node_modules\.bin\cypress run
###### 2. Run specific test: 
    - .\node_modules\.bin\cypress run --spec <path to test file .spec.js>
    Eg: .\node_modules\.bin\cypress run --spec .\cypress\e2e\feature\salesforce\login\Login.feature
###### 3. Run specific folder test:
    - .\node_modules\.bin\cypress run --spec <path to folder test>/*.spec.js
    Eg: .\node_modules\.bin\cypress run --spec .\cypress\e2e\feature\salesforce\*.feature
###### 4. Run in headed mode (not headless): add --headed at the end of command
    - .\node_modules\.bin\cypress run --headed
###### 5. Run with specific browser: add --browser <browserName> ( browserName = {chrome, chromium, edge, electron, firefox} )
    - .\node_modules\.bin\cypress run --browser chrome
###### 6. Run with npm command:
    - npm run <run_key_in_scripts_in_package.json> -- <options> (https://docs.cypress.io/guides/guides/command-line#cypress-run)
    Eg: package.json:
      "scripts": {
            "testSIT": "cypress run --record --key 68a83d9a-62b2-4c87-bfd1-568053fbba52 --headless --browser chrome --env testEnv=sit"
        }
    run => npm run testSIT
###### 7. Run and push result in Dashboad cypress:
    - add --record --key <key_value_of_project_in_dashboard> to the command
    run => npx cypress run --record --key 68a83d9a-62b2-4c87-bfd1-568053fbba52 --spec ./cypress/e2e/*.feature  --headed --browser chrome --env testEnv={sit, uat}

*********************
## CUCUMBER & CYPRESS
*********************
###### 1. Install CUCUMBER: npm install --save-dev cypress-cucumber-preprocessor
###### 2. Configure:
    2.1: Add the below code to ./plugins/index.js file
    const cucumber = require('cypress-cucumber-preprocessor').default
    module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
    }
    2.2: Specify feature in cypress.config.js file (this config will show only .feature in cypressUI)
    e2e: {
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        },
        specPattern: 'cypress/e2e/**/*.{feature,features}',
    },
    2.3: Add the below code at the end of package.json file
    "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
    }
###### 3. Step definition configuraion: 
    3.1.  If "nonGlobalStepDefinitions": true 
     - step-definition must be placed inside folder having same name with corresponding feature file
     - reusable step-definition can be placed inside <common> folder
     
    3.2.  If "nonGlobalStepDefinitions": false 
     - step-definition must be placed inside folder having same name with corresponding feature file or in the path .cypress/support/step_definitions

    Refer: https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/step-definitions.md

*********************
## MOCHA REPORT
*********************
##### Step 1: Install mochawesome
1. Install Mocha
npm install mocha --save-dev
2. Install cypress-multi-reporters
npm install cypress-multi-reporters --save-dev
3. Install mochawesome
npm install mochawesome --save-dev
4. Install mochawesome-merge
npm install mochawesome-merge --save-dev
5. Install mochawesome-report-generator
npm install mochawesome-report-generator --save-dev

##### Step 2: Add reporter settings in cypress.config.js
"reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": false,
            "json": true
        }
    }
##### Step 3: Add scripts in package.json file
**For Windows:**
"scripts": {
    "clean:reports": "del /f cypress\\reports\\mocha\\*.json",
    "combine-reports": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/report.json",
    "generate-report": "marge cypress/reports/report.json -f report -o cypress/reports",
    "posttest": "npm run combine-reports && npm run generate-repor,
    "test":"npm run clean:reports && cypress run && npm run posttest",
  }
**For Mac:**
"scripts": {
    "clean:reports": "rm -R -f cypress/reports && mkdir cypress/reports && mkdir cypress/reports/mochareports",
    "pretest": "npm run clean:reports",
    "scripts": "cypress run",
    "combine-reports": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochareports/report.json",
    "generate-report": "marge cypress/reports/mochareports/report.json -f report -o cypress/reports/mochareports",
    "posttest": "npm run combine-reports && npm run generate-report",
    "test" : "npm run scripts || npm run posttest"
  }

*********************
## PROJECT STRUCTURE WITH CYPRESS + CUCUMBER
*********************
![nonGlobalStepDefinitions = false][./cypress/cypress_cucumber_structure_non_global_step_definition_false.png]

![nonGlobalStepDefinitions = true][./cypress/cypress_cucumber_structure_non_global_step_definition_true.png]

*********************
### REFERENCE
*********************
https://www.toolsqa.com/cypress/what-is-cypress/

https://www.cypress.io/

https://docs.cypress.io/guides/overview/why-cypress

https://docs.cypress.io/guides/guides/command-line#cypress-run

https://github.com/TheBrainFamily/cypress-cucumber-preprocessor

https://www.npmjs.com/package/cypress-cucumber-preprocessor

https://dev.to/bushraalam/using-mochawesome-reporter-with-cypress-54pf