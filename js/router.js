// namespace
window.mapukaApp = window.mapukaApp || {};

mapukaApp.Router = Backbone.Router.extend({
  routes:{
    "": "home", 
    "home": "home", 
    "ficha/:id": "ficha", 
    "*otros": "defaultRoute"
  }, 

  home: function (){
    console.log("Router a home");
    var homeView = new mapukaApp.HomeView();
    homeView.render();
    mapukaApp.stage.append( homeView.el );
  }, 

  ficha: function (id){
    console.log("Router a ficha : ", id);
  }, 

  defaultRoute: function (){
    console.log("Router a defaultRoute");
    this.navigate("");
  }
});