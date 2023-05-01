const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');

const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

async function setupNodeEvents(on, config) {

  config.db = {
    userName: "abdulgkhan",
    password: "Agk18hasin@",
    server: "mypracticedbserver.database.windows.net",
    options: {
        database: "myPracticeDB",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
  }

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));

  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  on('task',{
    excelToJsonTask(filePath){
      const result = excelToJson({
        source: fs.readFileSync(filePath)
      });
    return result;
    }

  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

//async function setupNodeEvents(on,config){}


module.exports = defineConfig({
  projectId: "i7udd9",
  defaultCommandTimeout: 6000,
  video:true,
  env:{
    url:'https://rahulshettyacademy.com/'
  },

  e2e: {
    setupNodeEvents,
    //specPattern: 'cypress/integration/BDD/*.feature'
    specPattern: 'cypress/integration/examples/*.js'
  },
});
