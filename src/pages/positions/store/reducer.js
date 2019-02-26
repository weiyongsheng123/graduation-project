import { fromJS } from 'immutable';
import { SHOW_POSITION_ID, CHANGE_POSITION_COMPANY } from './actionTypes';

const defaultState = fromJS({
  nowPositionId: '0',
  companyData: { }
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case SHOW_POSITION_ID:
      return state.set('nowPositionId',action.Id);
    case CHANGE_POSITION_COMPANY:
      return state.set('companyData',action.values);
    default:
      return state;
  }
};