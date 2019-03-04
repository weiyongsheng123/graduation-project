import { CHANGE_SHOW_RESUME, CHNAGE_MODIFY_NAME, CHNAGE_NAME_PHOTO, CHNAGE_MODIFY_INTENT, CHNAGE_MODIFY_WORK, CHNAGE_MODIFY_PROJECT, CHNAGE_MODIFY_EDUCATE, GET_INTENT_DATA, GET_WORK_DATA, GET_PROJECT_DATA, GET_EDUCATE_DATA, GET_UPLOAD_DATA, GET_ROUTER_JOBSEEK_ID } from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';
import qs from 'qs';
import { message } from 'antd';
import { importData1 } from '../../login/store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';
import { changeCity } from '../../../common/head/store/actionCreators';

export const changeShowResume = (value) => ({
  type: CHANGE_SHOW_RESUME,
  value
});

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

export const getUploadData = (value) => ({
  type: GET_UPLOAD_DATA,
  value: fromJS(value)
});

export const getRouterJobseekId = (value) => ({
  type: GET_ROUTER_JOBSEEK_ID,
  value
});

export const getJobseekUploadData = (Id) => {
  return (dispatch) => {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:85/getJobseekUploadData.php',
        data: qs.stringify({
          Id: Id
        })
      })
      .then((res)=>{
        if (res.data) {
          dispatch(getUploadData(res.data));
        }
        else {
          message.error('获取上传表失败');
        }
      })
      .catch((res)=>{
        message.warning('获取上传表网络连接失败');
      })
  }
}

export const getJobseekEducateData = (Id) => {
  return (dispatch) => {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:85/getJobseekEducateData.php',
        data: qs.stringify({
          Id: Id
        })
      })
      .then((res)=>{
        if (res.data) {
          dispatch(getEducateData(res.data));
        }
        else {
          message.error('获取教育表失败');
        }
      })
      .catch((res)=>{
        message.warning('获取教育表网络连接失败');
      })
  }
}

export const getJobseekProjectData = (Id) => {
  return (dispatch) => {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:85/getJobseekProjectData.php',
        data: qs.stringify({
          Id: Id
        })
      })
      .then((res)=>{
        if (res.data) {
          dispatch(getProjectData(res.data));
        }
        else {
          message.error('获取项目表失败');
        }
      })
      .catch((res)=>{
        message.warning('获取项目表网络连接失败');
      })
  }
};

export const getJobseekWorkData = (Id) => {
  return (dispatch) => {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:85/getJobseekWorkData.php',
        data: qs.stringify({
          Id: Id
        })
      })
      .then((res)=>{
        if (res.data) {
          dispatch(getWorkData(res.data));
        }
        else {
          message.error('获取工作经验表失败');
        }
      })
      .catch((res)=>{
        message.warning('获取工作经验表网络连接失败');
      })
  }
}

export const getJobseekIntentData = (Id) => {
  return (dispatch) => {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:85/getJobseekIntentData.php',
        data: qs.stringify({
          Id: Id
        })
      })
      .then((res)=>{
        if (res.data) {
          dispatch(getIntentData(res.data));
        }
        else {
          message.error('获取期望表失败');
        }
      })
      .catch((res)=>{
        message.error('获取期望表网络连接失败');
      })
  }
};

export const companyShowJobseek = (Id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/getJobseekNameData.php',
      data: qs.stringify({
        Id: Id
      })
    })
    .then((res) => {
      if (res.data) {
        dispatch(importData1(res.data));
      }
      else {
        message.error('获得求职人信息列表失败');
      }
    })
    .catch((res) => {
      message.warning('获得求职人信息列表网络连接失败');
    })
  }
};

export const getJobseekNameData = (Id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/getJobseekNameData.php',
      data: qs.stringify({
        Id: Id
      })
    })
    .then((res) => {
      dispatch(changeAjax(''));
      if (res.data) {
        dispatch(importData1(res.data));
        dispatch(changeCity(res.data['area']));
        var storage=window.localStorage;
        const newAccount = JSON.parse(storage["peiqiAccount"]);
        newAccount['account'] = res.data['telNumber'];
        newAccount['type'] = 'telNumber';
        let d = JSON.stringify(newAccount);
        storage["peiqiAccount"] = d;
      }
      else {
        message.error('获得求职人信息列表失败');
      }
    })
    .catch((res) => {
      message.warning('获得求职人信息列表网络连接失败');
    })
  }
};

