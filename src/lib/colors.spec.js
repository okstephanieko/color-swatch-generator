import { assert } from 'chai';

import colors from './colors';

describe('Color swatch helper', () => {
  const helper = colors('red');
  const swatch = helper.getColorSwatch();
  it('returned color swatch is array', () => {
    assert.typeOf(swatch, 'array');
  });
  it('returned color swatch item has type', () => {
    assert(['base', 'tint', 'shade'].includes(swatch[0].type), 'swatch color type does not have correct value');
  });
  it('returned color swatch item has weight', () => {
    assert.equal(swatch[0].weight, 10);
  });
  it('returned color swatch item is hex value', () => {
    assert(!Number.isNaN(swatch[0].hex), 'returned value is not hex');
    assert.strictEqual(swatch[0].hex.length, 6);
  });
});
