import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(){
    return faker.random.words();
  },
  type(){
    return faker.random.arrayElement(["electricity","water","gas","wood"]);
  },
  description(){
    return faker.random.words();
  },
  unit(){
    return faker.random.arrayElement(["kWh","m<sup>3</sup>", "stere"]);
  },
  pricePerUnit(){
    return faker.random.number();
  },
  reference(){
    return faker.finance.account();
  }
});
