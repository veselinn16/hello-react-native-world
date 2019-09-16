import baseUrl from './constants';
import {
  toggleLoading,
  setUsers,
  setPosts,
  setTodos,
  filterTodos,
} from '../actions';

// for alphabetical sorting of posts
export default function compare(a, b) {
  const firstTitle = a.title.toUpperCase();
  const secondTitle = b.title.toUpperCase();

  let comparison = 0;
  if (firstTitle > secondTitle) {
    comparison = 1;
  } else if (firstTitle < secondTitle) {
    comparison = -1;
  }
  return comparison;
}

// getting users off the API
export const getUsers = () => async dispatch => {
  dispatch(toggleLoading());

  try {
    const res = await fetch(`${baseUrl}/users`);

    const data = await res.json();

    dispatch(setUsers(data));

    // stop loading spinner
    dispatch(toggleLoading());
  } catch (err) {
    dispatch(toggleLoading());

    alert('Could not get users!');
  }
};

// filtering function for todos
const determineFilterFn = (filter, initialTodos) => {
  if (filter === 'Completed') {
    return filterByCompleted(initialTodos);
  } else if (filter === 'Name') {
    return filterByName(initialTodos);
  } else {
    return filterByDefault(initialTodos);
  }
};

const filterByDefault = initialTodos => {
  return initialTodos;
};

const filterByName = initialTodos => {
  return [...initialTodos].sort(compare);
};

const filterByCompleted = initialTodos => {
  let filteredTodos = [];
  let unfinishedTodos = [];
  initialTodos.forEach(todo => {
    // push completed todos in the filtered array
    todo.completed ? filteredTodos.push(todo) : unfinishedTodos.push(todo);
  });

  // push unfinished todos in the array of filtered todos at the end, so they can render lastly in UI
  unfinishedTodos.forEach(todo => filteredTodos.push(todo));

  // update todos with the filtered todos array
  return filteredTodos;
};

export const applyTodosFilter = () => {
  return (dispatch, getState) => {
    // array of initial toods
    let todosObj = getState().todos;
    const {initialTodos} = todosObj;

    // filter for todos
    let filter = getState().todosFilter;

    // filter todos and return the new todos
    dispatch(filterTodos(determineFilterFn(filter, initialTodos)));
  };
};

// for getting posts and todos off the API
export const getResource = resource => {
  return async (dispatch, getState) => {
    // start loading spinner
    dispatch(toggleLoading());

    const userId = getState().user.id;

    try {
      const res = await fetch(`${baseUrl}/${resource}?userId=${userId}`);

      const data = await res.json();

      switch (resource) {
        case 'posts':
          dispatch(setPosts(data));
          break;
        case 'todos':
          dispatch(setTodos(data));
          break;
      }

      // stop loading spinner
      dispatch(toggleLoading());
    } catch (err) {
      dispatch(toggleLoading());

      alert(err);
    }
  };
};

// searching through the posts
export const searchPosts = (search, initialPosts) => {
  return initialPosts.filter(
    // return only posts that contain the search query in the title as well as the body
    post => post.title.includes(search) && post.body.includes(search),
  );
};

//
// export const updateTodos = filteredTodos => {
//   setUserTodos({
//     initialTodos,
//     todos: filteredTodos,
//   });
// };
