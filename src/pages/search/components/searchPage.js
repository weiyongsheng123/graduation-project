import React, { PureComponent } from 'react';
import { PageArea, Pages, PageLast, PageItem, PageNext, PageTotal, PageInput, PageEnd, PageSumbit } from '../style';
import { connect } from 'react-redux';
import { changePages, changeTotalPages } from '../store/actionCreators';

class SearchPage extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      jump: 0
    }
  }
  render () {
    const { totalPages, page, changePage, changePageOne } = this.props;
    const item = [];
    for (let i = 1 ; i <= totalPages ; i ++ ) {
      item.push(<PageItem key={i} className={ i === page? 'active':''} onClick={()=>{changePage(i)}}>{i}</PageItem>);
    }
    return (
      <PageArea>
        <Pages>
          <PageLast onClick={()=>{const newpage = page - 1;changePageOne(newpage,totalPages)}}>上一页</PageLast>
          { item }
          <PageNext onClick={()=>{const newpage = page + 1;changePageOne(newpage,totalPages)}}>下一页</PageNext>
          <PageTotal>总共20页，到第</PageTotal>
          <PageInput type="number" onChange={this.changeJump.bind(this)}/>
          <PageEnd>页</PageEnd>
          <PageSumbit onClick={()=>{changePageOne(this.state.jump,totalPages)}}>跳转</PageSumbit>
        </Pages>
      </PageArea>
    )
  };
  changeJump (e) {
    this.setState({
      jump: e.target.value
    })
  }
  componentDidMount () {
    this.props.changeTotal(this.props.positionList.toJS());
  }
};

const mapState = (state) => ({
  totalPages: state.getIn(['search','totalPages']),
  positionList: state.getIn(['search','positionList']),
  page: state.getIn(['search','page'])
});

const mapDispatch = (dispatch) => {
  return {
    changePage (number) {
      dispatch(changePages(number));
    },
    changePageOne (number, total) {
      if (number < 1 || number > total) {
        return;
      }
      dispatch(changePages(number));
    },
    changeTotal (list) {
      dispatch(changeTotalPages(list));
    }
  }
}

export default connect(mapState,mapDispatch)(SearchPage);
