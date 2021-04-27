import { html } from 'lit-html';
import Values from 'values.js';
import { map } from 'rxjs/operators';

import { getBaseObservable } from '../lib/handlers';
import observe from '../lib/observeDirective';

import ColorSwatchItem from './ColorSwatchItem';

const model = (colorValue) => new Values(colorValue);

const colorChildrenObservable = getBaseObservable().pipe(
  map((colorValue) => model(colorValue).all(15).map(
    (childColor) => html`<li>
      ${ColorSwatchItem({ weight: childColor.weight, hex: childColor.hex })}
    </li>`,
  )),
);

const ColorSwatch = () => html`<ul>
  ${observe(colorChildrenObservable)}
</ul>`;

export default ColorSwatch;
