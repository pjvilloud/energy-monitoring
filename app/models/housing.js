import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  meters: DS.hasMany("meter", {async:true}),
  profile: DS.belongsTo("profile")
});
