import { fromJS } from 'immutable';
import { SHOW_OR_HIDE } from './actionTypes';

const defaultState = fromJS({
  newResumeShow: false
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case SHOW_OR_HIDE:
      return state.set('newResumeShow',action.show);
    default:
      return state;
  }
};
