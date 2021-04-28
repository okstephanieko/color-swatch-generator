import { html } from 'lit-html';
import { distinctUntilChanged, map } from 'rxjs/operators';
import Values from 'values.js';

import observe from '../directives/observe';

import ColorSwatch from './ColorSwatch';

const model = (value) => new Values(value);

const ColorSwatchContainer = (observable) => {
  const templateCreator = (template) => observable.pipe(
    map((state) => model(state.baseColor).all(15)),
    distinctUntilChanged(),
    map((swatch) => swatch.map((color) => html`${template({ type: color.type, weight: color.weight, hex: color.hex })}`)),
  );

  return html`${ColorSwatch(observe, templateCreator)}`;
};

export default ColorSwatchContainer;
