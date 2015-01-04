import Ember from 'ember';

export default Ember.Controller.extend({
  currentTabRoute: '',
  
  actions: {
    all: function() {
      this.transitionToRoute('post-cards');
    },

    favorites: function() {
      this.transitionToRoute('favorites');
    }
  }
});
