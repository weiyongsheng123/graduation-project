import React, { PureComponent } from 'react';
import { ResumeNameArea, ResumeNameAreaProfile, ResumeNameAreaEdit, InputDiv } from '../style';
import { Input, Radio, InputNumber, Select, Button } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { test } from '../store/actionCreators';

class ResumeName extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
        fade: 1,
        modifyData: {
          name: '',
          sex: '',
          age: '',
          area: '',
          experience: '',
          telNumber: '',
          email: ''
        },
        file: null
      };
      this.showProfile = this.showProfile.bind(this);
      this.showEdit = this.showEdit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeArea = this.handleChangeArea.bind(this);
      this.handleChangeExperience = this.handleChangeExperience.bind(this);
      this.submitModify = this.submitModify.bind(this);
      this.handleChangeAge = this.handleChangeAge.bind(this);
      this.uploadFile = this.uploadFile.bind(this);
  }
  render () {
   const RadioGroup = Radio.Group;
   const Option = Select.Option;
   const { jobSeek, areaList, experienceList } = this.props;
   const newJobseek = jobSeek.toJS();
   for (let item in newJobseek) {
     if (!newJobseek[item]) {
       newJobseek[item] = '[空]';
     }
   }
   if (newJobseek['photo'] === '[空]') {
     newJobseek['photo'] = './files/image/headphoto.png';
   }
    return (
      <ResumeNameArea id="resumename">
        <CSSTransition
            in={ this.state.fade === 1 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
          >
          <ResumeNameAreaProfile>
            <img src={ newJobseek['photo'] } alt=""/>
            <p className="one">
              <span title={ newJobseek['name'] }>{ newJobseek['name'] }</span>
            </p>
            <p className="two">
              <span>
                { newJobseek['sex'] }
              </span>
              <span>{ newJobseek['age'] }岁</span>
              <span>
                { newJobseek['area'] }
              </span>
              <span>{ newJobseek['experience'] }</span>
            </p>
            <p className="three">
              <i className="iconfont phone">&#xe6ba;</i>
              <span>{ newJobseek['telNumber'] }</span>
              <i className="iconfont email">&#xe64b;</i>
              <span>{ newJobseek['email'] }</span>
            </p>
            <span className="four" onClick={this.showEdit}>
              <span className="iconfont">&#xe609;</span>
              编辑
            </span>
          </ResumeNameAreaProfile>
        </CSSTransition>
        <CSSTransition
            in={ this.state.fade === 2 }
            timeout={1000}
            classNames='fade'
            unmountOnExit
        >
          <ResumeNameAreaEdit>
            <i onClick={this.showProfile} className="iconfont close">&#xe603;</i>
            <InputDiv>
              <label htmlFor="name">用户名</label>
              <Input className="input" name="name" onChange={this.handleChange} placeholder="请输入姓名" allowClear />
            </InputDiv>
            <InputDiv>
              <label htmlFor="sex">性别</label>
              <RadioGroup name="sex" onChange={this.handleChange} >
                <Radio name="sex" value='男'>男</Radio>
                <Radio name="sex" value='女'>女</Radio>
              </RadioGroup>
            </InputDiv>
            <InputDiv>
              <label htmlFor="age">年龄</label>
              <InputNumber name="age" min={1} max={100} defaultValue={23} onChange={this.handleChangeAge}/>
            </InputDiv>
            <InputDiv>
              <label htmlFor="area">地区</label>
              <Select
                name="area"
                showSearch
                placeholder="请选择地区"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                onChange={this.handleChangeArea}
              >
                {
                  areaList.map((item)=>{
                    return (
                      <Option value={item} key={item}>{item}</Option>
                    )
                  })
                }
              </Select>
            </InputDiv>
            <InputDiv>
              <label htmlFor="experience">经验</label>
              <Select
                name="experience"
                showSearch
                placeholder="请选择经验时长"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                onChange={this.handleChangeExperience}
              >
                {
                  experienceList.map((item)=>{
                    return (
                      <Option value={item} key={item}>{item}</Option>
                    )
                  })
                }
              </Select>
            </InputDiv>
            <InputDiv>
              <label htmlFor="phone">手机</label>
              <Input className="input" name="phone" placeholder="请输入手机号" onChange={this.handleChange} allowClear />
            </InputDiv>
            <InputDiv>
              <label htmlFor="email">邮箱</label>
              <Input className="input" name="email" type="email" onChange={this.handleChange} placeholder="请输入邮箱" allowClear />
            </InputDiv>
            <InputDiv>
              <label htmlFor="file">头像</label>
              <input className="file" onChange={this.uploadFile} type="file" name="file"/>
            </InputDiv>
            <InputDiv>
              <Button onClick={this.submitModify}>提交</Button>
              <Button onClick={this.showProfile}>取消</Button>
            </InputDiv>
          </ResumeNameAreaEdit>
        </CSSTransition>
      </ResumeNameArea>
    )
  };
  submitModify () {
    const newModify = {...this.state.modifyData};
    this.props.text(this.state.file);
  }
  handleChangeAge (e) {
    const value = e;
    const name = 'age';
    const newModify = {...this.state.modifyData};
    newModify[name] = value;
    this.setState({
      modifyData: newModify
    })
  }
  handleChange (e) {
    const value = e.target.value;
    const name = e.target.name;
    const newModify = {...this.state.modifyData};
    newModify[name] = value;
    this.setState({
      modifyData: newModify
    })
  };
  handleChangeExperience (e) {
    const value = `${e}`;
    const name = 'experience';
    const newModify = {...this.state.modifyData};
    newModify[name] = value;
    this.setState({
      modifyData: newModify
    })
  };
  handleChangeArea (e) {
    const value = `${e}`;
    const name = 'area';
    const newModify = {...this.state.modifyData};
    newModify[name] = value;
    this.setState({
      modifyData: newModify
    })
  };
  uploadFile (e) {
    let file = e.target.files[0];
    let data = new FormData();
    data.append("file",file);
    data.append("title","thisphoto");
    /*this.props.text(data);*/
    this.setState({
      file: data
    })
  };
  showEdit () {
    this.setState({
      fade: 2
    })
  };
  showProfile () {
    this.setState({
      fade: 1
    })
  };
};

const mapState = (state) => ({
  jobSeek: state.getIn(['login','jobSeek']),
  areaList: state.getIn(['home','areaList']),
  experienceList: state.getIn(['home','experienceList'])
});

const mapDispatch = (dispatch) => {
  return {
    text (file) {
      dispatch(test(file));
    }
  }
};

export default connect(mapState,mapDispatch)(ResumeName);
