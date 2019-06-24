import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};

export const fetchUser = id => {
  jsonPlaceholder.get(`/users/${id}`);

  return {
    type: 'FETCH_USER'
  };
};
