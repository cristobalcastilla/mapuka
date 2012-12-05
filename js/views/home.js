// namespace
window.mapukaApp = window.mapukaApp || {};

// ---
// HOME class
mapukaApp.HomeView = Backbone.View.extend({

  id: "home", 
  events: {
    'click ul.nav a': 'showCard'
  }, 


  initialize: function () {
    this.template = mapukaApp.tpl.templates['home'];
  }, 


  render: function () {
    this.$el.html( _.template(this.template) );

    var ulEl = this.$el.find('ul.nav');
    _.each(this.collection.models, function (item) {      
      var navItem = new mapukaApp.NavItemView({ model:item });      
      ulEl.append( navItem.render().el );
    });
    return this;
  },


  showCard: function (e) {
    e.preventDefault();

    var id = this.$(e.currentTarget).attr('data-id');
    this.remove();

    mapukaApp.router.navigate('ficha/'+id, true);
    return this;
  }
});