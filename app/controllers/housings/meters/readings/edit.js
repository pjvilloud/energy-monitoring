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
  previousReadingId: computed("model.meter.readings.[]", function(){
    let activeIndex = this.get("model.meter.readings").indexOf(this.get("model"));
    if(activeIndex > 0) {
      return this.get("model.meter.readings").objectAt(activeIndex - 1).get("id");
    }
  }),
  nextReadingId: computed("model.meter.readings.[]", function(){
    let activeIndex = this.get("model.meter.readings").indexOf(this.get("model"));
    if(activeIndex < (this.get("model.meter.readings.length") - 1)) {
      return this.get("model.meter.readings").objectAt(activeIndex + 1).get("id");
    }
  }),
  actions:{
    save(){
      this.get("model").save().then(() => {
        this.toast.success(this.get("i18n").t("actions.edit-success"), '', {
          closeButton: true,
          timeOut: 0,
          extendedTimeOut: 0
        });
      }).catch(() => {
        this.toast.error(this.get("i18n").t("actions.edit-fail"));
      });
    },
    delete(){
      this.get("model").deleteRecord();
      this.get("model").save().then(() => {
        this.toast.success(this.get("i18n").t("actions.delete-success"));
        let id = this.get("previousReadingId") ? this.get("previousReadingId") : this.get("nextReadingId")
        this.transitionToRoute("housings.meters.readings.edit", this.get("model.meter.housing.id"), this.get("model.meter.id") ,id);
      }).catch(() => {
        this.toast.error(this.get("i18n").t("actions.delete-fail"));
      });
    }
  }
});
