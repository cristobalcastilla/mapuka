// namespace
window.mapukaApp = window.mapukaApp || {};

// ---
// NAV ITEMS collections
mapukaApp.NavItemsCollection = Backbone.Collection.extend({
  model: mapukaApp.NavItemModel
});