import { SHOW_OR_HIDE, CHANGE_MODIFY_COMPANY } from './actionTypes';
import axios from 'axios';
import qs from 'qs';
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
      console.log("修改公司信息表失败");
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
        console.log("修改失败");
      }
    })
    .catch((res) => {
      console.log("修改公司信息表失败");
    })
  }
};
