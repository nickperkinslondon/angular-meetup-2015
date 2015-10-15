
start run_selenium_webdriver

:do_it_again

node ../../node_modules/protractor/bin/protractor ibs.protractor.config.js --baseUrl https://localhost

pause

goto do_it_again

REM just close the window to kill it
