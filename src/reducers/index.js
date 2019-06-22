import { combineReducers } from 'redux';

const placeholderReducer = () => {
  return [];
};

export default combineReducers({
  placeholder: placeholderReducer
});
