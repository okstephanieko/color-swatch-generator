import { html } from 'lit-html';

import colorState from '../services/colorState';

import AppLayout from './AppLayout';
import ColorPicker from './ColorPicker';
import ColorSwatchContainer from './ColorSwatchContainer';

const App = () => {
  const { getState, getObservable, changeBaseColor } = colorState();
  const Header = ColorPicker({
    defaultColor: getState().baseColor,
    onColorChange: changeBaseColor,
  });
  const Content = ColorSwatchContainer(getObservable());

  return html`${AppLayout({ Header, Content })}`;
};

export default App;
