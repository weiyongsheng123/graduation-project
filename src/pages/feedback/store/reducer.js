import { fromJS } from 'immutable';
import { SUBMIT_SUGGEST_INFO } from './actionTypes';

const defaultState = fromJS({
  suggest: false,
  feedbackSuccess: false
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case SUBMIT_SUGGEST_INFO:
      return state.set('feedbackSuccess',action.value);
    default:
      return state;
  }
}