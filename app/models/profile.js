import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr("string"),
  language: DS.attr("string"),
  country: DS.attr("string"),
  city: DS.attr("string"),
  currency: DS.attr("string"),
  currencyCode: DS.attr("string"),
  currencySymbol: DS.attr("string"),
  housings: DS.hasMany("housing", {async:true})
});
