import {  } from './actionTypes';
import axios from 'axios';
import qs from 'qs';

export const test = (file) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'modifyJobseekName.php',
      data: file
    })
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log("传递失败");
    })
  }
}