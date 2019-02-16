import { IMPORT_DATA, IMPORT_DATA1, CHANGE_WARN_INFO, CLEAR_AND_QUIT } from './actionTypes';
import axios from 'axios';
import qs from 'qs';
import { fromJS } from 'immutable';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

export const changeWarn = (value) => ({
  type: CHANGE_WARN_INFO,
  warn: value
});

const importData = (array) => ({
  type: IMPORT_DATA,
  array: fromJS(array)
});

const importData1 = (array) => ({
  type: IMPORT_DATA1,
  array: fromJS(array)
});

export const clearAndQuit = () => ({
  type: CLEAR_AND_QUIT
});

export const checkAccount = (values,pattern) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'checkAccount.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      const data = res.data;
      dispatch(changeAjax(false));
      if (data === 1) {
        dispatch(changeWarn("密码错误"));
      }
      else if (data === 2) {
        dispatch(changeWarn("账号不存在"));
      }
      else {
        if (pattern === '企业端') {
          dispatch(importData(res.data));
        }
        else {
          dispatch(importData1(res.data));
        }
      }
    })
    .catch((res) => {
      console.log("连接失败");
    })
  }
}