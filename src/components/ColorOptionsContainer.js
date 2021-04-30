import { html } from 'lit-html';
import { distinctUntilChanged, map } from 'rxjs/operators';

import ColorOptionsForm from './ColorOptionsForm';
import ColorOptionsPicker from './ColorOptionsPicker';
import withState from './withState';

const ColorOptionsContainer = (observable, onColorChange) => {
  const colorObservable = withState(observable.pipe(
    map((state) => `${state.baseColor}`),
    distinctUntilChanged(),
  ));

  return html`${ColorOptionsPicker(colorObservable, onColorChange)}
  ${ColorOptionsForm(colorObservable, onColorChange)}`;
};

export default ColorOptionsContainer;
