import { CHANGE_PAGE, CHANGE_NEEDS,  CHANGE_TOTAL_PAGE, GET_NEW_POSITION_ARRAY, GET_RESUME_POSITION_ARRAY } from './actionTypes';
import axios from 'axios';
/*import qs from 'qs';*/
import { fromJS } from 'immutable';

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

export const getResumePositionList = () => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'getResumePositionList.php'
    })
    .then((res)=>{
      if (res.data) {
        dispatch(getResumePositionArray(res.data));
        dispatch(getNewPositionArray(res.data));
        dispatch(changeTotalPages(res.data));
      }
      else {
        alert("获取招聘职位列表失败");
      }
    })
    .catch((res)=>{
      alert("获取招聘职位列表连接网络失败");
    })
  }
}
