import { fromJS } from 'immutable';
import { CHANGE_SHOW } from './actionTypes';

const defaultState = fromJS({
  isShow: false
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHANGE_SHOW:
      return state.set('isShow',action.isshow);
    default:
      return state;
  }
};
