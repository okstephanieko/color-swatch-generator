import { html } from 'lit-html';

import colorState from '../services/colorState';

import AppLayout from './AppLayout';
import ColorOptionsContainer from './ColorOptionsContainer';
import ColorSwatchContainer from './ColorSwatchContainer';

const App = () => {
  const { getObservable, changeBaseColor, changeWeight } = colorState();
  const Header = ColorOptionsContainer(getObservable(), changeBaseColor, changeWeight);
  const Content = ColorSwatchContainer(getObservable());

  return html`${AppLayout({ Header, Content })}`;
};

export default App;
