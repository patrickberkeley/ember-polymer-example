import Ember from 'ember';

export default Ember.Component.extend({
  onEventBindings: '',
  publishedPropertyBindings: '',
  attributeProperties: '',
  eventListeners: [],
  _elementBind: null,

  onAttributePropertyBindingsUpdate: function() {
    this.set('attributeBindings', this.get('attributeProperties').split(' '));
  }.observes('attributeProperties').on('init'),

  createEventListener: function(polymerEventName) {
    var self = this;

    return function() {
      var args = [polymerEventName, self].concat(Array.prototype.slice.call(arguments));

      self.sendAction.apply(self, args);
    };
  },

  setupEventListener: function(polymerEventName, actionName) {
    var element   = this.$()[0];

    if (element) {
      var eventListeners   = this.get('eventListeners'),
          newEventListener = this.createEventListener(polymerEventName);

      this.set(polymerEventName, actionName);
      element.addEventListener(polymerEventName, newEventListener);
      eventListeners.addObject({
        name: polymerEventName + ':' + actionName,
        listener: newEventListener
      });
    }
  },

  addEventListener: function(nameTarget) {
    var split  = nameTarget.split(':'),
        name   = split[0],
        target = split[1];

    this.setupEventListener(name, target);
  },

  setEventListeners: function() {
    var events         = this.get('onEventBindings').split(' '),
        self           = this;

    events.forEach(function(event) {
      self.addEventListener(event);
    });
  },

  setPublishedPropertyBindings: function() {
    var propertyBindings = this.get('publishedPropertyBindings').split(' '),
        element          = this.$()[0],
        self             = this;

    if (element && propertyBindings) {
      propertyBindings.forEach(function(propertyBinding) {
        var split             = propertyBinding.split(':'),
            componentProperty = split[0],
            publishedProperty = split[1];

        element[publishedProperty] = self.get(componentProperty);
      });
    }
  },

  didInsertElement: function() {
    this.setPublishedPropertyBindings();
    this.setEventListeners();
  }
});
