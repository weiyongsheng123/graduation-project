import React, { PureComponent } from 'react';
import { ScrollTop, Suggest } from './style';
import { connect } from 'react-redux';
import { changeSuspension } from './store/actionCreators';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';

class Suspension extends PureComponent {


  render () {
    const { isShow } = this.props;
    const backTop = '回到顶部';
    const suggest = '意见反馈';
    return (
      <div>
       {
         isShow ? <div>
                    <Tooltip placement="left" title={backTop}>
                      <ScrollTop onClick={this.handleScrollTop}><i className="iconfont">&#xe732;</i></ScrollTop>
                    </Tooltip>
                    <Link to="/feedback">
                      <Tooltip placement="left" title={suggest}>
                        <Suggest><i className="iconfont">&#xe614;</i></Suggest>
                      </Tooltip>
                    </Link>
                  </div>
                  : null
       }
      </div>
    )
  };
  handleScrollTop() {
    window.scrollTo( 0, 0);
  };
  componentDidMount () {
    window.addEventListener('scroll',this.props.showScoll);
  };
  componentWillUnmount () {
    window.removeEventListener('scroll',this.props.showScoll);
  };
};

const mapState = (state) => ({
  isShow: state.getIn(['suspension','isShow'])
});

const mapDispatch = (dispatch) => {
  return {
    showScoll () {
      if(document.documentElement.scrollTop >= 300) {
        dispatch(changeSuspension(true))
      }
      else {
        dispatch(changeSuspension(false))
      }
    }
  }
}

export default connect(mapState,mapDispatch)(Suspension);
