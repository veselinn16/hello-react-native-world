import {GET_TODOS, REMOVE_TODOS, FILTER_TODOS} from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return [];
    case REMOVE_TODOS:
      return [];
    case FILTER_TODOS:
      return [];
    default:
      return state;
  }
};
