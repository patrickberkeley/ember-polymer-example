import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'post-card',
  post: null,

  favoriteSelected: function() {
    this.set('post.favorite', !(this.get('post.favorite')));
  },

  favoriteUpdated: function() {
    var element   = this.$()[0],
        favorite  = this.get('post.favorite');

    if (element) {
      if (favorite) {
        element.setAttribute('favorite', '');
      }
      else {
        element.removeAttribute('favorite');
      }
    }
  }.observes('post.favorite'),

  didInsertElement: function() {
    var element   = this.$()[0],
        avatarUrl = this.get('post.avatar'),
        favorite  = this.get('post.favorite'),
        self      = this;

    if (element) {
      var avatarImage = element.getElementsByTagName('img')[0];

      avatarImage.setAttribute('src', avatarUrl);
      if (favorite) {
        element.setAttribute('favorite', '');
      }

      element.addEventListener('favorite-tapped', function() {
        self.favoriteSelected();
      });
    }
  }
});
