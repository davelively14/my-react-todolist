/* global browser */
const expect = require('chai').expect;

describe('TodoList App', () => {
  it('should with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Todo List');
  });
});
