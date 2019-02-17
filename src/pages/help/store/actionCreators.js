import { GET_YOUR_PASSWORD } from './actionTypes';
import axios from 'axios';
/*import { fromJS } from 'immutable';*/
import qs from 'qs';

const getYourPassword = (value,getError) => ({
  type: GET_YOUR_PASSWORD,
  value: value,
  getError: getError
})

export const getPassword = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'getPassword.php',
      data: qs.stringify(values)
    })
    .then ((res)=>{
      if (res.data) {
        dispatch(getYourPassword(res.data,false));
      }
      else {
        dispatch(getYourPassword('',true));
      }
    })
    .catch ((res)=>{
      console.log("连接获取密码失败");
    })
  }
}
