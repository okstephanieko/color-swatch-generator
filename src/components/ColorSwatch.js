import { html } from 'lit-html';
import ColorSwatchItem from './ColorSwatchItem';

const ColorSwatch = (
  directive, templateCreator,
) => html`<ul>${directive(templateCreator(ColorSwatchItem))}</ul>`;

export default ColorSwatch;
