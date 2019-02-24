import { GET_YOUR_PASSWORD, MODIFY_DATA_SUCCESS } from './actionTypes';
import axios from 'axios';
import qs from 'qs';
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
      dispatch(changeAjax(false));
      if (res.data) {
        dispatch(getYourPassword(res.data,false));
      }
      else {
        dispatch(getYourPassword('',true));
      }
    })
    .catch ((res)=>{
      alert("连接获取密码失败");
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
      dispatch(changeAjax(false));
      if (res.data) {
        dispatch(modifyDataSuccess(1));
        dispatch(clearAndQuit());
        window.localStorage.removeItem("peiqiAccount");
      }
      else {
        dispatch(modifyDataSuccess(2));
      }
    })
    .catch ((res)=>{
      alert("修改信息失败");
    })
  }
}
