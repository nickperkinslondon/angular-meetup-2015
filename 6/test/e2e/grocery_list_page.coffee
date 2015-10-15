
module.exports = grocery_list_page = page =

	title : $('h1')

	num_items : ->
		$$('.grocery-item').count()

	add_random : ->
		$('[ng-click="add_random()"]').click()

	click : (i)->
		$$('.grocery-item').get(i-1).click()

	remove :(i)->
		$$('.grocery-item').get(i-1).$('.remover').click()

	remove_random : ->
		page.num_items().then (n)->
			i = Math.floor(Math.random() * n)
			page.remove(i)

	click_random : ->
		page.num_items().then (n)->
			i = Math.floor(Math.random() * n)
			page.click(i)

	get_class:(i)->
		$$('.grocery-item').get(i-1).getAttribute("class") # careful!...classes are tricky!
