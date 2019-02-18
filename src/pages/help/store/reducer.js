import { fromJS } from 'immutable';
import { GET_YOUR_PASSWORD, MODIFY_DATA_SUCCESS } from './actionTypes';

const defaultState = fromJS({
  password: '',
  getError: false,
  modifySuccess: 0
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case GET_YOUR_PASSWORD:
      return state.merge({
        password: action.value,
        getError: action.getError
      });
    case MODIFY_DATA_SUCCESS:
      return state.set('modifySuccess',action.value);
    default:
      return state;
  }
};
