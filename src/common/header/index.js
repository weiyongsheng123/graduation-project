import React, { PureComponent } from 'react';
import { HeaderWrapper, HeaderImg, HeaderPattern, HeaderLogin, HeaderHelp, HeaderLine } from './style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends PureComponent {

  render () {
    const { logoUrl, pattern } = this.props;
    return (
     <HeaderWrapper>
       <HeaderImg src={logoUrl}/>
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
  logoUrl: state.getIn(['header','logoUrl']),
  pattern: state.getIn(['header','pattern'])
});

export default connect(mapState,null)(Header);
