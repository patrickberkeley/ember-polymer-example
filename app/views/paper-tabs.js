import Ember from 'ember';

/*
  paper-tabs polymer element wrapper
*/
export default Ember.View.extend({
  tagName: 'paper-tabs',
  _tabs: [],
  selectedTabName: '',

  /* Required since attributeBindings doesn't update on change */
  selectedUpdated: function() {
    var el       = this.$()[0],
        selected = this.get('selectedTabName');

    if (el) {
      el.setAttribute('selected', selected);
    }
  }.observes('selectedTabName'),

  tabAdded: function(tab) {
    var router = this.get('router'),
        _tabs  = this.get('_tabs');

    _tabs.addObject(tab);
    this.updateTabRoute(router);
  },

  tabRemoved: function(tab) {
    var _tabs = this.get('_tabs');

    _tabs.removeObject(tab);
  },

  updateTabRoute: function(router) {
    var self = this,
        tabs = this.get('_tabs') || [];

    tabs.forEach(function(tab) {
      if (router.router.isActive(tab.get('route'))) {
        self.set('selectedTabName', tab.get('name'));
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
    var router = this.get('router'),
        self   = this;

    router.on('didTransition', function() {
      self.updateTabRoute(router);
    });
  }
});
