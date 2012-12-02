
// namespace
window.mapukaApp = window.mapukaApp || {};


$(document).ready(
  function () {

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

    // ROUTER class
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

    // Router instance
    mapukaApp.router = new mapukaApp.Router();

    mapukaApp.stage = $('#mapuka-app'); // step up the stage container
    
    // Load templates
    _.templateSettings = { interpolate : /\{\{(.+?)\}\}/g }; // use templates as Moustache
    mapukaApp.tpl.loadTemplates(['home'], function() {
      console.log("All templates loaded");
      Backbone.history.start();
      // mapukaApp.router.navigate("");
    });

  }
);
