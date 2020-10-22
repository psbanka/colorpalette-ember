// import hbs from "htmlbars-inline-precompile";
import Component from "@ember/component";
import { computed } from "@ember/object";

const DEFAULT_BLUE = "#147fbd";

export default Component.extend({
  // Computed properties
  // ---------------------------------------------------------------------------
  style: computed("backgroundColor", "color", function() {
    return `background-color: ${this.backgroundColor}; color: ${this.color};`;
  }),

  // Callbacks
  // ---------------------------------------------------------------------------
  onClick: () => null,

  // Actions
  // ---------------------------------------------------------------------------
  click(e) {
    console.log("ui-button CLICK");
    if (this.task) {
      this.task.perform();
    } else {
      console.log("calling ui-button onClick method...");
      this.onClick();
    }
  },

  // Passed properties
  // ---------------------------------------------------------------------------
  backgroundColor: DEFAULT_BLUE,
  color: "#fff",
  type: "button",

  // Passed properties
  // ---------------------------------------------------------------------------
  task: null,

  // Template
  // ---------------------------------------------------------------------------
  tagName: "button",
  attributeBindings: ["style", "type"]
});
