(function() {
  var GroceryListModule;

  GroceryListModule = angular.module('GroceryListModule', []);

  GroceryListModule.factory('GroceryList', function() {
    var API, items, load, save;
    items = [];
    save = function() {
      return localStorage.setItem("grocery_objects", JSON.stringify(items));
    };
    load = function() {
      var json;
      json = localStorage.getItem("grocery_objects");
      if (json != null) {
        return items = JSON.parse(json);
      } else {
        return items = [];
      }
    };
    load();
    API = {};
    API.add = function(text) {
      items.push({
        text: text,
        crossed_off: false,
        cross_off: function() {
          return this.crossed_off = true;
        }
      });
      return save();
    };
    API.items = items;
    API.save = save;
    return API;
  });

}).call(this);
