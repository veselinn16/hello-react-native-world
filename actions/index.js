import {
  TOGGLE_LOADING,
  REMOVE_USERS,
  SET_USERS,
  SET_USER,
  REMOVE_USER,
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
