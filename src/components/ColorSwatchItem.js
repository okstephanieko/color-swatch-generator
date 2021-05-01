import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map';

const reduceType = (type) => ((['base', 'tint', 'shade'].includes(type)) ? type : '');
const reduceBrightness = (brightness) => ((brightness > 55) ? 'light' : 'dark');

const ColorSwatchItem = ({
  type, weight, hex, brightness,
}) => html`<li
  class="${reduceType(type)} ${reduceBrightness(brightness)}"
  style=${styleMap({ backgroundColor: `#${hex}` })}
  data-color-value="#${hex}">${weight}% #${hex}</li>`;

export default ColorSwatchItem;
