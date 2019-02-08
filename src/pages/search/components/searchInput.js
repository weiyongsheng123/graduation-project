import React, { PureComponent } from 'react';
import { InputArea, LogoImg } from '../style';
import { connect } from 'react-redux';
import {
  Input, Select, Button
} from 'antd';

class LogoCity extends PureComponent {

  render () {
    const { logoUrl } = this.props;
    const InputGroup = Input.Group;
    const Option = Select.Option;
    return (
      <InputArea>
        <LogoImg src={logoUrl}/>
        <InputGroup compact>
          <Select defaultValue="Option1">
            <Option value="Option1">全部</Option>
            <Option value="Option2">城市</Option>
          </Select>
          <Input placeholder="请输入关键词,例如:JAVA,销售代表,行政助理等" />
          <Button type="primary" icon="search" />
        </InputGroup>
      </InputArea>
    )
  };
};

const mapState = (state) => ({
  logoUrl: state.getIn(['header','logoUrl'])
});

export default connect(mapState,null)(LogoCity);
