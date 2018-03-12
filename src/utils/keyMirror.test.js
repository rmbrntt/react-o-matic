/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */
import keyMirror from './keyMirror';

describe('keyMirror', () => {
  it('should create an object with values matching keys provided', () => {
    const mirror = keyMirror({
      foo: null,
      bar: true,
      baz: {some: 'object'},
      qux: undefined,
    });
    expect('foo' in mirror).toBe(true);
    expect(mirror.foo).toBe('foo');
    expect('bar' in mirror).toBe(true);
    expect(mirror.bar).toBe('bar');
    expect('baz' in mirror).toBe(true);
    expect(mirror.baz).toBe('baz');
    expect('qux' in mirror).toBe(true);
    expect(mirror.qux).toBe('qux');
  });

  it('should not use properties from prototypes', () => {
    function Klass() {
      this.useMeToo = true;
    }
    Klass.prototype.doNotUse = true;
    const instance = new Klass();
    instance.useMe = true;

    const mirror = keyMirror(instance);

    expect('doNotUse' in mirror).toBe(false);
    expect('useMe' in mirror).toBe(true);
    expect('useMeToo' in mirror).toBe(true);
  });

  it('should throw when a non-object argument is used', () => {
    [null, undefined, 0, 7, ['uno'], true, 'string'].forEach(testVal => {
      expect(keyMirror.bind(null, testVal)).toThrow();
    });
  });

  it('should work when "constructor" is a key', () => {
    const obj = {constructor: true};
    expect(keyMirror.bind(null, obj)).not.toThrow();
    const mirror = keyMirror(obj);
    expect('constructor' in mirror).toBe(true);
  });
});
