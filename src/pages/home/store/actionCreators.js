import { CHANGE_HOME_FIRST_TIP, ADD_POSITION_LIST, ADD_ARSAEX_LIST, ADD_ADVERTISEMENT_LIST, ADD_RECOMMENDWORK_LIST, ADD_RECOMMENDSKILL_LIST } from './actionTypes';
import axios from 'axios';
import { message } from 'antd';
import { fromJS } from 'immutable';

export const changeHomeFirstTip = (value) => ({
  type: CHANGE_HOME_FIRST_TIP,
  value
});

const addPositionList = (array) => ({
  type: ADD_POSITION_LIST,
  array: fromJS(array)
});

const addDataList = (salary,area,experience,guessSearch) => ({
  type: ADD_ARSAEX_LIST,
  salary: fromJS(salary),
  area: fromJS(area),
  experience: fromJS(experience),
  guessSearch: fromJS(guessSearch)
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
      method: 'post',
      url: 'https://recruit.applinzi.com/php/getRecommendSkill.php'
    })
    .then((res)=>{
      dispatch(addRecommendSkillList(res.data));
    })
    .catch((res)=>{
      message.warning('获取面试技巧列表连接网络失败');
    })
  }
}

export const getRecommendWork = () => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'https://recruit.applinzi.com/php/getRecommendWork.php'
    })
    .then((res)=>{
      dispatch(addRecommendWorkList(res.data));
    })
    .catch((res)=>{
      message.warning('获取工作资讯列表连接网络失败');
    })
  }
};

export const getAdvertisement = () => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'https://recruit.applinzi.com/php/getAdvertise.php'
    })
    .then((res)=>{
      dispatch(addAdvertisementList(res.data));
    })
    .catch((res)=>{
      message.warning('获取广告列表连接网络失败');
    })
  }
};

export const getPosition = () => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'https://recruit.applinzi.com/php/positionList.php'
    })
    .then((res)=>{
      dispatch(addPositionList(res.data));
    })
    .catch((res)=>{
      message.warning('获取职位列表连接网络失败');
    })
  }
};

export const getAreaSalaryExperience = () => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'https://recruit.applinzi.com/php/areaSalaryExperience.php'
    })
    .then((res)=>{
      const salary = res.data[0];
      const area = res.data[1];
      const experience = res.data[2];
      const guessSearch = res.data[3];
      dispatch(addDataList(salary,area,experience,guessSearch));
    })
    .catch((res)=>{
      message.warning('获取地区月薪等数据连接网络失败');
    })
  }
};