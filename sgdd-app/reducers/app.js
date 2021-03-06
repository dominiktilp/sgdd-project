import Immutable from "immutable";

import * as types from "../actionTypes.js";

const initialState = Immutable.fromJS({
  actualCoparty: null,
  showForm: false,
  coparties: [],
  isSyncing: false
});

export default (state = initialState, action) => {
  switch (action.type) {

    case types.FIND:
      return state.merge({
        showResult: true
      });
   
    default:
      return state;
  }
};