import { fromJS } from 'immutable';
import { CHANGE_CODE, CHANGE_REFRESH } from './actionTypes';

const defaultState = fromJS({
  data: [],
  rotate: [],
  fz: [],
  color: [],
  code: [],
  refresh: false
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHANGE_CODE:
      return state.merge({
        data: action.data.get('data'),
        rotate: action.data.get('rotate'),
        fz: action.data.get('fz'),
        color: action.data.get('color'),
        code: action.code,
        refresh: action.refresh
      });
    case CHANGE_REFRESH:
      return state.set('refresh',action.refresh);
    default:
      return state;
  }
}