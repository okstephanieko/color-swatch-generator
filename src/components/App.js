import { html } from 'lit-html';
import { createRef, ref } from 'lit-html/directives/ref';

import swatchServices from '../services/swatch';
import useSelector from '../lib/hooks/useSelector';
import makeListener from '../lib/makeListener';
import swatchModel from '../models/swatch';

import AppLayout from './AppLayout';
import ColorOptionsForm from './ColorOptionsForm';
import ColorOptionsPicker from './ColorOptionsPicker';
import ColorSwatch from './ColorSwatch';
import ColorSwatchAlert from './ColorSwatchAlert';
import ColorSwatchItem from './ColorSwatchItem';

const App = () => {
  const trigger = createRef();

  const { changeBase, changeWeight } = swatchServices;

  const baseObservable = makeListener(useSelector((state) => state.swatch.base));
  const swatchObservable = makeListener(useSelector(
    (state) => swatchModel(state.swatch.base).all(state.weight),
    (swatch) => swatch.map((color) => html`${ColorSwatchItem(color, trigger)}`),
  ));

  const Header = html`${ColorOptionsPicker(baseObservable, changeBase)}
  ${ColorOptionsForm(baseObservable, changeBase, changeWeight)}`;
  const Content = html`${ColorSwatch(swatchObservable)}
  <div>${ColorSwatchAlert('success', ref(trigger))}</div>`;

  return html`${AppLayout({ Header, Content })}`;
};

export default App;
