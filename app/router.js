import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('post-cards', { path: '/'});
  this.route('favorites');
});

export default Router;
