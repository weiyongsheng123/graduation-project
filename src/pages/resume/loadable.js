import Loadable from 'react-loadable';
import React from 'react';
import { LoadImgArea, LoadImg, LoadTitle } from './style';

const Loading = (props) => {
  return (
    <LoadImgArea>
      <LoadTitle>正在努力加载中....</LoadTitle>
      <LoadImg src="https://recruit.applinzi.com/files/image/load.gif"/>
    </LoadImgArea>
  )
}

const LoadableComponent = Loadable({
  loader: () => import('./'), //import指的是异步加载
  loading() {
  return <Loading/>
 }  //返回的是临时组件，用在加载时显示
});
export default () => <LoadableComponent/>
