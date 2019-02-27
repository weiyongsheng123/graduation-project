import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { AdvertBackground, IconItem } from '../style';
import { changeHeaderPattern } from '../../../common/header/store/actionCreators';

class Advertbackground extends PureComponent {

  render () {
    const { pattern } = this.props;
    return (
      <AdvertBackground>
        <IconItem onClick={()=>this.changePattern('求职者端')} className={pattern === '求职者端' ? 'jobseek active' : 'jobseek'}><i className="iconfont">&#xe6d5;</i>求职者端</IconItem>
        <IconItem onClick={()=>this.changePattern('企业端')} className={pattern === '企业端' ? 'company active' : 'company'}><i className="iconfont">&#xe705;</i>企业端</IconItem>
      </AdvertBackground>
    )
  };
  changePattern (value) {
    this.props.changesPattern(value)
  }
};

const mapState = (state) => ({
  pattern: state.getIn(['header','pattern'])
});

const mapDispatch = (dispatch) => {
  return {
    changesPattern (value) {
      dispatch(changeHeaderPattern(value));
    }
  }
}

export default connect(mapState,mapDispatch)(Advertbackground);
