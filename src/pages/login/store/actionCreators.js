import { IMPORT_DATA, IMPORT_DATA1, CHANGE_WARN_INFO, CLEAR_AND_QUIT, OPEN_AUTO_REMEBER, RECODE_COMPANY_ID, RECODE_JOBSEEK_ID } from './actionTypes';
import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';
import { fromJS } from 'immutable';
import { changeAjax } from '../../../common/ajax/store/actionCreators';
import { changeCity } from '../../../common/head/store/actionCreators';

export const changeWarn = (value) => ({
  type: CHANGE_WARN_INFO,
  warn: value
});

export const importData = (array) => ({
  type: IMPORT_DATA,
  array: fromJS(array)
});

export const importData1 = (array) => ({
  type: IMPORT_DATA1,
  array: fromJS(array)
});

export const clearAndQuit = () => ({
  type: CLEAR_AND_QUIT
});

export const openAutoRemeber = (value) => ({
  type: OPEN_AUTO_REMEBER,
  auto: value
});

export const recodeCompanyId = (value) => ({
  type: RECODE_COMPANY_ID,
  value
});

export const recodeJobseekId = (value) => ({
  type: RECODE_JOBSEEK_ID,
  value
});

export const checkAccount = (values,pattern) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/checkAccount.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      const data = res.data;
      dispatch(changeAjax(''));
      if (data === 1) {
        dispatch(changeWarn("密码错误"));
        message.error('密码错误');
      }
      else if (data === 2) {
        dispatch(changeWarn("账号不存在"));
        message.error('账号不存在');
      }
      else {
        message.success('登录成功');
        if (pattern === '企业端') {
          dispatch(importData(res.data));
          dispatch(changeCity(res.data['area']));
          dispatch(recodeCompanyId(res.data['Id']));
        }
        else {
          dispatch(importData1(res.data));
          dispatch(changeCity(res.data['area']));
          dispatch(recodeJobseekId(res.data['Id']));
        }
      }
    })
    .catch((res) => {
      message.warning('验证登录，连接网络失败');
    })
  }
}