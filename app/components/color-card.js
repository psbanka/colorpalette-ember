import { hexToChannels, lumFromChannels } from "luum";

import Component from "@ember/component";
import { computed } from "@ember/object";
import hbs from "htmlbars-inline-precompile";

function brightness(hexCode) {
  return lumFromChannels(hexToChannels(hexCode));
}

export default Component.extend({
  // Computed properties
  // ---------------------------------------------------------------------------
  style: computed("card.color", function() {
    const color = brightness(this.card.color) > 0.5 ? "black" : "white";
    return `background-color: ${this.card.color}; color: ${color};`;
  }),

  buttonColor: computed("card.color", function() {
    return brightness(this.card.color) > 0.5 ? "white" : "black";
  }),

  buttonBackgroundColor: computed("card.color", function() {
    return brightness(this.card.color) > 0.5 ? "#000000aa" : "#ffffffaa";
  }),

  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    deleteCard() {
      this.deleteCallback(this.id);
    },
    voteOnCard(value) {
      this.votingCallback(this.id, value);
    }
  },

  // Passed properties
  // ---------------------------------------------------------------------------
  deleteCallback: () => null,
  votingCallback: () => null,
  card: null,
  id: 0,

  // Template
  // ---------------------------------------------------------------------------
  attributeBindings: ["style"],
  layout: hbs`
    <section class="{{styleNamespace}}__main">
      <h1>name: {{card.name}}</h1>
      <section class="{{styleNamespace}}__colorField">
        <p data-test={{hook "color-value" id=card.name}}>color: {{card.color}}</p>
        {{input hook=(hook "change-color" id=card.name) value=card.color type="color"}}
      </section>
      <Stars @name={{card.name}} @stars={{card.stars}} @votingCallback={{action "voteOnCard"}}/>
    </section>
    <section class="{{styleNamespace}}__actions">
      <UiButton
        data-test={{hook "delete-color" id=card.name}}
        @backgroundColor={{buttonBackgroundColor}}
        @color={{buttonColor}}
        @onClick={{action "deleteCard"}}
      >
        Delete
      </UiButton>
    </section>
  `
});
