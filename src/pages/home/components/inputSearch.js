import React, { PureComponent } from 'react';
import { InputArea,SuggestOption, SuggestItem } from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Input, Select, Button, Cascader
} from 'antd';
import {  } from '../store/actionCreators';
import { getNewPositionArray, changeTotalPages } from '../../search/store/actionCreators';

class InputSearch extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      option: '全部',
      value: '',
      positionNeed: '',
      salaryNeed: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePosition = this.handleChangePosition.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  render () {
    const { positionList, salaryList, guessSearch } = this.props;
    const InputGroup = Input.Group;
    const Option = Select.Option;
    const plist = positionList.toJS();
    const slist = salaryList.toJS();
    return (
      <InputArea>
        <InputGroup compact>
          <Select defaultValue="全部" onChange={(e)=>this.handleChangeSelect('option',e)}>
            <Option value="全部">全部</Option>
            <Option value="公司">公司</Option>
          </Select>
          <Input placeholder="请输入关键词,例如:公司名,职位名等" onChange={this.handleChange}/>
          <Link to="/search">
            <Button type="primary" onClick={this.handleSearch} icon="search" />
          </Link>
        </InputGroup>
        <Cascader options={plist} onChange={this.handleChangePosition} changeOnSelect placeholder="请选择职位"/>
        <Select
          showSearch
          placeholder="请选择期望工资"
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          className="selectMoney"
          onChange={(e)=>this.handleChangeSelect('salaryNeed',e)}
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
          {
            guessSearch.map((item)=>{
              return (
                <Link to="/search" key={item}>
                  <SuggestItem onClick={()=>this.guessFind(item)}>{item}</SuggestItem>
                </Link>
              )
            })
          }
        </SuggestOption>
      </InputArea>
    )
  };
  handleChange (e) {
    const value = e.target.value;
    this.setState({
      value: value
    })
  };
  handleChangeSelect (name,e) {
    const value = `${e}`;
    this.setState({
      [name]: value
    })
  };
  handleChangePosition (value) {
    let positionString = '';
    for (let i =0;i<value.length;i++) {
      positionString = positionString + value[i];
    }
    this.setState({
      positionNeed: positionString
    })
  };
  handleSearch () {
    const { value, option, positionNeed, salaryNeed } = this.state;
    const { positionResumeList, changeSort } = this.props;
    const newPosition = positionResumeList.toJS();
    let filterPosition = [];
     if (option === '全部') {
      filterPosition = newPosition.filter((item)=>{
        let result1 = item['title'].indexOf(value) !== -1;
        let result2 = item['position'].indexOf(value) !== -1;
        let result3 = item['companyName'].indexOf(value) !== -1;
        let request1 = true;
        let request2 = true;
        if (salaryNeed && salaryNeed !== '不限' && item['salary'] !== '不限') {
          request1 = item['salary'] === salaryNeed;
        };
        if (positionNeed) {
          request2 = item['position'].indexOf(positionNeed) !== -1;
        };
        let result = result1 || result2 || result3;
        let request = request1 && request2;
        return result && request;
      })
    }
    else {
      filterPosition = newPosition.filter((item)=>{
        let result = item['companyName'].indexOf(value) !== -1;
        let request1 = true;
        let request2 = true;
        if (salaryNeed && salaryNeed !== '不限' && item['salary'] !== '不限') {
          request1 = item['salary'] === salaryNeed;
        };
        if (positionNeed) {
          request2 = item['position'].indexOf(positionNeed) !== -1;
        };
        let request = request1 && request2;
        return result && request;
      })
    }
    changeSort(filterPosition);
  };
  guessFind (value) {
    console.log(value);
    const { positionResumeList, changeSort } = this.props;
    const newPosition = positionResumeList.toJS();
    let filterPosition = [];
    filterPosition = newPosition.filter((item)=>{
      let result1 = item['title'].indexOf(value) !== -1;
      let result2 = item['position'].indexOf(value) !== -1;
      let result3 = item['companyName'].indexOf(value) !== -1;
      let result = result1 || result2 || result3;
      return result;
    });
    changeSort(filterPosition);
  }
  componentDidMount () {
    
  }
};

const mapState = (state) => ({
  positionList: state.getIn(['home','positionList']),
  positionResumeList: state.getIn(['search','positionResumeList']),
  salaryList: state.getIn(['home','salaryList']),
  guessSearch: state.getIn(['home','guessSearch'])
});

const mapDispatch = (dispatch) => {
  return {
    changeSort (values) {
      dispatch(getNewPositionArray(values));
      dispatch(changeTotalPages(values));
    }
  }
}

export default connect(mapState,mapDispatch)(InputSearch);
