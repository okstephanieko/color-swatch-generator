import { html } from 'lit-html';

const AppLayout = ({ Header, Content }) => html`<div class="container--fluid">
  <header>${Header}</header>
  <section>${Content}</section>
</div>
`;

export default AppLayout;
