import {SET_TODOS, REMOVE_TODOS, FILTER_TODOS} from '../actions/actionTypes';

const intiialState = {
  initialTodos: [],
  todos: [],
};

export default (state = intiialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        initialTodos: action.payload,
        todos: action.payload,
      };
    case REMOVE_TODOS:
      return intiialState;
    case FILTER_TODOS:
      return [];
    default:
      return state;
  }
};
