# Liferay TestCafe React Testing

This Repository is for storing tests and files related to testing Liferay Portal 7.3 React Components.
It will require that you both have TestCafe installed along with Liferay Portal 7.3 running.

## Installation
In order for TestCafe to run, ensure that [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) are installed on your machine.

After Node.js and npm are installed, run the following command:
```
npm install -g testcafe
```
For more information on TestCafe, you can take a look at 
[TestCafe](https://devexpress.github.io/testcafe/documentation/getting-started/).

## Creating a Test

Once you have TestCafe installed, you can create a .js or .ts file inside of the tests folder. This file must have a special structure - tests must be organized into fixtures.
The test structure should look something like the following:

```python
import { Selector } from 'testcafe';
fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;
test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');
});
```
## Running the Test

Once you finish writing your test, you need to a command where you specify the [target browser (Google Chrome, Safari, IE)](https://devexpress.github.io/testcafe/documentation/reference/command-line-interface.html#browser-list) and the [file path](https://devexpress.github.io/testcafe/documentation/reference/command-line-interface.html#file-pathglob-pattern)

The comman should looks like this:
```
testcafe chrome test1.js
```
or 
```
testcafe safari tests/test1.js
```

## Viewing the Test Results
After the test finishes running, TestCafe will output the report in a command shell.
