import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      polls: [{
        id: 1,
        name: 'Poll1'
      }, {
        id: 2,
        name: 'Poll2'
      }]
    };
  }
});
