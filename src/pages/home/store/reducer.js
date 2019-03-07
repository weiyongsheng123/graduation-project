import { fromJS } from 'immutable';
import { CHANGE_HOME_FIRST_TIP, ADD_POSITION_LIST, ADD_ARSAEX_LIST, ADD_ADVERTISEMENT_LIST, ADD_RECOMMENDWORK_LIST, ADD_RECOMMENDSKILL_LIST } from './actionTypes';

const defaultState = fromJS({
  positionList: [],
  areaList: [],
  salaryList: [],
  experienceList: [],
  guessSearch: [],
  advertisementList: [],
  recommendWorkList: [],
  recommendSkillList: [],
  firstTip: true
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHANGE_HOME_FIRST_TIP:
      return state.set('firstTip',action.value);
    case ADD_POSITION_LIST:
      return state.set('positionList',action.array);
    case ADD_ARSAEX_LIST:
      return state.merge({
        areaList: action.area,
        salaryList: action.salary,
        experienceList: action.experience,
        guessSearch: action.guessSearch
      });
    case ADD_ADVERTISEMENT_LIST:
      return state.set('advertisementList',action.value);
    case ADD_RECOMMENDWORK_LIST:
      return state.set('recommendWorkList',action.value);
    case ADD_RECOMMENDSKILL_LIST:
      return state.set('recommendSkillList',action.value);
    default:
      return state;
  }
};
