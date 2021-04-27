import { html } from 'lit-html';

import { setColor } from '../lib/handlers';

const ColorPicker = () => {
  let color = '';
  // const placeholder = store.state.currentColor.getBaseColor();

  function onInput(event) {
    color = event.target.value;
  }

  function onSubmit(event) {
    event.preventDefault();
    setColor(color);
  }

  return html`<form @submit=${onSubmit}>
    <label>
      <span>Selected color: </span>
      <input type="text" .value=${color} @input=${onInput} />
    </label>
  </form>`;
};

export default ColorPicker;
