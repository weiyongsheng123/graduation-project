import { CHANGE_SEARCH_FIRST_TIP, CHANGE_PAGE, CHANGE_NEEDS,  CHANGE_TOTAL_PAGE, GET_NEW_POSITION_ARRAY, GET_RESUME_POSITION_ARRAY } from './actionTypes';
import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';
import { fromJS } from 'immutable';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

export const changeSearchFirstTip = (value) => ({
  type: CHANGE_SEARCH_FIRST_TIP,
  value
});

export const changeTotalPages = (list) => ({
  type: CHANGE_TOTAL_PAGE,
  totalPages: Math.ceil(list.length /10 )
});

export const changePages = (page) => ({
  type: CHANGE_PAGE,
  page
});

export const changeNeeds = (values) => ({
  type: CHANGE_NEEDS,
  values
});

export const getNewPositionArray = (values) => ({
  type: GET_NEW_POSITION_ARRAY,
  values: fromJS(values)
});

export const getResumePositionArray = (values) => ({
  type: GET_RESUME_POSITION_ARRAY,
  values: fromJS(values)
});

export const addNewApply = (values) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'https://recruit.applinzi.com/php/addApply.php',
      data: qs.stringify(values)
    })
    .then((res)=>{
      dispatch(changeAjax(''));
      switch (res.data) {
        case 'E':
          message.warning('已经申请过了');break;
        case 'T':
          message.success('申请成功');break;
        default:
          message.error('申请出错,失败');
      }
    })
    .catch((res)=>{
      message.warning('申请失败，连接网络出错');
    })
  }
};

export const getResumePositionList = () => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'https://recruit.applinzi.com/php/getResumePositionList.php'
    })
    .then((res)=>{
      if (res.data) {
        dispatch(getResumePositionArray(res.data));
        dispatch(getNewPositionArray(res.data));
        dispatch(changeTotalPages(res.data));
      }
      else {
        message.error('获取招聘职位列表失败');
      }
    })
    .catch((res)=>{
      message.warning('获取招聘职位列表连接网络失败');
    })
  }
};
