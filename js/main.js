
// namespace
window.mapukaApp = window.mapukaApp || {};


$(document).ready(
  function () {
    
    // step up the stage container
    mapukaApp.stage = $('#mapuka-app'); 
    
    // Router instance
    mapukaApp.router = new mapukaApp.Router(); 

    // Load templates
    _.templateSettings = { interpolate : /\{\{(.+?)\}\}/g }; // use templates as Moustache
    mapukaApp.tpl.loadTemplates(['home'], function() {
      console.log("All templates loaded");
      Backbone.history.start();
      // mapukaApp.router.navigate("");
    });

  }
);
