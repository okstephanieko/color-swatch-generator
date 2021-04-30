import { assert } from 'chai';
import { distinctUntilChanged, map } from 'rxjs/operators';

import colorState from './colorState';

describe('color state', () => {
  const state = colorState();
  let value;

  const observable = state.getObservable().pipe(
    map((state) => state.baseColor),
    distinctUntilChanged(),
  );
  observable.subscribe({
    next: (newValue) => {
      value = newValue;
    },
  });

  it('returns default value', () => {
    assert.equal(value, state.getState().baseColor);
  });

  it('set value and returns new value', () => {
    const newValue = '#DDDDDD';
    state.changeBaseColor(newValue);
    assert.equal(value, newValue);
  });
});
