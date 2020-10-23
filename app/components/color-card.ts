import { action, computed } from "@ember/object";

import Component from "@ember/component";
import hbs from "htmlbars-inline-precompile";

interface Card {
  color: string
  id: string
}

/**
 * This function calculates the "brightness" of the given color.
 * @param {String} hexCode - a hexcode value of the color (e.g. "#ff0000",
 *  which would be "computer red")
 * @returns {Number} - brightness of this color as a value from 0 - 1
 *  (0 being "completely dark" (i.e. black) and 1 being "completely bright" (i.e. white))
 *  this function is aware, however, that "pure green" (i.e. "#00ff00") is brighter than
 *  "pure blue" (i.e. "#0000ff").
 */
function brightness(hexCode) {
  // FIXME: parse color into three variables in order to find percent of each channel
  // --------------------------------------------------------------------------------
  // In a given color code (#aabbcc), the first two "digits" are for red (i.e. "aa"),
  // the second two digits are for blue (i.e. "bb"), and the last two digits are for
  // green (i.e. "cc"). Then figure out the overall percent of each color
  // (hint: "00" is 0% and "ff" is 100%)
  const colorMatch = new RegExp(/#(\w{2})(\w{2})(\w{2})$/);
  const match = colorMatch.exec(hexCode);
  if (match == null) {
    return 0
  }

  const redStr = match[1]
  const greenStr = match[2]
  const blueStr = match[3]
  const percentRed = parseInt(redStr, 16) / 255;
  const percentBlue = parseInt(blueStr, 16) / 255;
  const percentGreen = parseInt(greenStr, 16) / 255;

  // A bunch of color theory here: different colors don't contribute equally to brightness
  // NOTE: This code is correct; do not change.
  const redMultiplier = 77 / 255;
  const blueMultiplier = 150 / 255;
  const greenMultiplier = 28 / 255;

  return (
    redMultiplier * percentRed +
    blueMultiplier * percentBlue +
    greenMultiplier * percentGreen
  );
}

export default class ColorCard extends Component {
  // Computed properties
  // ---------------------------------------------------------------------------
  @computed("card.color")
  get style() {
    const color = brightness(this.card.color) > 0.5 ? "black" : "white";
    return `background-color: ${this.card.color}; color: ${color};`;
  }

  @computed("card.color")
  get buttonColor() {
    return brightness(this.card.color) > 0.5 ? "white" : "black";
  }

  @computed("card.color")
  get buttonBackgroundColor() {
    return brightness(this.card.color) > 0.5 ? "#000000aa" : "#ffffffaa";
  }

  // Actions
  // ---------------------------------------------------------------------------
  @action
  deleteCard() {
    this.deleteCallback(this.id);
  }

  @action
  voteOnCard(value) {
    this.votingCallback(this.id, value);
  }

  // Passed properties
  // ---------------------------------------------------------------------------
  deleteCallback!: (id: string) => null
  votingCallback!: (id: string, value: number) => null
  card!: Card
  id!: string

  // Template
  // ---------------------------------------------------------------------------
  attributeBindings = ["style"]
  classNames = ['color-card']

  layout = hbs`
    <section>
      <h1>name: {{card.name}}</h1>
      <section class="color-card__colorField">
        <p data-test={{hook "color-value" id=card.name}}>color: {{card.color}}</p>
        {{input hook=(hook "change-color" id=card.name) value=card.color type="color"}}
      </section>
      <Stars @name={{card.name}} @stars={{card.stars}} @votingCallback={{action "voteOnCard"}}/>
    </section>
    <section class="color-card__actions">
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
}
