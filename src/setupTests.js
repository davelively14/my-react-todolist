/*
 For unit test w/ enzyme:
    $ npm install --save-dev enzyme react-test-renderer enzyme-adapter-react-16
 For e2e:
    $ npm install --save-dev selenium-standalone webdriverio chai
    $ node_modules/.bin/wdio config
      ? Where do you want to execute your tests? On my local machine
      ? Which framework do you want to use? mocha
      ? Shall I install the framework adapter for you? Yes
      ? Where are your test specs located? ./e2etests/*.js
      ? Which reporter do you want to use? dot - ...
      ? Do you want to add a service to your test setup? selenium-standalone - ...
      ? Level of logging verbosity silent
      ? In which directory should screenshots gets saved if a command fails? ./errorShots/
      ? What is the base url? http://localhost

    - Once complete, install wdio packages:
      $ npm install --save-dev wdio-selenium-standalone-service wdio-dot-reporter
    - Once complete, open wdio.conf.js and replace `browserName: 'firefox'` with `browserName: 'chrome'`)
    - Open the package.json and add the following to the scripts section:
      "scripts": {
        "selenium-setup": "selenium-standalone install",
        "selenium-start": "selenium-standalone start",
        "e2e-tests": "wdio wdio.conf.js",
        "e2e-tests-watch": "wdio wdio.conf.js --watch",
        ...
      }
    - Then run:
      $ npm run selenium-setup
      $ npm run selenium-start
*/

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
