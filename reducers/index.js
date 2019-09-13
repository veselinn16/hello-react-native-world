import {combineReducers} from 'redux';

import isLoadingReducer from './isLoadingReducer';
import postsReducer from './postsReducer';
import todosReducer from './todosReducer';
import userReducer from './userReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  isLoading: isLoadingReducer,
  posts: postsReducer,
  todos: todosReducer,
  user: userReducer,
  users: usersReducer,
});
