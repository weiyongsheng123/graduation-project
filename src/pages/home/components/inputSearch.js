import React, { PureComponent } from 'react';
import { InputArea,SuggestOption, SuggestItem } from '../style';
import { connect } from 'react-redux';
import {
  Input, Select, Button, Cascader
} from 'antd';

class InputSearch extends PureComponent {

  render () {
    const InputGroup = Input.Group;
    const Option = Select.Option;
    const options = [{
       value: '销售/客服/技术支持',
       label: '销售/客服/技术支持',
       children: [{
         value: '销售管理',
         label: '销售管理',
         children: [{
           value: '销售经理/主管',
           label: '销售经理/主管',
         }],
       }],
     }, {
       value: '计算机/互联网/通信/电子',
       label: '计算机/互联网/通信/电子',
       children: [{
         value: '互联网',
         label: '互联网',
         children: [{
           value: '手机应用开发工程师',
           label: '手机应用开发工程师',
         }],
       }],
     }];

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
        <Cascader options={options} changeOnSelect placeholder="请选择职位"/>
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
};

const mapState = (state) => ({
  
});

export default connect(mapState,null)(InputSearch);
