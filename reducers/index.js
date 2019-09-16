import {combineReducers} from 'redux';

import isLoadingReducer from './isLoadingReducer';
import postsReducer from './postsReducer';
import todosReducer from './todosReducer';
import filteredTodosReducer from './filterTodosReducer';
import userReducer from './userReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  isLoading: isLoadingReducer,
  posts: postsReducer,
  todos: todosReducer,
  todosFilter: filteredTodosReducer,
  user: userReducer,
  users: usersReducer,
});
