import { CHANGE_APPLICANT_REGISTE, CHANGE_COMPANY_REGISTE } from './actionTypes';
import axios from 'axios';
import qs from 'qs';

export const changeApplicantRegiste = (res) => ({
  type: CHANGE_APPLICANT_REGISTE,
  res
});

export const changeCompanyRegiste = (res) => ({
  type: CHANGE_COMPANY_REGISTE,
  res
});

export const submitApplice = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: '/addApplice.php',
      data: qs.stringify({
        name: values.name,
        telNumber: values.prefix + '-' + values.telNumber,
        email: values.email,
        password: values.password
      })
    })
    .then((res) => {
      dispatch(changeApplicantRegiste(true));
    })
    .catch((res) => {
      console.log("传递失败");
    })
  }
}

export const submitCompany = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: '/addCompany.php',
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
    })
    .catch((res) => {
      console.log("传递失败");
    })
  }
}
