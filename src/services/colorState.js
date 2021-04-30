import { BehaviorSubject } from 'rxjs';

const colorState = (defaultValue = '#4a90e2', defaultWeight = 15) => {
  const state = new BehaviorSubject({
    baseColor: defaultValue,
    weight: defaultWeight,
  });

  function changeBaseColor(value) {
    state.next({ ...state.getValue(), baseColor: value });
  }

  function changeWeight(value) {
    state.next({ ...state.getValue(), weight: value });
  }

  return {
    getState() {
      return state.getValue();
    },
    getObservable() {
      return state.asObservable();
    },
    changeBaseColor,
    changeWeight,
  };
};

export default colorState;
