const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {	
    allScriptsTimeout: 300000,
    suites: {
        default: './e2e/test-suites/*.e2e-spec.ts',
    },
    capabilities: {
        "browserName": "chrome"	
    },
    params: {
        user1: {
            username: "icveightytwo@gmail.com", 
            password: "monk1980"               
        },
        user2: {
			username: "icveightytwo@gmail.com",
            password: "monk1980"               
        }
    },
    directConnect: true,
    baseUrl: 'https://mail.google.com/',
    framework: 'jasmine',
    jasmineNodeOpts: {
		realtimeFailure: true,
        showColors: true,
        defaultTimeoutInterval: 300000,
        print: function () {
        }
    },
    onPrepare() {	        	
        browser.driver.manage().window().maximize();
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: false
            }
        }));
    }
};