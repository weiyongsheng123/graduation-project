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

export const modifyDataSuccess = (value) => ({
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
      url: 'https://recruit.applinzi.com/php/modifyAccount.php',
      data: qs.stringify(values)
    })
    .then ((res)=>{
      dispatch(changeAjax(''));
      switch(res.data) {
        case 'TE':
          dispatch(modifyDataSuccess('手机号及邮箱已被注册'));message.error('手机号及邮箱已被注册');break;
        case 'T':
          dispatch(modifyDataSuccess('手机号已被注册'));message.error('手机号已被注册');break;
        case 'E':
          dispatch(modifyDataSuccess('邮箱已被注册'));message.error('邮箱已被注册');break;
        case 'F':
          dispatch(modifyDataSuccess('注册账号导入失败，请重试'));message.error('注册账号导入失败，请重试');break;
        case 'S':
          dispatch(modifyDataSuccess(' '));
          dispatch(clearAndQuit());
          window.localStorage.removeItem("peiqiAccount");
          message.success('修改成功');break;
        default:
          dispatch(modifyDataSuccess('后台发生错误，修改失败'));
          message.error('后台发生错误，注册失败');
      }
    })
    .catch ((res)=>{
      message.warning('修改信息连接网络失败');
    })
  }
}
