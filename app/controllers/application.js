import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    all: function() {
      this.transitionToRoute('post-cards');
    },

    favorites: function() {
      this.transitionToRoute('favorites');
    }
  }
});
