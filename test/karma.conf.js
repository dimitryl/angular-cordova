// Testacular configuration file
//
// For all available config options and default values, see:
// https://github.com/vojtajina/testacular/blob/stable/lib/config.js#L54

// base path, that will be used to resolve files and exclude
basePath = './..';

// list of files / patterns to load in the browser
files = [
  // MOCHA,
  // MOCHA_ADAPTER,
  JASMINE,
  'test/lib/jasmine/async.js',
  JASMINE_ADAPTER,

  // '/Users/olivier/Dropbox/Developer/cordova/node-ios-browser/browser/build/Browser.app/wwwcordova-2.7.0.js',
  'test/lib/cordova-2.7.0.js',
  'test/lib/jasmine/cordova.js',
  'test/lib/jasmine/helper.js',

  'test/lib/angular/angular.js',
  // 'test/lib/angular/angular-mocks.js',
  'src/common.js',
  'test/unit/*Spec.js'
];

// list of files to exclude
exclude = [];

// use dots reporter, as travis terminal does not support escaping sequences
// possible values: 'dots', 'progress', 'junit'
// CLI --reporters progress
// 'coverage',
reporters = ['progress'];


// web server port
// CLI --port 9876
port = 9876;

// cli runner port
// CLI --runner-port 9100
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
// CLI --colors --no-colors
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
// CLI --log-level debug
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
// CLI --auto-watch --no-auto-watch
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
// CLI --browsers Chrome,Firefox,Safari
browsers = ['PhantomJS'];

// If browser does not capture in given timeout [ms], kill it
// CLI --capture-timeout 5000
captureTimeout = 5000;

// Auto run tests on start (when browsers are captured) and exit
// CLI --single-run --no-single-run
singleRun = false;

// report which specs are slower than 500ms
// CLI --report-slower-than 500
reportSlowerThan = 500;
