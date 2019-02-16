import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { observer } from '@ember/object';
import MetersTypes from 'energy-monitoring/utils/meters-types';

export default Controller.extend({
  metersTypes: MetersTypes.metersTypes,
  selectedType: computed("metersTypes", "model.meter.type", function(){
    return this.get("metersTypes").filterBy("slug", this.get("model.meter.type"))[0];
  }),
  currentReading: null,
  i18n: service(),
  isNotLastReading: computed("model", "model.meter.readings.[]", function(){
    if(this.get("model.meter.readings.length") > 0){
      return this.get("model.id") !== this.get("model.meter.readings.lastObject.id");
    }
  }),
  isNotFirstReading: computed("model", "model.meter.readings.[]", function(){
      if(this.get("model.meter.readings.length") > 0) {
        return this.get("model.id") !== this.get("model.meter.readings.firstObject.id");
      }
  }),
  actions:{
    save(){
      this.get("model").save().then(() => {
        this.toast.success(this.get("i18n").t("actions.edit-success"));
      }).catch(() => {
        this.toast.error(this.get("i18n").t("actions.edit-fail"));
      });
    },
    delete(){
      this.get("model").deleteRecord();
      this.get("model").save().then(() => {
        this.toast.success(this.get("i18n").t("actions.delete-success"));
      }).catch(() => {
        this.toast.error(this.get("i18n").t("actions.delete-fail"));
      });
    },
    previousReading(){
      let activeIndex = this.get("model.meter.readings").indexOf(this.get("model"));
      if(activeIndex > 0) {
        this.transitionToRoute("housings.meters.readings.edit", this.get("model.meter.readings").objectAt(activeIndex - 1).get("id"));
      }
    },
    nextReading(){
      let activeIndex = this.get("model.meter.readings").indexOf(this.get("model"));
      if(activeIndex < (this.get("model.meter.readings.length") - 1)) {
        this.transitionToRoute("housings.meters.readings.edit", this.get("model.meter.readings").objectAt(activeIndex + 1).get("id"));
      }
    },
  }
});
