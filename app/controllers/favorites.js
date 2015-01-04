import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    favoriteTapped: function(eventedComponent) {
      eventedComponent.set('post.favorite', !(eventedComponent.get('post.favorite')));
    }
  }
});
