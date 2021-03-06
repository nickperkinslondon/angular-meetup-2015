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
        id: Math.random(),
        text: text,
        crossed_off: false,
        cross_off: function() {
          return this.crossed_off = true;
        }
      });
      return save();
    };
    API.remove = function(item) {
      items.splice(items.indexOf(item), 1);
      return save();
    };
    API.items = items;
    API.save = save;
    return API;
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb2NlcnlfbGlzdF9tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0FBQUEsTUFBQTs7RUFBQSxpQkFBQSxHQUFvQixPQUFPLENBQUMsTUFBUixDQUFlLG1CQUFmLEVBQW1DLEVBQW5DOztFQUdwQixpQkFBaUIsQ0FBQyxPQUFsQixDQUEwQixhQUExQixFQUF3QyxTQUFBO0FBT3ZDLFFBQUE7SUFBQSxLQUFBLEdBQVE7SUFDUixJQUFBLEdBQU8sU0FBQTthQUNOLFlBQVksQ0FBQyxPQUFiLENBQXFCLGlCQUFyQixFQUF3QyxJQUFJLENBQUMsU0FBTCxDQUFlLEtBQWYsQ0FBeEM7SUFETTtJQUVQLElBQUEsR0FBTyxTQUFBO0FBQ04sVUFBQTtNQUFBLElBQUEsR0FBTyxZQUFZLENBQUMsT0FBYixDQUFxQixpQkFBckI7TUFDUCxJQUFHLFlBQUg7ZUFDQyxLQUFBLEdBQVEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFYLEVBRFQ7T0FBQSxNQUFBO2VBR0MsS0FBQSxHQUFRLEdBSFQ7O0lBRk07SUFNUCxJQUFBLENBQUE7SUFRQSxHQUFBLEdBQU07SUFDTixHQUFHLENBQUMsR0FBSixHQUFVLFNBQUMsSUFBRDtNQUNULEtBQUssQ0FBQyxJQUFOLENBQ0M7UUFBQSxFQUFBLEVBQUcsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFIO1FBQ0EsSUFBQSxFQUFLLElBREw7UUFFQSxXQUFBLEVBQVksS0FGWjtRQUdBLFNBQUEsRUFBVSxTQUFBO2lCQUNULElBQUMsQ0FBQSxXQUFELEdBQWU7UUFETixDQUhWO09BREQ7YUFNQSxJQUFBLENBQUE7SUFQUztJQVNWLEdBQUcsQ0FBQyxNQUFKLEdBQWEsU0FBQyxJQUFEO01BQ1osS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFLLENBQUMsT0FBTixDQUFjLElBQWQsQ0FBYixFQUFpQyxDQUFqQzthQUNBLElBQUEsQ0FBQTtJQUZZO0lBSWIsR0FBRyxDQUFDLEtBQUosR0FBWTtJQUNaLEdBQUcsQ0FBQyxJQUFKLEdBQVc7QUFFWCxXQUFPO0VBekNnQyxDQUF4QztBQUhBIiwiZmlsZSI6Imdyb2NlcnlfbGlzdF9tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIjXHJcbiMgR3JvY2VyeSBMaXN0IE1vZHVsZVxyXG4jXHJcbiMgQ29kZSB0aGF0IGtub3dzIGhvdyB0byBjcmVhdGUgYW5kIG1haW50YWluIGEgR3JvY2VyeSBMaXN0XHJcbiMgKCBidXQga25vd3Mgbm90aGluZyBhYm91dCBhbnkgd2ViLXBhZ2Ugb3IgdXNlci1pbnRlcmZhY2UgKVxyXG4jXHJcblxyXG4jIGNyZWF0ZSB0aGUgbW9kdWxlXHJcbkdyb2NlcnlMaXN0TW9kdWxlID0gYW5ndWxhci5tb2R1bGUgJ0dyb2NlcnlMaXN0TW9kdWxlJyxbXVxyXG5cclxuIyBhZGQgYSBmYWN0b3J5IHRvIHRoZSBtb2R1bGVcclxuR3JvY2VyeUxpc3RNb2R1bGUuZmFjdG9yeSAnR3JvY2VyeUxpc3QnLC0+XHJcblxyXG5cclxuXHJcblx0Iy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0IyBsb2NhbCB2YXJzIGJlY29tZSBwcml2YXRlIG1vZHVsZSB2YXJpYWJsZXM6XHJcblx0I1xyXG5cdGl0ZW1zID0gW10gIyB0aGUgZ3JvY2VyeSBsaXN0IC0gYSBsaXN0IG9mIG9iamVjdHNcclxuXHRzYXZlID0gLT5cclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtIFwiZ3JvY2VyeV9vYmplY3RzXCIsIEpTT04uc3RyaW5naWZ5KGl0ZW1zKVxyXG5cdGxvYWQgPSAtPlxyXG5cdFx0anNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3JvY2VyeV9vYmplY3RzXCIpXHJcblx0XHRpZiBqc29uP1xyXG5cdFx0XHRpdGVtcyA9IEpTT04ucGFyc2UoanNvbilcclxuXHRcdGVsc2VcclxuXHRcdFx0aXRlbXMgPSBbXVxyXG5cdGxvYWQoKVxyXG5cclxuXHJcblxyXG5cdCMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQjIHdoYXRldmVyIHdlIHJldHVybiB3aWxsIGJlY29tZSB0aGUgXCJBUElcIiBvZiBvdXIgbW9kdWxlOlxyXG5cdCMgKCBzbyBsZXQncyBjYWxsIGl0IFwiQVBJXCIgKVxyXG5cdCNcclxuXHRBUEkgPSB7fVxyXG5cdEFQSS5hZGQgPSAodGV4dCktPlxyXG5cdFx0aXRlbXMucHVzaFxyXG5cdFx0XHRpZDpNYXRoLnJhbmRvbSgpXHJcblx0XHRcdHRleHQ6dGV4dFxyXG5cdFx0XHRjcm9zc2VkX29mZjpmYWxzZVxyXG5cdFx0XHRjcm9zc19vZmY6LT5cclxuXHRcdFx0XHRAY3Jvc3NlZF9vZmYgPSB0cnVlXHJcblx0XHRzYXZlKClcclxuXHJcblx0QVBJLnJlbW92ZSA9IChpdGVtKS0+XHJcblx0XHRpdGVtcy5zcGxpY2UoaXRlbXMuaW5kZXhPZihpdGVtKSwxKVxyXG5cdFx0c2F2ZSgpXHJcblxyXG5cdEFQSS5pdGVtcyA9IGl0ZW1zXHJcblx0QVBJLnNhdmUgPSBzYXZlXHJcblxyXG5cdHJldHVybiBBUElcclxuXHJcbiJdfQ==
