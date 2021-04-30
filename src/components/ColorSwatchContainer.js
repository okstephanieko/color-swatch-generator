import { html } from 'lit-html';
import { distinctUntilChanged, map } from 'rxjs/operators';
import Values from 'values.js';

import ColorSwatch from './ColorSwatch';
import ColorSwatchItem from './ColorSwatchItem';
import withState from './withState';

const model = (value) => new Values(value);

const ColorSwatchContainer = (observable) => {
  const swatchWithState = withState(observable.pipe(
    map((state) => model(state.baseColor).all(15)),
    distinctUntilChanged(),
    map((swatch) => swatch.map((color) => html`${ColorSwatchItem(color)}`)),
  ));

  return html`${ColorSwatch(swatchWithState)}`;
};

export default ColorSwatchContainer;
