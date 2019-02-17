import { ADD_POSITION_LIST, ADD_AREA_LIST, ADD_SALARY_LIST } from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const addPositionList = (array) => ({
  type: ADD_POSITION_LIST,
  array: fromJS(array)
});

const addAreaList = (array) => ({
  type: ADD_AREA_LIST,
  array: fromJS(array)
});

const addsalaryList = (array) => ({
  type: ADD_SALARY_LIST,
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
      const salary = res.data[0];
      const area = res.data[1];
      dispatch(addsalaryList(salary));
      dispatch(addAreaList(area));
    })
    .catch((res)=>{
      console.log("获取地区月薪失败");
    })
  }
};