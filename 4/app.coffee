#
# v4 : with fully Angular Grocery List
#
angular.module 'GroceryListApp',[]

	.controller 'GroceryListController', ($scope)->

		scope = $scope

		scope.title = "Grocery List"
		scope.subtitle = "Angular London Meetup, October 2015"

		scope.items = []

		scope.new = ->
			scope.input.text = ""
			scope.input.visible = true

		scope.add = ->
			scope.items.push scope.input.text
			scope.input.visible = false
			save()

		scope.input =
			text:""
			visible:false



		#
		# Save/Load to Local Storage ( using JSON )
		#
		save = ->
			localStorage.setItem "grocery_items", JSON.stringify(scope.items)

		load = ->
			saved_items = localStorage.getItem "grocery_items"
			if saved_items?
				scope.items = JSON.parse(saved_items)
			else
				scope.items = []

		load()
