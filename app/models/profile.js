import DS from 'ember-data';

import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  username: [
    validator('presence', true),
    validator('length', {
      max: 100
    }),
    validator(function(value) {
      return true;
    })
  ],
  language: [
    validator('presence', true),
  ],
  currency: [
    validator('presence', true),
  ],
  country:  [
    validator('presence', true),
    validator('length', {
      max: 100
    })
  ],
  city:  [
    validator('presence', true),
    validator('length', {
      max: 100
    })
  ]
});

export default DS.Model.extend(Validations, {
  username: DS.attr("string"),
  language: DS.attr("string"),
  country: DS.attr("string"),
  city: DS.attr("string"),
  currency: DS.attr("string"),
  currencyCode: DS.attr("string"),
  currencySymbol: DS.attr("string"),
  housings: DS.hasMany("housing", {async:true})
});
