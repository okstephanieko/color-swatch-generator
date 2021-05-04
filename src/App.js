import { html } from 'lit-html';
import { createRef, ref } from 'lit-html/directives/ref';

import services from './services';
import { useSelector } from './store';
import makeListener from './lib/makeListener';

import AppLayout from './components/AppLayout';
import {
  ColorOptions, ColorSwatchAlert, ColorSwatchList, ColorSwatchListItem,
} from './components';

const App = () => {
  const trigger = createRef();

  const { changeBase, changeWeight, getSwatch } = services;

  const baseObservable = makeListener(useSelector((state) => state.swatch.base));
  const swatchObservable = makeListener(useSelector(
    (state) => getSwatch(state.swatch.base, state.weight),
    (swatch) => swatch.map((color) => html`${ColorSwatchListItem(color, trigger)}`),
  ));

  const actions = {
    changeBase,
    changeWeight,
  };

  const Header = html`${ColorOptions(baseObservable, actions)}`;
  const Content = html`${ColorSwatchList(swatchObservable)}
  ${ColorSwatchAlert('success', ref(trigger))}`;

  return html`${AppLayout({ Header, Content })}`;
};

export default App;
