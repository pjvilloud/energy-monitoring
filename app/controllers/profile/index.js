import Controller from '@ember/controller';
import { computed } from '@ember/object';
import Currencies from 'energy-monitoring/utils/currencies';
import Countries from 'energy-monitoring/utils/countries';

export default Controller.extend({
  selectedCurrency: computed("model.{currency,currencySymbol,currencyCode}", function(){
    return this.get("currencies").filterBy("code", this.get("model.currencyCode"))[0];
  }),
  currencies:Currencies.currencies,
  countries:Countries.countries,
  actions: {
    changeCurrency(currency){
       this.set("selectedCurrency", currency);
       this.set("model.currency", currency.name);
       this.set("model.currencySymbol", currency.symbol);
       this.set("model.currencyCode", currency.code);
    }
  }
});
