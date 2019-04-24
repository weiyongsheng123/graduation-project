import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HeaderArea, Header } from '../style';
import { changeSwitch } from '../store/actionCreators';

class AdminHeader extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            list: ['求职者','企业','已发布职位','职位申请','建议反馈']
        };
    }
    render () {
        const { list } = this.state;
        const { option } = this.props;
        return (
            <HeaderArea>
                {
                    list.map((item)=>{
                        return (
                            <Header onClick={()=>this.handleSwitch(item)} className={item === option ? 'active' : ''} key={item}>{item}</Header>
                        )
                    })
                }
            </HeaderArea>
        )
    }
    handleSwitch (item) {
        this.props.change(item);
    }
}

const mapState = (state) => ({
  option: state.getIn(['admin','option'])
});

const mapDispatch = (dispatch) => {
  return {
    change (value) {
        dispatch(changeSwitch(value));
    }
  }
}

export default connect(mapState,mapDispatch)(AdminHeader);
