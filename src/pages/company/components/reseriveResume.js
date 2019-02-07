import React, { PureComponent } from 'react';
import { ReseriveArea, ReseriveTitle, ReseriveList, ReseriveItem } from '../style';

class CompanyReserive extends PureComponent {
  constructor (props) {
      super(props);
      this.state = {
        list: [
          {
            reseriveName: '张三',
            reserivePosition: 'web前端高级开发',
            reseriveTime: '2017-9-12'
          },
          {
            reseriveName: '李四',
            reserivePosition: 'web前端高级开发',
            reseriveTime: '2017-9-12'
          },
          {
            reseriveName: '王五',
            reserivePosition: 'web前端高级开发',
            reseriveTime: '2017-9-12'
          },
          {
            reseriveName: '赵六',
            reserivePosition: 'web前端高级开发',
            reseriveTime: '2017-9-12'
          }
        ]
      }
    }
  render () {
  
    return (
      <ReseriveArea>
        <ReseriveTitle>
          <span className="iconfont">&#xe629;</span>
          已收到的申请
        </ReseriveTitle>
        <ReseriveList>
          {
            this.state.list.map((item,index)=>{
              return (
                <ReseriveItem key={index}>
                  <span className="left">{item.reseriveName}</span>
                  <span className="left">{item.reserivePosition}</span>
                  <span className="iconfont">&#xe603;</span>
                  <span className="right">{item.reseriveTime}</span>
                </ReseriveItem>
              )
            })
          }
        </ReseriveList>
      </ReseriveArea>
    )
  };
}

export default CompanyReserive;
