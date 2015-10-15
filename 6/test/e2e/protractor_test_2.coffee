#
# the Page Object:
#
page = require './grocery_list_page.js'


#
# the tests now call a higher-level API:
#
describe "Grocery List", ->

	beforeAll ->
		browser.get("http://localhost:8000/6/index.html")


	it "says 'Grocery List' at the top",->
		expect(page.title.getText()).toBe('Grocery List')

	it "clicks Add Random 5 times",->
		page.add_random()
		page.add_random()
		page.add_random()
		page.add_random()
		page.add_random()

	it "now has 5 items on the list",->
		expect(page.num_items()).toBe(5)

	it "removes item #2",->
		page.remove(2)

	it "now has 4 items",->
		expect(page.num_items()).toBe(4)

	it "removes item #3",->
		page.remove(3)

	it "now has 3 items",->
		expect(page.num_items()).toBe(3)

	it "now has 3 items",->
		expect(page.num_items()).toBe(3)

	it "crosses-off item #2", ->
		page.click(2)
		expect(page.get_class(2)).toContain("crossed-off")

	it "un-crosses-off item #2", ->
		page.click(2)
		expect(page.get_class(2)).not.toContain("crossed-off")


	for test in [1..10]

		it "adds, removes and clicks randomly for a while...",->
			for loop_num in [1..5]
				page.click_random()
				# browser.waitForAngular()

				#
				# NOTE: things like "num_items()" are always ASYNC!
				# ( they return a Promise )
				#
				page.num_items().then (n)->
					if n < 5
						page.add_random()
					else
						if n > 10
							page.remove_random()
						else
						if Math.random() > 0.5
								page.add_random()
							else
								page.remove_random()





