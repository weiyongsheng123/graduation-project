import { fromJS } from 'immutable';
import { CHANGE_APPLICANT_REGISTE, CHANGE_COMPANY_REGISTE, CHANGE_ERROR_INFO } from './actionTypes';

const defaultState = fromJS({
  applicantRegiste: false,
  companyRegiste: false,
  errorInfo: ''
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHANGE_APPLICANT_REGISTE:
      return state.set('applicantRegiste',action.res);
    case CHANGE_COMPANY_REGISTE:
      return state.set('companyRegiste',action.res);
    case CHANGE_ERROR_INFO:
      return state.set('errorInfo',action.value);
    default:
      return state;
  }
};
