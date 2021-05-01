import { html } from 'lit-html';
import { distinctUntilChanged, map } from 'rxjs/operators';
import Values from 'values.js';

import ColorSwatch from './ColorSwatch';
import ColorSwatchItem from './ColorSwatchItem';
import withState from './withState';

const model = (value) => {
  const values = new Values(value);

  return {
    type: values.type,
    weight: values.weight,
    hex: `#${values.hex}`,
    all(weightValue) {
      return values.all(weightValue).map((child) => ({
        type: child.type,
        weight: child.weight,
        hex: `#${child.hex}`,
        brightness: child.getBrightness(),
      }));
    },
    brightness: values.getBrightness(),
  };
};

const ColorSwatchContainer = (observable) => {
  const swatchWithState = withState(observable.pipe(
    map((state) => model(state.baseColor).all(state.weight)),
    distinctUntilChanged(),
    map((swatch) => swatch.map((color) => html`${ColorSwatchItem(color)}`)),
  ));

  return html`${ColorSwatch(swatchWithState)}`;
};

export default ColorSwatchContainer;
