import {
  SET_FILTER,
  SET_TEMPORARY_FILTER,
  REMOVE_TODOS,
  CANCEL_FILTER,
} from '../actions/actionTypes';

const initialState = {
  activeFilter: 'Default',
  temporaryFilter: 'Default',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        activeFilter: action.payload,
        temporaryFilter: action.payload,
      };
    case SET_TEMPORARY_FILTER:
      return {
        activeFilter: state.activeFilter,
        temporaryFilter: action.payload,
      };
    case CANCEL_FILTER:
      return {
        activeFilter: state.activeFilter,
        temporaryFilter: state.activeFilter,
      };
    case REMOVE_TODOS:
      return initialState;
    default:
      return state;
  }
};
