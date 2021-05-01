import { html } from 'lit-html';

const ColorOptionsForm = (color, onColorChange, onWeightChange) => {
  let inputText = color;

  function onInput(event) {
    if (event.target.name === 'base') {
      inputText = event.target.value;
    }
  }

  function onBlur(event) {
    if (event.target.name === 'weight') {
      onWeightChange(event.target.value);
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    onColorChange(inputText);
  }

  return html`<form @submit=${onSubmit}>
    <label>
      <span>Selected color: </span>
      <input type="text" name="base" class="input" .value=${inputText} @input=${onInput}>
    </label>
    <button type="submit">Get Colors</button>
  </form>
  
  <label>
      <span>Weight: </span>
      <input type="number" name="weight" min="1" max="100" @blur=${onBlur}>
    </label>`;
};

export default ColorOptionsForm;
