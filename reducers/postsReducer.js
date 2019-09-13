import {SET_POSTS, REMOVE_POSTS, SEARCH_POSTS} from '../actions/actionTypes';
import {searchPosts} from '../utils/helpers';

const initialState = {
  initialPosts: [],
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        initialPosts: action.payload,
        posts: action.payload,
      };
    case REMOVE_POSTS:
      return initialState;
    case SEARCH_POSTS:
      return {
        initialPosts: state.initialPosts,
        posts: searchPosts(action.payload, state.initialPosts),
      };
    default:
      return state;
  }
};
