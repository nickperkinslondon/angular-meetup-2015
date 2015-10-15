(function() {
  var page;

  page = require('./grocery_list_page.js');

  describe("Grocery List", function() {
    var i, results, test;
    beforeAll(function() {
      return browser.get("http://localhost:8000/6/index.html");
    });
    it("says 'Grocery List' at the top", function() {
      return expect(page.title.getText()).toBe('Grocery List');
    });
    it("clicks Add Random 5 times", function() {
      page.add_random();
      page.add_random();
      page.add_random();
      page.add_random();
      return page.add_random();
    });
    it("now has 5 items on the list", function() {
      return expect(page.num_items()).toBe(5);
    });
    it("removes item #2", function() {
      return page.remove(2);
    });
    it("now has 4 items", function() {
      return expect(page.num_items()).toBe(4);
    });
    it("removes item #3", function() {
      return page.remove(3);
    });
    it("now has 3 items", function() {
      return expect(page.num_items()).toBe(3);
    });
    it("now has 3 items", function() {
      return expect(page.num_items()).toBe(3);
    });
    it("crosses-off item #2", function() {
      page.click(2);
      return expect(page.get_class(2)).toContain("crossed-off");
    });
    it("un-crosses-off item #2", function() {
      page.click(2);
      return expect(page.get_class(2)).not.toContain("crossed-off");
    });
    results = [];
    for (test = i = 1; i <= 10; test = ++i) {
      results.push(it("adds, removes and clicks randomly for a while...", function() {
        var j, loop_num, results1;
        results1 = [];
        for (loop_num = j = 1; j <= 5; loop_num = ++j) {
          page.click_random();
          results1.push(page.num_items().then(function(n) {
            if (n < 5) {
              return page.add_random();
            } else {
              if (n > 10) {
                page.remove_random();
              } else {

              }
              if (Math.random() > 0.5) {
                return page.add_random();
              } else {
                return page.remove_random();
              }
            }
          }));
        }
        return results1;
      }));
    }
    return results;
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZTJlL3Byb3RyYWN0b3JfdGVzdF8yLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtBQUFBLE1BQUE7O0VBQUEsSUFBQSxHQUFPLE9BQUEsQ0FBUSx3QkFBUjs7RUFNUCxRQUFBLENBQVMsY0FBVCxFQUF5QixTQUFBO0FBRXhCLFFBQUE7SUFBQSxTQUFBLENBQVUsU0FBQTthQUNULE9BQU8sQ0FBQyxHQUFSLENBQVksb0NBQVo7SUFEUyxDQUFWO0lBSUEsRUFBQSxDQUFHLGdDQUFILEVBQW9DLFNBQUE7YUFDbkMsTUFBQSxDQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBWCxDQUFBLENBQVAsQ0FBNEIsQ0FBQyxJQUE3QixDQUFrQyxjQUFsQztJQURtQyxDQUFwQztJQUdBLEVBQUEsQ0FBRywyQkFBSCxFQUErQixTQUFBO01BQzlCLElBQUksQ0FBQyxVQUFMLENBQUE7TUFDQSxJQUFJLENBQUMsVUFBTCxDQUFBO01BQ0EsSUFBSSxDQUFDLFVBQUwsQ0FBQTtNQUNBLElBQUksQ0FBQyxVQUFMLENBQUE7YUFDQSxJQUFJLENBQUMsVUFBTCxDQUFBO0lBTDhCLENBQS9CO0lBT0EsRUFBQSxDQUFHLDZCQUFILEVBQWlDLFNBQUE7YUFDaEMsTUFBQSxDQUFPLElBQUksQ0FBQyxTQUFMLENBQUEsQ0FBUCxDQUF3QixDQUFDLElBQXpCLENBQThCLENBQTlCO0lBRGdDLENBQWpDO0lBR0EsRUFBQSxDQUFHLGlCQUFILEVBQXFCLFNBQUE7YUFDcEIsSUFBSSxDQUFDLE1BQUwsQ0FBWSxDQUFaO0lBRG9CLENBQXJCO0lBR0EsRUFBQSxDQUFHLGlCQUFILEVBQXFCLFNBQUE7YUFDcEIsTUFBQSxDQUFPLElBQUksQ0FBQyxTQUFMLENBQUEsQ0FBUCxDQUF3QixDQUFDLElBQXpCLENBQThCLENBQTlCO0lBRG9CLENBQXJCO0lBR0EsRUFBQSxDQUFHLGlCQUFILEVBQXFCLFNBQUE7YUFDcEIsSUFBSSxDQUFDLE1BQUwsQ0FBWSxDQUFaO0lBRG9CLENBQXJCO0lBR0EsRUFBQSxDQUFHLGlCQUFILEVBQXFCLFNBQUE7YUFDcEIsTUFBQSxDQUFPLElBQUksQ0FBQyxTQUFMLENBQUEsQ0FBUCxDQUF3QixDQUFDLElBQXpCLENBQThCLENBQTlCO0lBRG9CLENBQXJCO0lBR0EsRUFBQSxDQUFHLGlCQUFILEVBQXFCLFNBQUE7YUFDcEIsTUFBQSxDQUFPLElBQUksQ0FBQyxTQUFMLENBQUEsQ0FBUCxDQUF3QixDQUFDLElBQXpCLENBQThCLENBQTlCO0lBRG9CLENBQXJCO0lBR0EsRUFBQSxDQUFHLHFCQUFILEVBQTBCLFNBQUE7TUFDekIsSUFBSSxDQUFDLEtBQUwsQ0FBVyxDQUFYO2FBQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxTQUFMLENBQWUsQ0FBZixDQUFQLENBQXlCLENBQUMsU0FBMUIsQ0FBb0MsYUFBcEM7SUFGeUIsQ0FBMUI7SUFJQSxFQUFBLENBQUcsd0JBQUgsRUFBNkIsU0FBQTtNQUM1QixJQUFJLENBQUMsS0FBTCxDQUFXLENBQVg7YUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLFNBQUwsQ0FBZSxDQUFmLENBQVAsQ0FBeUIsQ0FBQyxHQUFHLENBQUMsU0FBOUIsQ0FBd0MsYUFBeEM7SUFGNEIsQ0FBN0I7QUFLQTtTQUFZLGlDQUFaO21CQUVDLEVBQUEsQ0FBRyxrREFBSCxFQUFzRCxTQUFBO0FBQ3JELFlBQUE7QUFBQTthQUFnQix3Q0FBaEI7VUFDQyxJQUFJLENBQUMsWUFBTCxDQUFBO3dCQU9BLElBQUksQ0FBQyxTQUFMLENBQUEsQ0FBZ0IsQ0FBQyxJQUFqQixDQUFzQixTQUFDLENBQUQ7WUFDckIsSUFBRyxDQUFBLEdBQUksQ0FBUDtxQkFDQyxJQUFJLENBQUMsVUFBTCxDQUFBLEVBREQ7YUFBQSxNQUFBO2NBR0MsSUFBRyxDQUFBLEdBQUksRUFBUDtnQkFDQyxJQUFJLENBQUMsYUFBTCxDQUFBLEVBREQ7ZUFBQSxNQUFBO0FBQUE7O2NBR0EsSUFBRyxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsR0FBZ0IsR0FBbkI7dUJBQ0UsSUFBSSxDQUFDLFVBQUwsQ0FBQSxFQURGO2VBQUEsTUFBQTt1QkFHRSxJQUFJLENBQUMsYUFBTCxDQUFBLEVBSEY7ZUFORDs7VUFEcUIsQ0FBdEI7QUFSRDs7TUFEcUQsQ0FBdEQ7QUFGRDs7RUEzQ3dCLENBQXpCO0FBTkEiLCJmaWxlIjoidGVzdC9lMmUvcHJvdHJhY3Rvcl90ZXN0XzIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIjXHJcbiMgdGhlIFBhZ2UgT2JqZWN0OlxyXG4jXHJcbnBhZ2UgPSByZXF1aXJlICcuL2dyb2NlcnlfbGlzdF9wYWdlLmpzJ1xyXG5cclxuXHJcbiNcclxuIyB0aGUgdGVzdHMgbm93IGNhbGwgYSBoaWdoZXItbGV2ZWwgQVBJOlxyXG4jXHJcbmRlc2NyaWJlIFwiR3JvY2VyeSBMaXN0XCIsIC0+XHJcblxyXG5cdGJlZm9yZUFsbCAtPlxyXG5cdFx0YnJvd3Nlci5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvNi9pbmRleC5odG1sXCIpXHJcblxyXG5cclxuXHRpdCBcInNheXMgJ0dyb2NlcnkgTGlzdCcgYXQgdGhlIHRvcFwiLC0+XHJcblx0XHRleHBlY3QocGFnZS50aXRsZS5nZXRUZXh0KCkpLnRvQmUoJ0dyb2NlcnkgTGlzdCcpXHJcblxyXG5cdGl0IFwiY2xpY2tzIEFkZCBSYW5kb20gNSB0aW1lc1wiLC0+XHJcblx0XHRwYWdlLmFkZF9yYW5kb20oKVxyXG5cdFx0cGFnZS5hZGRfcmFuZG9tKClcclxuXHRcdHBhZ2UuYWRkX3JhbmRvbSgpXHJcblx0XHRwYWdlLmFkZF9yYW5kb20oKVxyXG5cdFx0cGFnZS5hZGRfcmFuZG9tKClcclxuXHJcblx0aXQgXCJub3cgaGFzIDUgaXRlbXMgb24gdGhlIGxpc3RcIiwtPlxyXG5cdFx0ZXhwZWN0KHBhZ2UubnVtX2l0ZW1zKCkpLnRvQmUoNSlcclxuXHJcblx0aXQgXCJyZW1vdmVzIGl0ZW0gIzJcIiwtPlxyXG5cdFx0cGFnZS5yZW1vdmUoMilcclxuXHJcblx0aXQgXCJub3cgaGFzIDQgaXRlbXNcIiwtPlxyXG5cdFx0ZXhwZWN0KHBhZ2UubnVtX2l0ZW1zKCkpLnRvQmUoNClcclxuXHJcblx0aXQgXCJyZW1vdmVzIGl0ZW0gIzNcIiwtPlxyXG5cdFx0cGFnZS5yZW1vdmUoMylcclxuXHJcblx0aXQgXCJub3cgaGFzIDMgaXRlbXNcIiwtPlxyXG5cdFx0ZXhwZWN0KHBhZ2UubnVtX2l0ZW1zKCkpLnRvQmUoMylcclxuXHJcblx0aXQgXCJub3cgaGFzIDMgaXRlbXNcIiwtPlxyXG5cdFx0ZXhwZWN0KHBhZ2UubnVtX2l0ZW1zKCkpLnRvQmUoMylcclxuXHJcblx0aXQgXCJjcm9zc2VzLW9mZiBpdGVtICMyXCIsIC0+XHJcblx0XHRwYWdlLmNsaWNrKDIpXHJcblx0XHRleHBlY3QocGFnZS5nZXRfY2xhc3MoMikpLnRvQ29udGFpbihcImNyb3NzZWQtb2ZmXCIpXHJcblxyXG5cdGl0IFwidW4tY3Jvc3Nlcy1vZmYgaXRlbSAjMlwiLCAtPlxyXG5cdFx0cGFnZS5jbGljaygyKVxyXG5cdFx0ZXhwZWN0KHBhZ2UuZ2V0X2NsYXNzKDIpKS5ub3QudG9Db250YWluKFwiY3Jvc3NlZC1vZmZcIilcclxuXHJcblxyXG5cdGZvciB0ZXN0IGluIFsxLi4xMF1cclxuXHJcblx0XHRpdCBcImFkZHMsIHJlbW92ZXMgYW5kIGNsaWNrcyByYW5kb21seSBmb3IgYSB3aGlsZS4uLlwiLC0+XHJcblx0XHRcdGZvciBsb29wX251bSBpbiBbMS4uNV1cclxuXHRcdFx0XHRwYWdlLmNsaWNrX3JhbmRvbSgpXHJcblx0XHRcdFx0IyBicm93c2VyLndhaXRGb3JBbmd1bGFyKClcclxuXHJcblx0XHRcdFx0I1xyXG5cdFx0XHRcdCMgTk9URTogdGhpbmdzIGxpa2UgXCJudW1faXRlbXMoKVwiIGFyZSBhbHdheXMgQVNZTkMhXHJcblx0XHRcdFx0IyAoIHRoZXkgcmV0dXJuIGEgUHJvbWlzZSApXHJcblx0XHRcdFx0I1xyXG5cdFx0XHRcdHBhZ2UubnVtX2l0ZW1zKCkudGhlbiAobiktPlxyXG5cdFx0XHRcdFx0aWYgbiA8IDVcclxuXHRcdFx0XHRcdFx0cGFnZS5hZGRfcmFuZG9tKClcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0aWYgbiA+IDEwXHJcblx0XHRcdFx0XHRcdFx0cGFnZS5yZW1vdmVfcmFuZG9tKClcclxuXHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRpZiBNYXRoLnJhbmRvbSgpID4gMC41XHJcblx0XHRcdFx0XHRcdFx0XHRwYWdlLmFkZF9yYW5kb20oKVxyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdHBhZ2UucmVtb3ZlX3JhbmRvbSgpXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19
