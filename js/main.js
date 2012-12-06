// namespace
window.mapukaApp = window.mapukaApp || {};


$(document).ready(
  function () {

    // fill up nav items
    var navItems = ['Primeros pobladores', 'Cerámica temprana', 'Tradición malambo', 'Zenues', 'Tayronas', 'Zambrano', 'Conquista y colonia', 'Samit Saenz'];

    mapukaApp.nav = new mapukaApp.NavItemsCollection();

    _.each(navItems, function (item, i) {
      mapukaApp.nav.add({id:i+1, name:item});
    });
    
    // step up the stage container
    mapukaApp.stage = $('#mapuka-app'); 
    
    // Router instance
    mapukaApp.router = new mapukaApp.Router(); 

    // Load templates
    _.templateSettings = { interpolate : /\{\{(.+?)\}\}/g }; // use templates as Moustache
    mapukaApp.tpl.loadTemplates(['home', 'nav_item', 'card'], function() {
      console.log("All templates loaded");
      Backbone.history.start();
      // mapukaApp.router.navigate("");
    });

  }
);
