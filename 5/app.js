(function() {
  angular.module('meetupApp', ['GroceryListModule']).controller('meetupController', function($scope, GroceryList) {
    var s;
    s = $scope;
    s.title = "Grocery List";
    s.subtitle = "Angular London Meetup, October 2015";
    s.gl = GroceryList;
    s.input = {
      text: "",
      visible: false
    };
    s["new"] = function() {
      s.input.text = "";
      return s.input.visible = true;
    };
    s.add = function() {
      GroceryList.add(s.input.text);
      return s.input.visible = false;
    };
    return s.click = function(item) {
      item.crossed_off = !item.crossed_off;
      return GroceryList.save();
    };
  });

}).call(this);
