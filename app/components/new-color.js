import Component from "@ember/component";
import hbs from "htmlbars-inline-precompile";

export default Component.extend({
  // Passed properties
  // ---------------------------------------------------------------------------
  addCallback: () => null,

  // Actions
  // ---------------------------------------------------------------------------
  actions: {
    save() {
      const card = { name: this.name, color: this.color, stars: 0 };
      this.addCallback(card);
      this.set("name", "");
      this.set("color", "#ffffff");
    },
    reset() {
      this.set("name", "");
    }
  },

  // Internal properties
  // ---------------------------------------------------------------------------
  name: "",
  color: "#ffffff",

  // Template
  // ---------------------------------------------------------------------------
  classNames: ['new-color'],

  layout: hbs`
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
});
