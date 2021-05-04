import { assert } from 'chai';
import { distinctUntilChanged } from 'rxjs/operators';

import store from '.';
import swatch, { actions } from './swatch';

describe('returns default state', () => {
  let base, weight;

  const observable = store.getState().pipe(
    distinctUntilChanged(),
  );

  observable.subscribe({
    next: (newState) => {
      base = newState.swatch.base;
      weight = newState.swatch.weight;
    },
  });

  it('returns default base value', () => {
    assert.equal(base, swatch.initialState.base);
  });

  it('returns default weight value', () => {
    assert.equal(weight, swatch.initialState.weight);
  });

  it('set value and returns new value', () => {
    const newValue = '#DDDDDD';
    store.dispatch({ type: actions.CHANGE_BASE, payload: newValue });
    assert.equal(base, newValue);
  });

  it('set weight and returns new value', () => {
    const newWeight = 20;
    store.dispatch({ type: actions.CHANGE_WEIGHT, payload: newWeight });
    assert.equal(weight, newWeight);
  });
});
