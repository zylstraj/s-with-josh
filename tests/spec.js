describe('Angular End to End Testing', function() {
  it('Should have a Title', function() {
    // browser.get('http://localhost:3000');
    browser.get('http://localhost:8080/build');
    expect(browser.getTitle()).toEqual('Sports With Josh');
  });
});
