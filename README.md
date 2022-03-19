# QA developer task

This framework uses Cypress for testing with mochawesome for reporting.

 - [mochawesome-report](https://github.com/garry2361323/QA-developer-task-Gaurav/tree/main/mochawesome-report) contains mochawesome report i.e. mochawesome.html
 - [integration](https://github.com/garry2361323/QA-developer-task-Gaurav/tree/main/cypress/integration) contains all the feature files
 - [integration/<feature_file_name>](https://github.com/garry2361323/QA-developer-task-Gaurav/tree/main/cypress/integration/addAsset) contains step definations. The .feature file will use steps definitions from a directory with the same name as .feature file.
 - [integration/common](https://github.com/garry2361323/QA-developer-task-Gaurav/tree/main/cypress/integration/common) contains step definations which are common in all feature files under "integration" folder.
 - [fixtures/existingAssets_stub.json](https://github.com/garry2361323/QA-developer-task-Gaurav/tree/main/cypress/fixtures) contains data to use for stubbing.
 - [pages/](https://github.com/garry2361323/QA-developer-task-Gaurav/tree/main/cypress/pages) page specific methods inside the `pages` folder structure.
 - [support/util](https://github.com/garry2361323/QA-developer-task-Gaurav/tree/main/cypress/support/utils) utitlies which are used globally.

### How to run the tests

Running through test runner

```sh
./node_modules/.bin/cypress open
```

Running using tags

```sh
./node_modules/.bin/cypress-tags run -e TAGS='@smoke'
```

Running through cypress run command using wrapper i.e.mergeReports

```sh
node ./mergeReports cypress run
```

### Retry for flaky tests

By default this project is specified to have retry count with 1. This can be changed by modifying the "retries" entry in 'cypress.json' file. If in case you wish to have multiple retries for a specific testcase, you can add the following within the testcases.

```sh
Cypress.currentTest.retries(4)
```

### Reports

For better illustration on the testcases, mochawsome reports has been integrated.

![image](https://user-images.githubusercontent.com/19347472/159133728-3c18aed1-f1be-457c-956e-afe35369ba07.png)
