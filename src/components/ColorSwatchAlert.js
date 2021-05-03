import { html } from 'lit-html';

const ColorSwatchAlert = (type, ref) => {
  switch (type) {
    case 'success': {
      return html`<sl-alert ${ref} type="success" duration="3000" closable>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        <strong>Your changes have been saved</strong><br>
        You can safely exit the app now.
       </sl-alert>`;
    }

    default: return null;
  }
};
export default ColorSwatchAlert;
