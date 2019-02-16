import React, { PureComponent } from 'react';
import { InputArea,SuggestOption, SuggestItem } from '../style';
import { connect } from 'react-redux';
import {
  Input, Select, Button, Cascader
} from 'antd';
import { getPosition } from '../store/actionCreators';

class InputSearch extends PureComponent {

  render () {
    const { positionList } = this.props;
    const InputGroup = Input.Group;
    const Option = Select.Option;
    const list = positionList.toJS();
    return (
      <InputArea>
        <InputGroup compact>
          <Select defaultValue="Option1">
            <Option value="Option1">全部</Option>
            <Option value="Option2">城市</Option>
          </Select>
          <Input placeholder="请输入关键词,例如:JAVA,销售代表,行政助理等" />
          <Button type="primary" icon="search" />
        </InputGroup>
        <Cascader options={list} changeOnSelect placeholder="请选择职位"/>
        <Select
          showSearch
          placeholder="请选择期望工资"
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          className="selectMoney"
        >
          <Option value="0-2000">0-2000元</Option>
          <Option value="2000-4000">2000-4000元</Option>
          <Option value="4000-6000">4000-6000元</Option>
        </Select>
        <SuggestOption>
          猜你在找:
          <SuggestItem>web前端</SuggestItem>
          <SuggestItem>web后端</SuggestItem>
          <SuggestItem>大数据开发</SuggestItem>
          <SuggestItem>数据库开发</SuggestItem>
          <SuggestItem>web前端</SuggestItem>
          <SuggestItem>web后端</SuggestItem>
          <SuggestItem>大数据开发</SuggestItem>
          <SuggestItem>数据库开发</SuggestItem>
        </SuggestOption>
      </InputArea>
    )
  };
  componentDidMount () {
    this.props.getPositionList();
  }
};

const mapState = (state) => ({
  positionList: state.getIn(['home','positionList'])
});

const mapDispatch = (dispatch) => {
  return {
    getPositionList () {
      dispatch(getPosition());
    }
  }
}

export default connect(mapState,mapDispatch)(InputSearch);
