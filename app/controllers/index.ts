import { action, set } from "@ember/object";

import Controller from "@ember/controller";

export default class IndexController extends Controller {
  // Actions
  // ---------------------------------------------------------------------------
  @action
  addColor(value) {
    this.model.pushObject(value);
  }

  @action
  deleteColor(id) {
    this.model.removeAt(id);
  }

  @action
  voteOnColor(id, vote) {
    set(this.model, `${id}.stars`, vote);
  }
}
