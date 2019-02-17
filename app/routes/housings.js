import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return this.store.findAll("housing");
  },
  redirect(housings){
    this.transitionTo("housings.meters", housings.get("firstObject.id"));
  }
});
