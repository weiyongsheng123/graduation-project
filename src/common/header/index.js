import React, { PureComponent } from 'react';
import { HeaderWrapper, HeaderImg, HeaderPattern, HeaderLogin, HeaderHelp, HeaderLine } from './style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends PureComponent {

  render () {
    const { pattern } = this.props;
    return (
     <HeaderWrapper>
       <HeaderImg src="./files/logo1.png"/>
       <HeaderLine className="left">|</HeaderLine>
       <HeaderPattern>{pattern}</HeaderPattern>
       <Link to="/help"><HeaderHelp>帮助中心</HeaderHelp></Link>
       <HeaderLine className="right">&nbsp;&nbsp;&nbsp;</HeaderLine>
       <Link to="/"><HeaderLogin>首页</HeaderLogin></Link>
     </HeaderWrapper>
    )
  };
};

const mapState = (state) => ({
  pattern: state.getIn(['header','pattern'])
});

const mapDispatch = (dispatch) => {
  return {
    
  }
}

export default connect(mapState,mapDispatch)(Header);
