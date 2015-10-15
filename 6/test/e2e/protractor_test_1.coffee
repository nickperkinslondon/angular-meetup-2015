#
# Protractor Tests
#
# Each test interacts with the page, then "expects" something...
#
describe "Grocery List Page", ->


	it "says 'Grocery List' at the top",->
		browser.get("http://localhost:8000/6/index.html")
		expect($('h1').getText()).toBe('Grocery List')


	it "clicks 'New', shows input",->
		$('[ng-click="new()"]').click()
		expect($('input').isDisplayed()).toBe(true)


	it "enters 'Apples'",->
		$('input').sendKeys('Apples')
		expect($('input').getAttribute('value')).toBe('Apples')


	it "clicks 'Add'",->
		$('[ng-click="add()"]').click()
		expect($$('.grocery-item').count()).toBe(1)


	it "crosses-off 'Apples'",->
		$('.grocery-item').click()
		expect($('.grocery-item').getAttribute('class')).toContain('crossed-off')


	it "pauses so we can see it", ->
		browser.wait (-> false), 29000
