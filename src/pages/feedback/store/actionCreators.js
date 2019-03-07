import { SUBMIT_SUGGEST_INFO } from './actionTypes';
import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

export const changeFeedBackSuccess = (value) => ({
  type: SUBMIT_SUGGEST_INFO,
  value
})

export const submitSuggest = (values) =>{
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'https://recruit.applinzi.com/php/addSuggest.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      dispatch(changeAjax(''));
      if (res.data) {
        dispatch(changeFeedBackSuccess(true));
        message.success('提交成功，收到你的建议');
      }
      else {
        message.error('提交建议失败');
      }
    })
    .catch(()=> {
      message.warning('提交建议，连接网络失败');
    })
  }
}