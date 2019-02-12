import { CHANGE_CODE, CHANGE_REFRESH } from './actionTypes';
import { fromJS } from 'immutable';

export const getCode = (data,code,refresh) => ({
  type: CHANGE_CODE,
  data: fromJS(data),
  code: fromJS(code),
  refresh
});

export const getFresh = (refresh) => ({
  type: CHANGE_REFRESH,
  refresh
});
