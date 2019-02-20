import { fromJS } from 'immutable';
import { CHNAGE_MODIFY_NAME, CHNAGE_NAME_PHOTO, CHNAGE_MODIFY_INTENT, GET_INTENT_DATA } from './actionTypes';

const defaultState = fromJS({
  modifyName: 0,
  namePhoto: 0,
  modifyIntent: 0,
  intentData: { }
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHNAGE_MODIFY_INTENT:
      return state.set('modifyIntent',action.value);
    case CHNAGE_MODIFY_NAME:
      return state.set('modifyName',action.value);
    case CHNAGE_NAME_PHOTO:
      return state.set('namePhoto',action.value);
    case GET_INTENT_DATA:
      return state.set('intentData',action.value);
    default:
      return state;
  }
};
