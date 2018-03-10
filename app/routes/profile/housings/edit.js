import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  i18n: service(),
  model(params){
    if(params.housing_id === "new"){
      let profile = this.modelFor("profile");
      return this.store.createRecord("housing", { name:this.get("i18n").t("profile.housings.my_new_housing"), profile: profile});
    } else {
      return this.store.findRecord("housing", params.housing_id, {include: 'meters'});
    }
  },
  actions:{
    willTransition(){
      this.controller.get("model").rollbackAttributes();
    }
  }
});
