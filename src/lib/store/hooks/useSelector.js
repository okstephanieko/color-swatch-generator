import { map } from 'rxjs/operators';

const useSelector = (store) => (...operations) => {
  const rxOperations = operations.map((cb) => map((state) => cb(state)));
  return store.getState().pipe(...rxOperations);
};

export default useSelector;
