import Route from "@ember/routing/route";
import { v4 } from "uuid";

export default Route.extend({
  model() {
    return [{ id: v4(), color: "#4286f4", name: "blueish", stars: 0 }];
  }
});
