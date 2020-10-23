import Component from "@ember/component";
import { computed } from "@ember/object";

const DEFAULT_BLUE = "#147fbd";

export default class UiButton extends Component {
  // Computed properties
  // ---------------------------------------------------------------------------
  @computed("backgroundColor", "color")
  get style() {
    return `background-color: ${this.backgroundColor}; color: ${this.color};`;
  }

  // Callbacks
  // ---------------------------------------------------------------------------
  onClick = () => null

  // Actions
  // ---------------------------------------------------------------------------
  click(e) {
    if (this.task) {
      this.task.perform();
    } else {
      this.onClick();
    }
  }

  // Passed properties
  // ---------------------------------------------------------------------------
  backgroundColor = DEFAULT_BLUE
  color = "#fff"
  type = "button"

  // Passed properties
  // ---------------------------------------------------------------------------
  task = null

  // Template
  // ---------------------------------------------------------------------------
  tagName = "button"
  attributeBindings = ["style", "type"]
  classNames = ['ui-button']
}
