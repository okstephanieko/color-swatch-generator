import { BehaviorSubject, Subject } from 'rxjs';
import {
  distinctUntilChanged, filter, map, scan,
} from 'rxjs/operators';

import useSelector from './hooks/useSelector';

function createStore(modules = []) {
  const state$ = new BehaviorSubject(modules.reduce((state, module) => ({
    ...state,
    [module.name]: { ...module.initialState },
  }), {}));
  const actions$ = new Subject();

  const actionTargetModule = (actionType) => modules.find((module) => module.reducers[actionType]);
  const actionTargetReducer = (actionType) => actionTargetModule(actionType).reducers[actionType];

  function reduceReducer(action) {
    const reducer = actionTargetReducer(action.type);
    const moduleName = actionTargetModule(action.type).name;
    const prevModuleState = state$.getValue()[moduleName];

    switch (typeof reducer) {
      case 'function':
        return {
          [moduleName]: reducer(prevModuleState, action.payload),
        };
      case 'object':
        return {
          [moduleName]: { ...prevModuleState, ...reducer },
        };
      default:
        throw Error('Pass an object or a function for the state parameter when calling setState().');
    }
  }

  function dispatch(action) {
    actions$.next(action);
  }

  // subscribe reducers to actions stream
  actions$.pipe(
    filter((action) => !!actionTargetReducer(action.type)),
    map(reduceReducer),
    scan((prevState, newState) => ({ ...prevState, ...newState }), state$.getValue()),
  ).subscribe((state) => state$.next({
    ...state$.getValue(),
    ...state,
  }));

  return {
    getState() {
      return state$.asObservable().pipe(
        distinctUntilChanged(),
      );
    },
    getActions() {
      return actions$.asObservable();
    },
    dispatch,
  };
}

function bindActionCreators(actionCreators, dispatch) {
  return Object.keys(actionCreators).reduce((creators, key) => ({
    ...creators,
    [key]: (action) => dispatch(actionCreators[key](action)),
  }), {});
}

export { bindActionCreators, createStore, useSelector };
