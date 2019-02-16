import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    if(params.reading_id === "new"){
      let meter = this.modelFor("housings.meters.readings");
      return this.store.createRecord("reading", {meter: meter});
    } else {
      return this.store.findRecord("reading", params.reading_id);
    }
  }
});
