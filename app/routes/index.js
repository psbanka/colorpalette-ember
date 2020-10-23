import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return [{ color: "#4286f4", name: "blueish", stars: 1 }];
  }
});
