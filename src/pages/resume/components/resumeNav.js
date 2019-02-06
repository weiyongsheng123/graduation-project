import React, { PureComponent } from 'react';
import { ResumeNavWrapper, NavUl, NavLi, CallPolice } from '../style';

class ResumeNav extends PureComponent {
  constructor (props) {
    super(props);
    this.state={
      select: 0,
      navList: [
        {
          name: '基本信息',
          href: '#resumename'
        },
        {
          name: '求职意向',
          href: '#resumeIntent'
        },
        {
          name: '工作经验',
          href: '#resumework'
        },
        {
          name: '项目经验',
          href: '#resumeproject'
        },
        {
          name: '教育经历',
          href: '#resumeeducate'
        },
        {
          name: '附件提交',
          href: '#resumeupload'
        }
      ]
    }
  }
  render () {
    const { select, navList} = this.state;
    return (
      <ResumeNavWrapper>
        <NavUl>
          {
            navList.map((item,index)=>{
              return (
                <NavLi key={item.name} onClick={this.handleSelect.bind(this,index)}>
                  <a href={item.href} className={select === index? 'select' : ''}>{item.name}</a>
                </NavLi>
              )
            })
          }
        </NavUl>
        <CallPolice>
          <i className="police"></i>
          <span>网络110报警服务</span>
        </CallPolice>
      </ResumeNavWrapper>
    )
  };
  handleSelect (index) {
    this.setState({
      select: index
    })
  }
};

export default ResumeNav;