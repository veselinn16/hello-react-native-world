import {SET_FILTER} from '../actions/actionTypes';

export default (state = 'Default', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};
