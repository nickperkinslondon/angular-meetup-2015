(function() {
  describe("Grocery List", function() {
    beforeAll(function() {
      return browser.get("http://localhost:8000/6/index.html");
    });
    it("says 'Grocery List' at the top", function() {
      expect($('h1')).isDisplayed();
      return expect($('h1').getText()).toBe('Grocery List');
    });
    it("clicks 'Add Random'", function() {
      $('[ng-click="add_random()"]').click();
      return expect($$('.grocery-item').count()).toBe(1);
    });
    it("clicks 'Add Random' 4 more times", function() {
      $('[ng-click="add_random()"]').click();
      $('[ng-click="add_random()"]').click();
      $('[ng-click="add_random()"]').click();
      $('[ng-click="add_random()"]').click();
      return expect($$('.grocery-item').count()).toBe(5);
    });
    it("removes item #2", function() {
      $$('.grocery-item').get(1).$('.remover').click();
      return expect($$('.grocery-item').count()).toBe(4);
    });
    it("removes item #3", function() {
      $$('.grocery-item').get(2).$('.remover').click();
      return expect($$('.grocery-item').count()).toBe(3);
    });
    return it("now has 3 items", function() {
      return expect($$('.grocery-item').count()).toBe(3);
    });
  });

}).call(this);
