import DS from 'ember-data';
import moment from 'moment';

export default DS.Transform.extend({
  deserialize(serialized, options) {
    if (serialized) {
      return options.utc ? moment.utc(serialized, options.format): moment(serialized, options.format);
    }
    return serialized;
  },

  serialize(deserialized, options) {
    if (deserialized) {
      return options.utc ? moment.utc(deserialized).format(options.format) : moment(deserialized).format(options.format);
    }
    return deserialized;
  }
});
