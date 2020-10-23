interface Card {
  color: string
  id?: string
  name: string
  stars: number
}

// Types for compiled templates
declare module 'ember-colorpalette/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
