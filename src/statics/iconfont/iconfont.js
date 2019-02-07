import { createGlobalStyle } from 'styled-components';

export const Iconfont = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1549537071684'); /* IE9 */
  src: url('./iconfont.eot?t=1549537071684#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1549537071684') format('woff'),
  url('./iconfont.ttf?t=1549537071684') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1549537071684#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-phonefill:before {
  content: "\e6ba";
}

.icon-iconfontyoujian:before {
  content: "\e629";
}

.icon-fabu:before {
  content: "\e626";
}

.icon-dianhua:before {
  content: "\e63b";
}

.icon-cha:before {
  content: "\e603";
}

.icon-youxiang:before {
  content: "\e64b";
}

.icon-pinglun:before {
  content: "\e614";
}

.icon-pull_down:before {
  content: "\e600";
}

.icon-xiazai:before {
  content: "\e627";
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

.icon-hao:before {
  content: "\e601";
}


`;
