import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default Controller.extend({
  i18n: service(),
  meterEditController: controller("profile/housings/edit/meters/edit"),
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
