import { map } from 'rxjs/operators';

import store from '../store';

const useSelector = (...operations) => {
  const rxOperations = operations.map((cb) => map((state) => cb(state)));
  return store.getState().pipe(...rxOperations);
};

export default useSelector;
