import { html } from 'lit-html';

import observe from '../directives/observe';

const withState = (observable, Component) => (
  (Component) ? html`${Component(observe(observable))}` : observe(observable)
);

export default withState;
