import { SUBMIT_SUGGEST_INFO } from './actionTypes';
import axios from 'axios';
import qs from 'qs';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

export const changeFeedBackSuccess = (value) => ({
  type: SUBMIT_SUGGEST_INFO,
  value
})

export const submitSuggest = (values) =>{
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'addSuggest.php',
      data: qs.stringify(values)
    })
    .then((res) => {
      dispatch(changeFeedBackSuccess(true));
      dispatch(changeAjax(false));
    })
    .catch(()=> {
      alert("连接失败");
    })
  }
}