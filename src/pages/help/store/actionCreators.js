import { GET_YOUR_PASSWORD, MODIFY_DATA_SUCCESS } from './actionTypes';
import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';
import { changeAjax } from '../../../common/ajax/store/actionCreators';
import { clearAndQuit } from "../../login/store/actionCreators";

const getYourPassword = (value,getError) => ({
  type: GET_YOUR_PASSWORD,
  value: value,
  getError: getError
});

const modifyDataSuccess = (value) => ({
  type: MODIFY_DATA_SUCCESS,
  value
});

export const getPassword = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'getPassword.php',
      data: qs.stringify(values)
    })
    .then ((res)=>{
      dispatch(changeAjax(''));
      if (res.data) {
        message.success('获取成功');
        dispatch(getYourPassword(res.data,false));
      }
      else {
        message.error('获取失败');
        dispatch(getYourPassword('',true));
      }
    })
    .catch ((res)=>{
      message.warning('获取密码，连接网络失败');
    })
  }
};

export const modifyAccountData = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'modifyAccount.php',
      data: qs.stringify(values)
    })
    .then ((res)=>{
      dispatch(changeAjax(''));
      if (res.data) {
        dispatch(modifyDataSuccess(1));
        dispatch(clearAndQuit());
        window.localStorage.removeItem("peiqiAccount");
        message.success('修改信息成功');
      }
      else {
        dispatch(modifyDataSuccess(2));
        message.error('修改信息失败');
      }
    })
    .catch ((res)=>{
      message.warning('修改信息连接网络失败');
    })
  }
}
