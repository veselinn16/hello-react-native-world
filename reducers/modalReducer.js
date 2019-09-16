import {TOGGLE_MODAL_VISIBILITY} from '../actions/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_VISIBILITY:
      return !state;
    default:
      return state;
  }
};
