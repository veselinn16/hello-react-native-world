import baseUrl from './constants';
import {toggleLoading, setUsers} from '../actions';

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

export const getResource = resource => {
  return async dispatch => {
    // start loading spinner
    dispatch(toggleLoading());

    try {
      const res = await fetch(`${baseUrl}/${resource}`);

      const data = await res.json();

      switch (resource) {
        case 'users':
          dispatch(setUsers(data));
          break;
        case 'posts':
          console.log('Posty');
          break;
        // dispatch(setUsers(data));
        case 'todos':
          console.log('Todo');
          break;
        // dispatch(setUsers(data));
      }

      // stop loading spinner
      dispatch(toggleLoading());
    } catch (err) {
      dispatch(toggleLoading());

      alert('Could not get users!');
    }
  };
};
