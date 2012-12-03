// namespace
window.mapukaApp = window.mapukaApp || {};

// ---
// HOME class
mapukaApp.HomeView = Backbone.View.extend({
  id: "home", 
  // template: mapukaApp.tpl.templates['home'], 
  events: {
    "click form a.submit": "onSubmitClick"
  }, 

  initialize: function () {
    this.template = mapukaApp.tpl.templates['home'];
  }, 

  render: function () {
    this.$el.append( _.template(this.template) );
    return this;
  }, 

  onSubmitClick: function (e) {
    e.preventDefault();

    var code = this.$('form input[name=code]').val();
    mapukaApp.router.navigate('ficha/'+code);
    return this;
  }
});