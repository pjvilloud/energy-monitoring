import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  username(){
    return faker.internet.userName();
  },
  country(){
    return faker.address.country();
  },
  city(){
    return faker.address.city();
  },
  language(){
    return faker.random.arrayElement(["fr","en"]);
  },
  currency(){
    return faker.finance.currencyName();
  },
  currencyCode(){
    return faker.finance.currencyCode();
  },
  currencySymbol(){
    return faker.finance.currencySymbol();
  }
});
