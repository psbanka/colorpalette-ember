import { visit, fillIn, find, findAll, click } from "@ember/test-helpers";
import { module, test } from "qunit";
import { hook } from "ember-hook";
import { setupApplicationTest } from "ember-qunit";

async function makeColor(name, hexCode) {
  await fillIn("form > section > input", name);
  await fillIn("#color-input", hexCode);
  await click("#submit");
}

module("Acceptance | create-color", function(hooks) {
  setupApplicationTest(hooks);

  test("I can create a new color", async function(assert) {
    await visit("/");
    assert.equal(findAll(".card-container > div").length, 1);
    await makeColor("my-test-color", "#ffffff");
    assert.equal(findAll(".card-container > div").length, 2);
    const card = await find(hook("card", { id: "my-test-color" }));
    assert.equal(card.style.backgroundColor, "rgb(255, 255, 255)");
  });

  test("I can delete a color", async function(assert) {
    await visit("/");
    const deleteButton = find(hook("delete-color", { id: "blueish" }));
    await click(deleteButton);
    assert.equal(findAll(".card-container > div").length, 0);
  });

  test("I can vote on a color", async function(assert) {
    await visit("/");
    const votes = find(hook("votes", { name: "blueish" }));
    assert.equal(votes.textContent, "stars: 0");
    const voteButton = find(hook("vote", { id: 4, name: "blueish" }));
    await click(voteButton);
    assert.equal(votes.textContent, "stars: 4");
  });

  test("I can change the color", async function(assert) {
    await visit("/");
    const colorValue = find(hook("color-value", { id: "blueish" }));
    assert.equal(colorValue.textContent, "color: #4286f4");
    const inputSelector = hook("change-color", { id: "blueish" });
    await fillIn(inputSelector, "#ff0000"); // red
    assert.equal(colorValue.textContent, "color: #ff0000");
    const card = await find(hook("card", { id: "blueish" }));
    assert.equal(card.style.backgroundColor, "rgb(255, 0, 0)");
  });

  test("I can vote on a second color", async function(assert) {
    await visit("/");
    await makeColor("terror", "#ff0000");
    const votes = find(hook("votes", { name: "terror" }));
    assert.equal(votes.textContent, "stars: 0");
    const voteButton = find(hook("vote", { id: 4, name: "terror" }));
    await click(voteButton);
    assert.equal(votes.textContent, "stars: 4");
  });
});
