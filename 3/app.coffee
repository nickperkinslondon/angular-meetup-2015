#
# v3 : a simple Angular app in Coffeescript
#
angular.module 'GroceryListApp',[]

	.controller 'GroceryListController', ($scope)->

		$scope.title = "Grocery List"
		$scope.subtitle = "Angular London Meetup, October 2015"

