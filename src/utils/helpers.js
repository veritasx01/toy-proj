import { act } from 'react';

/**
 *
 * @param {number} start
 * @param {number} end
 * @returns {number} in the inclusive range [start,end]
 */
export function randomIntRange(start, end) {
  return Math.floor(start + Math.random() * (end - start));
}

/**
 *
 * @param {number} length
 * @returns {string} a url safe base64 random string
 */
export function base64Id(length = 8) {
  let id = '';
  const base64Alphabet =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';
  const alphaLength = base64Alphabet.length;
  for (let i = 0; i < length; i++) {
    id += base64Alphabet.charAt(randomIntRange(0, alphaLength));
  }
  return id;
}

/**
 *
 * @param {Array} array
 * @returns a random element from an array, if the array is empty returns null
 */
export function randomSelect(array) {
  if (array.length === 0) return null;
  const randomIndex = randomIntRange(0, array.length - 1);
  return array[randomIndex];
}

export function getRandomSubset(arr, k) {
  if (k > arr.length) throw new Error('Subset size exceeds array length');

  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy.slice(0, k);
}

export function counterReducer(state, action) {
  switch (action.type) {
    case 'incrementModulo':
      return { ...state, count: (state.count + 1) % state.modulo };
    case 'decrementModulo':
      return {
        ...state,
        count: (state.count - 1 + state.modulo) % state.modulo,
      };
    case 'setModulo': {
      const newCount = state.count % action.payload.modulo;
      return { ...state, count: newCount, modulo: action.payload.modulo };
    }
    default:
      return state;
  }
}
