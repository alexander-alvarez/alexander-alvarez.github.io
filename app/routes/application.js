import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({

  store: inject.service(),

  githubUsername: 'alexander-alvarez',

  model(){
    return {
      user: this.get('store').findRecord('github-user', this.get('githubUsername'))
    };
  }
});
