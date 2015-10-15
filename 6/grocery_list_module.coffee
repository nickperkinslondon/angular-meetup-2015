#
# Grocery List Module
#
# Code that knows how to create and maintain a Grocery List
# ( but knows nothing about any web-page or user-interface )
#

# create the module
GroceryListModule = angular.module 'GroceryListModule',[]

# add a factory to the module
GroceryListModule.factory 'GroceryList',->



	#--------------------------------------------------
	# local vars become private module variables:
	#
	items = [] # the grocery list - a list of objects
	save = ->
		localStorage.setItem "grocery_objects", JSON.stringify(items)
	load = ->
		json = localStorage.getItem("grocery_objects")
		if json?
			items = JSON.parse(json)
		else
			items = []
	load()



	#---------------------------------------------------------
	# whatever we return will become the "API" of our module:
	# ( so let's call it "API" )
	#
	API = {}
	API.add = (text)->
		items.push
			id:Math.random()
			text:text
			crossed_off:false
			cross_off:->
				@crossed_off = true
		save()

	API.remove = (item)->
		items.splice(items.indexOf(item),1)
		save()

	API.items = items
	API.save = save

	return API

