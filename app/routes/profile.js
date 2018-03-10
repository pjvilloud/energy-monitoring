import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  i18n: service(),
  model(){
    return this.store.findRecord("profile",1);
  },
  afterModel: function(profile) {
    this.set('i18n.locale', profile.get('language'));
  }
});
