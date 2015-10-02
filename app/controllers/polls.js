import Ember from 'ember';

export default Ember.Controller.extend({
  polls: Ember.computed.reads('model.polls'),
  actions: {
    edit(poll) {
      console.log('transition to poll ' + poll);
      this.transitionToRoute('poll.edit', poll);
    }
  }
});
