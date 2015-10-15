(function() {
  describe("Grocery List Page", function() {
    it("says 'Grocery List' at the top", function() {
      browser.get("http://localhost:8000/6/index.html");
      return expect($('h1').getText()).toBe('Grocery List');
    });
    it("clicks 'New', shows input", function() {
      $('[ng-click="new()"]').click();
      return expect($('input').isDisplayed()).toBe(true);
    });
    it("enters 'Apples'", function() {
      $('input').sendKeys('Apples');
      return expect($('input').getAttribute('value')).toBe('Apples');
    });
    it("clicks 'Add'", function() {
      $('[ng-click="add()"]').click();
      return expect($$('.grocery-item').count()).toBe(1);
    });
    it("crosses-off 'Apples'", function() {
      $('.grocery-item').click();
      return expect($('.grocery-item').getAttribute('class')).toContain('crossed-off');
    });
    return it("pauses so we can see it", function() {
      return browser.wait((function() {
        return false;
      }), 29000);
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZTJlL3Byb3RyYWN0b3JfdGVzdF8xLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUFBLFFBQUEsQ0FBUyxtQkFBVCxFQUE4QixTQUFBO0lBRzdCLEVBQUEsQ0FBRyxnQ0FBSCxFQUFvQyxTQUFBO01BQ25DLE9BQU8sQ0FBQyxHQUFSLENBQVksb0NBQVo7YUFDQSxNQUFBLENBQU8sQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLE9BQVIsQ0FBQSxDQUFQLENBQXlCLENBQUMsSUFBMUIsQ0FBK0IsY0FBL0I7SUFGbUMsQ0FBcEM7SUFLQSxFQUFBLENBQUcsMkJBQUgsRUFBK0IsU0FBQTtNQUM5QixDQUFBLENBQUUsb0JBQUYsQ0FBdUIsQ0FBQyxLQUF4QixDQUFBO2FBQ0EsTUFBQSxDQUFPLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxXQUFYLENBQUEsQ0FBUCxDQUFnQyxDQUFDLElBQWpDLENBQXNDLElBQXRDO0lBRjhCLENBQS9CO0lBS0EsRUFBQSxDQUFHLGlCQUFILEVBQXFCLFNBQUE7TUFDcEIsQ0FBQSxDQUFFLE9BQUYsQ0FBVSxDQUFDLFFBQVgsQ0FBb0IsUUFBcEI7YUFDQSxNQUFBLENBQU8sQ0FBQSxDQUFFLE9BQUYsQ0FBVSxDQUFDLFlBQVgsQ0FBd0IsT0FBeEIsQ0FBUCxDQUF3QyxDQUFDLElBQXpDLENBQThDLFFBQTlDO0lBRm9CLENBQXJCO0lBS0EsRUFBQSxDQUFHLGNBQUgsRUFBa0IsU0FBQTtNQUNqQixDQUFBLENBQUUsb0JBQUYsQ0FBdUIsQ0FBQyxLQUF4QixDQUFBO2FBQ0EsTUFBQSxDQUFPLEVBQUEsQ0FBRyxlQUFILENBQW1CLENBQUMsS0FBcEIsQ0FBQSxDQUFQLENBQW1DLENBQUMsSUFBcEMsQ0FBeUMsQ0FBekM7SUFGaUIsQ0FBbEI7SUFLQSxFQUFBLENBQUcsc0JBQUgsRUFBMEIsU0FBQTtNQUN6QixDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLEtBQW5CLENBQUE7YUFDQSxNQUFBLENBQU8sQ0FBQSxDQUFFLGVBQUYsQ0FBa0IsQ0FBQyxZQUFuQixDQUFnQyxPQUFoQyxDQUFQLENBQWdELENBQUMsU0FBakQsQ0FBMkQsYUFBM0Q7SUFGeUIsQ0FBMUI7V0FLQSxFQUFBLENBQUcseUJBQUgsRUFBOEIsU0FBQTthQUM3QixPQUFPLENBQUMsSUFBUixDQUFhLENBQUMsU0FBQTtlQUFHO01BQUgsQ0FBRCxDQUFiLEVBQXlCLEtBQXpCO0lBRDZCLENBQTlCO0VBNUI2QixDQUE5QjtBQUFBIiwiZmlsZSI6InRlc3QvZTJlL3Byb3RyYWN0b3JfdGVzdF8xLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiI1xyXG4jIFByb3RyYWN0b3IgVGVzdHNcclxuI1xyXG4jIEVhY2ggdGVzdCBpbnRlcmFjdHMgd2l0aCB0aGUgcGFnZSwgdGhlbiBcImV4cGVjdHNcIiBzb21ldGhpbmcuLi5cclxuI1xyXG5kZXNjcmliZSBcIkdyb2NlcnkgTGlzdCBQYWdlXCIsIC0+XHJcblxyXG5cclxuXHRpdCBcInNheXMgJ0dyb2NlcnkgTGlzdCcgYXQgdGhlIHRvcFwiLC0+XHJcblx0XHRicm93c2VyLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC82L2luZGV4Lmh0bWxcIilcclxuXHRcdGV4cGVjdCgkKCdoMScpLmdldFRleHQoKSkudG9CZSgnR3JvY2VyeSBMaXN0JylcclxuXHJcblxyXG5cdGl0IFwiY2xpY2tzICdOZXcnLCBzaG93cyBpbnB1dFwiLC0+XHJcblx0XHQkKCdbbmctY2xpY2s9XCJuZXcoKVwiXScpLmNsaWNrKClcclxuXHRcdGV4cGVjdCgkKCdpbnB1dCcpLmlzRGlzcGxheWVkKCkpLnRvQmUodHJ1ZSlcclxuXHJcblxyXG5cdGl0IFwiZW50ZXJzICdBcHBsZXMnXCIsLT5cclxuXHRcdCQoJ2lucHV0Jykuc2VuZEtleXMoJ0FwcGxlcycpXHJcblx0XHRleHBlY3QoJCgnaW5wdXQnKS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpLnRvQmUoJ0FwcGxlcycpXHJcblxyXG5cclxuXHRpdCBcImNsaWNrcyAnQWRkJ1wiLC0+XHJcblx0XHQkKCdbbmctY2xpY2s9XCJhZGQoKVwiXScpLmNsaWNrKClcclxuXHRcdGV4cGVjdCgkJCgnLmdyb2NlcnktaXRlbScpLmNvdW50KCkpLnRvQmUoMSlcclxuXHJcblxyXG5cdGl0IFwiY3Jvc3Nlcy1vZmYgJ0FwcGxlcydcIiwtPlxyXG5cdFx0JCgnLmdyb2NlcnktaXRlbScpLmNsaWNrKClcclxuXHRcdGV4cGVjdCgkKCcuZ3JvY2VyeS1pdGVtJykuZ2V0QXR0cmlidXRlKCdjbGFzcycpKS50b0NvbnRhaW4oJ2Nyb3NzZWQtb2ZmJylcclxuXHJcblxyXG5cdGl0IFwicGF1c2VzIHNvIHdlIGNhbiBzZWUgaXRcIiwgLT5cclxuXHRcdGJyb3dzZXIud2FpdCAoLT4gZmFsc2UpLCAyOTAwMFxyXG4iXX0=
