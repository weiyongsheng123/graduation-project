import { CHANGE_SWITCH_VALUE, CHANGE_JOBSEEKER_VALUE, CHANGE_COMPANY_VALUE, CHANGE_RESUMEITEM_VALUE, CHANGE_APPLY_VALUE, CHANGE_SUGGEST_VALUE, CHANGE_LOGIN } from './actionTypes';
import axios from 'axios';
import qs from 'qs';
import { fromJS } from 'immutable';
import { message } from 'antd';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

export const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
});

export const changeSwitch = (value) => ({
  type: CHANGE_SWITCH_VALUE,
  value
});

export const changeJobseeker = (value) => ({
  type: CHANGE_JOBSEEKER_VALUE,
  value: fromJS(value)
});

export const changeCompany = (value) => ({
  type: CHANGE_COMPANY_VALUE,
  value: fromJS(value)
});

export const changeResumeItem = (value) => ({
  type: CHANGE_RESUMEITEM_VALUE,
  value: fromJS(value)
});

export const changeApply = (value) => ({
  type: CHANGE_APPLY_VALUE,
  value: fromJS(value)
});

export const changeSuggest = (value) => ({
  type: CHANGE_SUGGEST_VALUE,
  value: fromJS(value)
});

export const getJobseeker = () =>{
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/getAllTable.php',
      data: qs.stringify({
        table: 'jobseeker'
      })
    })
    .then((res) => {
      if (!res.data) {
        message.error('获取求职者表失败');
      }
      else {
        dispatch(changeJobseeker(res.data));
      }
    })
    .catch(()=> {
      message.warning('获取求职者表，连接网络失败');
    })
  }
};

export const getCompany = () =>{
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/getAllTable.php',
      data: qs.stringify({
        table: 'company'
      })
    })
    .then((res) => {
      if (!res.data) {
        message.error('获取企业表失败');
      }
      else {
        dispatch(changeCompany(res.data));
      }
    })
    .catch(()=> {
      message.warning('获取企业表，连接网络失败');
    })
  }
};

export const getResumeItem = () =>{
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/getAllTable.php',
      data: qs.stringify({
        table: 'resumeitem'
      })
    })
    .then((res) => {
      if (!res.data) {
        message.error('获取已发布职位表失败');
      }
      else {
        dispatch(changeResumeItem(res.data));
      }
    })
    .catch(()=> {
      message.warning('获取已发布职位表，连接网络失败');
    })
  }
};

export const getApply = () =>{
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/getAllTable.php',
      data: qs.stringify({
        table: 'apply'
      })
    })
    .then((res) => {
      if (!res.data) {
        message.error('获取职位申请表失败');
      }
      else {
        dispatch(changeApply(res.data));
      }
    })
    .catch(()=> {
      message.warning('获取职位申请表，连接网络失败');
    })
  }
};

export const getSuggest = () =>{
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/getAllTable.php',
      data: qs.stringify({
        table: 'feedback'
      })
    })
    .then((res) => {
      if (!res.data) {
        message.error('获取建议反馈表失败');
      }
      else {
        dispatch(changeSuggest(res.data));
      }
    })
    .catch(()=> {
      message.warning('获取建议反馈表，连接网络失败');
    })
  }
};

export const deleteJobseekItem = (Id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/deleteTableItem.php',
      data: qs.stringify({
        Id: Id,
        table: 'jobseeker'
      })
    })
    .then((res)=>{
      dispatch(changeAjax(''));
      if (res.data) {
        message.success("删除成功");
        dispatch(getJobseeker());
      }
      else {
        message.error('删除求职者用户失败');
      }
    })
    .catch((res)=>{
      message.warning('删除求职者用户连接后台失败');
    })
  }
};

export const deleteCompanyItem = (Id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/deleteTableItem.php',
      data: qs.stringify({
        Id: Id,
        table: 'company'
      })
    })
    .then((res)=>{
      dispatch(changeAjax(''));
      if (res.data) {
        message.success("删除成功");
        dispatch(getCompany());
      }
      else {
        message.error('删除企业用户失败');
      }
    })
    .catch((res)=>{
      message.warning('删除企业用户连接后台失败');
    })
  }
};

export const deleteResumeItem = (Id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/deleteTableItem.php',
      data: qs.stringify({
        Id: Id,
        table: 'resumeitem'
      })
    })
    .then((res)=>{
      dispatch(changeAjax(''));
      if (res.data) {
        message.success("删除成功");
        dispatch(getResumeItem());
      }
      else {
        message.error('删除发布的职位失败');
      }
    })
    .catch((res)=>{
      message.warning('删除发布的职位连接后台失败');
    })
  }
};

export const deleteApplyItem = (Id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/deleteTableItem.php',
      data: qs.stringify({
        Id: Id,
        table: 'apply'
      })
    })
    .then((res)=>{
      dispatch(changeAjax(''));
      if (res.data) {
        message.success("删除成功");
        dispatch(getApply());
      }
      else {
        message.error('删除职位申请失败');
      }
    })
    .catch((res)=>{
      message.warning('删除职位申请连接后台失败');
    })
  }
};

export const deleteSuggestItem = (Id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/deleteTableItem.php',
      data: qs.stringify({
        Id: Id,
        table: 'feedback'
      })
    })
    .then((res)=>{
      dispatch(changeAjax(''));
      if (res.data) {
        message.success("删除成功");
        dispatch(getSuggest());
      }
      else {
        message.error('删除建议反馈失败');
      }
    })
    .catch((res)=>{
      message.warning('删除建议反馈连接后台失败');
    })
  }
};
