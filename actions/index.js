import {
  TOGGLE_LOADING,
  SET_USERS,
  SET_USER,
  REMOVE_USER,
  REMOVE_USERS,
  SET_POSTS,
  SEARCH_POSTS,
  REMOVE_POSTS,
  SET_TODOS,
  FILTER_TODOS,
  SET_FILTER,
  REMOVE_TODOS,
  TOGGLE_MODAL_VISIBILITY,
  UPDATE_SEARCH,
  RESET_SEARCH,
  SET_TEMPORARY_FILTER,
  CANCEL_FILTER,
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

export const updateSearch = query => ({
  type: UPDATE_SEARCH,
  payload: query,
});

export const resetSearch = () => ({
  type: RESET_SEARCH,
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

export const setTemporaryFilter = temporaryFilter => ({
  type: SET_TEMPORARY_FILTER,
  payload: temporaryFilter,
});

export const cancelFilter = () => ({
  type: CANCEL_FILTER,
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
