import React, { PureComponent } from 'react';
import { HeaderWrapper, HeaderImg, HeaderPattern, HeaderLogin, HeaderHelp, HeaderLine } from './style';
import { connect } from 'react-redux';

class Header extends PureComponent {

  render () {
    const { logoUrl, pattern } = this.props;
    return (
     <HeaderWrapper>
       <HeaderImg src={logoUrl}/>
       <HeaderLine className="left">|</HeaderLine>
       <HeaderPattern>{pattern}</HeaderPattern>
       <HeaderHelp>帮助中心</HeaderHelp>
       <HeaderLine className="right">&nbsp;&nbsp;&nbsp;</HeaderLine>
       <HeaderLogin>首页</HeaderLogin>
     </HeaderWrapper>
    )
  };
};

const mapState = (state) => ({
  logoUrl: state.getIn(['header','logoUrl']),
  pattern: state.getIn(['header','pattern'])
});

export default connect(mapState,null)(Header);
