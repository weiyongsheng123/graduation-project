import { createGlobalStyle } from 'styled-components';

export const Iconfont = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1549638661840'); /* IE9 */
  src: url('./iconfont.eot?t=1549638661840#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1549638661840') format('woff'),
  url('./iconfont.ttf?t=1549638661840') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1549638661840#iconfont') format('svg'); /* iOS 4.1- */
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

.icon-renminbi:before {
  content: "\e615";
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

.icon-gongsi:before {
  content: "\e647";
}

.icon-xuanzhong:before {
  content: "\e6dd";
}

.icon-hao:before {
  content: "\e601";
}

`;
