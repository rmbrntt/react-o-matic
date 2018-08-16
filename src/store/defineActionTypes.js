import keyMirror from '../utils/keyMirror';

/**
 * Provides a scheme to namespace action types consistently.
 * @param {string} namespace - Represents scope of the feature or container
 */
const defaultNamespaceScheme = namespace => `${namespace}/`;
/**
 * Creates an object with namespaced action types as mirrored key/value pairs.
 * @param {Object.<string, undefined>} actionTypes  {key1: val1, key2: val2}
 * @param {string} namespace Represents scope of the feature or container
 * @returns {Object.<string, string>} {key1: namespace/key1, key2: namespace/key2}
 */
const defineActionTypes = (actionTypes, namespace = 'app') =>
  keyMirror(actionTypes, defaultNamespaceScheme(namespace));
export {defaultNamespaceScheme};
export default defineActionTypes;
