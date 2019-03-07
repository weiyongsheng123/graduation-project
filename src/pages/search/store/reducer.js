import { fromJS } from 'immutable';
import { CHANGE_SEARCH_FIRST_TIP, CHANGE_PAGE, CHANGE_NEEDS, CHANGE_TOTAL_PAGE, GET_NEW_POSITION_ARRAY, GET_RESUME_POSITION_ARRAY } from './actionTypes';

const defaultState = fromJS({
  positionResumeList: [ ],
  showPositionList: [ ],
  totalPages: 1,
  page: 1,
  areaNeed: '',
  salaryNeed: '',
  experienceNeed: '',
  firstTip: true
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIRST_TIP:
      return state.set('firstTip',action.value);
    case CHANGE_PAGE:
      return state.set('page',action.page);
    case CHANGE_NEEDS:
      return state.merge({
        areaNeed: action.values.areaNeed,
        salaryNeed: action.values.salaryNeed,
        experienceNeed: action.values.experienceNeed
      });
    case CHANGE_TOTAL_PAGE:
      return state.set('totalPages',action.totalPages);
    case GET_NEW_POSITION_ARRAY:
      return state.set('showPositionList',action.values);
    case GET_RESUME_POSITION_ARRAY:
      return state.set('positionResumeList',action.values);
    default:
      return state;
  }
};
