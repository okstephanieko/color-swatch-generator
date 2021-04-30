import { html } from 'lit-html';

const ColorOptionsForm = (color, onColorChange) => {
  let inputText = color;

  function onInput(event) {
    inputText = event.target.value;
  }

  function onSubmit(event) {
    event.preventDefault();
    onColorChange(inputText);
  }

  return html`<form @submit=${onSubmit}>
    <label>
      <span>Selected color: </span>
      <input type="text" .value=${inputText} @input=${onInput}>
    </label>
  </form>`;
};

export default ColorOptionsForm;
