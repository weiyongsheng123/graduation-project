import { CHANGE_CODE, CHANGE_REFRESH } from './actionTypes';
import { fromJS } from 'immutable';

export const getCode = (data,refresh) => ({
  type: CHANGE_CODE,
  data: fromJS(data),
  refresh
});

export const getFresh = (refresh) => ({
  type: CHANGE_REFRESH,
  refresh
});
