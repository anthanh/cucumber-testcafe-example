# cucumber-testcafe-example

An example bdd project with cucumber, gherkin and testcafe


## Setup

```

npm install

```


## Run tests

```

npm test

```


### Profiles

You can run tests with a specific profile with some defaults config.

*  **default**: Run tests with no report and default browser
	`npm test`

*  **ci**: Run tests with html report and chrome:headless browser
	`npm run test:ci`

You can add more profiles adding more entries at `cucumber.profiles.json`.

More documentation about cucumber-cli options [here](https://github.com/cucumber/cucumber-js/blob/master/docs/cli.md)
