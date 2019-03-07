import { CHANGE_POSITION_FIRST_TIP, SHOW_POSITION_ID, CHANGE_POSITION_COMPANY } from './actionTypes';
import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';
import { fromJS } from 'immutable';

export const changePositionFirstTip = (value) => ({
  type: CHANGE_POSITION_FIRST_TIP,
  value
});

export const showPositionId = (Id) => ({
  type: SHOW_POSITION_ID,
  Id
});

export const changePositionCompanyData = (values) => ({
  type: CHANGE_POSITION_COMPANY,
  values: fromJS(values)
});

export const getPositionCompanyData = (Id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'https://recruit.applinzi.com/php/getCompanyDetail.php',
      data: qs.stringify({
        Id: Id
      })
    })
    .then((res)=>{
      if (res.data) {
        dispatch(changePositionCompanyData(res.data));
      }
      else {
        message.error('获取相关企业信息失败');
      }
    })
    .catch((res)=>{
      message.warning('获取相关企业信息连接网络失败');
    })
  }
};
