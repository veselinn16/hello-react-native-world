import {SET_FILTER, REMOVE_TODOS} from '../actions/actionTypes';

export default (state = 'Default', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    case REMOVE_TODOS:
      return 'Default';
    default:
      return state;
  }
};
