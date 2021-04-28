import { html } from 'lit-html';

const ColorPicker = ({ defaultColor, onColorChange }) => {
  let color = '';

  function onInput(event) {
    color = event.target.value;
  }

  function onSubmit(event) {
    event.preventDefault();
    onColorChange(color);
  }

  return html`<form @submit=${onSubmit}>
    <label>
      <span>Selected color: </span>
      <input type="text" .value=${color} .placeholder=${defaultColor} @input=${onInput} />
    </label>
  </form>`;
};

export default ColorPicker;
