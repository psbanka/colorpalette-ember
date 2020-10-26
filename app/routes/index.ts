import Route from "@ember/routing/route";
import { v4 } from "uuid";

export interface Color {
  id: string;
  color: string;
  name: string;
  stars: number;
}

export default class IndexRoute extends Route {
  model() {
    const color: Color = {
      id: v4(),
      color: "#4286f4",
      name: "blueish",
      stars: 0
    };
    return [color];
  }
}
