import { fromJS } from 'immutable';
import { IMPORT_DATA, IMPORT_DATA1, CHANGE_WARN_INFO } from './actionTypes';

const defaultState = fromJS({
  telephonenumber: '0554-231-667',
  warn: '',
  jobSeek: {
    
  },
  company: {
    
  },
  loginOrNot: false
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
    default:
      return state;
  }
}