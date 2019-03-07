import React, { PureComponent } from 'react';
import { TipArea, TipWord } from './style';

class Tips extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      show: false
    }
  }
  render () {
    const { show } = this.state;
    const { tipContent } = this.props;
    return (
      <TipArea className={show ? '' : 'hide'}>
        <TipWord style={{'left':'1200px'}} ref={(tip)=>{this.tip = tip}}><i className="iconfont">&#xe628;</i>野猪佩奇提醒您：&nbsp;&nbsp;{tipContent}</TipWord>
      </TipArea>
    )
  };
  componentDidMount () {
    const { first } = this.props;
    if (first) {
      this.timerT =  setTimeout(()=>{
                this.setState({
                  show: true
                });
                this.timerI = setInterval(()=>{
                  this.tip.style.left = (parseInt(this.tip.style.left) - 2)+'px';
                  if (parseInt(this.tip.style.left)<-200) {
                    this.setState({
                      show: false
                    });
                    clearInterval(this.timerI);
                  }
                },30);
              },4000);
    }
  }
  componentWillUnmount () {
    clearTimeout(this.timerT);
    clearTimeout(this.timerI);
    this.setState({
      show: false
    });
  };
}

export default Tips;
