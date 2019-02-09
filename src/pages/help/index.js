import React, { PureComponent } from 'react';
import { HelpWrapper } from './style';
import Header from '../../common/header';

class Help extends PureComponent {

  render () {
    return (
      <HelpWrapper>
        <Header/>
      </HelpWrapper>
    )
  }
};

export default Help;