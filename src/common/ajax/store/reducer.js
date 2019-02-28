import { fromJS } from 'immutable';
import { AJAX_HAPPENING } from './actionTypes';

const defaultState = fromJS({
  ajax: true
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case AJAX_HAPPENING:
      return state.set('ajax',action.value);
    default:
      return state;
  }
}
