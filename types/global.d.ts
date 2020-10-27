// Types for compiled templates
declare module "ember-colorpalette/templates/*" {
  import { TemplateFactory } from "htmlbars-inline-precompile";
  const tmpl: TemplateFactory;
  export default tmpl;
}

declare interface Color {
  id: string;
  color: string;
  name: string;
  stars: number;
}

declare interface Task {
  perform: () => Promise<void>;
}
