import Controller from "@ember/controller";
import { set } from "@ember/object";

export default Controller.extend({
  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    addColor(value) {
      this.model.pushObject(value);
    },
    deleteColor(id) {
      this.model.removeAt(id);
    },
    voteOnColor(id, vote) {
      set(this.model, `${id}.stars`, vote);
    }
  }
});
