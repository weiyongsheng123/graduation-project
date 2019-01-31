import React, { PureComponent } from 'react';
import { CodeWrap, CodeItem, CodeMask } from './style';
import { connect } from 'react-redux';
import { getCode, getFresh } from './store/actionCreators';

class Ident extends PureComponent {

  render () {
    const { data, refresh, changeFresh, changeCode } = this.props;
    const rotate = this.props.rotate.toJS();
    const fz = this.props.fz.toJS();
    const color = this.props.color.toJS();
    return (
      <CodeWrap onMouseOver={()=>{changeFresh(true)}} onMouseLeave={()=>{changeFresh(false)}}>
        {
          data.map((item,index)=>{
            return (
              <CodeItem
              key={index}
              style={{
              transform:`rotate(${rotate[index]}deg)`,
              fontSize: `${fz[index]}px`,
              color: `rgb(${color[index].toString()})`
              }}
              >
                {String.fromCharCode(item > 57 && item < 84 ? item + 7 : ( item < 57 ? item : item + 13 ))}
              </CodeItem>
            )
          })
        }
        {
          refresh
          ? <CodeMask
            onMouseLeave={()=>{changeFresh(false)}}
            onClick={()=>{changeCode(this.initState(),false)}}
            >
            点击刷新
          </CodeMask>
          : null
        }
      </CodeWrap>
    )
  };

initState(){
    return {
      data: this.getRandom(109,48,4),
      rotate: this.getRandom(75,-75,4),
      fz: this.getRandom(12,22,4),
      color: [this.getRandom(100,255,3),this.getRandom(100,255,4),this.getRandom(100,255,3),this.getRandom(100,255,3)]
    }
  };

getRandom(max, min, num) {
    const asciiNum = ~~(Math.random()*(max-min+1)+min)
    if(!Boolean(num)){
      return asciiNum
    }
    const arr = []
    for(let i = 0; i < num; i++){
      arr.push(this.getRandom(max, min))
    }
    return arr
  };

componentDidMount () {
  this.props.changeCode(this.initState(),false)
}
};

const mapState = (state) => ({
  data: state.getIn(['ident','data']),
  rotate: state.getIn(['ident','rotate']),
  fz: state.getIn(['ident','fz']),
  color: state.getIn(['ident','color']),
  refresh: state.getIn(['ident','refresh']),
});

const mapDispatch = (dispatch) => {
  return {
    changeCode (data,refresh) {
      dispatch(getCode(data,refresh));
    },
    changeFresh (show) {
      dispatch(getFresh(show))
    }
  }
}

export default connect(mapState,mapDispatch)(Ident);
