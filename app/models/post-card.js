import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  username: DS.attr('string'),
  avatar: DS.attr('string'),
  favorite: DS.attr('boolean'),

  isFavorited: function() {
    var favorited = this.get('favorite');

    if (favorited) {
      return '';
    }
    else {
      return false;
    }
  }.property('favorite')
});
