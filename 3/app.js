(function() {
  angular.module('GroceryListApp', []).controller('GroceryListController', function($scope) {
    $scope.title = "Grocery List";
    return $scope.subtitle = "Angular London Meetup, October 2015";
  });

}).call(this);
