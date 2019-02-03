import { fromJS } from 'immutable';
import { CHANGE_CITY, CHANGE_SHOW } from './actionTypes';

const defaultState = fromJS({
  cityListShow: false,
  nowCity: '城市求职'
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHANGE_SHOW:
      return state.set('cityListShow',action.show);
    case CHANGE_CITY:
      return state.set('nowCity',action.city);
    default:
      return state;
  }
};
