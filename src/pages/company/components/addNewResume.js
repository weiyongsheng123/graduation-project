import React, { PureComponent } from 'react';
import { InputDiv, NewArea, NewInputs, InputTitle } from '../style';
import { Button, Input, Select, InputNumber } from 'antd';
import { connect } from 'react-redux';
import { showOrHide } from '../store/actionCreators';
import { CSSTransition } from 'react-transition-group';

class AddNewResume extends PureComponent {

  render () {
    const Option = Select.Option;
    const { TextArea } = Input;
    const { showEdit, newResumeShow } = this.props;
    return (
        <CSSTransition
          in={ newResumeShow }
          timeout={1000}
          classNames='fade'
          unmountOnExit
          >
          <NewArea>
            <NewInputs>
              <InputTitle>
                发布新的招聘启事
                <i className="iconfont" onClick={()=>showEdit(false)}>&#xe603;</i>
              </InputTitle>
              <InputDiv>
                <label htmlFor="positionName">职位名</label>
                <Input className="input" name="companyName" placeholder="请输入所需职位" allowClear />
              </InputDiv>
              <InputDiv>
                <label htmlFor="positionSalary">薪资</label>
                <Select
                  name="positionSalary"
                  showSearch
                  placeholder="请选择职位工资"
                  optionFilterProp="children"
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  className="selectMoney"
                >
                  <Option value="0-2000">0-2000元</Option>
                  <Option value="2000-4000">2000-4000元</Option>
                  <Option value="4000-6000">4000-6000元</Option>
                </Select>
              </InputDiv>
              <InputDiv>
                <label htmlFor="education">学历</label>
                <Select
                  name="education"
                  showSearch
                  placeholder="请选择学历要求"
                  optionFilterProp="children"
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  <Option value="大专">大专</Option>
                  <Option value="本科">本科</Option>
                  <Option value="研究生">研究生</Option>
                </Select>
              </InputDiv>
              <InputDiv>
                  <label htmlFor="experience">经验</label>
                  <Select
                    name="experience"
                    showSearch
                    placeholder="请选择经验要求"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="无经验">无经验</Option>
                    <Option value="3-6个月">3-6个月</Option>
                    <Option value="6个月-1年">6个月-1年</Option>
                  </Select>
                </InputDiv>
                <InputDiv>
                  <label htmlFor="numberPeople">人数</label>
                  <InputNumber name="numberPeople" min={1} max={100} defaultValue={1}/>
                </InputDiv>
                <InputDiv>
                  <label htmlFor="area">地区</label>
                  <Select
                    name="area"
                    showSearch
                    placeholder="请选择地区"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="淮南">淮南</Option>
                    <Option value="合肥">合肥</Option>
                    <Option value="蚌埠">蚌埠</Option>
                  </Select>
                </InputDiv>
                <InputDiv className="center">
                  <label htmlFor="areaDetail">详细地址</label>
                  <Input className="input" name="areaDetail" placeholder="请输入工作详细地址" allowClear />
                </InputDiv>
                <br/>
                <InputDiv className="chooseMany">
                  <label htmlFor="projectdesc">职位信息</label>
                  <TextArea rows={6} name="projectdesc" placeholder="请输入在此项目工作中的具体描述"/>
                </InputDiv>
                <InputDiv className="chooseMany">
                  <label htmlFor="projectdesc">职位要求</label>
                  <TextArea rows={6} name="projectdesc" placeholder="请输入在此项目工作中的具体描述"/>
                </InputDiv>
                <InputDiv className="chooseMany">
                  <label htmlFor="projectdesc">公司福利</label>
                  <TextArea rows={6} name="projectdesc" placeholder="请输入在此项目工作中的具体描述"/>
                </InputDiv>
                <InputDiv className="center">
                  <Button onClick={()=>showEdit(false)}>添加</Button>
                  <Button onClick={()=>showEdit(false)}>取消</Button>
                </InputDiv>
            </NewInputs>
          </NewArea>
        </CSSTransition>
    )
  };
};

const mapState = (state) => ({
  newResumeShow: state.getIn(['company','newResumeShow'])
});

const mapDispatch = (dispatch) => {
  return {
    showEdit (show) {
      dispatch(showOrHide(show))
    }
  }
};

export default connect(mapState,mapDispatch)(AddNewResume);
