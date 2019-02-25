import React, { PureComponent } from 'react';
import { InputArea, LogoImg } from '../style';
import { connect } from 'react-redux';
import {
  Input, Select, Button
} from 'antd';
import { getNewPositionArray, changeTotalPages } from '../store/actionCreators';

class SearchInput extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      option: '全部',
      value: ''
    };
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  render () {
    const InputGroup = Input.Group;
    const Option = Select.Option;
    return (
      <InputArea>
        <LogoImg src="./files/image/logo2.png"/>
        <InputGroup compact>
          <Select defaultValue="全部" onChange={this.handleChangeSelect}>
            <Option value="全部">全部</Option>
            <Option value="公司">公司</Option>
          </Select>
          <Input placeholder="请输入关键词,例如:JAVA,销售代表,行政助理等" onChange={this.handleChange}/>
          <Button type="primary" onClick={this.handleSearch} icon="search" />
        </InputGroup>
      </InputArea>
    )
  };
  handleSearch () {
    const { option, value } = this.state;
    const { positionList, changeSort, areaNeed, salaryNeed, experienceNeed } = this.props;
    console.log(areaNeed);
    console.log(salaryNeed);
    console.log(experienceNeed);
    const newPosition = positionList.toJS();
    let filterPosition = [];
    if (option === '全部') {
      filterPosition = newPosition.filter((item)=>{
        let result1 = item['title'].indexOf(value) !== -1;
        let result2 = item['position'].indexOf(value) !== -1;
        let result3 = item['companyName'].indexOf(value) !== -1;
        let request1 = true;
        let request2 = true;
        let request3 = true;
        if (areaNeed !== '不限' && item['area'] !== '不限') {
          request1 = item['area'] === areaNeed;
        };
        if (salaryNeed !== '不限' && item['salary'] !== '不限') {
          request2 = item['salary'] === salaryNeed;
        };
        if (experienceNeed !== '不限' && item['experience'] !== '不限') {
          request3 = item['experience'] === experienceNeed;
        };
        let result = result1 || result2 || result3;
        let request = request1 && request2 && request3;
        return result && request;
      })
    }
    else {
      filterPosition = newPosition.filter((item)=>{
        let result = item['companyName'].indexOf(value) !== -1;
        return result;
      })
    }
    changeSort(filterPosition);
  };
  handleChange (e) {
    let value = e.target.value;
    this.setState({
      value: value
    });
  };
  handleChangeSelect (e) {
    const value = `${e}`;
    this.setState({
      option: value
    });
  };
};

const mapState = (state) => ({
  positionList: state.getIn(['search','positionList']),
  areaNeed: state.getIn(['search','areaNeed']),
  salaryNeed: state.getIn(['search','salaryNeed']),
  experienceNeed: state.getIn(['search','experienceNeed'])
});

const mapDispatch = (dispatch) => {
  return {
    changeSort (values) {
      dispatch(getNewPositionArray(values));
      dispatch(changeTotalPages(values));
    }
  }
};

export default connect(mapState,mapDispatch)(SearchInput);
