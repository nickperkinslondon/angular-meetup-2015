#
# v5 : with Modules
#
angular.module 'meetupApp',['GroceryListModule']
	.controller 'meetupController', (	$scope,	GroceryList	)->

		s = $scope

		s.title = "Grocery List"
		s.subtitle = "Angular London Meetup, October 2015"

		s.gl = GroceryList


		#
		# The Grocery List service does not provide a way to edit a new item before adding it
		# So we still have to do that ourselves:
		#
		s.input =
			text:""
			visible:false

		s.new = ->
			s.input.text = ""
			s.input.visible = true

		s.add = ->
			GroceryList.add(s.input.text)
			s.input.visible = false


		s.click = (item)->
			item.crossed_off = !item.crossed_off
			GroceryList.save()
