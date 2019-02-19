import { ADD_POSITION_LIST, ADD_ARSAEX_LIST } from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const addPositionList = (array) => ({
  type: ADD_POSITION_LIST,
  array: fromJS(array)
});

const addDataList = (salary,area,experience) => ({
  type: ADD_ARSAEX_LIST,
  salary: fromJS(salary),
  area: fromJS(area),
  experience: fromJS(experience)
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

export const getAreaSalaryExperience = () => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: 'areaSalaryExperience.php'
    })
    .then((res)=>{
      const salary = res.data[0];
      const area = res.data[1];
      const experience = res.data[2];
      dispatch(addDataList(salary,area,experience));
    })
    .catch((res)=>{
      console.log("获取地区月薪失败");
    })
  }
};