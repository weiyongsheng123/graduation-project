import React, { PureComponent } from 'react';
import { InfoArea, InfoDesc } from '../style';
import { connect } from 'react-redux';

class PositionInfo extends PureComponent {

  render () {
    const { positionResumeList, nowPositionId } = this.props;
    let newPosition = positionResumeList.toJS();
    let info = '';
    let request = '';
    let benefits = '';
    let detailArea = '';
    if (newPosition.length) {
      let titleList = {};
      titleList = newPosition.find((item) => {
        if(item.Id === nowPositionId){
            return item;
        }
        else {
          return false;
        }
      });
      if (titleList) {
        var re = /[;.；。!！？?:：]/g;
        info = titleList['infomation'].replace(re,'<br/>');
        request = titleList['request'].replace(re,'<br/>');
        benefits = titleList['benefits'].replace(re,'<br/>');
        detailArea = titleList['detailArea'].replace(re,'<br/>');
      }
    }
    return (
      <InfoArea>
        <InfoDesc>
          <p><span className="iconfont">&#xe618;</span>职位信息</p>
          <div className="content" dangerouslySetInnerHTML={{__html: info}}>
          </div>
        </InfoDesc>
        <InfoDesc>
          <p><span className="iconfont">&#xe6a2;</span>职位要求</p>
          <div className="content" dangerouslySetInnerHTML={{__html: request}}>
          </div>
        </InfoDesc>
        <InfoDesc>
          <p><span className="iconfont">&#xe6a4;</span>福利待遇</p>
          <div className="content" dangerouslySetInnerHTML={{__html: benefits}}>
          </div>
        </InfoDesc>
        <InfoDesc>
          <p><span className="iconfont">&#xe62e;</span>详细地址</p>
          <div className="content" dangerouslySetInnerHTML={{__html: detailArea}}>
          </div>
        </InfoDesc>
      </InfoArea>
    )
  }
};

const mapState = (state) => ({
  positionResumeList: state.getIn(['search','positionResumeList']),
  nowPositionId: state.getIn(['positions','nowPositionId'])
});

const mapDispatch = (dispatch) => {
  return {
    
  }
};

export default connect(mapState,mapDispatch)(PositionInfo);
