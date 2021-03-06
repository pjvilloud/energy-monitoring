import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    if(params.meter_id === "new"){
      let housing = this.modelFor("profile.housings.edit");
      return this.store.createRecord("meter", {housing: housing});
    } else {
      return this.store.findRecord("meter", params.meter_id);
    }
  },
  setupController(controller, model) {
    controller.set('profile', this.modelFor('profile'));
    this._super(controller, model)
  },
  actions:{
    willTransition(){
      this.controller.get("model").rollbackAttributes();
    }
  }
});
