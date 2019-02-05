import { createGlobalStyle } from 'styled-components';

export const Iconfont = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1549366641062'); /* IE9 */
  src: url('./iconfont.eot?t=1549366641062#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1549366641062') format('woff'),
  url('./iconfont.ttf?t=1549366641062') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1549366641062#iconfont') format('svg'); /* iOS 4.1- */
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
