import * as types from '../actionTypes.js';

export function find(token) {
  return { type: types.FIND, token };
}
