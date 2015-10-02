import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('polls');
  this.route('poll', { path: '/poll/:poll_id' }, function() {
    this.route('edit');
  });
});

export default Router;
