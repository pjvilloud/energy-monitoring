import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.store.findRecord("meter", params.meter_id, {include: 'readings',reload: true});
  },
  afterModel(meter) {
      if(meter.get("readings.length") > 0){
        this.transitionTo('housings.meters.readings.edit', meter.get("readings.lastObject.id"));
      }
  }
});
