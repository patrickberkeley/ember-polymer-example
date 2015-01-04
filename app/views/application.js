import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'core-header-panel',
  tabRoutes: ['post-cards', 'favorites'],

  updateTabRoute: function(router) {
    var self      = this,
        tabRoutes = this.get('tabRoutes') || [];

    tabRoutes.forEach(function(route) {
      if (router.router.isActive(route)) {
        self.set('controller.currentTabRoute', route);
      }
    });
  },

  router: function() {
    var controller = this.get('controller');

    if (controller && controller.container) {
      return controller.container.lookup('router:main');
    }
  }.property('controller'),

  didInsertElement: function() {
    // var router = this.container.lookup('router:main'),
    var router = this.get('router'),
        self   = this;

    this.updateTabRoute(router);

    router.on('didTransition', function() {
      self.updateTabRoute(router);
    });
  }
});