export const deleteJobseekUploadData = (Id,id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/deleteJobseekUploadData.php',
      data: qs.stringify({
        Id: id
      })
    })
    .then((res)=>{
      dispatch(changeAjax(''));
      if (res.data) {
        dispatch(getJobseekUploadData(Id));
        message.success('删除成功');
      }
      else {
        message.error('删除上传表数据失败');
      }
    })
    .catch((res)=>{
      message.warning('删除上传表网络连接失败');
    })
  }
};

export const deleteJobseekEducateData = (Id,id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/deleteJobseekEducateData.php',
      data: qs.stringify({
        Id: id
      })
    })
    .then((res)=>{
      dispatch(changeAjax(''));
      if (res.data) {
        dispatch(getJobseekEducateData(Id));
        message.success('删除成功');
      }
      else {
        message.error('删除学历表表数据失败');
      }
    })
    .catch((res)=>{
      message.warning("删除学历表网络连接失败");
    })
  }
};

export const deleteJobseekProjectData = (Id,id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/deleteJobseekProjectData.php',
      data: qs.stringify({
        Id: id
      })
    })
    .then((res)=>{
      dispatch(changeAjax(''));
      if (res.data) {
        dispatch(getJobseekProjectData(Id));
        message.success('删除成功');
      }
      else {
        message.error("删除经验表数据失败");
      }
    })
    .catch((res)=>{
      message.warning("删除经验表网络连接失败");
    })
  }
};

export const deleteJobseekWorkData = (Id,id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/deleteJobseekWorkData.php',
      data: qs.stringify({
        Id: id
      })
    })
    .then((res)=>{
      dispatch(changeAjax(''));
      if (res.data) {
        dispatch(getJobseekWorkData(Id));
        message.success('删除成功');
      }
      else {
        message.error("删除工作表数据失败");
      }
    })
    .catch((res)=>{
      message.warning("删除工作表网络连接失败");
    })
  }
};

export const modifyJobseekEducateData = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/modifyJobseekEducateData.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      dispatch(changeAjax(''));
      if (res.data) {
        dispatch(changeModifyEducate(1));
        dispatch(getJobseekEducateData(values['Id']));
        message.success('更新教育经历成功');
      }
      else {
        dispatch(changeModifyEducate(2));
        message.error("更新教育经历失败");
      }
    })
    .catch((res) => {
      message.warning("更新教育经历列表网络连接失败");
    })
  }
};

export const modifyJobseekProjectData = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/modifyJobseekProjectData.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      dispatch(changeAjax(''));
      if (res.data) {
        dispatch(changeModifyProject(1));
        dispatch(getJobseekProjectData(values['Id']));
        message.success('更新项目成功');
      }
      else {
        dispatch(changeModifyProject(2));
        message.error("更新项目失败");
      }
    })
    .catch((res) => {
      message.warning("更新项目列表网络连接失败");
    })
  }
};

export const modifyJobseekWorkData = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/modifyJobseekWorkData.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      dispatch(changeAjax(''));
      if (res.data) {
        dispatch(changeModifyWork(1));
        dispatch(getJobseekWorkData(values['Id']));
        message.success('更新工作成功');
      }
      else {
        dispatch(changeModifyWork(2));
        message.error("更新工作失败");
      }
    })
    .catch((res) => {
      message.warning("更新工作列表网络连接失败");
    })
  }
};

export const modifyJobseekIntentData = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/modifyJobseekIntentData.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      dispatch(changeAjax(''));
      if (res.data) {
        dispatch(changeModifyIntent(1));
        dispatch(getJobseekIntentData(values['Id']));
        message.success('更新期待成功');
      }
      else {
        dispatch(changeModifyIntent(2));
        message.error("更新期待失败");
      }
    })
    .catch((res) => {
      message.warning("更新期待网络连接失败");
    })
  }
};

export const modifyJobseekName = (values,file) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/modifyJobseekName.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      if (res.data) {
        dispatch(changeModifyName(1));
        message.success('更新个人信息成功');
      }
      else {
        dispatch(changeModifyName(2));
        message.error("更新个人信息失败");
      }
    })
    .catch((res) => {
      message.warning("更新个人信息网络连接失败");
    })
    if (file) {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:85/addFiles.php',
        data: file,
        params: {
          Id: values['Id']
        },
      })
      .then((res) => {
        switch (res.data) {
          case 1:
            dispatch(changeNamePhoto(1));message.success('更新头像成功');break;
          case 2:
            dispatch(changeNamePhoto(2));message.error('更新头像失败');break;
          default:
            dispatch(changeNamePhoto(0));
        }
      })
      .catch((res) => {
        message.warning("更新个人头像网络连接失败");
      })
    }
    else {
      dispatch(changeNamePhoto(1));
    }
  }
};
