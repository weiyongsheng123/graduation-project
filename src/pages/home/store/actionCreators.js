import { ADD_POSITION_LIST } from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const addPositionList = (array) => ({
  type: ADD_POSITION_LIST,
  array: fromJS(array)
});

export const getPosition = () => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: 'positionList.php'
    })
    .then((res)=>{
      dispatch(addPositionList(res.data));
    })
    .catch((res)=>{
      console.log("连接职位列表失败");
    })
  }
};

export const getAreaSalary = () => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: 'areaSalary.php'
    })
    .then((res)=>{
      console.log(res.data);
    })
    .catch((res)=>{
      console.log("获取地区月薪失败");
    })
  }
};