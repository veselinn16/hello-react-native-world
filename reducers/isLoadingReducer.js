import {TOGGLE_LOADING} from '../actions/actionTypes';

export default (state = false, action) => {
  // console.log(action.type);
  switch (action.type) {
    case TOGGLE_LOADING:
      return !state;
    default:
      return state;
  }
};
