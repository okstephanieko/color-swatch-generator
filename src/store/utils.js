import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

function createStore(reducer, defaultState) {
  const state = new BehaviorSubject({ ...defaultState });

  function dispatch(event) {
    const newStateValues = reducer(state.getValue(), event);
    state.next({ ...newStateValues });
  }

  return {
    get state() {
      return state.getValue();
    },
    getObservable(getter) {
      return state.asObservable().pipe(
        map((stateObj) => getter(stateObj)),
        distinctUntilChanged(),
      );
    },
    dispatch,
  };
}

export default createStore;
export { createStore };
