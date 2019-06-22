import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPosts = () => {
  jsonPlaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS'
  };
};
