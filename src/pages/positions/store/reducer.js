import { fromJS } from 'immutable';
import { CHANGE_POSITION_FIRST_TIP, SHOW_POSITION_ID, CHANGE_POSITION_COMPANY } from './actionTypes';

const defaultState = fromJS({
  nowPositionId: '0',
  companyData: { },
  firstTip: true
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHANGE_POSITION_FIRST_TIP:
      return state.set('firstTip',action.value);
    case SHOW_POSITION_ID:
      return state.set('nowPositionId',action.Id);
    case CHANGE_POSITION_COMPANY:
      return state.set('companyData',action.values);
    default:
      return state;
  }
};