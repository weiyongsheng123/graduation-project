import { createGlobalStyle } from 'styled-components';

export const Iconfont = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1550078745585'); /* IE9 */
  src: url('./iconfont.eot?t=1550078745585#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1550078745585') format('woff'),
  url('./iconfont.ttf?t=1550078745585') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1550078745585#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-renshu:before {
  content: "\e604";
}

.icon-phonefill:before {
  content: "\e6ba";
}

.icon-iconfontyoujian:before {
  content: "\e629";
}

.icon-fuli:before {
  content: "\e6a4";
}

.icon-jianjie:before {
  content: "\e681";
}

.icon-bangzhuzhongxin1:before {
  content: "\e612";
}

.icon-yunxiangmugongdanweixintubiao-:before {
  content: "\e611";
}

.icon-fabu:before {
  content: "\e626";
}

.icon-info-circle:before {
  content: "\e618";
}

.icon-jinggao:before {
  content: "\e736";
}

.icon-jinhangzhong:before {
  content: "\e61a";
}

.icon-xiugaixinxi:before {
  content: "\e60f";
}

.icon-dianhua:before {
  content: "\e63b";
}

.icon-mingcheng:before {
  content: "\e70a";
}

.icon-cha:before {
  content: "\e603";
}

.icon-renminbi:before {
  content: "\e615";
}

.icon-youxiang:before {
  content: "\e64b";
}

.icon-zhiye:before {
  content: "\e61f";
}

.icon-pinglun:before {
  content: "\e614";
}

.icon-pull_down:before {
  content: "\e600";
}

.icon-zhaohuimima:before {
  content: "\e60b";
}

.icon-yijianfankui:before {
  content: "\e620";
}

.icon-xiazai:before {
  content: "\e627";
}

.icon-jinggao1:before {
  content: "\e79f";
}

.icon-bianji:before {
  content: "\e609";
}

.icon-dibiao1:before {
  content: "\e62e";
}

.icon-huidaodingbu1:before {
  content: "\e732";
}

.icon-gongsi:before {
  content: "\e647";
}

.icon-xuanzhong:before {
  content: "\e6dd";
}

.icon-yaoqiu:before {
  content: "\e6a2";
}

.icon-hao:before {
  content: "\e601";
}



`;
