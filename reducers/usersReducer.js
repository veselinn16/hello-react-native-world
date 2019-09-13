import {SET_USERS, REMOVE_USERS} from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.payload;
    case REMOVE_USERS:
      return [];
    default:
      return state;
  }
};
