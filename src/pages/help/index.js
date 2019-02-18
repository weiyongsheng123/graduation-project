import React, { PureComponent } from 'react';
import { HelpWrapper } from './style';
import Header from '../../common/header';
import Ajax from '../../common/ajax';
import HelpHead from './components/helpHead';
import HelpPassword from './components/helpPassword';
import HelpInfo from './components/helpInfo';

class Help extends PureComponent {

  render () {
    return (
      <HelpWrapper>
        <Header/>
        <HelpHead/>
        <HelpPassword/>
        <HelpInfo/>
        <Ajax/>
      </HelpWrapper>
    )
  }
};

export default Help;