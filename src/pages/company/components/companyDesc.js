import React, { PureComponent } from 'react';
import { DescArea, DescImg, DescInfo, DescDetail, EditArea, EditDetail, InputDiv } from '../style';
import { Button, Input, DatePicker } from 'antd';
import { CSSTransition } from 'react-transition-group';

class CompanyDesc extends PureComponent {
  constructor (props) {
    super(props);
    this.state={
      changeShow: false
    }
  }
  render () {
    const { TextArea } = Input;
    const InputGroup = Input.Group;
    return (
      <DescArea>
        <DescImg src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549481521177&di=7bb55657ed3eb2e9d76a51be6372c0e8&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170621%2F19f3f9d487c1409f9c45f0771cb1a72e_th.jpg" alt=""/>
        <DescInfo>
          <p><span>公司名称：</span>阿里巴巴网络科技</p>
          <p><span>从业方向：</span>互联网，计算机软件</p>
          <p><span>创办时间：</span>2000年2月</p>
          <p><span>规模类别：</span>民营/人数3000+</p>
        </DescInfo>
        <DescDetail>
          <p>简介：</p>
          <div>
            阿里巴巴网络技术有限公司（简称：阿里巴巴集团）是以曾担任英语教师的马云为首的18人于1999年在浙江杭州创立的公司。 [1-2] 
            阿里巴巴集团经营多项业务，另外也从关联公司的业务和服务中取得经营商业生态系统上的支援。业务和关联公司的业务包括：淘宝网、天猫、聚划算、全球速卖通、阿里巴巴国际交易市场、1688、阿里妈妈、阿里云、蚂蚁金服、菜鸟网络等。 [3] 
            2014年9月19日，阿里巴巴集团在纽约证券交易所正式挂牌上市，股票代码“BABA”，创始人和董事局主席为马云。
            2018年7月19日，全球同步《财富》世界500强排行榜发布，阿里巴巴集团排名300位。 [4]  2018年12月，阿里巴巴入围2018世界品牌500强。
          </div>
        </DescDetail>
        <span className="edit" onClick={this.showEdit.bind(this)}>
          <span className="iconfont">&#xe609;</span>
          编辑
        </span>
        <CSSTransition
            in={ this.state.changeShow }
            timeout={1000}
            classNames='fade'
            unmountOnExit
        >
          <EditArea>
            <EditDetail>
              <i className="iconfont close" onClick={this.hideEdit.bind(this)}>&#xe603;</i>
              <InputDiv>
                <label htmlFor="companyName">公司名称</label>
                <Input className="input" name="companyName" placeholder="请输入公司名称" allowClear />
              </InputDiv>
              <InputDiv>
                <label htmlFor="companyDirection">从业方向</label>
                <Input className="input" name="companyDirection" placeholder="请输入从业方向" allowClear />
              </InputDiv>
              <InputDiv>
                <label htmlFor="companyBegin">创办时间</label>
                <InputGroup compact>
                  <DatePicker name="companyBegin" placeholder="请选择时间"/>
                </InputGroup>
              </InputDiv>
              <InputDiv>
                <label htmlFor="companyRange">规模类别</label>
                <Input className="input" name="companyRange" placeholder="请输入人数及私/国企" allowClear />
              </InputDiv>
              <InputDiv className="chooseMany">
                <label htmlFor="companyDesc">简介</label>
                <TextArea rows={4} name="companyDesc" placeholder="请输入对公司的简介"/>
              </InputDiv>
              <InputDiv>
                <Button onClick={this.hideEdit.bind(this)}>提交</Button>
                <Button onClick={this.hideEdit.bind(this)}>取消</Button>
              </InputDiv>
            </EditDetail>
          </EditArea>
        </CSSTransition>
      </DescArea>
    )
  };
  showEdit () {
    this.setState({
      changeShow: true
    })
  };
  hideEdit () {
    this.setState({
      changeShow: false
    })
  };
}

export default CompanyDesc;
