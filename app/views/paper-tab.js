import Ember from 'ember';

/*
  paper-tab polymer element wrapper
*/
export default Ember.View.extend({
  tagName: 'paper-tab',
  attributeBindings: ['name'],
  name: null,
  route: null,

  click: function() {
    var controller = this.get('controller'),
        route      = this.get('route');

    Ember.assert('A paper tab required a route to complete the transition', route);

    controller.transitionToRoute(route);
  },

  didInsertElement: function() {
    var parentView = this.get('parentView');

    parentView.tabAdded(this);
  },

  willDestroyElement: function() {
    var parentView = this.get('parentView');

    if (parentView) {
      parentView.tabRemoved(this);

    }
  }
});
