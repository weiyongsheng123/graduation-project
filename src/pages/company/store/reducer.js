import { fromJS } from 'immutable';
import { SHOW_OR_HIDE, CHANGE_MODIFY_COMPANY } from './actionTypes';

const defaultState = fromJS({
  newResumeShow: false,
  modifyCompany: false
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case SHOW_OR_HIDE:
      return state.set('newResumeShow',action.show);
    case CHANGE_MODIFY_COMPANY:
      return state.set('modifyCompany',action.value);
    default:
      return state;
  }
};
