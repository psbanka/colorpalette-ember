import Component from "@ember/component";
import hbs from "htmlbars-inline-precompile";

export default class UiForm extends Component {
  // Passed properties
  // ---------------------------------------------------------------------------
  onSubmit = () => null;

  // Internal methods
  // ---------------------------------------------------------------------------
  submit(e: Event) {
    e.preventDefault();
    this.onSubmit();
  }

  // Template
  // ---------------------------------------------------------------------------
  tagName = "form";

  layout = hbs`
    {{yield (hash
      label=(component "ui-form/label")
      input=(component "ui-form/input")
      submit=(component "ui-button" id="submit" type="submit")
    )}}
  `;
}
