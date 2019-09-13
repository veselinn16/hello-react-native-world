import {TOGGLE_LOADING, REMOVE_USERS, SET_USERS} from './actionTypes';

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

export const setUsers = users => ({
  type: SET_USERS,
  payload: users,
});

export const removeUsers = () => ({
  type: REMOVE_USERS,
});
