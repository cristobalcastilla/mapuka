// namespace
window.mapukaApp = window.mapukaApp || {};

// ---
// HOME class
mapukaApp.NavItemView = Backbone.View.extend({

  tagName: "li", 
  className: "nav-item", 


  initialize: function () {
    this.template = mapukaApp.tpl.templates['nav_item'];
  }, 


  render: function () {
    this.$el.html( _.template( this.template, this.model.toJSON() ));
    return this;
  }
});