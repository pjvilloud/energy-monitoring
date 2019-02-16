import DS from 'ember-data';
import MetersType from '../utils/meters-types';
import { validator, buildValidations } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
  name: [
    validator('presence', true),
    validator('length', {
      max: 100
    })
  ],
  reference:  [
    validator('presence', true),
    validator('length', {
      max: 100
    })
  ],
  type: [
    validator('presence', true),
    validator(function(value) {
      return MetersType.metersTypes.mapBy("slug").includes(value);
    })
  ],
  unit: [
    validator('dependent', {
      on: ['type']
    }),
    validator(function(value, options, model) {
      let meterType = MetersType.metersTypes.filterBy("slug", model.get("type"))[0];
      return [meterType.defaultUnit].concat(meterType.otherUnits).includes(value);
    })
  ],
  pricePerUnit:[
    validator('number', {
      allowString:true,
      gt:0
    })
  ],
  description: [
    validator('length', {
      max: 300
    })
  ],
});

export default DS.Model.extend(Validations, {
  name: DS.attr("string"),
  type: DS.attr("string"),
  description: DS.attr("string"),
  unit: DS.attr("string"),
  pricePerUnit: DS.attr("number"),
  reference: DS.attr("string"),
  readings: DS.hasMany("reading", {async:false}),
  housing: DS.belongsTo("housing"),
  lastReading: computed("readings.@each.readingDate", function(){
    if(this.get("readings")){
      return this.get("readings").reduce(function getMax(previousMax, reading) {
        if(previousMax && moment.max(reading.get("readingDate"),previousMax.get("readingDate")) === previousMax.get("readingDate")){
          return previousMax;
        }
        else {
          return reading;
        }
      });
    }
  })
});
