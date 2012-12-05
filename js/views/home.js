// namespace
window.mapukaApp = window.mapukaApp || {};

// ---
// HOME class
mapukaApp.HomeView = Backbone.View.extend({

  id: "home", 
  events: {
    // "click .nav a": "onNavClicked"
  }, 


  initialize: function () {
    this.template = mapukaApp.tpl.templates['home'];
  }, 


  render: function () {
    this.$el.append( _.template(this.template) );

    var ulEl = this.$el.find('ul.nav');
    _.each(this.collection.models, function (item) {      
      var navItem = new mapukaApp.NavItemView({ model:item });      
      ulEl.append( navItem.render().el );
    });
    return this;
  }//, 

  // onNavClicked: function (e) {
  //   e.preventDefault();

  //   console.log(e);

  //   var id = this.$(e.currentTarget).attr('data-id');
  //   this.remove();

  //   mapukaApp.router.navigate('ficha/'+id);
  //   return this;
  // }
});