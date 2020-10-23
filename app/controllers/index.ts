import { action, set } from "@ember/object";

import Controller from "@ember/controller";

export default class IndexController extends Controller {
  // Actions
  // ---------------------------------------------------------------------------
  @action
  addColor(value: Card) {
    this.model.pushObject(value);
  }

  @action
  deleteColor(id: number) {
    this.model.removeAt(id);
  }

  @action
  voteOnColor(id: number, vote: number) {
    set(this.model, `${id}.stars`, vote);
  }
}
