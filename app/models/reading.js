import DS from 'ember-data';

import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  readingDate: [
    validator('presence', true),
    validator(function(value) {
      return moment(value).isSameOrBefore(moment(),'day');
    })
  ],
  readingValue: [
    validator('presence', true),
  ]
});

export default DS.Model.extend(Validations,{
  readingDate: DS.attr("moment"),
  readingValue: DS.attr("number"),
  observation: DS.attr("string"),
  meter: DS.belongsTo("meter")
});
