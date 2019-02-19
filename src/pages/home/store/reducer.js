import { fromJS } from 'immutable';
import { ADD_POSITION_LIST, ADD_ARSAEX_LIST } from './actionTypes';

const defaultState = fromJS({
  positionList: [],
  areaList: [],
  salaryList: [],
  experienceList: []
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
    default:
      return state;
  }
};
