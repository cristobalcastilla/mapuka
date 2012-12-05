// namespace
window.mapukaApp = window.mapukaApp || {};

mapukaApp.Router = Backbone.Router.extend({
  
  routes:{
    "": "home", 
    "home": "home", 
    "ficha/:id": "ficha", 
    "*other": "defaultRoute"
  }, 

  
  home: function (){
    console.log("Router a home");
    this.beforeRoute();
    var homeView = new mapukaApp.HomeView({ collection:mapukaApp.nav });    
    mapukaApp.stage.append( homeView.render().el );
  }, 

  
  ficha: function (id){
    console.log("Router a ficha : ", id);
    this.beforeRoute();
    var cardView = new mapukaApp.CardView();
    cardView.title = mapukaApp.nav.get(id).get('name');
    mapukaApp.stage.append( cardView.render().el );
  }, 

  
  defaultRoute: function (){
    console.log("Router a defaultRoute");
    this.beforeRoute();
    this.navigate("home");
  }, 


  beforeRoute: function () {
    mapukaApp.stage.empty();
  }
});