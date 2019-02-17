import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: [
    validator('presence', true),
    validator('length', {
      max: 100
    })
  ],
  description:  [
    validator('presence', true),
    validator('length', {
      max: 100
    })
  ]
});

export default DS.Model.extend(Validations, {
  name: DS.attr("string"),
  description: DS.attr("string"),
  meters: DS.hasMany("meter", {async:false}),
  profile: DS.belongsTo("profile")
});
