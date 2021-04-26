import { html } from 'lit-html';

const ColorSwatchItem = ({ type, weight, hex }) =>
  html`<li>${weight}% #${hex}</li>`;

export default ColorSwatchItem;
