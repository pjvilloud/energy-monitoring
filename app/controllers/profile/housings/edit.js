import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  i18n: service(),
  actions: {
    save(){
      this.get("model").save().then(() => {
        this.toast.success(this.get("i18n").t("actions.edit-success"));
      }).catch(() => {
        this.toast.error(this.get("i18n").t("actions.edit-fail"));
      });
    },
  }
});
