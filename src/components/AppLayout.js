import { html } from 'lit-html';

const AppLayout = ({ Header, Content }) => html`<div class="container--fluid">
  <header><sl-color-picker></sl-color-picker></sl-icon>${Header}</header>
  <section>${Content}</section>
</div>
`;

export default AppLayout;
