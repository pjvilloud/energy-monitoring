import {Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
  readingDate(){
    return faker.date.past(1);
  },
  observation(){
    return faker.random.words();
  },
  readingValue(){
    return faker.random.number();
  }
});
