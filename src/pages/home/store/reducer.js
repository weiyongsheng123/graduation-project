import { fromJS } from 'immutable';
import { ADD_POSITION_LIST, ADD_ARSAEX_LIST, ADD_ADVERTISEMENT_LIST, ADD_RECOMMENDWORK_LIST, ADD_RECOMMENDSKILL_LIST } from './actionTypes';

const defaultState = fromJS({
  positionList: [],
  areaList: [],
  salaryList: [],
  experienceList: [],
  advertisementList: [],
  recommendWorkList: [],
  recommendSkillList: []
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case ADD_POSITION_LIST:
      return state.set('positionList',action.array);
    case ADD_ARSAEX_LIST:
      return state.merge({
        areaList: action.area,
        salaryList: action.salary,
        experienceList: action.experience
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
