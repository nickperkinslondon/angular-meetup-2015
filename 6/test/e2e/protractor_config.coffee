exports.config =

	seleniumAddress:'http://localhost:4444/wd/hub'

	allScriptsTimeout: 15 * 1000

	specs:[
		'protractor_test_1.js'
		# 'protractor_test_2.js'
	]

	capabilities:
		browserName:'chrome'

	# multiCapabilities:[
	# 	browserName:'safari'
	# ,
	# 	browserName:'chrome'
	# # ,
	# # 	browserName:'firefox'
	# ]


	framework:'jasmine2'

	onPrepare:->

		browser.driver.manage().window().setPosition(0,0)
		browser.driver.manage().window().setSize(500,900)


		#
		# Swap-in a new "Reporter":
		#
		SpecReporter = require('jasmine-spec-reporter');
		jasmine.getEnv().addReporter new SpecReporter
			displayStacktrace      : 'specs' # display stacktrace for each failed assertion, values: (all|specs|summary|none)
			displayFailuresSummary : false   # display summary of all failures after execution
			displayPendingSummary  : false  # display summary of all pending specs after execution
			displaySuccessfulSpec  : true   # display each successful spec
			displayFailedSpec      : true   # display each failed spec
			displayPendingSpec     : true   # display each pending spec
			displaySpecDuration    : true   # display each spec duration
			displaySuiteNumber     : true   # display each suite number (hierarchical)
			customProcessors: []
			colors:
				success: 'green'
				success: 'bgGreen'
				failure: 'bgRed'
				pending: 'yellow'
			prefixes:
				# success: '✓ '
				# failure: '✗ '
				# pending: '* '
				success: 'PASS: '
				failure: 'FAIL: '
				pending: '* '


	jasmineNodeOpts:
		isVerbose:true
		showColors:true
		defaultTimeoutInterval: 30 * 1000
		print:-> # disable the Jasmine reporter because we are using another reporter ( Jasmine-Spec )
