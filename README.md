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

##Cucumber Notes

Cucumber is a testing framework, using Gherkin syntax, and is the most readable language that lets you describe software's behavior without detailing how that behaviour is implemented. I've used this before a little bit with Ruby on Rails and started reading 'The RSPEC Book' going into more detail about BDD and TDD.

Cucumber deals with step definitions and certain key words to go over features and scenarios.

##Feature

Cucumber starts out with creating a '.feature' file in the 'features' directory. In that file, that is where you write out your features and scenarios. You start out with the feature itself. An Example of that would be:

```Cucumber
Feature: Some terse yet descriptive text of what is desired
  Textual description of the business value of this feature
  Business rules that govern the scope of the feature
  Any additional information that will make the feature easier to understand
```

Every '.feature' file conventionally consists of a single feature. In that feature, it outlines a 'scenario' which must start with one of the keywords "Given", "When", "Then", "But", or "And". Here's what one would look like:

```Cucumber
Feature: Serve coffee
  Coffee should not be served until paid for
  Coffee should not be served until the button has been pressed
  If there is no coffee left then money should be refunded

Scenario: Buy last coffee
  Given there are 1 coffees left in the machine
  And I have deposited 1$
  When I press the coffee button
  Then I should be served a coffee
```

##Given-When-Then Scenarios

Cucumber scenarios consists of steps, also known as Givens, Whens, and Thens. Technically it doesn't distinguish between these three kinds of steps, however it is best practice that you do.

####Given

The purpose of givens is to put the system in a known state before the user starts interacting with the system(in the when steps). Avoid talking about user interaction in this step.

Examples:
  - Create records (model instances) / set up the database state.
  - It's ok to call into the layer "inside" the UI layer here.
  - Log in a user. (An exception to the no interaction recommendation.)

####When

The purpose of when steps is the describe the key action the user performs (or using a state transition).

Examples:
  - Interact with a web page
  - Interact with some other user interface element.

####Then

The purpose of then steps is to observe outcomes. The observations should be related to the business value/benefit in your feature description. It should also be a kind of output that is something that comes out of the system and not something that is deeply buried inside it.

Examples:
  - Verify that something related to the Given+When (or is not) in the output.
  - Check that some external system has received the expected message.

You should only verify outcome that is observable to the user, don't do it to just look in the database.

####And, But

The purpose of these is just to make things more readable if you have multiple 'givens, whens, or thens'.

Example: Instead of this...

```Cucumber
Scenario: Multiple Givens
  Given one thing
  Given another thing
  Given yet another thing
  When I open my eyes
  Then I see something
  Then I don't see something else
```

You can do this....

```Cucumber
Scenario: Multiple Givens
  Given one thing
    And another thing
    And yet another thing
  When I open my eyes
  Then I see something
    But I don't see something else
```
