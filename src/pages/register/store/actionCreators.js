import {  } from './actionTypes';
import axios from 'axios';

export const submitApplice = (values) => {
  return (dispatch) => {
    /*
    axios.post('/addApplice.php',{
      name: values.name,
      telNumber: values.prefix + '-' + values.telNumber,
      email: values.email,
      password: values.password
    })*/
    axios({
      method: 'post',
      url: '/addApplice.php',
      headers:{'Content-type':'application/x-www-form-urlencoded; charset=UTF-8'},
      data: {
        name: values.name,
        telNumber: values.prefix + '-' + values.telNumber,
        email: values.email,
        password: values.password
      }
    })
    .then((res) => {
      console.log(res)
    })
  }
}
