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
    (Once complete, open wdio.conf.js and replace `browserName: 'firefox'` with `browserName: 'chrome'`)
*/

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
