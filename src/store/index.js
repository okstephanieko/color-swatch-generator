import swatch from './swatch';
import { createStore, useSelector as baseUseSelector } from '../lib/store';

const store = createStore([swatch]);

const useSelector = baseUseSelector(store);

export default store;
export { useSelector };
