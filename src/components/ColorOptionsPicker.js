import { html } from 'lit-html';

const ColorOptionsPicker = (colorValue, onColorChange) => html`<sl-color-picker
  .value=${colorValue}
  @sl-change=${(event) => onColorChange(event.target.value)}></sl-color-picker>
`;

export default ColorOptionsPicker;
