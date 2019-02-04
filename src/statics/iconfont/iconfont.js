import { createGlobalStyle } from 'styled-components';

export const Iconfont = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1549298460625'); /* IE9 */
  src: url('./iconfont.eot?t=1549298460625#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1549298460625') format('woff'),
  url('./iconfont.ttf?t=1549298460625') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1549298460625#iconfont') format('svg'); /* iOS 4.1- */
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
