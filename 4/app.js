(function() {
  angular.module('GroceryListApp', []).controller('GroceryListController', function($scope) {
    var load, save, scope;
    scope = $scope;
    scope.title = "Grocery List";
    scope.subtitle = "Angular London Meetup, October 2015";
    scope.items = [];
    scope["new"] = function() {
      scope.input.text = "";
      return scope.input.visible = true;
    };
    scope.add = function() {
      scope.items.push(scope.input.text);
      scope.input.visible = false;
      return save();
    };
    scope.input = {
      text: "",
      visible: false
    };
    save = function() {
      return localStorage.setItem("grocery_items", JSON.stringify(scope.items));
    };
    load = function() {
      var saved_items;
      saved_items = localStorage.getItem("grocery_items");
      if (saved_items != null) {
        return scope.items = JSON.parse(saved_items);
      } else {
        return scope.items = [];
      }
    };
    return load();
  });

}).call(this);
