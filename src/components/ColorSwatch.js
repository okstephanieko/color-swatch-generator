import { html } from 'lit-html';
import Values from 'values.js';

import { getBaseObservable } from '../lib/handlers';
import observe from '../lib/observeDirective';
import observerTemplate from '../lib/observerTemplate';

import ColorSwatchItem from './ColorSwatchItem';

const model = (colorValue) => new Values(colorValue);
const { templateValue, updateTemplateValue, observer } = observerTemplate([]);

const listener = (color) => {
  function swatchModel(raw) {
    return raw.map((item) => ({ weight: item.weight, hex: item.hex }));
  }
  updateTemplateValue(
    swatchModel(model(color).all(15)).map(
      (item) => html`<li>
        ${ColorSwatchItem(item)}
      </li>`,
    ),
  );
};

getBaseObservable().subscribe(observer(listener));

const ColorSwatch = () => html`<ul>
  ${observe(templateValue)}
</ul>`;

export default ColorSwatch;
