import React, { PureComponent } from 'react';
import { TitleArea, TitleContinue, TitleTitle, TitleCompany, TitleButton } from '../style';
import { Button } from 'antd';
import { connect } from 'react-redux';

class PositionTitle extends PureComponent {

  render () {
    const { pattern } = this.props;
    return (
      <TitleArea>
        <TitleContinue>
          <i className="iconfont">&#xe61a;</i>
          招聘中
        </TitleContinue>
        <TitleTitle>
          <span className="left">急招web后端开发人员</span>
          <span className="right"><i className="iconfont">&#xe615;</i>3000-5000元/月</span>
        </TitleTitle>
        <TitleCompany>
          <span className="left">阿里巴巴集团公司</span>
          <p className="right">
            <span>本科</span>
            <span>三年经验</span>
            <span>蚌埠</span>
            <span>3人</span>
          </p>
        </TitleCompany>
        <TitleButton>
          <Button disabled={pattern === '求职者端' ? false: true} title={pattern === '求职者端' ? "立刻申请" : "企业端不可选"} type="primary">立即申请</Button>
        </TitleButton>
      </TitleArea>
    )
  }
};

const mapState = (state) => ({
  pattern: state.getIn(['header','pattern'])
});

const mapDispatch = (dispatch) => {
  return {
   
  }
};

export default connect(mapState,mapDispatch)(PositionTitle);
