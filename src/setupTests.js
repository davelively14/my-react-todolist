// For unit test w/ enzyme: npm install --save-dev enzyme react-test-renderer enzyme-adapter-react-16
// For e2e: npm install --save-dev selenium-standalone webdriverio chai

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
