import baseUrl from './constants';
import {toggleLoading, setUsers, setPosts, setTodos} from '../actions';

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

export const getResource = resource => {
  // resource = resource.toLowerCase();
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

export const searchPosts = (search, initialPosts) => {
  return initialPosts.filter(
    // return only posts that contain the search query in the title as well as the body
    post => post.title.includes(search) && post.body.includes(search),
  );
};
