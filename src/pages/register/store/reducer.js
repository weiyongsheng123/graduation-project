import { fromJS } from 'immutable';
import {  } from './actionTypes';

const defaultState = fromJS({
  applicantRegiste: false,
  companyRegiste: false
});

export default (state = defaultState,action) => {
  switch (action.type) {
    default:
      return state;
  }
};
