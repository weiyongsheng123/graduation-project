import { fromJS } from 'immutable';
import { GET_YOUR_PASSWORD } from './actionTypes';

const defaultState = fromJS({
  password: '',
  getError: false
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case GET_YOUR_PASSWORD:
      return state.merge({
        password: action.value,
        getError: action.getError
      });
    default:
      return state;
  }
};
