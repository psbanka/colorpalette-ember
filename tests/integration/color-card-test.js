import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | color-card", function(hooks) {
  setupRenderingTest(hooks);

  test("green (a bright color) should have foreground of black", async function(assert) {
    assert.expect(1);
    this.set("card", {
      name: "jazzy-fresh",
      color: "#11ee11",
      stars: 1
    });
    this.set("deleteCallback", () => undefined);
    this.set("votingCallback", () => undefined);
    await render(
      hbs`
        <ColorCard @card={{this.card}} @deleteCallback={{this.deleteCallback}} @votingCallback={{this.votingVCallback}}/>
      `
    );
    assert.equal(
      this.element.querySelector("div").getAttribute("style"),
      "background-color: #11ee11; color: black;",
      "green has bg of black"
    );
  });

  test("blue (a dark color) should have foreground of white", async function(assert) {
    assert.expect(1);
    this.set("card", {
      name: "pure-blue",
      color: "#0000FF",
      stars: 1
    });
    this.set("deleteCallback", () => undefined);
    this.set("votingCallback", () => undefined);
    await render(
      hbs`
        <ColorCard @card={{this.card}} @deleteCallback={{this.deleteCallback}} @votingCallback={{this.votingVCallback}}/>
      `
    );
    assert.equal(
      this.element.querySelector("div").getAttribute("style"),
      "background-color: #0000FF; color: white;",
      "blue has bg of white"
    );
  });
});
