import { CHNAGE_MODIFY_NAME, CHNAGE_NAME_PHOTO, CHNAGE_MODIFY_INTENT, GET_INTENT_DATA } from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';
import qs from 'qs';
import { importData1 } from '../../login/store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

export const changeModifyName = (value) => ({
  type: CHNAGE_MODIFY_NAME,
  value
});

export const changeNamePhoto = (value) => ({
  type: CHNAGE_NAME_PHOTO,
  value
});

export const changeModifyIntent = (value) => ({
  type: CHNAGE_MODIFY_INTENT,
  value
});

export const getIntentData = (value) =>({
  type: GET_INTENT_DATA,
  value: fromJS(value)
});

export const getJobseekIntentData = (Id) => {
  return (dispatch) => {
    if (Id) {
      axios({
        method: 'post',
        url: 'getJobseekIntentData.php',
        data: qs.stringify({
          Id: Id
        })
      })
      .then((res)=>{
        if (res.data) {
          dispatch(getIntentData(res.data));
        }
        else {
          console.log('出错了哈哈哈');
        }
      })
      .catch((res)=>{
        console.log("获取期待表失败");
      })
    }
    else {
      console.log('hahha');
    }
  }
};

export const modifyJobseekIntentData = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'modifyJobseekIntentData.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      dispatch(changeAjax(false));
      if (res.data) {
        dispatch(changeModifyIntent(1));
        dispatch(getJobseekIntentData(values['Id']));
      }
      else {
        dispatch(changeModifyIntent(2));
      }
    })
  }
};

export const getJobseekNameData = (id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'getJobseekDataName.php',
      data: qs.stringify({
        Id: id
      })
    })
    .then((res) => {
      dispatch(changeAjax(false));
      if (res.data) {
        dispatch(importData1(res.data));
      }
      else {
        console.log("更新出错");
      }
    })
  }
};

export const modifyJobseekName = (values,file) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'modifyJobseekName.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      if (res.data) {
        dispatch(changeModifyName(1));
      }
      else {
        dispatch(changeModifyName(2));
      }
    })
    .catch((res) => {
      console.log("传递失败");
    })
    axios({
      method: 'post',
      url: 'addFiles.php',
      data: file,
      params: {
        Id: values['Id']
      },
    })
    .then((res) => {
      switch (res.data) {
        case 0:
          dispatch(changeNamePhoto(0));break;
        case 1:
          dispatch(changeNamePhoto(1));break;
        case 2:
          dispatch(changeNamePhoto(2));break;
        default:
          dispatch(changeNamePhoto(0));
      }
    })
    .catch((res) => {
      console.log("传递失败");
    })
  }
}