import { CHNAGE_MODIFY_NAME, CHNAGE_NAME_PHOTO, CHNAGE_MODIFY_INTENT, CHNAGE_MODIFY_WORK, CHNAGE_MODIFY_PROJECT, CHNAGE_MODIFY_EDUCATE, GET_INTENT_DATA, GET_WORK_DATA, GET_PROJECT_DATA, GET_EDUCATE_DATA, GET_FILE_DATA } from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';
import qs from 'qs';
import { importData1 } from '../../login/store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';
import { changeCity } from '../../../common/head/store/actionCreators';

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

export const changeModifyWork = (value) => ({
  type: CHNAGE_MODIFY_WORK,
  value
});

export const changeModifyProject = (value) => ({
  type: CHNAGE_MODIFY_PROJECT,
  value
});

export const changeModifyEducate = (value) => ({
  type: CHNAGE_MODIFY_EDUCATE,
  value
});

export const getIntentData = (value) =>({
  type: GET_INTENT_DATA,
  value: fromJS(value)
});

export const getWorkData = (value) => ({
  type: GET_WORK_DATA,
  value: fromJS(value)
});

export const getEducateData = (value) => ({
  type: GET_EDUCATE_DATA,
  value: fromJS(value)
});

export const getProjectData = (value) => ({
  type: GET_PROJECT_DATA,
  value: fromJS(value)
});

export const getFileData = (value) => ({
  type: GET_FILE_DATA,
  value: fromJS(value)
});

export const getJobseekFileData = (Id) => {
  return (dispatch) => {
      axios({
        method: 'post',
        url: 'getJobseekFileData.php',
        data: qs.stringify({
          Id: Id
        })
      })
      .then((res)=>{
        if (res.data) {
          dispatch(getFileData(res.data));
        }
        else {
          console.log('出错了哈哈哈');
        }
      })
      .catch((res)=>{
        console.log("获取期待表失败");
      })
  }
}

export const getJobseekEducateData = (Id) => {
  return (dispatch) => {
      axios({
        method: 'post',
        url: 'getJobseekEducateData.php',
        data: qs.stringify({
          Id: Id
        })
      })
      .then((res)=>{
        if (res.data) {
          dispatch(getEducateData(res.data));
        }
        else {
          console.log('出错了哈哈哈');
        }
      })
      .catch((res)=>{
        console.log("获取期待表失败");
      })
  }
}

export const getJobseekProjectData = (Id) => {
  return (dispatch) => {
      axios({
        method: 'post',
        url: 'getJobseekProjectData.php',
        data: qs.stringify({
          Id: Id
        })
      })
      .then((res)=>{
        if (res.data) {
          dispatch(getProjectData(res.data));
        }
        else {
          console.log('出错了哈哈哈');
        }
      })
      .catch((res)=>{
        console.log("获取期待表失败");
      })
  }
};

export const getJobseekWorkData = (Id) => {
  return (dispatch) => {
      axios({
        method: 'post',
        url: 'getJobseekWorkData.php',
        data: qs.stringify({
          Id: Id
        })
      })
      .then((res)=>{
        if (res.data) {
          dispatch(getWorkData(res.data));
        }
        else {
          console.log('出错了哈哈哈');
        }
      })
      .catch((res)=>{
        console.log("获取期待表失败");
      })
  }
}

export const getJobseekIntentData = (Id) => {
  return (dispatch) => {
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
};

export const getJobseekNameData = (id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'getJobseekNameData.php',
      data: qs.stringify({
        Id: id
      })
    })
    .then((res) => {
      dispatch(changeAjax(false));
      if (res.data) {
        dispatch(importData1(res.data));
        dispatch(changeCity(res.data['area']));
      }
      else {
        console.log("更新出错");
      }
    })
    .catch((res) => {
      console.log("获得求职人信息列表失败");
    })
  }
};

export const deleteJobseekEducateData = (Id,id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'deleteJobseekEducateData.php',
      data: qs.stringify({
        Id: id
      })
    })
    .then((res)=>{
      dispatch(changeAjax(false));
      if (res.data) {
        dispatch(getJobseekEducateData(Id));
      }
      else {
        console.log("删除学历表数据失败");
      }
    })
    .catch((res)=>{
      console.log("删除学历表连接失败");
    })
  }
};

export const deleteJobseekProjectData = (Id,id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'deleteJobseekProjectData.php',
      data: qs.stringify({
        Id: id
      })
    })
    .then((res)=>{
      dispatch(changeAjax(false));
      if (res.data) {
        dispatch(getJobseekProjectData(Id));
      }
      else {
        console.log("删除经验表数据失败");
      }
    })
    .catch((res)=>{
      console.log("删除经验表连接失败");
    })
  }
};

export const deleteJobseekWorkData = (Id,id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'deleteJobseekWorkData.php',
      data: qs.stringify({
        Id: id
      })
    })
    .then((res)=>{
      dispatch(changeAjax(false));
      if (res.data) {
        dispatch(getJobseekWorkData(Id));
      }
      else {
        console.log("删除工作表数据失败");
      }
    })
    .catch((res)=>{
      console.log("删除工作表连接失败");
    })
  }
};

export const modifyJobseekEducateData = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'modifyJobseekEducateData.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      dispatch(changeAjax(false));
      if (res.data) {
        dispatch(changeModifyEducate(1));
        dispatch(getJobseekEducateData(values['Id']));
      }
      else {
        dispatch(changeModifyEducate(2));
      }
    })
    .catch((res) => {
      console.log("更新教育列表连接失败");
    })
  }
};

export const modifyJobseekProjectData = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'modifyJobseekProjectData.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      dispatch(changeAjax(false));
      if (res.data) {
        dispatch(changeModifyProject(1));
        dispatch(getJobseekProjectData(values['Id']));
      }
      else {
        dispatch(changeModifyProject(2));
      }
    })
    .catch((res) => {
      console.log("更新项目列表连接失败");
    })
  }
};

export const modifyJobseekWorkData = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'modifyJobseekWorkData.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      dispatch(changeAjax(false));
      if (res.data) {
        dispatch(changeModifyWork(1));
        dispatch(getJobseekWorkData(values['Id']));
      }
      else {
        dispatch(changeModifyWork(2));
      }
    })
    .catch((res) => {
      console.log("更新工作列表连接失败");
    })
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
    .catch((res) => {
      console.log("更新期待列表连接失败");
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