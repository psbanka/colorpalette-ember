import Component from "@ember/component";
import { action } from '@ember/object'
import hbs from "htmlbars-inline-precompile";

export default class NewColor extends Component {
  // Passed properties
  // ---------------------------------------------------------------------------
  addCallback = () => null

  // Actions
  // ---------------------------------------------------------------------------
  @action
  save() {
    const card = { name: this.name, color: this.color, stars: 0 };
    this.addCallback(card);
    this.set("name", "");
    this.set("color", "#ffffff");
  }

  @action
  reset() {
    this.set("name", "");
  }

  // Internal properties
  // ---------------------------------------------------------------------------
  name = ""
  color = "#ffffff"

  // Template
  // ---------------------------------------------------------------------------
  classNames = ['new-color']

  layout = hbs`
    {{#ui-form onSubmit=(action "save") as |form|}}
      <section>
        {{#form.label}}Color name:{{/form.label}}
        {{form.input placeholder="my cool color" value=name}}
      </section>

      <section>
        {{#form.label}}Color:{{/form.label}}
        {{form.input id="color-input" value=color type="color"}}
      </section>

      <section>
        {{#ui-button onClick=(action "reset")}}Reset{{/ui-button}}
        {{#form.submit}}Save{{/form.submit}}
      </section>
    {{/ui-form}}
  `
}
