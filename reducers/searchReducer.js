import {UPDATE_SEARCH, RESET_SEARCH} from '../actions/actionTypes';

export default (state = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.payload;
    case RESET_SEARCH:
      return '';
    default:
      return state;
  }
};
