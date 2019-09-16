import {combineReducers} from 'redux';

import isLoadingReducer from './isLoadingReducer';
import postsReducer from './postsReducer';
import searchReducer from './searchReducer';
import todosReducer from './todosReducer';
import filteredTodosReducer from './filterTodosReducer';
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  isLoading: isLoadingReducer,
  posts: postsReducer,
  search: searchReducer,
  todos: todosReducer,
  todosFilter: filteredTodosReducer,
  user: userReducer,
  users: usersReducer,
  modalVisibility: modalReducer,
});
