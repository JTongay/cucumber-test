##Stuff to know about

####Here are the steps I did to get this boilerplate set up with some descriptions on what things are.

- Obviously create new directory and run 'npm init'
- Once that's done, install 'chromedriver, cucumber, and selenium-webdriver' as dev dependencies. (try subsituting webdriverio for selenium-webdriver).
- Create a directory titled 'features' and within that directory create 2 separate directories titled 'step_definitions' and 'support'
- Do the configurations in the support directory first. This sets up the world and hooks configurations.
  - 'world.js' - This is where you set up the build essentially. This includes instantiating an instance of the seleniumWebdriver.Builder() object called 'this.driver', while configuring the browser and other things (not yet sure what else should go in here, but can assume this is where you configure saucelabs stuff, browser versions, OS versions, etc.)
  - 'hooks.js' - This is where you 'hook' onto your tests and are used for setup and teardown of the enviornment (world) before and after each scenario. The first argument will be a 'ScenarioResult' for the current running scenario. The ScenarioResult is just if it passed, failed, skipped, or ambiguous. Multiple 'before' hooks will run in the order that they were defined, and multiple 'after' hooks will run in the reverse order in that they were defined (wtf).
    - Sidenote about the hooks. You can apply 'tags' on certain hooks that can be conditionally selected for execution based on the tags of the scenario. 
