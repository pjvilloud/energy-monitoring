import DS from 'ember-data';

export default DS.Model.extend({
  readingDate: DS.attr(),
  readingValue: DS.attr("number"),
  observation: DS.attr("string"),
  meter: DS.belongsTo("meter")
});
