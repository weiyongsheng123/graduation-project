import React, { PureComponent } from 'react';
import { InputArea,SuggestOption, SuggestItem } from '../style';
import { connect } from 'react-redux';
import {
  Input, Select, Button, Cascader
} from 'antd';
import {  } from '../store/actionCreators';

class InputSearch extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      
    };
  }
  render () {
    const { positionList, salaryList } = this.props;
    const InputGroup = Input.Group;
    const Option = Select.Option;
    const plist = positionList.toJS();
    const slist = salaryList.toJS();
    return (
      <InputArea>
        <InputGroup compact>
          <Select defaultValue="Option1">
            <Option value="Option1">全部</Option>
            <Option value="Option2">公司名</Option>
          </Select>
          <Input placeholder="请输入关键词,例如:JAVA,销售代表,行政助理等" />
          <Button type="primary" icon="search" />
        </InputGroup>
        <Cascader options={plist} changeOnSelect placeholder="请选择职位"/>
        <Select
          showSearch
          placeholder="请选择期望工资"
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          className="selectMoney"
        >
          {
            slist.map((item)=>{
              return (
                <Option key={item} value={item}>{item}</Option>
              )
            })
          }
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
    
  }
};

const mapState = (state) => ({
  positionList: state.getIn(['home','positionList']),
  salaryList: state.getIn(['home','salaryList'])
});

const mapDispatch = (dispatch) => {
  return {
    
  }
}

export default connect(mapState,mapDispatch)(InputSearch);
