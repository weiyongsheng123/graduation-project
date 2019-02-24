import { ADD_POSITION_LIST, ADD_ARSAEX_LIST, ADD_ADVERTISEMENT_LIST, ADD_RECOMMENDWORK_LIST, ADD_RECOMMENDSKILL_LIST } from './actionTypes';
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

const addAdvertisementList = (value) => ({
  type: ADD_ADVERTISEMENT_LIST,
  value: fromJS(value)
});

const addRecommendWorkList = (value) => ({
  type: ADD_RECOMMENDWORK_LIST,
  value: fromJS(value)
});

const addRecommendSkillList = (value) => ({
  type: ADD_RECOMMENDSKILL_LIST,
  value: fromJS(value)
});

export const getRecommendSkill = () => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: 'getRecommendSkill.php'
    })
    .then((res)=>{
      dispatch(addRecommendSkillList(res.data));
    })
    .catch((res)=>{
      alert("连接面试技巧列表失败");
    })
  }
}

export const getRecommendWork = () => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: 'getRecommendWork.php'
    })
    .then((res)=>{
      dispatch(addRecommendWorkList(res.data));
    })
    .catch((res)=>{
      alert("连接工作资讯列表失败");
    })
  }
};

export const getAdvertisement = () => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: 'getAdvertise.php'
    })
    .then((res)=>{
      dispatch(addAdvertisementList(res.data));
    })
    .catch((res)=>{
      alert("连接广告列表失败");
    })
  }
};

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
      alert("连接职位列表失败");
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
      alert("获取地区月薪失败");
    })
  }
};