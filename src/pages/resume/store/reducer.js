import { fromJS } from 'immutable';
import { CLEAR_AND_QUIT_JOBSEEK, CHANGE_SHOW_RESUME, CHNAGE_MODIFY_NAME, CHNAGE_NAME_PHOTO, CHNAGE_MODIFY_INTENT, CHNAGE_MODIFY_WORK, CHNAGE_MODIFY_PROJECT, CHNAGE_MODIFY_EDUCATE, CHANGE_SEND_RESUME_LIST, GET_INTENT_DATA, GET_WORK_DATA, GET_PROJECT_DATA, GET_EDUCATE_DATA, GET_UPLOAD_DATA, GET_ROUTER_JOBSEEK_ID } from './actionTypes';

const defaultState = fromJS({
  showResume: true,
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
  uploadData: [ ],
  sendResumeList: [],
  routerId: '0'
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case CLEAR_AND_QUIT_JOBSEEK:
      return state.merge({
        intentData: fromJS({}),
        workData: fromJS([]),
        projectData: fromJS([]),
        educateData: fromJS([]),
        uploadData: fromJS([]),
        sendResumeList: fromJS([])
      });
    case CHANGE_SHOW_RESUME:
      return state.set('showResume',action.value);
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
    case CHANGE_SEND_RESUME_LIST:
      return state.set('sendResumeList',action.values);
    case GET_INTENT_DATA:
      return state.set('intentData',action.value);
    case GET_WORK_DATA:
      return state.set('workData',action.value);
    case GET_PROJECT_DATA:
      return state.set('projectData',action.value);
    case GET_EDUCATE_DATA:
      return state.set('educateData',action.value);
    case GET_UPLOAD_DATA:
      return state.set('uploadData',action.value);
    case GET_ROUTER_JOBSEEK_ID:
      return state.set('routerId',action.value);
    default:
      return state;
  }
};
