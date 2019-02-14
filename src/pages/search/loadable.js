import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./'), //import指的是异步加载
  loading() {
  return <div>加载中</div>
 }  //返回的是临时组件，用在加载时显示
});

export default () => <LoadableComponent/>
