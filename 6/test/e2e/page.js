(function() {
  var page;

  module.exports = page = {
    title: $('h1'),
    num_items: function() {
      return $$('.grocery-item').count();
    },
    add_random: function() {
      return $('[ng-click="add_random()"]').click();
    },
    click: function(i) {
      return $$('.grocery-item').get(i - 1).click();
    },
    remove: function(i) {
      return $$('.grocery-item').get(i - 1).$('.remover').click();
    },
    remove_random: function() {
      return page.num_items().then(function(n) {
        var i;
        i = Math.floor(Math.random() * n);
        return page.remove(i);
      });
    },
    click_random: function() {
      return page.num_items().then(function(n) {
        var i;
        i = Math.floor(Math.random() * n);
        return page.click(i);
      });
    },
    get_class: function(i) {
      return $$('.grocery-item').get(i - 1).getAttribute("class");
    }
  };

}).call(this);
