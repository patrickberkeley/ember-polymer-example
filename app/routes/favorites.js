import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').filter('post-card', function(postCard) {
      return postCard.get('favorite');
    });
  }
});
