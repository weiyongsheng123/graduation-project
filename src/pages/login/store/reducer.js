import { fromJS } from 'immutable';
import { IMPORT_DATA, IMPORT_DATA1, CHANGE_WARN_INFO, CLEAR_AND_QUIT, OPEN_AUTO_REMEBER, RECODE_COMPANY_ID, RECODE_JOBSEEK_ID } from './actionTypes';

const defaultState = fromJS({
  telephonenumber: '0554-231-667',
  warn: '',
  jobSeek: {
    
  },
  company: {
    
  },
  loginOrNot: false,
  openAuto: true,
  companyId: '',
  jobseekId: ''
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHANGE_WARN_INFO:
      return state.set('warn',action.warn);
    case IMPORT_DATA:
      return state.merge({
        company: action.array,
        loginOrNot: true
      });
    case IMPORT_DATA1:
      return state.merge({
        jobSeek: action.array,
        loginOrNot: true
      });
    case CLEAR_AND_QUIT:
      return state.merge({
        jobSeek: fromJS({ }),
        company: fromJS({ }),
        loginOrNot: false
      });
    case OPEN_AUTO_REMEBER:
      return state.set('openAuto',action.auto);
    case RECODE_COMPANY_ID:
      return state.set('companyId',action.value);
    case RECODE_JOBSEEK_ID:
      return state.set('jobseekId',action.value);
    default:
      return state;
  }
}