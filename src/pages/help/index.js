import React, { PureComponent } from 'react';
import { HelpWrapper } from './style';
import Header from '../../common/header';
import Ajax from '../../common/ajax';
import Suspension from '../../common/suspension';
import HelpHead from './components/helpHead';
import HelpPassword from './components/helpPassword';
import HelpInfo from './components/helpInfo';
import HelpAnswer from './components/helpAnswer'

class Help extends PureComponent {

  render () {
    return (
      <HelpWrapper>
        <Header/>
        <HelpHead/>
        <HelpPassword/>
        <HelpInfo/>
        <HelpAnswer/>
        <Ajax/>
        <Suspension/>
      </HelpWrapper>
    )
  }
};

export default Help;