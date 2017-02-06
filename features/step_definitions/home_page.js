// features/step_definitions/browser_steps.js
require('chromedriver')
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(60 * 1000);
});

defineSupportCode(function({Before, Given, When, Then}) {

  Before({timeout: 60 * 1000}, function() {
   // Does some slow browser/filesystem/network actions
  });

  Given('I am on Joey\'s portfolio' , function() {
    this.driver.get('https://josephtongay.me');
  });

  // When('I click on {stringInDoubleQuotes}', function (text) {
  //   this.driver.findElement({linkText: text}).then(function(element) {
  //     return element.click();
  //   });
  // });

  Then('I should see the name {stringInDoubleQuotes}', function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    this.driver.wait(condition, 5000);
  });
});
