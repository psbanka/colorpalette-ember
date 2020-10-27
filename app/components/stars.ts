import Component from "@ember/component";
import { action } from "@ember/object";
import hbs from "htmlbars-inline-precompile";

export default class Stars extends Component {
  // Actions
  // ---------------------------------------------------------------------------
  @action
  vote(id: number) {
    this.votingCallback(id);
  }

  // Passed properties
  // ---------------------------------------------------------------------------
  name: string = "";
  stars: number;
  votingCallback: (id: number) => void;

  layout = hbs`
    <button {{action "vote" 1}} data-test={{hook "vote" name=name id=1}}>⭐</button>
    <button {{action "vote" 2}} data-test={{hook "vote" name=name id=2}}>⭐</button>
    <button {{action "vote" 3}} data-test={{hook "vote" name=name id=3}}>⭐</button>
    <button {{action "vote" 4}} data-test={{hook "vote" name=name id=4}}>⭐</button>
    <button {{action "vote" 5}} data-test={{hook "vote" name=name id=0}}>⭐</button>
    <p>stars: {{this.stars}}</p>
  `;
}
