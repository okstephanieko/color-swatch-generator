import store, { events } from '../store';

function getBaseObservable() {
  return store.getObservable((state) => state.currentColor);
}

function setColor(color) {
  store.dispatch({ type: events.SET, payload: color });
}

export { getBaseObservable, setColor };
