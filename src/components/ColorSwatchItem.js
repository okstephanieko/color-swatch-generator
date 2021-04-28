import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map';

const ColorSwatchItem = ({ type, weight, hex }) => html`<li
  style=${styleMap({ backgroundColor: `#${hex}` })}>${weight}% #${hex}</li>`;

export default ColorSwatchItem;
