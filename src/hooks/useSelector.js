import { map } from 'rxjs/operators';

import store from '../store';

const useSelector = (cb) => store.getState().pipe(
  map((state) => cb(state)),
);

const useTransformer = (operation) => (cb) => useSelector(cb).pipe(
  map((value) => operation(value)),
);

export default useSelector;
export { useTransformer };
