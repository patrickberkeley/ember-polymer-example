import Ember from 'ember';

export default Ember.Component.extend({
  'on-events': '',
  attributePropertys: '',
  eventListeners: [],

  onAttributePropertyBindingsUpdate: function() {
    this.set('attributeBindings', this.get('attributePropertys').split(' '));
  }.observes('attributePropertys').on('init'),

  createEventListener: function(polymerEventName, actionName) {
    var self      = this,
        element   = this.$()[0];

    if (element) {
      var eventListeners = this.get('eventListeners');

      var eventListener = function() {
        var args = [polymerEventName, self].concat(Array.prototype.slice.call(arguments));

        self.sendAction.apply(self, args);
      };

      this.set(polymerEventName, actionName);
      element.addEventListener(polymerEventName, eventListener);
      eventListeners.addObject({
        name: polymerEventName + ':' + actionName,
        listener: eventListener
      });
    }
  },

  addEventListener: function(nameTarget) {
    var split  = nameTarget.split(':'),
        name   = split[0],
        target = split[1];

    this.createEventListener(name, target);
  },

  setEventListeners: function() {
    var events         = this.get('on-events').split(' '),
        self           = this;

    events.forEach(function(event) {
      self.addEventListener(event);
    });
  },

  didInsertElement: function() {
    this.setEventListeners();
  }
});
