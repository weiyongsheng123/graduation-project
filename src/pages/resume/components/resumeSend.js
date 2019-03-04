import React, { PureComponent } from 'react';
import { SendArea } from '../style';
import { connect } from 'react-redux';
import { Table, Divider } from 'antd';
import {  } from '../store/actionCreators';

class ResumeSend extends PureComponent {
  
  render () {
   const columns = [{
     title: '职位名',
     dataIndex: 'resumeName',
     key: 'resumenName',
     render: text => <a href="http://www.baidu.com">{text}</a>,
   }, {
     title: '申请人',
     dataIndex: 'jobSeekName',
     key: 'jobSeekName',
   }, {
     title: '性别',
     dataIndex: 'sex',
     key: 'sex',
   }, {
     title: '年龄',
     dataIndex: 'age',
     key: 'age',
   }, {
     title: '发布公司',
     dataIndex: 'companyName',
     key: 'companyName',
   }, {
     title: '申请时间',
     dataIndex: 'time',
     key: 'time',
   }, {
     title: '操作',
     key: 'action',
     render: (text, record) => (
       <span>
         <span>置顶</span>
         <Divider type="vertical" />
         <span>删除</span>
       </span>
     ),
   }];

   const data = [{
     key: '1',
     resumeName: '112',
     jobSeekName: 'John Brown',
     sex: 123,
     age: 'New York414 No. 1 Lake Park',
     companyName: ['n13ice', 'dev11eloper'],
     time: '2012-1-1'
   }, {
     key: '3',
     resumeName: '1112',
     jobSeekName: 'John Brown',
     sex: 32,
     age: 'New York No. 1 Lake Park',
     companyName: ['nice', 'developer'],
     time: '2012-1-1'
   }, {
     key: '4',
     resumeName: '321',
     jobSeekName: 'John Brown',
     sex: 33122,
     age: 'New Y13ork No. 1 Lake Park',
     companyName: ['ni13ce', 'devel132oper'],
     time: '2012-1-1'
   }, {
     key: '5',
     resumeName: '321',
     jobSeekName: 'John Brown',
     sex: 33122,
     age: 'New Y13ork No. 1 Lake Park',
     companyName: ['ni13ce', 'devel132oper'],
     time: '2012-1-1'
   }, {
     key: '6',
     resumeName: '321',
     jobSeekName: 'John Brown',
     sex: 33122,
     age: 'New Y13ork No. 1 Lake Park',
     companyName: ['ni13ce', 'devel132oper'],
     time: '2012-1-1'
   }, {
     key: '7',
     resumeName: '321',
     jobSeekName: 'John Brown',
     sex: 33122,
     age: 'New Y13ork No. 1 Lake Park',
     companyName: ['ni13ce', 'devel132oper'],
     time: '2012-1-1'
   }];
    return (
      <SendArea>
        <Table columns={columns} defaultPageSize={5} pagination={true} dataSource={data} />
      </SendArea>
    )
  };
  
};

const mapState = (state) => ({
  
});

const mapDispatch = (dispatch) => {
  return {
   
  }
};

export default connect(mapState,mapDispatch)(ResumeSend);
