import { fromJS } from 'immutable';
import { ADD_POSITION_LIST, ADD_AREA_LIST, ADD_SALARY_LIST } from './actionTypes';

const defaultState = fromJS({
  positionList: [],
  areaList: [],
  salaryList: []
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case ADD_POSITION_LIST:
      return state.set('positionList',action.array);
    case ADD_AREA_LIST:
      return state.set('areaList',action.array);
    case ADD_SALARY_LIST:
      return state.set('salaryList',action.array);
    default:
      return state;
  }
};
