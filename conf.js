// conf.js
exports.config = {
  baseUrl: 'http://127.0.0.1:' + (process.env.HTTP_PORT || '3000'),
	
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./tests/*_spec.js'],
  
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
	includeStackTrace: true, // If true, include stack traces in failures.
	defaultTimeoutInterval: 30000, // Default time to wait in ms before a test fails.
  },
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--test-type']
    }
  },
  
  // multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
  //   browserName: 'chrome'
  // }],
}