import {combineReducers} from 'redux';

import isLoadingReducer from './isLoadingReducer';
import postsReducer from './postsReducer';
import todosReducer from './todosReducer';
import userReducer from './userReducer';

export default combineReducers({
  isLoading: isLoadingReducer,
  posts: postsReducer,
  todos: todosReducer,
  user: userReducer,
});
