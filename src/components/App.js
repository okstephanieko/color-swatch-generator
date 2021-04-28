import { html } from 'lit-html';

import colorState from '../services/colorState';

import ColorPicker from './ColorPicker';
import ColorSwatchContainer from './ColorSwatchContainer';

const App = () => {
  const { state, observable, changeBaseColor } = colorState();

  return html`
    ${ColorPicker({ defaultColor: state.baseColor, onColorChange: changeBaseColor })}
    ${ColorSwatchContainer(observable)}    
  `;
};

export default App;
