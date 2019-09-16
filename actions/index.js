import {
  TOGGLE_LOADING,
  REMOVE_USERS,
  SET_USERS,
  SET_USER,
  REMOVE_USER,
  SET_POSTS,
  SEARCH_POSTS,
  REMOVE_POSTS,
  SET_TODOS,
  FILTER_TODOS,
  SET_FILTER,
  TOGGLE_MODAL_VISIBILITY,
} from './actionTypes';

// Loading
export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

// Users
export const setUsers = users => ({
  type: SET_USERS,
  payload: users,
});

export const removeUsers = () => ({
  type: REMOVE_USERS,
});

// User
export const setUser = user => ({
  type: SET_USER,
  payload: user,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});

// Posts
export const setPosts = posts => ({
  type: SET_POSTS,
  payload: posts,
});

export const searchPosts = query => ({
  type: SEARCH_POSTS,
  payload: query,
});

export const removePosts = () => ({
  type: REMOVE_POSTS,
});

// Todos
export const setTodos = todos => ({
  type: SET_TODOS,
  payload: todos,
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter,
});

export const filterTodos = filteredTodos => ({
  type: FILTER_TODOS,
  payload: filteredTodos,
});

export const removeTodos = () => ({
  type: REMOVE_TODOS,
});

// Modal
export const toggleModalVisibility = () => ({
  type: TOGGLE_MODAL_VISIBILITY,
});
