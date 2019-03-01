import { SHOW_OR_HIDE, CHANGE_MODIFY_COMPANY, CHANGE_RELEASE_RESUME, CHANGE_RESERIVE_RESUME, CHANGE_ROUTER_COMPANY_ID } from './actionTypes';
import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';
import { fromJS } from 'immutable';
import { importData } from '../../login/store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';
import { changeCity } from '../../../common/head/store/actionCreators';
import { getResumePositionList } from '../../search/store/actionCreators';

export const showOrHide = (show) => ({
  type: SHOW_OR_HIDE,
  show
});

export const changeModifyCompany = (value) => ({
  type: CHANGE_MODIFY_COMPANY,
  value
});

export const changeReleaseResumeItem = (values) => ({
  type: CHANGE_RELEASE_RESUME,
  values: fromJS(values)
});

export const changeReseriveResume = (values) => ({
  type: CHANGE_RESERIVE_RESUME,
  values: fromJS(values)
});

export const changeRouterCompanyId = (value) => ({
  type: CHANGE_ROUTER_COMPANY_ID,
  value
});

export const jobseekShowCompany = (Id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/getCompanyDetail.php',
      data: qs.stringify({
        Id: Id
      })
    })
    .then((res) => {
     if (res.data) {
       dispatch(importData(res.data));
     }
     else {
       message.error('获取公司详细信息失败');
     }
    })
    .catch((res) => {
      message.warning('获取公司信息表，连接失败');
    })
  }
};

export const deleteReseriveResumeItem = (Id,id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/deleteReseriveResumeItem.php',
      data: qs.stringify({
        Id: id
      })
    })
    .then((res)=>{
      dispatch(changeAjax(''));
      if (res.data) {
        message.success("删除成功");
        dispatch(getReseriveResumeList(Id));
      }
      else {
        message.error('删除已收到的投递简历失败');
      }
    })
    .catch((res)=>{
      message.warning('删除已收到的投递简历连接后台失败');
    })
  }
};

export const deleteReleaseResumeItem = (Id,id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/deleteReleaseResumeItem.php',
      data: qs.stringify({
        Id: id
      })
    })
    .then((res)=>{
      dispatch(changeAjax(''));
      if (res.data) {
        message.success("删除成功");
        dispatch(getReleaseResume(Id));
        dispatch(getResumePositionList());
      }
      else {
        message.error('删除已发出招聘启事失败');
      }
    })
    .catch((res)=>{
      message.warning('删除已发出招聘启事连接后台失败');
    })
  }
};

export const addNewResumeData = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/addNewResumeData.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      dispatch(changeAjax(''));
      if (res.data) {
        message.success('发布成功');
        dispatch(getReleaseResume(values['companyId']));
        window.onmousewheel = document.onmousewheel= () => {return true};
        dispatch(showOrHide(false));
        dispatch(getResumePositionList());
      }
      else {
        dispatch(showOrHide(true));
        message.error('发布失败');
      }
    })
    .catch((res) => {
      message.warning('已经申请过了');
    })
  }
};

export const getReseriveResumeList = (companyId) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/getReseriveResumeList.php',
      data: qs.stringify({
        companyId: companyId
      })
    })
    .then((res)=>{
      if (res.data) {
        dispatch(changeReseriveResume(res.data));
      }
      else {
        message.error('获取已收到简历表出错');
      }
    })
    .catch((res)=>{
      message.warning('获取已收到简历表连接网络失败');
    })
  }
};

export const getReleaseResume = (Id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/getReleaseResume.php',
      data: qs.stringify({
        Id: Id
      })
    })
    .then((res) => {
      if (res.data) {
        dispatch(changeReleaseResumeItem(res.data));
      }
      else {
        message.error('获取已发布简历表失败');
      }
    })
    .catch((res) => {
      message.warning('接受已发布简历，网络连接失败');
    })
  }
};

export const getCompanyDetail = (Id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/getCompanyDetail.php',
      data: qs.stringify({
        Id: Id
      })
    })
    .then((res) => {
     if (res.data) {
       dispatch(changeAjax(''));
       dispatch(changeCity(res.data['area']));
       dispatch(importData(res.data));
     }
     else {
       message.error('获取公司详细信息失败');
     }
    })
    .catch((res) => {
      message.warning('获取公司信息表，连接失败');
    })
  }
};

export const modifyCompanyDetail = (values,file) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/modifyCompanyDetail.php',
      data: file,
      params: values,
    })
    .then((res) => {
      if (res.data) {
        message.success('修改成功');
        dispatch(getCompanyDetail(values['Id']));
        dispatch(changeModifyCompany(true));
      }
      else {
        dispatch(changeAjax(''));
        dispatch(changeModifyCompany(false));
        message.error('修改失败');
      }
    })
    .catch((res) => {
      message.warning('修改公司信息表，网络连接失败');
    })
  }
};
