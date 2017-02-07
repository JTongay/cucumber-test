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

  Given('I visit http://google.com', function(){
    this.driver.get('http://google.com')
  })

  When('I enter {stringInSoubleQuotes} into {stringInSingleQuotes}', function (text1, text2) {
    console.log(this.driver.findElement);
    return this.driver.findElement({id: text2}).then(function(element) {
      return element.sendKeys(text1);
    });
  });

  Then('I should see search results', function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    console.log(xpath);
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    this.driver.wait(condition, 5000);
  });
});
