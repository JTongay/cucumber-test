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

  // Given('I am on Joey\'s portfolio' , function() {
  //   this.driver.get('https://josephtongay.me');
  // });

  When('I click on the project titled {stringInDoubleQuotes}', function (text) {
    console.log(this.driver.findElement);
    return this.driver.findElement({id: text}).then(function(element) {
      return element.click();
    });
  });

  Then('I should see the title {stringInDoubleQuotes}', function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    console.log(xpath);
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    this.driver.wait(condition, 5000);
  });
});
