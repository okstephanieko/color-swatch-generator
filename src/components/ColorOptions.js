import { html } from 'lit-html';

import useColorOptions from './useColorOptions';

const ColorOptions = ({ colorValue: base, weight }, actions) => {
  const { listeners } = useColorOptions(actions);

  return html`<label>
    <span>Pick a color</span>
    <sl-color-picker
      name="base"
      .value=${base}
      @sl-change=${(listeners.onChange)}>
    </sl-color-picker>
  </label>
  <label>
    <span>Adjust weight</span>
    <sl-input type="number" name="weight" min="1" max="100" .value=${weight} @blur=${listeners.onBlur}>
  </label>`;
};

export default ColorOptions;
