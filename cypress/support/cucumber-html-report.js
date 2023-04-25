const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/support/cucumber-json", // ** Path of .json file **//
  reportPath: "./reports/cucumber-html-report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "112",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "baru",
    },
  },
});
