// namespace
window.mapukaApp = window.mapukaApp || {};

// ---
// HOME class
mapukaApp.CardView = Backbone.View.extend({

  id: "card", 
  title: "",


  initialize: function () {
    this.template = mapukaApp.tpl.templates['card'];
  }, 


  render: function () {
    this.$el.html( _.template( this.template, {title:this.title} ));
    return this;
  }
});