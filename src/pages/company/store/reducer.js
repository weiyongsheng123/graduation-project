import { fromJS } from 'immutable';
import { CLEAR_AND_QUIT_COMPANY, SHOW_OR_HIDE, CHANGE_MODIFY_COMPANY, CHANGE_RELEASE_RESUME, CHANGE_RESERIVE_RESUME, CHANGE_ROUTER_COMPANY_ID } from './actionTypes';

const defaultState = fromJS({
  newResumeShow: false,
  modifyCompany: false,
  releaseResume: [ ],
  reseriveList: [ ],
  routerId: '0'
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CLEAR_AND_QUIT_COMPANY:
      return state.merge({
        releaseResume: fromJS([]),
        reseriveList: fromJS([])
      });
    case SHOW_OR_HIDE:
      return state.set('newResumeShow',action.show);
    case CHANGE_MODIFY_COMPANY:
      return state.set('modifyCompany',action.value);
    case CHANGE_RELEASE_RESUME:
      return state.set('releaseResume',action.values);
    case CHANGE_RESERIVE_RESUME:
      return state.set('reseriveList',action.values);
    case CHANGE_ROUTER_COMPANY_ID:
      return state.set('routerId',action.value);
    default:
      return state;
  }
};
