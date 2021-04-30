import { html } from 'lit-html';

import colorState from '../services/colorState';

import AppLayout from './AppLayout';
import ColorPicker from './ColorPicker';
import ColorSwatchContainer from './ColorSwatchContainer';

const App = () => {
  const { state, observable, changeBaseColor } = colorState();
  const Header = ColorPicker({
    defaultColor: state.baseColor,
    onColorChange: changeBaseColor,
  });
  const Content = ColorSwatchContainer(observable);

  return html`${AppLayout({ Header, Content })}`;
};

export default App;
