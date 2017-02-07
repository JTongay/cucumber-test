##Stuff to know about

####Here are the steps I did to get this boilerplate set up with some descriptions on what things are.

- Obviously create new directory and run 'npm init'
- Once that's done, install 'chromedriver, cucumber, and selenium-webdriver' as dev dependencies. (try subsituting webdriverio for selenium-webdriver).
- Create a directory titled 'features' and within that directory create 2 separate directories titled 'step_definitions' and 'support'
- Do the configurations in the support directory first. This sets up the world and hooks configurations.
  - 'world.js' - This is where you set up the build essentially. This includes instantiating an instance of the seleniumWebdriver.Builder() object called 'this.driver', while configuring the browser and other things (not yet sure what else should go in here, but can assume this is where you configure saucelabs stuff, browser versions, OS versions, etc.)
  - 'hooks.js' - This is where you 'hook' onto your tests and are used for setup and teardown of the enviornment (world) before and after each scenario. The first argument will be a 'ScenarioResult' for the current running scenario. The ScenarioResult is just if it passed, failed, skipped, or ambiguous. Multiple 'before' hooks will run in the order that they were defined, and multiple 'after' hooks will run in the reverse order in that they were defined (wtf).
    - Sidenote about the hooks. You can apply 'tags' on certain hooks that can be conditionally selected for execution based on the tags of the scenario.
    - Check out (https://docs.cucumber.io/tag-expressions/) for more
- Now that I have the configurations setup, time to write out some features. (Go see the later section for more on feautures with Cucumber. There's a ton of stuff to write out.)
- Once I have a feature with scenarios, write out the step definitions in the 'step_definitions' directory. (Again, go to a later section. Too much to write here)
- In my 'package.json' file, write out the 'npm test' script to make running the tests easier to type in. I'm lazy.

```javascript
    "test": "./node_modules/.bin/cucumber-js"
```

- Make sure before I run the test, I have a selenium server going in another tab. I'm using 2 different ones but getting the same results with both. Does it really matter which one I use?

>webdriver-manager start
>or
>selenium-standalone start

- Type in 'npm test' and you have them tests running.
