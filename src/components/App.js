import { html } from 'lit-html';

import ColorPicker from './ColorPicker';
import ColorSwatch from './ColorSwatch';

const App = () => html`
  ${ColorPicker()}
  ${ColorSwatch()}
`;

export default App;
