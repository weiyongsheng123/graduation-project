import { fromJS } from 'immutable';
import { CHNAGE_MODIFY_NAME, CHNAGE_NAME_PHOTO, CHNAGE_MODIFY_INTENT, CHNAGE_MODIFY_WORK, CHNAGE_MODIFY_PROJECT, CHNAGE_MODIFY_EDUCATE, GET_INTENT_DATA, GET_WORK_DATA, GET_PROJECT_DATA, GET_EDUCATE_DATA, GET_FILE_DATA } from './actionTypes';

const defaultState = fromJS({
  modifyName: 0,
  namePhoto: 0,
  modifyIntent: 0,
  modifyWork: 0,
  modifyProject: 0,
  modifyEducate: 0,
  intentData: { },
  workData: [ ],
  projectData: [ ],
  educateData: [ ],
  fileData: [ ]
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CHNAGE_MODIFY_INTENT:
      return state.set('modifyIntent',action.value);
    case CHNAGE_MODIFY_NAME:
      return state.set('modifyName',action.value);
    case CHNAGE_NAME_PHOTO:
      return state.set('namePhoto',action.value);
    case CHNAGE_MODIFY_WORK:
      return state.set('modifyWork',action.value);
    case CHNAGE_MODIFY_PROJECT:
      return state.set('modifyProject',action.value);
    case CHNAGE_MODIFY_EDUCATE:
      return state.set('modifyEducate',action.value);
    case GET_INTENT_DATA:
      return state.set('intentData',action.value);
    case GET_WORK_DATA:
      return state.set('workData',action.value);
    case GET_PROJECT_DATA:
      return state.set('projectData',action.value);
    case GET_EDUCATE_DATA:
      return state.set('educateData',action.value);
    case GET_FILE_DATA:
      return state.set('fileData',action.value);
    default:
      return state;
  }
};
