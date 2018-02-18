import Controller from '@ember/controller';
import Ember from 'ember';
import MetersTypes from 'energy-monitoring/utils/meters-types';


export default Controller.extend({
  metersTypes:MetersTypes.metersTypes,
  selectedType: Ember.computed("metersTypes", "model.type", function(){
    return this.get("metersTypes").filterBy("slug", this.get("model.type"))[0];
  }),
  selectedUnit: Ember.computed("model.unit", function(){
    return this.get("model.unit");
  }),
  units: Ember.computed("selectedType", function(){
    let array = [this.get("selectedType.defaultUnit")]
    return array.concat(this.get("selectedType.otherUnits"));
  }),
  actions: {
    changeType(type){
      this.set("selectedType", type);
      this.set("model.type", type.slug);
      this.set("model.unit", type.defaultUnit);
    }
  }
});
