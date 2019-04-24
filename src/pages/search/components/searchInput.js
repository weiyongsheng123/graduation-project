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
          <Input placeholder="请输入关键词,例如:公司名,职位名等" onChange={this.handleChange}/>
          <Button type="primary" onClick={this.handleSearch} icon="search" />
        </InputGroup>
      </InputArea>
    )
  };
  handleSearch () {
    const { option, value } = this.state;
    const { positionResumeList, changeSort, areaNeed, salaryNeed, experienceNeed } = this.props;
    const newPosition = positionResumeList.toJS();
    let filterPosition = [];
    if (option === '全部') {
      filterPosition = newPosition.filter((item)=>{
        let result1 = item['title'].indexOf(value) !== -1;
        let result2 = item['position'].indexOf(value) !== -1;
        let result3 = item['companyName'].indexOf(value) !== -1;
        let request1 = true;
        let request2 = true;
        let request3 = true;
        if (areaNeed && areaNeed !== '不限' && item['area'] !== '不限') {
          request1 = item['area'] === areaNeed;
        };
        if (salaryNeed && salaryNeed !== '不限' && item['salary'] !== '不限') {
          request2 = item['salary'] === salaryNeed;
        };
        if (experienceNeed && experienceNeed !== '不限' && item['experience'] !== '不限') {
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
        let request1 = true;
        let request2 = true;
        let request3 = true;
        if (areaNeed && areaNeed !== '不限' && item['area'] !== '不限') {
          request1 = item['area'] === areaNeed;
        };
        if (salaryNeed && salaryNeed !== '不限' && item['salary'] !== '不限') {
          request2 = item['salary'] === salaryNeed;
        };
        if (experienceNeed && experienceNeed !== '不限' && item['experience'] !== '不限') {
          request3 = item['experience'] === experienceNeed;
        };
        let request = request1 && request2 && request3;
        return result && request;
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
  componentDidMount(){
    //组件挂载时候，注册keypress事件
      document.addEventListener('keypress',this.handleEnterKey);
  }
  componentWillUmount(){
    //组件卸载时候，注销keypress事件
      document.removeEventListener("keypress",this.handleEnterKey);
  }
  handleEnterKey = (e) => {
    if(e.keyCode === 13){ //主要区别就是这里，可以直接获取到keyCode的值
        this.handleSearch();
    }
  }
};

const mapState = (state) => ({
  positionResumeList: state.getIn(['search','positionResumeList']),
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
