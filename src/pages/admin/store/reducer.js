import { fromJS } from 'immutable';
import { CHANGE_LOGIN, CHANGE_SWITCH_VALUE, CHANGE_JOBSEEKER_VALUE, CHANGE_COMPANY_VALUE, CHANGE_RESUMEITEM_VALUE, CHANGE_APPLY_VALUE, CHANGE_SUGGEST_VALUE } from './actionTypes';

const defaultState = fromJS({
  loginState: false,
  option: '求职者',
  jobseeker: [],
  company: [],
  resumeitem: [],
  apply: [],
  suggest: []
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return state.set('loginState',action.value);
    case CHANGE_SWITCH_VALUE:
      return state.set('option',action.value);
    case CHANGE_JOBSEEKER_VALUE:
      return state.set('jobseeker',action.value);
    case CHANGE_COMPANY_VALUE:
      return state.set('company',action.value);
    case CHANGE_RESUMEITEM_VALUE:
      return state.set('resumeitem',action.value);
    case CHANGE_APPLY_VALUE:
      return state.set('apply',action.value);
    case CHANGE_SUGGEST_VALUE:
      return state.set('suggest',action.value);
    default:
      return state;
  }
}