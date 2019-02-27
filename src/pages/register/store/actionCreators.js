import { CHANGE_APPLICANT_REGISTE, CHANGE_COMPANY_REGISTE , CHANGE_APPLICE_ERROR_INFO, CHANGE_COMPANY_ERROR_INFO } from './actionTypes';
import axios from 'axios';
import qs from 'qs';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

export const changeApplicantRegiste = (res) => ({
  type: CHANGE_APPLICANT_REGISTE,
  res
});

export const changeCompanyRegiste = (res) => ({
  type: CHANGE_COMPANY_REGISTE,
  res
});

export const changeAppliceErrorInfo = (value) => ({
  type: CHANGE_APPLICE_ERROR_INFO,
  value
});

export const changeCompanyErrorInfo = (value) => ({
  type: CHANGE_COMPANY_ERROR_INFO,
  value
});

export const submitApplice = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/addApplice.php',
      data: qs.stringify({
        name: values.name,
        prefix: values.prefix,
        telNumber: values.telNumber,
        email: values.email,
        password: values.password
      })
    })
    .then((res) => {
      dispatch(changeAjax(false));
      switch(res.data) {
        case 'TE':
          dispatch(changeAppliceErrorInfo('手机号及邮箱已被注册'));break;
        case 'T':
          dispatch(changeAppliceErrorInfo('手机号已被注册'));break;
        case 'E':
          dispatch(changeAppliceErrorInfo('邮箱已被注册'));break;
        case 'F':
          dispatch(changeAppliceErrorInfo('注册账号导入失败，请重试'));break;
        default:
          dispatch(changeAppliceErrorInfo(''));
          dispatch(changeApplicantRegiste(true));
      }
    })
    .catch((res) => {
      alert("注册连接网络失败");
    })
  }
}

export const submitCompany = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/addCompany.php',
      data: qs.stringify({
        name: values.CompanyName,
        area: values.RecruitArea,
        legalName: values.PersonName,
        telNumber: values.PhoneNumber,
        email: values.Email,
        password: values.Password
      })
    })
    .then((res) => {
      dispatch(changeAjax(false));
      switch(res.data) {
        case 'TE':
          dispatch(changeCompanyErrorInfo('手机号及邮箱已被注册'));break;
        case 'T':
          dispatch(changeCompanyErrorInfo('手机号已被注册'));break;
        case 'E':
          dispatch(changeCompanyErrorInfo('邮箱已被注册'));break;
        case 'F':
          dispatch(changeCompanyErrorInfo('注册账号导入失败，请重试'));break;
        default:
          dispatch(changeCompanyErrorInfo(''));
          dispatch(changeCompanyRegiste(true));
      }
    })
    .catch((res) => {
      alert("注册连接网络失败");
    })
  }
}
