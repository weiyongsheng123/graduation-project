import { fromJS } from 'immutable';
import { CHANGE_APPLICANT_REGISTE, CHANGE_COMPANY_REGISTE, CHANGE_APPLICE_ERROR_INFO, CHANGE_COMPANY_ERROR_INFO } from './actionTypes';

const defaultState = fromJS({
  applicantRegiste: false,
  companyRegiste: false,
  appliceErrorInfo: '',
  companyErrorInfo: ''
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHANGE_APPLICANT_REGISTE:
      return state.set('applicantRegiste',action.res);
    case CHANGE_COMPANY_REGISTE:
      return state.set('companyRegiste',action.res);
    case CHANGE_APPLICE_ERROR_INFO:
      return state.set('appliceErrorInfo',action.value);
    case CHANGE_COMPANY_ERROR_INFO:
      return state.set('companyErrorInfo',action.value);
    default:
      return state;
  }
};
