import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: [ "col-lg", "form-group", "language-chooser" ],
  i18n: service(),
  moment: service(),
  calendarService: service("power-calendar"),
  //Retourne la locale active
  current: computed("i18n.locale", function(){
    const i18n = this.get("i18n");
    return {
      id: this.get("i18n.locale.id"),
      text: i18n.t("language-select.language." + this.get("i18n.locale")),
      img: "/img/flags/Flag of " + i18n.t("language-select.country." + this.get("i18n.locale")) + ".png"
    };
  }),
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
      this.get("calendarService").set("locale", locale.id);
    }
  }
});
