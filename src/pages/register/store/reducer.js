import { fromJS } from 'immutable';
import { CHANGE_APPLICANT_REGISTE, CHANGE_COMPANY_REGISTE } from './actionTypes';

const defaultState = fromJS({
  applicantRegiste: false,
  companyRegiste: false
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHANGE_APPLICANT_REGISTE:
      return state.set('applicantRegiste',action.res);
    case CHANGE_COMPANY_REGISTE:
      return state.set('companyRegiste',action.res);
    default:
      return state;
  }
};
