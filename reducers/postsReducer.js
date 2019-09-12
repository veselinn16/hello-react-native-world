import {GET_POSTS, REMOVE_POSTS, SEARCH_POSTS} from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return [];
    case REMOVE_POSTS:
      return [];
    case SEARCH_POSTS:
      return [];
    default:
      return state;
  }
};
