import { SHOW_OR_HIDE, CHANGE_MODIFY_COMPANY, CHANGE_RELEASE_RESUME } from './actionTypes';
import axios from 'axios';
import qs from 'qs';
import { fromJS } from 'immutable';
import { importData } from '../../login/store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';
import { changeCity } from '../../../common/head/store/actionCreators';

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
  value: fromJS(values)
});

export const deleteReleaseResumeItem = (Id,id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'deleteReleaseResumeItem.php',
      data: qs.stringify({
        Id: id
      })
    })
    .then((res)=>{
      dispatch(changeAjax(false));
      if (res.data) {
        dispatch(getReleaseResume(Id));
      }
      else {
        alert("删除已发出招聘启事失败");
      }
    })
    .catch((res)=>{
      alert("删除已发出招聘启事连接后台失败");
    })
  }
}

export const getReleaseResume = (Id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'getReleaseResume.php',
      data: qs.stringify({
        Id: Id
      })
    })
    .then((res) => {
      if (res.data) {
        dispatch(changeReleaseResumeItem(res.data));
      }
      else {
        alert("获取失败");
      }
    })
    .catch((res) => {
      alert("接受已发布简历，连接失败");
    })
  }
};

export const addNewResumeData = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'addNewResumeData.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      dispatch(changeAjax(false));
      if (res.data) {
        dispatch(getReleaseResume(values['companyId']));
        window.onmousewheel = document.onmousewheel= () => {return true};
        dispatch(showOrHide(false));
      }
      else {
        dispatch(showOrHide(true));
        alert("发布失败");
      }
    })
    .catch((res) => {
      alert("发布简历，连接失败");
    })
  }
}

export const getCompanyDetail = (Id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'getCompanyDetail.php',
      data: qs.stringify({
        Id: Id
      })
    })
    .then((res) => {
      dispatch(changeAjax(false));
      dispatch(changeCity(res.data['area']));
      dispatch(importData(res.data));
    })
    .catch((res) => {
      alert("获取公司信息表，连接失败");
    })
  }
};

export const modifyCompanyDetail = (values,file) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'modifyCompanyDetail.php',
      data: file,
      params: values,
    })
    .then((res) => {
      if (res.data) {
        dispatch(getCompanyDetail(values['Id']));
        dispatch(changeModifyCompany(true));
      }
      else {
        dispatch(changeAjax(false));
        dispatch(changeModifyCompany(false));
        alert("修改失败");
      }
    })
    .catch((res) => {
      alert("修改公司信息表，连接失败");
    })
  }
};
