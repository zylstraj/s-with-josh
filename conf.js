exports.config = {
  // baseUrl: 'file://' + __dirname + '/build/index.html',
  seleniumAddress: 'http://localhost:4444/wd/hub'
, specs: ['./tests/e2e/spec.js']
}
// selenium address: Where our server is listening
  //webdriver-manager start : starts selenium server
