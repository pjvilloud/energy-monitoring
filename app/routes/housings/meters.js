import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.store.findRecord("housing", params.housing_id, {include: 'meters',reload: true});
  },
  redirect(housing) {
    this.transitionTo("housings.meters.readings", housing.get("id"), housing.get("meters.firstObject.id"));
  }
});
