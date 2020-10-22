import Controller from "@ember/controller";
import { set } from "@ember/object";

export default Controller.extend({
  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    addColor(value) {
      console.log("addColor");
      this.model.pushObject(value);
    },
    deleteColor(value) {
      const index = this.model.reduce(
        (memo, card, idx) => (memo = card.name === value.name ? idx : memo),
        null
      );
      this.model.removeAt(index);
    },
    voteOnColor(value, vote) {
      set(this.model, "0.stars", vote);
    }
  }
});
