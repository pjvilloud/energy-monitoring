import Ember from 'ember';
import moment from "moment";

const { Component, computed, inject } = Ember;

export default Component.extend({
  classNames: [ "col-lg", "form-group", "language-chooser" ],
  i18n: inject.service(),
  moment: inject.service(),
  //Retourne la locale active
  current: function(){
    const i18n = this.get("i18n");
    return {
      id: this.get("i18n.locale.id"),
      text: i18n.t("language-select.language." + this.get("i18n.locale")),
      img: "/img/flags/Flag of " + i18n.t("language-select.country." + this.get("i18n.locale")) + ".png"
    };
  }.property("i18n.locale"),
  //Retourne l'ensemble des locales
  locales: computed("i18n.locales", function() {
    const i18n = this.get("i18n");
    return this.get("i18n.locales").map(function (loc) {
      return {
        id: loc,
        text: i18n.t("language-select.language." + loc),
        img: "/img/flags/Flag of " + i18n.t("language-select.country." + loc) + ".png"
      };
    });
  }),
  actions: {
    change: function(locale) {
      //Lors du changement de locale, on set au service i18n et à moment
      this.set("i18n.locale", locale.id);
      this.get("moment").changeLocale(locale.id);
    }
  }
});
