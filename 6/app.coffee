#
# v6 : with Animation
#
angular.module 'meetupApp',['GroceryListModule','ngAnimate']
	.controller 'meetupController', (	$scope,	$timeout, GroceryList	)->

		s = $scope
		s.title = "Grocery List"
		s.subtitle = "Angular London Meetup, October 2015"

		s.gl = GroceryList


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
			#
			# toggle "crossed-off"
			#
			item.crossed_off = !item.crossed_off
			GroceryList.save()


		#
		# Add a Random Item ( for demo )
		#
		s.add_random = ->
			# use Lodash to choose a random item
			GroceryList. add _.sample [
				'Milk'
				'Cereal'
				'Bread'
				'Juice'
				'Eggs'
				'Bacon'
				'Oatmeal'
				'Sausages'
				'Spam'
			]


		#
		# for initial animation effect:
		# un-hide items one-at-a-time
		#
		for item,index in GroceryList.items
			do(item,index)->
				item.hidden = true
				$timeout ->
					item.hidden = false
				, (index * 200)

