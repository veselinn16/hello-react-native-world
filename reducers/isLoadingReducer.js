import {TOGGLE_LOADING} from '../actions/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return !state;
    default:
      return state;
  }
};
