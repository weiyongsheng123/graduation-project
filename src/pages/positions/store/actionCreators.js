import { SHOW_POSITION_ID, CHANGE_POSITION_COMPANY } from './actionTypes';
import axios from 'axios';
import qs from 'qs';
import { fromJS } from 'immutable';
/*import { changeAjax } from '../../../common/ajax/store/actionCreators';*/

export const showPositionId = (Id) => ({
  type: SHOW_POSITION_ID,
  Id
});

export const changePositionCompanyData = (values) => ({
  type: CHANGE_POSITION_COMPANY,
  values: fromJS(values)
});

export const getPositionCompanyData = (Id) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:85/getCompanyDetail.php',
      data: qs.stringify({
        Id: Id
      })
    })
    .then((res)=>{
      if (res.data) {
        dispatch(changePositionCompanyData(res.data));
      }
      else {
        alert("获取相关企业信息失败");
      }
    })
    .catch((res)=>{
      alert("获取相关企业信息连接网络失败");
    })
  }
}
