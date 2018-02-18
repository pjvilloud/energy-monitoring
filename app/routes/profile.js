import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
  i18n: Ember.inject.service(),
  model(){
    return this.store.findRecord("profile",1);
  },
  afterModel: function(profile) {
    this.set('i18n.locale', profile.get('language'));
  }
});
