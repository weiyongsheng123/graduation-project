import { fromJS } from 'immutable';
import { CHANGE_HEADER_PATTERN } from './actionTypes';

const defaultState = fromJS({
  logoUrl: "//img05.51jobcdn.com/im/2016/logo/logo_blue.png",
  pattern: '企业端'
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHANGE_HEADER_PATTERN:
      return state.set('pattern',action.pattern);
    default:
      return state;
  }
}