import React, { PureComponent } from 'react';
import { DescArea, DescImg, DescInfo, DescDetail, EditArea, EditDetail, InputDiv } from '../style';
import { Select, Button, Input, DatePicker } from 'antd';
import moment from 'moment';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { modifyCompanyDetail, changeModifyCompany } from '../store/actionCreators';
import { changeAjax } from '../../../common/ajax/store/actionCreators';

class CompanyDesc extends PureComponent {
  constructor (props) {
    super(props);
    this.state={
      changeShow: false,
      modifyData: {
        name: '',
        area: '',
        direction: '',
        beginTime: '',
        scale: '',
        desc: ''
      },
      file: null,
      submit: false,
      first: true
    };
    this.hideEdit = this.hideEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeArea = this.handleChangeArea.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.submitModify = this.submitModify.bind(this);
  }
  render () {
    const { TextArea } = Input;
    const Option = Select.Option;
    const InputGroup = Input.Group;
    const { company, areaList, routerId } = this.props;
    const { submit, modifyData } = this.state;
    const newCompany = company.toJS();
    const dateFormat = 'YYYY-MM-DD';
    for (let item in newCompany) {
      if (!newCompany[item]) {
        newCompany[item] = '[空]';
      }
    }
    if (newCompany['logoUrl'] === '[空]') {
      newCompany['logoUrl'] = './files/image/companyLogoUrl.jpg';
    }
    return (
      <DescArea>
        <DescImg src={newCompany['logoUrl']} alt={newCompany['name']}/>
        <DescInfo>
          <p><span>公司名称：</span>{newCompany['name']}</p>
          <p><span>从业方向：</span>{newCompany['direction']}</p>
          <p><span>创办时间：</span>{newCompany['beginTime']}</p>
          <p><span>规模类别：</span>{newCompany['scale']}</p>
        </DescInfo>
        <DescDetail>
          <p>简介：</p>
          <div>
            {newCompany['desc']}
          </div>
        </DescDetail>
        {
          routerId === '0' ? <span className="edit" onClick={this.showEdit.bind(this)}>
                               <span className="iconfont">&#xe609;</span>
                               编辑
                             </span> :
                             null
        }
        <CSSTransition
            in={ this.state.changeShow }
            timeout={1000}
            classNames='fade'
            unmountOnExit
        >
          <EditArea>
            <EditDetail>
              <i className="iconfont close" onClick={this.hideEdit}>&#xe603;</i>
              <InputDiv className="marTop">
                <label htmlFor="name">公司名称</label>
                <Input className="input" value={modifyData['name']} onChange={this.handleChange} name="name" placeholder="请输入公司名称" allowClear />
                { submit && !modifyData['name'] ? <span className="warn">公司名称必填</span> : null }
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
                  value={modifyData['area']}
                >
                {
                  areaList.map((item)=>{
                    return (
                      <Option value={item} key={item}>{item}</Option>
                    )
                  })
                }
              </Select>
              { submit && !modifyData['area'] ? <span className="warn">地区必填</span> : null }
              </InputDiv>
              <InputDiv>
                <label htmlFor="direction">从业方向</label>
                <Input className="input" value={modifyData['direction']} onChange={this.handleChange} name="direction" placeholder="请输入从业方向" allowClear />
                { submit && !modifyData['direction'] ? <span className="warn">从业方向必填</span> : null }
              </InputDiv>
              <InputDiv>
                <label htmlFor="beginTime">创办时间</label>
                <InputGroup compact>
                  <DatePicker name="beginTime" value={moment(modifyData['beginTime'], dateFormat)} format={dateFormat} onChange={this.handleChangeDate} placeholder="请选择时间"/>
                </InputGroup>
                { submit && !modifyData['beginTime'] ? <span className="warn">创办时间必填</span> : null }
              </InputDiv>
              <InputDiv>
                <label htmlFor="scale">规模类别</label>
                <Input className="input" value={modifyData['scale']} onChange={this.handleChange} name="scale" placeholder="请输入人数及私/国企" allowClear />
                { submit && !modifyData['scale'] ? <span className="warn">规模类别必填</span> : null }
              </InputDiv>
              <InputDiv className="less">
                <label htmlFor="file">头像</label>
                <input className="file" onChange={this.uploadFile} type="file" name="file"/>
              </InputDiv>
              <InputDiv className="chooseMany">
                <label htmlFor="desc">简介</label>
                <TextArea rows={3} value={modifyData['desc']} onChange={this.handleChange} name="desc" placeholder="请输入对公司的简介"/>
                { submit && !modifyData['desc'] ? <span className="warn">简介必填</span> : null }
              </InputDiv>
              <InputDiv className="toRight">
                <Button onClick={this.submitModify}>提交</Button>
                <Button onClick={this.hideEdit}>取消</Button>
              </InputDiv>
            </EditDetail>
          </EditArea>
        </CSSTransition>
      </DescArea>
    )
  };
  placeholder () {
    const { company } = this.props;
    const NewCompany = company.toJS();
    const placeholderModify = {};
    placeholderModify['name'] = NewCompany['name'];
    placeholderModify['area'] = NewCompany['area'];
    placeholderModify['direction'] = NewCompany['direction'];
    placeholderModify['area'] = NewCompany['area'];
    placeholderModify['beginTime'] = NewCompany['beginTime'];
    placeholderModify['scale'] = NewCompany['scale'];
    placeholderModify['desc'] = NewCompany['desc'];
    this.setState({
      modifyData: placeholderModify,
      first: false
    })
  };
  componentDidMount () {
    const { loginOrNot } = this.props;
    if ( loginOrNot ) {
      this.placeholder();
    }
  }
  componentDidUpdate () {
    const { loginOrNot, modifyCompany, backState } = this.props;
    const { first } = this.state;
    if ( first && loginOrNot ) {
      this.placeholder();
    }
    if (modifyCompany) {
      this.setState({
        changeShow: false
      });
      window.onmousewheel = document.onmousewheel= () => {return true};
      backState();
    }
  }
  submitModify () {
    this.setState({
      submit: true
    });
    const newModify = {...this.state.modifyData};
    const { company, modify, ajaxSend } =this.props;
    const { file } = this.state;
    let success = true;
    for (let item in newModify) {
      if (newModify[item]) {
        continue;
      }
      else {
        success = false;
      }
    }
    if (success) {
      const NewCompany = company.toJS();
      const id = NewCompany['Id'];
      newModify['Id'] = id;
      modify(newModify,file);
      ajaxSend();
    }
  };
  handleChange (e) {
    const value = e.target.value;
    const name = e.target.name;
    const newModify = {...this.state.modifyData};
    newModify[name] = value;
    this.setState({
      modifyData: newModify
    })
  };
  handleChangeDate (date, dateString) {
    const name = 'beginTime';
    const newModify = {...this.state.modifyData};
    newModify[name] = dateString;
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
    this.setState({
      file: data
    })
  };
  showEdit () {
    this.setState({
      changeShow: true
    });
    window.onmousewheel = document.onmousewheel= () => {return false};
  };
  hideEdit () {
    this.setState({
      changeShow: false
    });
    window.onmousewheel = document.onmousewheel= () => {return true};
  };
}


const mapState = (state) => ({
  loginOrNot: state.getIn(['login','loginOrNot']),
  company: state.getIn(['login','company']),
  areaList: state.getIn(['home','areaList']),
  modifyCompany: state.getIn(['company','modifyCompany']),
  routerId: state.getIn(['company','routerId'])
});

const mapDispatch = (dispatch) => {
  return {
    modify (values,file) {
      dispatch(modifyCompanyDetail(values,file));
    },
    backState () {
     dispatch(changeModifyCompany(false));
    },
    ajaxSend () {
      dispatch(changeAjax('load'));
    }
  }
};

export default connect(mapState,mapDispatch)(CompanyDesc);
