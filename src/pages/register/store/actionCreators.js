import { CHANGE_APPLICANT_REGISTE, CHANGE_COMPANY_REGISTE , CHANGE_ERROR_INFO} from './actionTypes';
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

export const changeErrorInfo = (value) => ({
  type: CHANGE_ERROR_INFO,
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
          dispatch(changeErrorInfo('手机号及邮箱已被注册'));break;
        case 'T':
          dispatch(changeErrorInfo('手机号已被注册'));break;
        case 'E':
          dispatch(changeErrorInfo('邮箱已被注册'));break;
        case 'F':
          dispatch(changeErrorInfo('注册账号导入失败，请重试'));break;
        default:
          dispatch(changeErrorInfo(''));
          dispatch(changeApplicantRegiste(true));
      }
    })
    .catch((res) => {
      alert("传递失败");
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
      dispatch(changeCompanyRegiste(true));
      dispatch(changeAjax(false));
    })
    .catch((res) => {
      alert("传递失败");
    })
  }
}
