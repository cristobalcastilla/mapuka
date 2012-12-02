// namespace
window.mapukaApp = window.mapukaApp || {};

// ---
// HOME class
mapukaApp.HomeView = Backbone.View.extend({
  id: "home", 
  className: "container",
  // template: mapukaApp.tpl.templates['home'], 
  events: {}, 

  initialize: function () {
    this.template = mapukaApp.tpl.templates['home'];
  }, 

  render: function () {
    this.$el.append( _.template(this.template) );
    return this;
  }
});