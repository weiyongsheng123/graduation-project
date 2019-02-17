import { fromJS } from 'immutable';
import { CHANGE_HEADER_PATTERN } from './actionTypes';

const defaultState = fromJS({
  pattern: '求职者端'
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHANGE_HEADER_PATTERN:
      return state.set('pattern',action.pattern);
    default:
      return state;
  }
}