import { fromJS } from 'immutable';
import { ADD_POSITION_LIST } from './actionTypes';

const defaultState = fromJS({
  positionList: []
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case ADD_POSITION_LIST:
      return state.set('positionList',action.array);
    default:
      return state;
  }
};
