(function() {
  angular.module('meetupApp', ['GroceryListModule', 'ngAnimate']).controller('meetupController', function($scope, $timeout, GroceryList) {
    var i, index, item, len, ref, results, s;
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
    s.click = function(item) {
      item.crossed_off = !item.crossed_off;
      return GroceryList.save();
    };
    s.add_random = function() {
      return GroceryList.add(_.sample(['Milk', 'Cereal', 'Bread', 'Juice', 'Eggs', 'Bacon', 'Oatmeal', 'Sausages', 'Spam']));
    };
    ref = GroceryList.items;
    results = [];
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      item = ref[index];
      results.push((function(item, index) {
        item.hidden = true;
        return $timeout(function() {
          return item.hidden = false;
        }, index * 200);
      })(item, index));
    }
    return results;
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFdBQWYsRUFBMkIsQ0FBQyxtQkFBRCxFQUFxQixXQUFyQixDQUEzQixDQUNDLENBQUMsVUFERixDQUNhLGtCQURiLEVBQ2lDLFNBQUUsTUFBRixFQUFVLFFBQVYsRUFBb0IsV0FBcEI7QUFFL0IsUUFBQTtJQUFBLENBQUEsR0FBSTtJQUNKLENBQUMsQ0FBQyxLQUFGLEdBQVU7SUFDVixDQUFDLENBQUMsUUFBRixHQUFhO0lBRWIsQ0FBQyxDQUFDLEVBQUYsR0FBTztJQUdQLENBQUMsQ0FBQyxLQUFGLEdBQ0M7TUFBQSxJQUFBLEVBQUssRUFBTDtNQUNBLE9BQUEsRUFBUSxLQURSOztJQUdELENBQUMsQ0FBQyxLQUFELENBQUQsR0FBUSxTQUFBO01BQ1AsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFSLEdBQWU7YUFDZixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQVIsR0FBa0I7SUFGWDtJQUlSLENBQUMsQ0FBQyxHQUFGLEdBQVEsU0FBQTtNQUNQLFdBQVcsQ0FBQyxHQUFaLENBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBeEI7YUFDQSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQVIsR0FBa0I7SUFGWDtJQUlSLENBQUMsQ0FBQyxLQUFGLEdBQVUsU0FBQyxJQUFEO01BSVQsSUFBSSxDQUFDLFdBQUwsR0FBbUIsQ0FBQyxJQUFJLENBQUM7YUFDekIsV0FBVyxDQUFDLElBQVosQ0FBQTtJQUxTO0lBV1YsQ0FBQyxDQUFDLFVBQUYsR0FBZSxTQUFBO2FBRWQsV0FBVyxDQUFFLEdBQWIsQ0FBaUIsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUN6QixNQUR5QixFQUV6QixRQUZ5QixFQUd6QixPQUh5QixFQUl6QixPQUp5QixFQUt6QixNQUx5QixFQU16QixPQU55QixFQU96QixTQVB5QixFQVF6QixVQVJ5QixFQVN6QixNQVR5QixDQUFULENBQWpCO0lBRmM7QUFtQmY7QUFBQTtTQUFBLHFEQUFBOzttQkFDRyxDQUFBLFNBQUMsSUFBRCxFQUFNLEtBQU47UUFDRCxJQUFJLENBQUMsTUFBTCxHQUFjO2VBQ2QsUUFBQSxDQUFTLFNBQUE7aUJBQ1IsSUFBSSxDQUFDLE1BQUwsR0FBYztRQUROLENBQVQsRUFFRyxLQUFBLEdBQVEsR0FGWDtNQUZDLENBQUEsQ0FBRixDQUFHLElBQUgsRUFBUSxLQUFSO0FBREQ7O0VBbkQrQixDQURqQztBQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiNcclxuIyB2NiA6IHdpdGggQW5pbWF0aW9uXHJcbiNcclxuYW5ndWxhci5tb2R1bGUgJ21lZXR1cEFwcCcsWydHcm9jZXJ5TGlzdE1vZHVsZScsJ25nQW5pbWF0ZSddXHJcblx0LmNvbnRyb2xsZXIgJ21lZXR1cENvbnRyb2xsZXInLCAoXHQkc2NvcGUsXHQkdGltZW91dCwgR3JvY2VyeUxpc3RcdCktPlxyXG5cclxuXHRcdHMgPSAkc2NvcGVcclxuXHRcdHMudGl0bGUgPSBcIkdyb2NlcnkgTGlzdFwiXHJcblx0XHRzLnN1YnRpdGxlID0gXCJBbmd1bGFyIExvbmRvbiBNZWV0dXAsIE9jdG9iZXIgMjAxNVwiXHJcblxyXG5cdFx0cy5nbCA9IEdyb2NlcnlMaXN0XHJcblxyXG5cclxuXHRcdHMuaW5wdXQgPVxyXG5cdFx0XHR0ZXh0OlwiXCJcclxuXHRcdFx0dmlzaWJsZTpmYWxzZVxyXG5cclxuXHRcdHMubmV3ID0gLT5cclxuXHRcdFx0cy5pbnB1dC50ZXh0ID0gXCJcIlxyXG5cdFx0XHRzLmlucHV0LnZpc2libGUgPSB0cnVlXHJcblxyXG5cdFx0cy5hZGQgPSAtPlxyXG5cdFx0XHRHcm9jZXJ5TGlzdC5hZGQocy5pbnB1dC50ZXh0KVxyXG5cdFx0XHRzLmlucHV0LnZpc2libGUgPSBmYWxzZVxyXG5cclxuXHRcdHMuY2xpY2sgPSAoaXRlbSktPlxyXG5cdFx0XHQjXHJcblx0XHRcdCMgdG9nZ2xlIFwiY3Jvc3NlZC1vZmZcIlxyXG5cdFx0XHQjXHJcblx0XHRcdGl0ZW0uY3Jvc3NlZF9vZmYgPSAhaXRlbS5jcm9zc2VkX29mZlxyXG5cdFx0XHRHcm9jZXJ5TGlzdC5zYXZlKClcclxuXHJcblxyXG5cdFx0I1xyXG5cdFx0IyBBZGQgYSBSYW5kb20gSXRlbSAoIGZvciBkZW1vIClcclxuXHRcdCNcclxuXHRcdHMuYWRkX3JhbmRvbSA9IC0+XHJcblx0XHRcdCMgdXNlIExvZGFzaCB0byBjaG9vc2UgYSByYW5kb20gaXRlbVxyXG5cdFx0XHRHcm9jZXJ5TGlzdC4gYWRkIF8uc2FtcGxlIFtcclxuXHRcdFx0XHQnTWlsaydcclxuXHRcdFx0XHQnQ2VyZWFsJ1xyXG5cdFx0XHRcdCdCcmVhZCdcclxuXHRcdFx0XHQnSnVpY2UnXHJcblx0XHRcdFx0J0VnZ3MnXHJcblx0XHRcdFx0J0JhY29uJ1xyXG5cdFx0XHRcdCdPYXRtZWFsJ1xyXG5cdFx0XHRcdCdTYXVzYWdlcydcclxuXHRcdFx0XHQnU3BhbSdcclxuXHRcdFx0XVxyXG5cclxuXHJcblx0XHQjXHJcblx0XHQjIGZvciBpbml0aWFsIGFuaW1hdGlvbiBlZmZlY3Q6XHJcblx0XHQjIHVuLWhpZGUgaXRlbXMgb25lLWF0LWEtdGltZVxyXG5cdFx0I1xyXG5cdFx0Zm9yIGl0ZW0saW5kZXggaW4gR3JvY2VyeUxpc3QuaXRlbXNcclxuXHRcdFx0ZG8oaXRlbSxpbmRleCktPlxyXG5cdFx0XHRcdGl0ZW0uaGlkZGVuID0gdHJ1ZVxyXG5cdFx0XHRcdCR0aW1lb3V0IC0+XHJcblx0XHRcdFx0XHRpdGVtLmhpZGRlbiA9IGZhbHNlXHJcblx0XHRcdFx0LCAoaW5kZXggKiAyMDApXHJcblxyXG4iXX0=
