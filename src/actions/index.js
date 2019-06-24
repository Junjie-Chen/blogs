import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};

export const fetchUser = async id => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  return {
    type: 'FETCH_USER',
    payload: response.data
  };
};
