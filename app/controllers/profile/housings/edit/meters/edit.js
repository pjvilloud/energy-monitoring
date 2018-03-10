import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import MetersTypes from 'energy-monitoring/utils/meters-types';

export default Controller.extend({
  i18n: service(),
  metersTypes: MetersTypes.metersTypes,
  selectedType: computed("metersTypes", "model.type", function(){
    return this.get("metersTypes").filterBy("slug", this.get("model.type"))[0];
  }),
  selectedUnit: computed("model.unit", function(){
    return this.get("model.unit");
  }),
  units: computed("selectedType", function(){
    if(this.get("selectedType")){
      let array = [this.get("selectedType.defaultUnit")]
      return array.concat(this.get("selectedType.otherUnits"));
    }
  }),
  actions: {
    changeType(type){
      this.set("selectedType", type);
      this.set("model.type", type.slug);
      this.set("model.unit", type.defaultUnit);
    },
    save(){
      this.get("model").save().then(() => {
        this.toast.success(this.get("i18n").t("actions.edit-success"));
      }).catch(() => {
        this.toast.error(this.get("i18n").t("actions.edit-fail"));
      });
    },
    delete(){
      this.send("actualDelete");
    },
    actualDelete(){
      this.get("model").deleteRecord();
      this.get("model").save().then(() => {
        this.toast.success(this.get("i18n").t("actions.delete-success"));
      }).catch(() => {
        this.toast.error(this.get("i18n").t("actions.delete-fail"));
      });
    }
  }
});
