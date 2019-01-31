import { fromJS } from 'immutable';

const defaultState = fromJS({
  telephonenumber: '0554-231-667'
});

export default (state = defaultState,action) => {
  switch (action.type) {
    default:
      return state;
  }
}